<?php

namespace App\Http\Resources;

use App\Http\Resources\Book as BookResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthorResource extends JsonResource
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
            "slug" => $this->slug,
            "books" => BookResource::collection($books)
        ];
    }
}
