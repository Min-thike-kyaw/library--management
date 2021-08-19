<?php

namespace App;

// use App\Book;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Author extends Model
{
    use SoftDeletes;

    protected $fillable =[
        "name"
    ];
    
    public function books()
    {
        return $this->hasMany('App\Book');
    }
    // public function getBooksAttributes(){
    //     return $this->books;
    // }
}
