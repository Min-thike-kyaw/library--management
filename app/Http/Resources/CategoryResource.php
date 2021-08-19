<?php

namespace App\Http\Resources;

use App\Http\Resources\Book;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $books = $this->whenLoaded('books');
        return [
            "id" => $this->id,
            "name" => $this->name,
            "books" => Book::collection($books)
        ];
    }
}
