import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { Song_Album } from '../api/Index';
import Button from '@mui/material/Button';
import { Link , NavLink} from "react-router-dom";
import { DeleteUser , Single, searchusers} from '../api/Index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Pagination from "react-js-pagination";
import EditUser from './EditUser';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function AlbumView() {
	const [APIData, setAPIData] = useState([]);
	const [Loading , setLoading] =useState(true);
	const [state, setData] = useState({
        users: ''
    });
	const [query, setQuery] = useState("")
	const [foundUsers, setFoundUsers] = useState([]);
	let user ='';
	let search = '';
	
	const fetchData = async () => {

		Song_Album()
		.then(res => {
            // console.log('album',res);
            // return;
			// setData({
			// 			users : res.data,
			// 		});
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})
		
    };
	useEffect(() => {
        fetchData();
		console.log('dd',state);
    }, [])
	
	const handleChange = (event) =>{
		setQuery(event.target.value);
		fetchData();
		
	}

	
	const Delete = (id) => {
		DeleteUser(id).then((res) => {
			fetchData();
			console.log(res);
			
		})
	}
	
	
	let data = JSON.parse(localStorage.getItem('user'));
								

					return (
		<div className="App">
			<header className="page-topbar" id="header">
				<Navbar />
			</header>
			<aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
				<div className="brand-sidebar">
					<h1 className="logo-wrapper">
						<a className="brand-logo darken-1" href="index.html">
							<AccountCircleIcon/>
							<span className="logo-text hide-on-med-and-down">{data.name}{data.fullname}</span>
						</a>
					</h1>
				</div>
				<ul
					className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow"
					id="slide-out"
					data-menu="menu-navigation"
					data-collapsible="menu-accordion"
				>
					<Sidebar />
				</ul>
				<div className="navigation-background" />
				<a
					className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only"
					href="#"
					data-target="slide-out"
				>
					<i className="material-icons">menu</i>
				</a>
			</aside>
			<div id="main">
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<div className='card'>
								<div className='card-header'>
								<h6> Your Albums
								</h6>
						   </div>
								
								<div className='card-body'>
									<table className='table table-bordered table-striped'>
									<thead>
										<tr> 
											<th>ID</th>
											<th>Name</th>
											<th>Genre</th>
											<th>Album Status</th>
											<th>Request Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{/* {Table_Users} */}
									{   
                                state?.users?.data ? 
                                    state?.users?.data?.map((user) => (
										console.log('**',user.user.name),
										<tr key ={user.id}>
										<tr>{<AccountCircleIcon/>}</tr>
										<td>{user.user.name}</td>
										<td>{user.genre.name}</td>
										<td><h6>Pending</h6></td>
										<td><h6>Not-Requested</h6></td>
										<td> {<VisibilityIcon className="waves-effect waves-cyan " />}View</td>
										<td>{<Link className="waves-effect waves-cyan " to={`/dashboard/updateuser/${user.id}`}>
											<ModeEditIcon onClick= {() => {update(user.id)}}/>
												{/* <Button variant="contained" className="waves-effect waves-cyan " onClick= {() => {update(user.id)}} >
													Edit
												</Button> */}
												</Link>}</td>
										<td>{<DeleteIcon className="waves-effect waves-cyan"onClick= {() => {Delete(user.id)}}/>

											}</td>
										
										
									</tr>
                                    )) : "Loading..."
                              }
									</tbody>
									</table>
									<div>
                                <Pagination
                                    activePage={state?.users?.current_page ? state?.users?.current_page : 0}
                                    itemsCountPerPage={state?.users?.per_page ? state?.users?.per_page : 0 }
                                    totalItemsCount={state?.users?.total ? state?.users?.total : 0}
                                    onChange={(pageNumber) => {
                                        fetchData(pageNumber)
                                    }}
                                    pageRangeDisplayed={10}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    firstPageText="First Page"
                                    lastPageText="Last Lage"
                                />
                            </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Script />
		</div>
	);
}
