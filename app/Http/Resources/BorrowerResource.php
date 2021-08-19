<?php

namespace App\Http\Resources;

use App\Http\Resources\DepartmentResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BorrowerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "pre_id_key" => $this->pre_id_key, 
            "post_id_key" => $this->post_id_key,
            "unique_id" => $this->unique_id,
            "sex"=> $this->sex, 
            "department_id" => $this->department_id,
            "email"=> $this->email, 
            "phone_no"=> $this->phone_no,
            "created_at" => $this->created_at,
            "department" => new DepartmentResource($this->whenLoaded("department"))
        ];
    }
}
