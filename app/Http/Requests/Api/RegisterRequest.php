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
            'name'             => $this->input('first_name'),
            'fullname'         => $this->input('last_name'),
            'email'            => $this->input('email'),
            'artistname'       => $this->input('artistname'),
            'password'         =>  Hash::make($this->input('password')),
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
            'name'                  => 'required|min:3|max:50',
            'artistname'            =>'required|min:5|max:20',
            'email'                 => 'email',
            'password'              => 'min:4|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'min:4'
        ];
    }
}
