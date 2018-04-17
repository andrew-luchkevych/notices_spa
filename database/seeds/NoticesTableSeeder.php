<?php

use Illuminate\Database\Seeder;
use App\Notice;
class NoticesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 20 notice records
        for ($i = 0; $i < 20; $i++) {
            Notice::create([
                'text' => $faker->paragraph,
            ]);
        }
    }
}
