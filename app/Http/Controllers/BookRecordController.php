<?php

namespace App\Http\Controllers;

use App\Book;
use App\Borrower;
use Carbon\Carbon;
use App\BookRecord;
use Illuminate\Http\Request;
use App\Http\Resources\BookRecordResource;

class BookRecordController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookRecord = BookRecord::with(['borrower','book']);
        return BookRecordResource::collection($bookRecord->paginate(20))->response();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $book = Book::find($request->book_id);
        $book->condition = 2;
        $book->save();
        $bookRecord = new BookRecord();
        $bookRecord->borrower_id = Borrower::where("unique_id", $request->borrower_unique_id)
                                            ->get()
                                            ->first()
                                            ->id;
        $bookRecord->book_id = $request->book_id;
        $bookRecord->condition = 0;
        $bookRecord->borrowed_from_date = Carbon::now();
        $bookRecord->borrowed_to_date = Carbon::now()->add(1,'week');
        $bookRecord->actual_return_date = null;
        $bookRecord->save();
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\BookRecord  $bookRecord
     * @return \Illuminate\Http\Response
     */
    public function show(BookRecord $bookRecord)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\BookRecord  $bookRecord
     * @return \Illuminate\Http\Response
     */
    public function edit(BookRecord $bookRecord)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\BookRecord  $bookRecord
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BookRecord $bookRecord)
    {
        //
    }

    public function returnBook($id)
    {
        $bookRecord = BookRecord::find($id);
        $bookRecord->actual_return_date = Carbon::now();
        $bookRecord->condition = 1;
        $bookRecord->save();
        return  response()->json([
            "data" => $bookRecord
        ], 200);
    }
    public function lostBook($id)
    {
        $bookRecord = BookRecord::find($id);
        $bookRecord->condition = 2;
        $bookRecord->save();
        return  response()->json([
            "data" => $bookRecord
        ], 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\BookRecord  $bookRecord
     * @return \Illuminate\Http\Response
     */
    public function destroy(BookRecord $bookRecord)
    {
        $bookRecord->delete();
        return response()->josn([
            "data" => "Deleted book record successfully"
        ]);
    }
}
