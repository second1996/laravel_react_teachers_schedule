<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\TeacherSubjectController;

Route::apiResource('/schedule', ScheduleController::class);

Route::prefix('teachers')->controller(TeacherSubjectController::class)->group(function () {
	Route::get('/', 'index')->name('teachers.index');
	Route::get('/assignments', 'assignments')->name('teachers.assignments');
	Route::post('/assign', 'assign')->name('teachers.assign');
});
