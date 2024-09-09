<?php

namespace App\Http\Controllers;

use App\Models\Teacher;
use App\Models\Schedule;
use App\Http\Requests\AssignTeacherFormRequest;

class TeacherSubjectController extends Controller
{
	public function index()
	{
		$teachers = Teacher::select('id', 'first_name', 'last_name')->get();

		return response()->json([
			'success' => true,
			'items'   => $teachers,
			'message' => 'Teachers have been received successfully.',
		]);
	}

	public function assignments()
	{
		$assignments = Schedule::has('teachers')->with('teachers')->get();

		$items = $assignments->map(function ($schedule) {
			$first = $schedule->teachers->first();

			return [
				'id'      => $first->pivot->id,
				'teacher' => $first
					? $first->last_name . ' ' . $first->first_name
					: 'No teacher assigned',
				'subject' => $schedule->subject,
				'day'     => $schedule->day,
			];
		});

		return response()->json([
			'success' => true,
			'items'   => $items,
			'message' => 'Assignments have been received successfully.',
		]);
	}

	public function assign(AssignTeacherFormRequest $request)
	{
		$validated = $request->validated();

		$schedule = Schedule::findOrFail($validated['schedule_id']);
		$schedule->teachers()->sync([$validated['teacher_id']]);

		return response()->json([
			'success' => true,
			'message' => 'Teacher assigned successfully.'
		]);
	}
}
