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
import ReactAudioPlayer from 'react-audio-player';

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
	let text1 = "";
	let text2 = state?.composer;
	let text3 =state?.language ;
	let information = text1.concat("composer:", text2, ",","language:", text3);
	console.log('@@@',state);
	// console.log("albums:::",state?.song_file);
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
								<button class="buttonPlan">
									{state?.album?.user?.plan?.title}
     							</button>
								</h6>
						   </div>
								<div className='card-body'>
								<div className='row'>
									<div className='col-md-3' >
									<img id="imgsong" src={state?.album?.fileupload?.path}/>
										</div>
										<div className='col-md-9'>
											Songs		
									<table className='table table-bordered table-striped' >
									<thead>
										<tr>
											<th>Nr.</th>
											<th>Name</th>
											<th>Information</th>
											<th>Feature-Artist</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
											<tr>
											<td>{state.id}</td>
											<td>{state?.album?.title}</td>
											<td>{information}</td>
											<td>No Feature Artist</td>
										</tr>
									</tbody>
									</table>
									<ReactAudioPlayer
										id="audio"
									  src={state?.song_file}
									  autoPlay
									  controls
									/>
									      </div>
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
