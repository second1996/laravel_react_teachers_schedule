<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
	use HasFactory;

	protected $table      = 'teachers';
	public    $timestamps = false;
	protected $fillable   = ['first_name', 'last_name'];

	public function schedule()
	{
		return $this->belongsToMany(Schedule::class, 'teacher_schedule')->withPivot('id');
	}
}
