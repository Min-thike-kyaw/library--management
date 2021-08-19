<?php
use App\Book;
use App\User;
use App\Author;
use App\Borrower;
use Carbon\Carbon;
use App\BookRecord;
use Illuminate\Support\Arr;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\AuthorResource;
use App\Notifications\DueDateToReturn;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use App\Http\Resources\Book as BookResource;
use Illuminate\Support\Facades\Notification;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function (){
    // dd(Arr::first(json_decode($_COOKIE['Auth_User'])->roles)->name  );
    dd(Auth::guard('api')->check() );

    

    
});
Route::get('/he', function(){
    print_r("he");
});

Route::get('/home', 'HomeController@index')->name('home');


    Route::get('{any}', function () {
        return view('welcome'); // or wherever your React app is bootstrapped.
    })->where('any', '.*');







// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::resource('books', 'BookController');


?>



