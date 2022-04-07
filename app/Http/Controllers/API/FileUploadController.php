<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\FileUpload;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class FileUploadController extends Controller
{
    public function uploads(Request $request)
    {
    try {
        $file     = $request->file('files');
        $fileName = $file->getClientOriginalName();
        $FilePath = 'roshantest/uploads'; 
        $File = Storage::disk('s3')->putFileAs($FilePath, $file , $fileName);
        Storage::copy(
            $request->input('key'),
            str_replace('tmp/', '', $request->input('key'))
        );
        $upload['name'] = $fileName;
        $upload['path'] = $FilePath;
        FileUpload::create($upload);

        return "success";
        // $isFileExist = Storage::disk('s3')->exists($File);
        if ($isFileExist) {
            // $Path = Storage::disk('s3')->url($File);
            // $upload['name'] = $File->getClientOriginalName();
            // $upload['path'] = $Path;
            // FileUpload::create($upload);
            // unset($upload['path']);
            // $uploadedFiles[] = $upload;
            // $response['status'] = true;
            // $response['data'] = $uploadedFiles;
        }
            else {
                return response()->json([
                    'status'=> false,
                    'message'=> ' Sorry! file not upload. Please try again' ,
                ]);
              }
            }
               catch (\Exception $e) {
                return response()->json([
                    'status'=> false,
                    'message' => $e->getMessage() . $e->getLine(),
                ]);
            }
    }

    public function getFile(Request $request, $id){
        $id = FileUpload::find($id);
        $FilePath = $id->path . "/".$id->name; 
        return $file = Storage::disk('s3')->download($FilePath);
       // dd($file);
    }
}
