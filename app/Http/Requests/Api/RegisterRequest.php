<?php

namespace App\Http\Requests\Api;
use Str;
use Illuminate\Support\Facades\Hash;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
			
     * @return bool 
     */
    public function authorize()
    {
        return [
            'name'             => $this->input('FullName'),
            'fullname'         => $this->input('LastName'),
            'email'            => $this->input('Email'),
            'artistname'       => $this->input('ArtistName'),
            'password'         =>  Hash::make($this->input('Password')),
            'activation_token' => Str::random(60),
        ];
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'FullName'              => 'required|min:3|max:50',
            'LastName'              => 'required|min:3|max:50',
            'ArtistName'            =>'required|min:5|max:20',
            'Email'                 => 'required',
            'Password'              => 'min:4|required_with:ConfirmPassword|same:ConfirmPassword',
            'ConfirmPassword'       => 'min:4'
        ];
    }
}
