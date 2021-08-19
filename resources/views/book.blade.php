<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
        <link href="{{asset('css/app.css')}}" rel="stylesheet"></link>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Styles -->

    </head>
    <body>
        <div id="book">
        
        </div>
        <!-- <Home /> -->
    </body>
    <script src="{{ asset('js/app.js') }}" defer></script>

</html>
