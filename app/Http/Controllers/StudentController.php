<?php

namespace App\Http\Controllers;

use App\Book;
use App\User;
use App\Student;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class StudentController extends Controller
{
    public function index()
    {
        
        // $user = User::find(2);
        // $user->assignRole('writer');

        // $users = User::role('writer')->get();
        // dd($users);

        // // $role = Role::create(['name' => 'writer']);
        // // $permission = Permission::create(['name' => 'edit articles']);
        // // $role->givePermissionTo($permission);

        dd("hello");
        
        // $students = Student::all();
        // dd($students);
        return view('welcome', compact("students"));
    }
}
