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
    public function __construct()
    {
        return $this->middleware('auth:api');
    }

    public function planUser()
    {
        try{
            // // $plam
            // for ($plan = 0; $plan < max(3); $plan++) {
                //     return['2',$plan];
        // }
        // // $description = $plan[0]['content_1'];
        // // $description = $plan[0]['content_2'];
        // // $description = $plan[0]['content_3'];
        // // $description = $plan[0]['content_4'];
        // // $description = $plan[0]['content_5'];
        // // return $description;
        
        $plan = Plan::all();
        return response()->json([
            'status'=>$this->successCode,
            'plan'=>$plan,
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
                       $song['isExplicit'] = 1;
                   }
                   elseif($data['radio']=='No Explicit Content')
                   {
                       $song['isExplicit'] = 0;
                   }
                   else
                   {
                       $song['isInstrumental'] = 1;
                   }
                   $song['album_id']=$albumdata->id;
                   $song['language']=$data['selectname'];
                   $songdata=Song::create($song);
                };
            $album_submisson['album_id']=$albumdata->id;
            return $album_submisson;
            }
            return response()->json([
            'status'=> $this->successCode,
            'message'=>'data send successfully',
            'data' => $songdata,
            ]);
            } catch(\Exception $e){
            return $this->getExceptionResponse($e);
            }
    } 
}
