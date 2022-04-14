import axios from 'axios';
import File from './File';
import Api from './Api';
const UserLogin = (payload) => Api.post("/login", payload);
const Userlogout = (payload) => Api.post("/logout", payload);
const Getuser = () => Api.get("/users");
const DeleteUser = (id) => Api.get('/delete/'+id);
export  {
    UserLogin,
    Userlogout,
    Getuser,
    DeleteUser,
}