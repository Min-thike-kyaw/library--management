<?php

namespace App\Http\Library;

use Illuminate\Support\Arr;

trait ApiHelper{
    // protected $user_role ;

    
    protected function isAdmin() 
    {
        if (!empty($_COOKIE['Auth_User'])) {
            return Arr::first(json_decode($_COOKIE['Auth_User'])->roles)->name == "admin";
        }

        return false;

    }

    protected function isLibrarian($user) 
    {
        if (!empty($_COOKIE['Auth_User'])) {
            return Arr::first(json_decode($_COOKIE['Auth_User'])->roles)->name == "librarian";
        }

        return false;

    }
    protected function onSuccess($data, string $message = '', int $code = 200)
    {
        return response()->json([
            'status' => $code,
            'message' => $message,
            'data' => $data,
        ], $code);
    }

    protected function onError(int $code, string $message = ''): JsonResponse
    {
        return response()->json([
            'status' => $code,
            'message' => $message,
        ], $code);
    }


}