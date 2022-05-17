<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Language;
class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['id' => 1,'name' =>  "Mandarin Chinese"],
            ['id' => 2,'name' =>  "Spanish"],
            ['id' => 3,'name' => "English"],
            ['id' => 4,'name' => 'Hindi'],
            ['id' => 5,'name' => 'Bengali'],
            ['id' => 6,'name' => 'Portuguese'],
            ['id' => 7,'name' => 'Russian'],
            ['id' => 8,'name' => 'Japanese'],
            ['id' => 9,'name' => 'Yue Chinese'],
            ['id' => 10,'name' => 'Vietnamese'],
            ['id' => 11,'name' => 'Marathi'],
            ['id' => 12,'name' => 'Austria'],
            ['id' => 13,'name' => 'Telugu'],
            ['id' => 14,'name' => 'Turkish'],
            ['id' => 15,'name' => 'Korean'],
            ['id' => 16,'name' => 'French'],
            ['id' => 17,'name' => 'Tamil'],
            ['id' => 18,'name' => 'German '],
            ['id' => 19,'name' => 'Italian'],
            ['id' => 20,'name' => 'Gujarati'],
            ['id' => 21,'name' => 'Iranian Persian'],
            ['id' => 22,'name' => 'Algerian Arabic'],
            ['id' => 23,'name' => 'Moroccan Arabic'],
            ['id' => 24,'name' => 'Ukrainian'],
            ['id' => 25,'name' => 'Romanian'],
            ['id' => 26,'name' => 'British Virgin Islands'],
            ['id' => 27,'name' => 'Dutch'],
            ['id' => 28,'name' => 'Thai'],
            ['id' => 29,'name' => 'Burkina Faso'],
            ['id' => 30,'name' => 'Nepali'],
            ['id' => 31,'name' => 'Deccan'],
            ['id' => 32,'name' => 'Cameroon'],
            ['id' => 33,'name' => 'Cape Verde'],
            ['id' => 34,'name' => 'Cayman Islands'],
            ['id' => 35,'name' => 'Chad'],
            ['id' => 36,'name' => 'Chile'],
            ['id' => 37,'name' => 'China'],
            ['id' => 38,'name' => 'Colombia'],
            ['id' => 39,'name' => 'Congo'],
            ['id' => 40,'name' => 'Cook Islands'],
            ['id' => 41,'name' => 'Cote D Ivoire'],
            ['id' => 42,'name' => 'Croatia'],
            ['id' => 43,'name' => 'Cruise Ship'],
            ['id' => 44,'name' => 'Cuba'],
            ['id' => 45,'name' => 'Cyprus'],
            ['id' => 46,'name' => 'Czech Republic'],
            ['id' => 47,'name' => 'Assamese'],
            ['id' => 48,'name' => 'Greek']
        ];
          if (Language::count() == 0 ) 
          {
          foreach($data as $item)
          {
            Language::create($item);
          }
        }
}

    
}
