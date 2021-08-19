<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use App\Notifications\DueDateToReturn;
use Illuminate\Support\Facades\Notification;

class DueDateDailyCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'daily:notification';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This will send notification  of memebers who exceed due date';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Notification::send(User::find(1), new DueDateToReturn([
            'bill_id' => 30061,
            "name" => "james carter",
            "case" => "exceeding due date"
        ]));
        echo "Notification sent successfully";
    }
}
