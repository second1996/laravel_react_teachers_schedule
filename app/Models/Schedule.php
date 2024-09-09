<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
	protected $table      = 'schedule';
	public    $timestamps = false;
	protected $fillable   = ['day', 'subject'];

	public function teachers()
	{
		return $this->belongsToMany(Teacher::class, 'teacher_schedule')->withPivot('id');
	}
}
