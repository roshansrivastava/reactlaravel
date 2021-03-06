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
        $file_extention = $file->getClientOriginalExtension();
            $FilePath = 'roshantest/uploads'; 
            $File = Storage::disk('s3')->putFileAs($FilePath, $file , $fileName);
            // $Path = Storage::disk('s3')->url($File);
            $url = Storage::temporaryUrl(
                $File,
                now()->addMinutes(30)
            );
            $fileupload = new FileUpload;
            $fileupload['name']=$fileName;
            $fileupload['path']=$url;
            $fileupload->save();
            return response()->json([
                  'status'=>$this->successCode,
                  'message'=> $this->responseMsg['success'][0] ,
                  'data'=>$fileupload,
              ]);
           
            //  For using vaopor

            // Storage::copy(
            //     $request->input('key'),
            //     str_replace('tmp/', '', $request->input('key'))
            // );
            // return ['dd',$request];
            // $upload['name'] = $fileName;
            // $upload['path'] = $FilePath;
        // $isFileExist = Storage::disk('s3')->exists($File);
            }
            catch (\Exception $e) {
                return $this->getExceptionResponse($e);
              }
    }

    public function getFile(Request $request, $id){
        $id = FileUpload::find($id);
        $FilePath = $id->path . "/".$id->name; 
        return $file = Storage::disk('s3')->download($FilePath);
    }
}
