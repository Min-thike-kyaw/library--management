<?php

namespace App;

// use App\Author;
use App\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use SoftDeletes;

    protected $fillable = [
        "name", "author_id", "condition", "is_donated", "price", "serial_no", "edition", "slug"
    ];

    public function getBookConditionAttribute()
    {
        return config('book_condition')[$this->condition];
    }
    public function getBookEditionAttribute()
    {
        return config('book_edition')[$this->edition];
    }

    public function getDonatedAttribute()
    {
        return $this->is_donated? "donated": null;
    }

    public function author()
    {
        return $this->belongsTo('App\Author');
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }
}
