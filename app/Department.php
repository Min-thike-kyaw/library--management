<?php

namespace App;

use App\Borrower;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Department extends Model
{
    use SoftDeletes;
    
    protected $fillable = ["name"];

    public function borrowers()
    {
        return $this->hasMany(Borrower::class);
    }
}
