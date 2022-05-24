import axios from 'axios';
import File from './File';
import Api from './Api';
const UserLogin = (payload) => Api.post("/login", payload);
const Userlogout = (payload) => Api.post("/logout", payload);
const DeleteUser = (id) => Api.get('/delete/'+id);
const AddUsers = (formData) =>Api.post('/adduser',formData);
const UpdateUsers = (payload) => Api.post('/updateuser',payload);
const Getusers = (id) => Api.get('/getuser/'+id);
const Register = (payload) => Api.post('/register',payload);
const Forget = (payload) => Api.post('/forget/password',payload);
const Reset = (payload) =>Api.post('/reset/pasword',payload);
const EditUsers = (payload) => Api.post('/edit/user',payload);
const Plan = () => Api.get('/plan'); 
const Single = () => Api.get('/getuser');
const Search = (query) => Api.post('/search',query);
const PurchasePremium = (tokenization) => Api.post('stripe',tokenization);
const ResendMail = (payload) => Api.post('/resend',payload);
const searchusers = (data) => Api.post(`/users?page=${data.pageNumber}&search=${data.query}`);
const Store = () => Api.get('/stores');
const Genre = () => Api.get('/genres');
const Upload = (formData,payload) => Api.post('/upload-file',formData,payload);
const Countri = () =>Api.get('/country');
const ReleaseAlbum = (payload) =>Api.post('/release/albums',payload);
const ReleaseMusic = (data) => Api.post(`/released/music?page=${data.pageNumber}`);
const Song_Album = (id) => Api.get('/released/music/song/'+id);
export  {
    UserLogin,
    Userlogout,
    DeleteUser,
    AddUsers,
    UpdateUsers,
    Getusers,
    Register,
    Forget,
    Reset,
    EditUsers,
    Plan,
    Single,
    Search,
    PurchasePremium,
    ResendMail,
    searchusers,
    Store,
    Genre,
    Upload,
    Countri,
    ReleaseAlbum,
    ReleaseMusic,
    Song_Album,
}