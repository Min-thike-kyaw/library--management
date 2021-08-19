<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use SoftDeletes;

    protected $fillable = [
        "title", "description",
    ];
}
