@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    <form action="/books" method="post">
                        @csrf
                        @method("post")
                        <div class="form-group">
                            <label for="">Name</label>
                            <input type="text" name="name" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="">Author</label>
                            <datalist name="author_id" id="suggestions">
                                @foreach ($authors as $author)
                                    <option value="{{$author->id}}">$author->name</option>
                                @endforeach
                            </datalist>
                            <input  autoComplete="on" list="suggestions"/> 
                        </div>
                        <div class="form-group">
                            <label for="">Is Donated</label>
                            <select name="is_donated" id="">
                                <option value=1>Donated</option>
                                <option value=0>Not donated</option>
                            </select>
                        </div>
                        <button class="btn btn-success">Create</button>
                    </form>


                    {{ __('You are logged in!') }}
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
