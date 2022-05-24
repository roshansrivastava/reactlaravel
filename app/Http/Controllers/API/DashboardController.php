<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Plan;
use App\Models\Genre;
use App\Models\Store;
use App\Models\Language;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Models\Album;
use App\Models\Song;
use App\Models\Album_Submission;

class DashboardController extends Controller
{
    public function welcome()
    {
        return view('welcome');
    }


    public function planUser()
    {
        try{
            $plan = Plan::all();
            return response()->json([
                'status' => $this->successCode,
                'plan' => $plan,
            ]);
        }catch (\Exception $e) {
            return $this->getExceptionResponse($e);
        }

    }

    public function Store()
    {
        try{
        $store = Store::all();
        return response()->Json([
            'status'=>$this->successCode,
            'store'=>$store
        ]);
        }catch(\Exception $e){
            return $this->getExceptionResponse($e);
        }
    }

   public function Genre()
    {
        try{
        $genre = Genre::all();
        return response()->Json([
            'status'=>$this->successCode,
            'genre'=>$genre
        ]);
        }catch(\Exception $e){
            return $this->getExceptionResponse($e);
        }
    }
    public function Country()
    {
        try{
            $Language = Language::all();
            return response()->Json([
                'status'=>$this->successCode,
                'Language'=>$Language
            ]);
        }catch(\Exception $e){
        return $this->getExceptionResponse($e);
        }
    }

    public function Albums(Request $request)
    {
        try {
           $data = $request->all();
           $storevalue=json_encode($data['StoreName']);
           $user = $data['users'];
           $album['user_id']=Auth::user()->id;
           $album['title']= $data['AlbumName'];
           $album['release']=$data['DateName'];
           $album['genre_id']=$data['GenerName'];
           $album['language_id']=$data['Languagename'];
           $album['spotify_url']=$data['SpotifyName'];
           $album['apple_music_url']=$data['ApplyName'];
           $album['store']=$storevalue;
           $album['upc']=$data['UpcName'];
           $album['status']=1;
           $album['cover']='no defined';
           $album['fuga_cover_image_id']=$data['uploadFileId'];
           $albumdata= Album::create($album);
           if($albumdata){
               foreach($user as $data){
                   $song['title']=$data['songname'];
                   $song['composer']=$data['composername'];
                   $song['isrc']=$data['isrcname'];
                   $song['language']=$data['selectname'];
                   if($data['radio']=='Explicit Content')
                   {
                       $song['is_explicit'] = 1;
                   }
                   elseif($data['radio']=='No Explicit Content')
                   {
                       $song['is_explicit'] = 0;
                   }
                   else
                   {
                       $song['is_instrumental'] = 1;
                   }
                   $song['album_id']=$albumdata->id;
                   $song['language']=$data['selectname'];
                   $song['song_file'] = $data['music'];
                   $songdata=Song::create($song);
                };
            $album_submisson['album_id']=$albumdata->id;
            }
            return response()->json([
            'status'=> $this->successCode,
            'message'=>$this->responseMsg['success'][0],
            'data' => $songdata,
            ]);
            } catch(\Exception $e){
            return $this->getExceptionResponse($e);
            }
    } 

    public function releasedMusic(Request $request)
    {
        try {
            // $name = User::select('name')->get();
            $album_genre = Album::with('user','genre','fileupload')->paginate(10);
            return response()->json([
                'status'=> $this->successCode,
                'data'=> $album_genre,
                ]);
        } catch(\Exception $e){
            return $this->getExceptionResponse($e);
            }
    }

    public function albumMusic($id){
        try {
            $song = Song::where('album_id',$id)->with('album')->first();
            return response()->json([
            'status'=> $this->successCode,
            'data'=> $song,
            ]);
        } catch(\Exception $e){
            return $this->getExceptionResponse($e);
            }
    }
}
