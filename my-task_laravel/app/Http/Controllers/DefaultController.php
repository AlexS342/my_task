<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DefaultController extends Controller
{
    public function checkingConnection(Request $request)
    {
//        return response()->json('Ты успешно получил ответ от сервера myTaskBack');
        return response()->json($request);
    }
}
