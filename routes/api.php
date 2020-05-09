<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Product API
Route::get('products', 'ProductController@index');
Route::post('product', 'ProductController@store');
Route::get('product/{id}', 'ProductController@show');
Route::put('product/{id}', 'ProductController@update');
Route::delete('product/{id}','ProductController@delete');

// Brand API
Route::get('brands', 'BrandController@index');
Route::post('brand', 'BrandController@store');
Route::get('brand/{id}', 'BrandController@show');
Route::put('brand/{id}', 'BrandController@update');
Route::delete('brand/{id}', 'BrandController@delete');