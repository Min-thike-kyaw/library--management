<?php

namespace App\Http\Controllers;

use App\Borrower;
use Illuminate\Http\Request;
use App\Http\Resources\BorrowerResource;

class BorrowerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct() {
        $this->middleware('auth:sanctum', ['except' => ['index','show']]);

    }
    public function index()
    {
        return BorrowerResource::collection(Borrower::all());
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            "name" => "required",
            "phone_no" => "required",
            "email" => "required|email",
            "sex" => "required",
        ]);
        $last_borrower = (Borrower::all())->last();
        if( $last_borrower == null) {

            $pre_unique_id = "AA";
            $post_unique_id = 0;

        } else if($last_borrower->post_unique_id == 9999){

            $pre_unique_id = $this->numToAlpha( $this->alphaToNum($last_borrower->pre_unique_id) + 1);
            $post_unique_id = 0;

        } else {
            $pre_unique_id = $last_borrower->pre_unique_id;
            $post_unique_id = ++$last_borrower->post_unique_id;
        }
        $book = Borrower::create( $request->all() +  [
            'pre_unique_id' => $pre_unique_id,
            'post_unique_id' => $post_unique_id,
            "unique_id" => $pre_unique_id.sprintf("%04d",$post_unique_id),
            "slug" => Str::slug($request->name)
        ]);

        return response()->json([
            'data' => "Borrower created"
        ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Borrower  $borrower
     * @return \Illuminate\Http\Response
     */
    public function show(Borrower $borrower)
    {
        return new BorrowerResource($borrower->load("department"));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Borrower  $borrower
     * @return \Illuminate\Http\Response
     */
    public function edit(Borrower $borrower)
    {
        // return new BorrowerResource($borrower->load('departments'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Borrower  $borrower
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Borrower $borrower)
    {
        $borrower->update($request->all());
        return response()->json([
            'data' => "Borrower created"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Borrower  $borrower
     * @return \Illuminate\Http\Response
     */
    public function destroy(Borrower $borrower)
    {
        $borrower->delete();
        return response()->json([
            "data" => "book deleted"
        ]);
    }

    public function numToAlpha($num)
    {
        for($alpha = ""; $num >= 0; $num = intval($num / 26) - 1){
            $alpha = chr($num%26 + 0x41). $alpha ;
        }
        return $alpha;
    }

    public function alphaToNum($alpha)
    {
        $l = strlen($alpha);
        $n = 0;
        for($i = 0; $i < $l; $i++){
            $n = $n*26 + ord($alpha[$i]) - 0x40;
        }
        return $n-1;

    }
}
