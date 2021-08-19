<?php

namespace App\Http\Controllers;

use App\Book;
use App\Author;
use App\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\Book as BookResource;

class BookController extends Controller
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
        // dd(Book::all());
        $books = Book::with(['author','categories']);
        return BookResource::collection($books->paginate(50))->response();
        // return view('books/home')->with(["books" => Book::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('books.create')->with(["categories" => Category::all(),  "authors" => Author::all()]);
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
            'name' => 'required',
            "author_id" => 'required|integer',
            "is_donated" => 'required|integer',
        ]);
            if ( !$request->is_donated) {
                $request->validate([
                    "price" => "required"
                ]);
            }
            $book = Book::create($request->all() + [
                "condition" => 1, 
                "serial_no" => 1,
                "slug" => Str::slug($request->name) 
            ]);
        $book->categories()->sync($request->categories);
        return response()->json([
            'data' => 'Post created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        return new BookResource($book);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        return new BookResource($book);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $request->validate([
            'name' => 'required',
            "author_id" => 'required',
            "is_donated" => 'required',
        ]);
        if ( !$request->is_donated) {
            $request->validate([
                "price" => "required"
            ]);
            $request->price = null;
        }
        if ( $request->condition == null) {
            $request->condition = 1;
        }
        $book->update($request->all() + [ "serial_no" => $book->serial_no]);
        $book->categories()->sync($request->categories);
        // return redirect('/'); 
        return response()->json([
            "data" => "updated"
        ]);
    }

    public function addExistingBook(Request $request, Book $book)
    {
        
        $request->name= "Hello";
        $request->slug = "hello";
        $request->validate([  
            "is_donated" => 'required',
        ]);
        if ( !$request->is_donated) {
            $request->validate([
                "price" => "required"
            ]);           
            $request->price = null;
        }
        
        Book::create($request->all() + [
            "author_id" => $book->author_id,
            "condition" => 1,
            "serial_no" => 2
        ]);
        return response()->json([
            "data" => "Book Created"
        ]); 
    }

    public function lostBook($id)
    {
        $book = Book::find($id);
        $book->condition = 4;
        $book->save();
        return response()->json([
            "data" => "success!",
        ], 200);
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book->delete();
        return response()->json([
            "data" => "book deleted"
        ]);
    }
}
