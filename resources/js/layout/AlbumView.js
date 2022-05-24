import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import { Song_Album } from '../api/Index';
import Button from '@mui/material/Button';
import { Link , useParams  } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Pagination from "react-js-pagination";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { BurstMode } from '@material-ui/icons';

export default function AlbumView() {
	const { id } = useParams();
	const [APIData, setAPIData] = useState([]);
	const [Loading , setLoading] =useState(true);
	const [state, setData] = useState([]);
	const [query, setQuery] = useState("")
	const [foundUsers, setFoundUsers] = useState([]);
	
	const Data = async () => {
		Song_Album(id)
		.then(res => {
			setData(res.data);
		})
		.catch(err => {
			console.log(err);
		})
		
    };
	useEffect(() => {
        Data();
    }, [])
	
	const handleChange = (event) =>{
		setQuery(event.target.value);
		fetchData();
	}
	console.log('@@@',state);
	console.log("albums:::",state?.album?.user?.plan?.title)
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
								<div class="buttonPlan">
								<button>
									{state?.album?.user?.plan?.title}
     							</button>
								</div>
						   </div>
								
								<div className='card-body'>
									<table className='table table-bordered table-striped'>
									<thead>
										<tr> 
    									<th colspan="2">Image</th>
											<th>ID</th>
											<th>Name</th>
											<th>Genre</th>
											<th>Album Status</th>
											<th>Request Status</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
									  
                               	    {/* state?.users?.data ? 
										state?.users?.data?.map((user) => ( */}
											<tr key ={state.id}>
												{console.log('!!!',state.album)}
											<tr>{<AccountCircleIcon/>}</tr>
											<td>{state.title}</td>
											{/* <td>{user.genre.name}</td>
											<td><h6>Pending</h6></td>
											<td><h6>Not-Requested</h6></td>
											<td> {<Link  to={`/dashboard/released/album/${user.id}`}> <VisibilityIcon className="waves-effect waves-cyan " />View</Link> }</td>
											<td>{<Link className="waves-effect waves-cyan " to={`/dashboard/updateuser/${user.id}`}>
												<ModeEditIcon onClick= {() => {update(user.id)}}/>
													</Link>}</td>
											<td>{<DeleteIcon className="waves-effect waves-cyan"onClick= {() => {Delete(user.id)}}/>
	
												}</td> */}
											
											
										</tr>
                              
									</tbody>
									</table>
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
