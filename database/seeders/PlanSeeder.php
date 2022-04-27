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
        Plan::create(['name'  => ' FREE' ,
                    'description'=> ['2 Releases Included' , 'Distribution within 14 days', 'Keep 80% of the earnings','24/7 Live Support'
                    ,'No Content ID'],
                    'prices' => 0,
                    ]);
        Plan::create(['name'  => 'PREMIUM',
        'description'=> ['Unlimited Releases Included' , 'Distribution within 48h', 'Keep 100% of the earnings','24/7 Live Support'
        ,'Content ID'],  
        'prices' => 19.99   ,    
                     ]);
        Plan::create(['name'  => 'BASIC',
        'description'=> ['6 Releases Included' , 'Distribution within 10days', 'Keep 85% of the earnings','24/7 Live Support',
        ' No Content ID'], 
        'prices' => 4.99 ,
                        ]);
    }
}
