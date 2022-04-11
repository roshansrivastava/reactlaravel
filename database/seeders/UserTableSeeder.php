<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
  
         public function run()
        {
            // check if table users is empty
            if (User::count() == 0) {
    
                User::create([
                    'name'         =>  'Super Admin',
                    'email'             =>  'superadmin@demoserver.in',
                    'password'          =>  bcrypt('123456'),
                    'email_verified_at' =>  now(),
                    'role_id'           =>  1
                ]);
    
                User::create([
                    'name'         =>  'Guest',
                    'email'             =>  'guest@demoserver.in',
                    'password'          =>  bcrypt('123456'),
                    'email_verified_at' =>  now(),
                    'role_id'           =>  2
                ]);
    
            }
        }
    }
