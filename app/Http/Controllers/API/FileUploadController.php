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
        // Storage::disk('local')->putFileAs(
            //     'files/'.$fileName,
            //     $file,
            //     $fileName
            //   );
            //   $path = $file->getPath();
            $FilePath = 'roshantest/uploads'; 
            $File = Storage::disk('s3')->putFileAs($FilePath, $file , $fileName);
            $Path = Storage::disk('s3')->url($File);
            $fileupload = new FileUpload;
            $fileupload['name']=$fileName;
            $fileupload['path']=$Path;
            $fileupload->save();
            // return ['dd$',$FilePath];
            return response()->json([
                  'status'=> 200,
                  'message'=> 'Success' ,
                  'data'=>$fileupload,
              ]);
           
            // return ['22',$All];
            // Storage::copy(
            //     $request->input('key'),
            //     str_replace('tmp/', '', $request->input('key'))
            // );
            // return ['dd',$request];
            // $upload['name'] = $fileName;
            // $upload['path'] = $FilePath;

        return "success";
        // $isFileExist = Storage::disk('s3')->exists($File);
        if ($isFileExist) {
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
