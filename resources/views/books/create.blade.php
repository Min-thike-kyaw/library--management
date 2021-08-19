@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    <form action="/books/{{$book->id}}" method="post" id="my-form">
                        @csrf
                        @method("put")
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" name="name" class="form-control" value="{{$book->name}}">
                        </div>
                        <div class="form-group">
                            <label for="">Author</label>
                            <select name="author_id" id="suggestions" class="form-control">
                                @foreach ($authors as $author)
                                    <option class="form-control" {{ $book->author_id == $author->id ? "selected" : ""}} value="{{$author->id}}">{{$author->name}}</option>
                                @endforeach
                            </select>
            
                        </div>
                        <div class="form-group" >
                            <label for="">Is Donated?</label>
                            
                            <select name="is_donated" id="" class="form-control">
                                <option value=1>Donated</option>
                                <option value=0>Not donated</option>
                            </select>
                            
                        </div>
                        <div class="form-group">
                            <fieldset>
                                <legend>Choose Categories</legend>
                                <div class="row">
                                @foreach ($categories as $category)
                                <div class="col-md-3">
                                    <input type="checkbox" name="categories[]" id="coding" value="{{$category->id}}">
                                    <label for="coding">{{$category->name}}</label>
                                </div>
                                @endforeach
                                </div>
                                
                                </fieldset>
                        </div>
                        <button class="btn btn-success">Edit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@section('script')
    <script>
    


    </script>
@endsection
