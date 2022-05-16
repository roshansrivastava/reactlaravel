<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Country;
class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            ['id' => 1,'country' =>  "Afghanistan"],
            ['id' => 2,'country' =>  "Albania"],
            ['id' => 3,'country' => "Algeria"],
            ['id' => 4,'country' => 'Andorra'],
            ['id' => 5,'country' => 'Angola'],
            ['id' => 6,'country' => 'Anguilla'],
            ['id' => 7,'country' => 'Antigua &amp; Barbuda'],
            ['id' => 8,'country' => 'Argentina'],
            ['id' => 9,'country' => 'Armenia'],
            ['id' => 10,'country' => 'Aruba'],
            ['id' => 11,'country' => 'Australia'],
            ['id' => 12,'country' => 'Austria'],
            ['id' => 13,'country' => 'Azerbaijan'],
            ['id' => 14,'country' => 'Bahamas'],
            ['id' => 15,'country' => 'Bahrain'],
            ['id' => 16,'country' => 'Bangladesh'],
            ['id' => 17,'country' => 'Barbados'],
            ['id' => 18,'country' => 'Belarus'],
            ['id' => 19,'country' => 'Belgium'],
            ['id' => 20,'country' => 'Belize'],
            ['id' => 21,'country' => 'Benin'],
            ['id' => 22,'country' => 'Bermuda'],
            ['id' => 23,'country' => 'Bhutan'],
            ['id' => 24,'country' => 'Bolivia'],
            ['id' => 25,'country' => 'Brazil'],
            ['id' => 26,'country' => 'British Virgin Islands'],
            ['id' => 27,'country' => 'Brunei'],
            ['id' => 28,'country' => 'Bulgaria'],
            ['id' => 29,'country' => 'Burkina Faso'],
            ['id' => 30,'country' => 'Burundi'],
            ['id' => 31,'country' => 'Cambodia'],
            ['id' => 32,'country' => 'Cameroon'],
            ['id' => 33,'country' => 'Cape Verde'],
            ['id' => 34,'country' => 'Cayman Islands'],
            ['id' => 35,'country' => 'Chad'],
            ['id' => 36,'country' => 'Chile'],
            ['id' => 37,'country' => 'China'],
            ['id' => 38,'country' => 'Colombia'],
            ['id' => 39,'country' => 'Congo'],
            ['id' => 40,'country' => 'Cook Islands'],
            ['id' => 41,'country' => 'Cote D Ivoire'],
            ['id' => 42,'country' => 'Croatia'],
            ['id' => 43,'country' => 'Cruise Ship'],
            ['id' => 44,'country' => 'Cuba'],
            ['id' => 45,'country' => 'Cyprus'],
            ['id' => 46,'country' => 'Czech Republic'],
            ['id' => 47,'country' => 'India'],
            ['id' => 48,'country' => 'USA']
        ];
          if (Country::count() == 0 ) 
          {
          foreach($data as $item)
          {
            Country::create($item);
          }
        }
}

    
}
