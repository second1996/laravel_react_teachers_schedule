<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('teacher_schedule', function (Blueprint $table) {
			$table->id();
			$table->foreignId('teacher_id')->constrained('teachers')->onDelete('cascade');
			$table->foreignId('schedule_id')->constrained('schedule')->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('teacher_schedule');
	}
};
