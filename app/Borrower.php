<?php

namespace App;

use App\Department;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Borrower extends Model
{
    use SoftDeletes;
    protected $fillable = [
        "name","pre_unique_id", "post_unique_id",'unique_id', "sex", "department_id", "email", "phone_no"
    ];

    // public function getUniqueIdAttribute()
    // {
    //     return "{$this->pre_id_key}".sprintf("%04d",$this->post_id_key);
    // }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
