<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Store;
use Illuminate\Support\Facades\DB;


class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
               $data = [
                ['id' => 1,'store' => '7Digital'],
                ['id' => 2,'store' => 'Amazon Unlimited'],
                ['id' => 3,'store' => 'Anghami'],
                ['id' => 4,'store' => 'Apple Music'],
                ['id' => 5,'store' => 'AWA'],
                ['id' => 6,'store' => 'Bmat'],
                ['id' => 7,'store' => 'Boomplay'],
                ['id' => 8,'store' => 'Bugs!'],
                ['id' => 9,'store' => 'Deezer'],
                ['id' => 10,'store' => 'Facebook Audio Library'],
                ['id' => 11,'store' => 'Facebook Fingerprinting'],
                ['id' => 12,'store' => 'Fizy'],
                ['id' => 13,'store' => 'Gracenote'],
                ['id' => 14,'store' => 'HighResAudio'],
                ['id' => 15,'store' => 'iHeartRadio (Reporting Only)'],
                ['id' => 16,'store' => 'iMusica'],
                ['id' => 17,'store' => 'Jaxsta Music'],
                ['id' => 18,'store' => 'JioSaavan'],
                ['id' => 19,'store' => 'Joox'],
                ['id' => 20,'store' => 'KKBox'],
                ['id' => 21,'store' => 'Kuack Media'],
                ['id' => 22,'store' => 'Lickd'],
                ['id' => 23,'store' => 'Line Music'],
                ['id' => 24,'store' => 'Mixcloud'],
                ['id' => 25,'store' => 'mora qualitas'],
                ['id' => 26,'store' => 'Music in '.'Ayoba'],
                ['id' => 27,'store' => 'Napster'],
                ['id' => 28,'store' => 'Nuuday A/S'],
                ['id' => 29,'store' => 'Pandora'],
                ['id' => 30,'store' => 'Peloton'],
                ['id' => 31,'store' => 'Qobuz'],
                ['id' => 32,'store' => 'Shazam'],
                ['id' => 33,'store' => 'Slacker'],
                ['id' => 34,'store' => 'SoundCloud Go'],
                ['id' => 35,'store' => 'Spotify'],
                ['id' => 36,'store' => 'Tencent'],
                ['id' => 37,'store' => 'Tidal'],
                ['id' => 38,'store' => 'TikTok'],
                ['id' => 39,'store' => 'TIM Music'],
                ['id' => 40,'store' => 'TouchTunes/PlayNetwork'],
                ['id' => 41,'store' => 'United Media Agency (UMA)'],
                ['id' => 42,'store' => 'VEVO'],
                ['id' => 43,'store' => 'WWW'],
                ['id' => 44,'store' => 'WWWWrrr'],
                ['id' => 45,'store' => 'Xiami'],
                ['id' => 46,'store' => 'Xite'],
                ['id' => 47,'store' => 'Yandex Music'],
                ['id' => 48,'store' => 'Youtube Subscription']
            ];
              if (Store::count() == 0 ) 
              {
              foreach($data as $item)
              {
               Store::create($item);
              }
            }
    }
}
