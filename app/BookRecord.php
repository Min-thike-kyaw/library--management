<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BookRecord extends Model
{
    use SoftDeletes;
    protected $fillable = [
        "book_id",
        "borrower_id",
        "condition",
        "borrowed_from_date",
        "borrowed_to_date",
        "actual_return_date",
    ];

    public function borrower()
    {
        return $this->belongsTo('App\Borrower');
    }

    public function book()
    {
        return $this->belongsTo('App\book');
    }

}
