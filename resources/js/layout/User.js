import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { Getuser } from '../api/Index';
import Button from '@mui/material/Button';
import { Link , NavLink} from "react-router-dom";
import { DeleteUser } from '../api/Index';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Pagination from "react-js-pagination";
import EditUser from './EditUser';

export default function User() {
	const [APIData, setAPIData] = useState([]);
	const [Loading , setLoading] =useState(true);
	const [state, setData] = useState({
        users: ''
    });

	const fetchData = async (pageNumber = 1) => {
        const api = await fetch(`/users?page=${pageNumber}`);
        setData({
            users: await api.json()
        });
    };
	useEffect(() => {
        fetchData();
    }, [])
	// const getUserData = () => {
	// 	Getuser().then((response) => {
	// 		setAPIData(response.data);
	// 		if(response.Status== 200)
	// 		{
	// 			setLoading(false);
	// 		}
	// 	});
	// }
	
	// useEffect(() => {
	// 	getUserData();
	// }, []);
	
	const Delete = (id) => {
		DeleteUser(id).then((res) => {
			console.log(res);
			getUserData();
		})
	}
	let data = JSON.parse(localStorage.getItem('user'));
	
	// console.log('setapi',APIData);
	// const update = (id) => {
	// 	console.log('nnsfnn',id);
	// 	props.history.push('/dashboard/updateuser/'+id);
	// }
	// console.log('fdf',APIData);

	// var Table_Users = '';
	// if(Loading)
	// {
	// 	Table_Users =<tr><td colSpan ='8'> <h2>Loading....</h2></td></tr>
	// }
	// else
	// {
		
	// var	Table_Users = 
	// 	APIData.map((data) => {
	// 		return (
				// <tr key ={data.id}>
				// 	<tr>{<AccountCircleIcon/>}</tr>
				// 	<td>{data.id}</td>
				// 	<td>{data.name}</td>
				// 	<td>{data.fullname}</td>
				// 	<td>{data.artistname}</td>
				// 	<td>{data.email}</td>
				// 	<td>{<Link className="waves-effect waves-cyan " to={`/dashboard/updateuser/${data.id}`}>
				// 			<Button variant="contained" className="waves-effect waves-cyan " onClick= {() => {update(data.id)}} >
				// 				Edit
				// 			</Button>
				// 			</Link>}</td>
				// 	<td>{<Button variant="contained" focusVisibleClassName="btn btn-warning" onClick= {() => {Delete(data.id)}}>Delete</Button>}</td>
					
					
				// 	<td> {<Button variant="contained"> View </Button>}</td>
				// </tr>
	// 		);
	// 	})
	// }


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
								<h4> Users 
									<Link to={"/dashboard/adduser"} className = "btn btn-primary btn-sm float-end">
										ADD User
									</Link>
								</h4>
								</div>
								<div className='card-body'>
									<table className='table table-bordered table-striped'>
									<thead>
										<tr> 
											<th>#</th>
											<th>ID</th>
											<th>Name</th>
											<th>Last Name</th>
											<th>Artist Name</th>
											<th>Email</th>
											<th>Edit</th>
											<th>Delete</th>
											<th>view</th>
										</tr>
									</thead>
									<tbody>
									{   
                                state?.users?.data ? 
                                    state?.users?.data?.map((user) => (
										<tr key ={user.id}>
										<tr>{<AccountCircleIcon/>}</tr>
										<td>{user.id}</td>
										<td>{user.name}</td>
										<td>{user.fullname}</td>
										<td>{user.artistname}</td>
										<td>{user.email}</td>
										<td>{<Link className="waves-effect waves-cyan " to={`/dashboard/updateuser/${user.id}`}>
												<Button variant="contained" className="waves-effect waves-cyan " onClick= {() => {update(user.id)}} >
													Edit
												</Button>
												</Link>}</td>
										<td>{<Button variant="contained" focusVisibleClassName="btn btn-warning" onClick= {() => {Delete(user.id)}}>Delete</Button>}</td>
										
										
										<td> {<Button variant="contained"> View </Button>}</td>
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
				{/* <Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>ID</th>
							<th>Name</th>
							<th>Full Name</th>
							<th>Artist Name</th>
							<th>Email</th>
							<th>ADD </th>
							<th>Edit</th>
							<th>Delete</th>
							<th>View</th>
						</tr>
					</thead>
					<tbody>
						{APIData.map((data) => {
							return (
								<tr key ={data.id}>
									<tr>{}</tr>
									<td>{data.id}</td>
									<td>{data.name}</td>
									<td>{data.fullname}</td>
									<td>{data.artistname}</td>
									<td>{data.email}</td>
									<td>
										{<Link className="waves-effect waves-cyan " to="/dashboard/adduser">
											<Button variant="contained" color="success">
												ADD User
											</Button>
							</Link>
										}
									</td>
									<td>{<Link className="waves-effect waves-cyan " to={`/dashboard/updateuser/${data.id}`}>
											<Button variant="contained" class="btn btn-danger" onClick= {() => {update(data.id)}} >
												Edit User
											</Button>
											</Link>}</td>
									<td>{<Button variant="contained" class="btn btn-secondary" onClick= {() => {Delete(data.id)}}>Delete</Button>}</td>
									
									
									<td> {<Button variant="contained"> View </Button>}</td>
								</tr>
							);
						})}
					</tbody>
				</Table> */}
			</div>
			<Script />
		</div>
	);
}
