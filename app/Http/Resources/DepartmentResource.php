<?php

namespace App\Http\Resources;

use App\Http\Resources\DepartmentResource;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource
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
            "borrowers" => DepartmentResource::collection($this->whenLoaded("borrowers"))
        ];
    }
}
