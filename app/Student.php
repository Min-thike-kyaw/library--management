<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use SoftDeletes;

    public function getFirstNameAttribute( $value )
    {
        return ucfirst( $this->name);
    }
    public function setLowerAttribute($student)
    {
        
        return $this->attributes['first_name'] = strtolower( $student);
    }
}
