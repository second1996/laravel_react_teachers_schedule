<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use App\Http\Requests\ScheduleFormRequest;

class ScheduleController extends Controller
{
	public function index()
	{
		$subjects = Schedule::select('id', 'day', 'subject')->orderBy('subject', 'asc')->get();

		return response()->json([
			'success' => true,
			'message' => 'Schedule have been received successfully.',
			'items'   => $subjects,
		]);
	}

	public function store(ScheduleFormRequest $request)
	{
		Schedule::create($request->only('day', 'subject'));

		return response()->json([
			'success' => true,
			'message' => 'Schedule created successfully.',
		], 201);
	}

	public function destroy($id)
	{
		$schedule = Schedule::find($id);

		if (!$schedule) {
			return response()->json([
				'success' => false,
				'message' => 'Subject with introduced id isn\'t found.'
			], 404);
		}

		$schedule->teachers()->detach();
		$schedule->delete();

		return response()->json([
			'success' => true,
			'message' => 'Subject deleted successfully.',
		], 200);
	}
}
