<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BookCategory extends Model
{
    use SoftDeletes;

    protected $table = "book_category";
}
