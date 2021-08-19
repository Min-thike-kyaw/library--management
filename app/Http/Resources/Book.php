<?php

namespace App\Http\Resources;

// use PharIo\Manifest\AuthorCollection;
use App\Http\Resources\AuthorResource;
use App\Http\Resources\CategoryResource;
use Illuminate\Http\Resources\Json\JsonResource;

class Book extends JsonResource
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
            "author_id" => $this->author_id,
            "author" => new AuthorResource($this->whenLoaded('author') ),

            "categories" => CategoryResource::collection($this->whenLoaded('categories')),
            
            "price" => $this->price,
            "serial_no" => $this->serial_no,
            "condition" => $this->condition,
            "edition" => $this->edition,
            "book_condition" => $this->book_condition,
            "book_edition" => $this->book_edition,
            "is_donated" => $this->is_donated,
            "book_conditon" => $this->book_conditon
            
        ];
    }
}
