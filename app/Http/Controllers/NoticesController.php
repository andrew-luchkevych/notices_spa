<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notice;

class NoticesController extends Controller
{
    public function index()
    {
        return Notice::all();
    }
 
    public function show(Notice $notice)
    {
        return $notice;
    }
 
    public function store(Request $request)
    {
        $this->validate($request, [
            'text' => 'required|max:500',
        ]);
        $notice = Notice::create($request->all());
 
        return response()->json($notice, 201);
    }
 
    public function update(Request $request, Notice $notice)
    {
        $notice->update($request->all());
 
        return response()->json($notice, 200);
    }
 
    public function delete(Notice $notice)
    {
        $notice->delete();
 
        return response()->json(null, 204);
    }
}
