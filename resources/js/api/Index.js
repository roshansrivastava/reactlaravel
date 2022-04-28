import axios from 'axios';
import File from './File';
import Api from './Api';
const UserLogin = (payload) => Api.post("/login", payload);
const Userlogout = (payload) => Api.post("/logout", payload);
const Getuser = () => Api.get("/users");
const DeleteUser = (id) => Api.get('/delete/'+id);
const AddUsers = (formData) =>Api.post('/adduser',formData);
const UpdateUsers = (payload) => Api.post('/updateuser',payload);
const Getusers = (id) => Api.get('/getuser/'+id);
const Register = (payload) => Api.post('/register',payload);
const Forget = (payload) => Api.post('/forget/password',payload);
const Reset = (payload) =>Api.post('/reset/pasword',payload);
const EditUsers = (payload) => Api.post('/edit/user',payload);
const Plan = () => Api.get('/plan'); 
export  {
    UserLogin,
    Userlogout,
    Getuser,
    DeleteUser,
    AddUsers,
    UpdateUsers,
    Getusers,
    Register,
    Forget,
    Reset,
    EditUsers,
    Plan,
}