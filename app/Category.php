<?php

namespace App;

use App\Book;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use SoftDeletes;

    protected $fillable = [
        "name"
    ];

    public function books()
    {
        return $this->belongsToMany(Book::class);
    }
}
