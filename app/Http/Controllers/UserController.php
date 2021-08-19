<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Library\ApiHelper;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    use ApiHelper;

    public function index()
    {
        $users = User::with(['roles']);

        return response()->json([
            "users" => $users->get()
        ], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // echo "hello";
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return response()->json([
                "token" => auth()->user()->createToken('Api Token')->plainTextToken,
                "user" => auth()->user()->load('roles')
            ], 200);;
        } else {
            return response()->json("Password Credential", 401);
        }

    }
    public function logout(Request $request)
    {
        $user = User::find($request->id);
        $user->tokens()->delete();
         return response()->json([
             "data" => "logout successfully"
         ], 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($this->isAdmin()) {
            $request->validate([
                "name" => "required|string",
                "password" => "required",
                "email" => "email|required",
                "role" => "required|exists:roles,name"
            ]);
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            $user->assignRole($request->role);
             return response()->json([
                 "data" => $request->all()
             ], 200);
        } else {
            return $this->onError(403, "Unauthenticated");
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return $user->load('roles');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $request->validate([
            "name" => "required|string",
            "password" => "required",
            "email" => "email|required",
            "role" => "required|exists:roles,name"
        ]);
        
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        $user->assignRole($request->role);
         return response()->json([
             "data" => $request->all()
         ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        
    }
}
