<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Teacher;

class TeachersTableSeeder extends Seeder
{
	/**
	 * Create multiple App\Models\Teacher instances.
	 */
	public function run(): void
	{
		Teacher::factory()->count(10)->create();
	}
}
