<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Notifications\DueDateToReturn;
use Illuminate\Support\Facades\Notification;

class NotificationController extends Controller
{
    public function sendingNotification()
    {
        Notification::send(User::find(1), new DueDateToReturn([
            'bill_id' => 30061,
            "name" => "james carter",
            "case" => "exceeding due date"
        ]));
    }
}
