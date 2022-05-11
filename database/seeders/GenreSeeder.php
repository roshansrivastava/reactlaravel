<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['id'=>1 ,'name'=>'Alternative'],
            ['id'=>2 ,'name'=>'Audiobooks'],
            ['id'=>3 ,'name'=>'Blues'],
            ['id'=>4 ,'name'=>"Children's Music"],
            ['id'=>5 ,'name'=>'Classical'],
            ['id'=>6 ,'name'=>'Comedy'],
            ['id'=>7 ,'name'=>'Country'],
            ['id'=>8 ,'name'=>'Dance'],
            ['id'=>9 ,'name'=>'Electronic'],
            ['id'=>10 ,'name'=>'Folk'],
            ['id'=>11 ,'name'=>'Hip Hop/Rap'],
            ['id'=>12 ,'name'=>'Holiday'],
            ['id'=>13 ,'name'=>'Inspirational'],
            ['id'=>14 ,'name'=>'Jazz'],
            ['id'=>15 ,'name'=>'Latin'],
            ['id'=>16 ,'name'=>'New Age'],
            ['id'=>17 ,'name'=>'Opera'],
            ['id'=>18 ,'name'=>'Pop'],
            ['id'=>19 ,'name'=>'R&B/Soul'],
            ['id'=>20 ,'name'=>'Reggae'],
            ['id'=>21 ,'name'=>'Rock'],
            ['id'=>22 ,'name'=>'Soundtrack'],
            ['id'=>23 ,'name'=>'Spoken Word'],
            ['id'=>24,'name'=>'Vocal'],
        ];
        if(Genre::count()== 0){
            foreach ($items as $data){
                Genre::create($data);
            };
        };
    }

}
