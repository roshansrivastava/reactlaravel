<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Plan;
class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Plan::create(['title'=>' FREE',
                    'amount'=> 0,
                    'content_1'=>'2 Releases Included',
                    'content_2'=>'Distribution within 14 days',
                    'content_3'=>'Keep 80% of the earnings',
                    'content_4'=>'24/7 Live Support',
                    'content_5'=>'No Content ID',
                    ]);
        Plan::create(['title'=>' PREMIUM',
                    'amount'=> 19.99,
                    'content_1'=>'Unlimited Releases Included',
                    'content_2'=>'Distribution within 48h',
                    'content_3'=>'Keep 100% of the earnings',
                    'content_4'=>'24/7 Live Support',
                    'content_5'=>'Content ID',
                    ]);
        Plan::create(['title'=>'BASIC',
                    'amount'=> 4.99,
                    'content_1'=>'6 Releases Included',
                    'content_2'=>'Distribution within 10days',
                    'content_3'=>'Keep 85% of the earnings',
                    'content_4'=>'24/7 Live Support',
                    'content_5'=>'No Content ID',
                    ]);
    }
}
