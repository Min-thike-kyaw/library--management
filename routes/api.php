<?php

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::Apiresource('posts', 'PostController');
Route::Apiresource('users', 'UserController')->middleware('auth:sanctum');
Route::get('roles', function(){
    return response()->json([
    "data" => Role::all()
    ], 200);
});
Route::Apiresource('books', 'BookController');
// Route::post('books/{id}/add-existing-boook','BookController@addExistingBook');
Route::Apiresource('authors', 'AuthorController');
Route::Apiresource('categories', 'CategoryController');
Route::Apiresource('departments', 'DepartmentController');
Route::Apiresource('borrowers', 'BorrowerController');
Route::Apiresource('book-records', 'BookRecordController')->middleware('auth:sanctum');
Route::put('book-records/{id}/return-book', 'BookRecordController@returnBook');
Route::get('books/{id}/lost-book', 'BookController@lostBook');
Route::put('book-records/{id}/lost-book', 'BookRecordController@lostBook');
Route::get('send-notification', 'NotificationController@sendingNotification');

//auth
Route::post('login', 'UserController@login');
Route::post('logout', 'UserController@logout');




