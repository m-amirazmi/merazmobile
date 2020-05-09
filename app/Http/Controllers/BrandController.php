<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Brand;

class BrandController extends Controller
{
    public function index(){
        return Brand::all();
    }
    public function store(Request $request){
        return Brand::create($request->all());
    }
    public function show($id){
        return Brand::findOrFail($id);
    }
    public function update(Request $request, $id){
        return Brand::findOrFail($id)->update($request->all());
    }
    public function delete($id){
        $brand = Brand::findOrFail($id)->delete();
        return 204;
    }
}
