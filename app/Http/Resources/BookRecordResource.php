<?php

namespace App\Http\Resources;

use App\Http\Resources\Book as BookResource;
use App\Http\Resources\BorrowerResource;
use Illuminate\Http\Resources\Json\JsonResource;

class BookRecordResource extends JsonResource
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
            "borrower_id" => $this->borrower_id,
            "condition" => $this->condition,
            "borrower" => new BorrowerResource($this->whenLoaded('borrower') ),
            "book_id" => $this->book_id,
            "book" => new BookResource($this->whenLoaded('book')),
            "borrowed_from_date" => $this->borrowed_from_date,
            "borrowed_to_date" => $this->borrowed_to_date,
            "actual_return_date" => $this->actual_return_date,   
        ];
    }
}
