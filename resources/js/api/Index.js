import axios from 'axios';
import File from './File';
import Api from './Api';
const UserLogin = (payload) => Api.post("/login", payload);
const Userlogout = (payload) => Api.post("/logout", payload);
const Getuser = () => Api.get("/users");
const DeleteUser = (id) => Api.get('/delete/'+id);
const AddUsers = (formData) =>Api.post('/adduser',formData);
const UpdateUsers = (formData, id) => Api.post('/updateuser/'+id,formData);
export  {
    UserLogin,
    Userlogout,
    Getuser,
    DeleteUser,
    AddUsers,
    UpdateUsers,
}