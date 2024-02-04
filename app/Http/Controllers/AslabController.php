<?php

namespace App\Http\Controllers;

use App\Models\Aslab;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AslabController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index() 
    {
        return Inertia::render('LoginAslab');
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Aslab $aslab)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aslab $aslab)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aslab $aslab)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aslab $aslab)
    {
        //
    }
}
