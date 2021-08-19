@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header"><h1>{{ __('Books') }}</h1></div>

                <div class="card-body">
                    <div class="table-responsive">
                    
                        <div class="row justify-content-end mr-3"><a href="/books/create" class="btn btn-primary">+ Add one book</a></div>
                    
                       <table class="table table-striped mt-4">
                        <thead >
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Condition</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        @foreach ($books as $key => $book)
                            <tr>
                            <!-- {{$book->name}} -->
                            {{$book->author}}
                                <td>{{++$key}}</td>
                                <td>{{$book->name}}</td>
                                <td>{{$book->author->name}}</td>
                                <td>
                                    @foreach ($book->categories as $category)
                                        <button>{{$category->name}}</button>
                                    @endforeach
                                </td>
                                <td><button class="btn-success btn btn-sm">{{$book->donated}}</button></td>
                                <td>{{$book->book_conditon}}</td>
                                <td>
                                    <div><a href="/books/{{$book->id}}/add-existing-book" class="btn btn-success">Insert same book</a></div>
                                    <a href="/books/{{$book->id}}/edit" class="btn btn-warning">Edit</a>
                                    <a href="/books/{{$book->id}}/delete" class="btn btn-outline-danger">Delete</a>
                                </td>
                            </tr>
                        @endforeach    
                        </tbody>
                        </table>
                    </div>
                    
                       
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
