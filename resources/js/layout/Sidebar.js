import React ,{ useEffect, useState } from 'react'
import { ReactDOM } from 'react';
import '../../css/app.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Getuser } from '../api/Index';
import { Link } from "react-router-dom";
import User from './User';
export default function sidebar() {
	// const [APIData, setAPIData] = useState(null);
    // useEffect(() => {
	
    // }, []);
	// const getUserData = () => {
	// 	Getuser().then((response) => {
	// 		console.log
	// 	});
	// }
	// const data = () =>{
	// getUserData ();
		
	// }
	let data = JSON.parse(localStorage.getItem('user'));
	useEffect(()=>{
		console.log('dsj',data.name);
   });
  return (
    <>
						<li className="bold">
							<Link className="waves-effect waves-cyan " to="/dashboard/home">
								<HomeOutlinedIcon /> Home
							</Link>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-chat.html">
								<AnalyticsOutlinedIcon /> My Analytics
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-todo.html">
								<AlbumOutlinedIcon /> Release Album
							</a>
						</li>
						<li className="bold">
							<Link className="waves-effect waves-cyan " to="/dashboard/Music">
								<MusicNoteOutlinedIcon /> Release New Music
							</Link>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-file-manager.html">
								<AccountBalanceWalletOutlinedIcon /> Wallet
							</a>
						</li>
						{/* {APIData.name == 1 && APIData.role_id==2 ( */}
						{ data.role_id == 1 || data.role_id == 2 ?
						<>
							<li className="navigation-header">
							<a className="navigation-header-text">Admin</a>
						</li>
						<li className="bold">
							<Link className="waves-effect waves-cyan " to="/dashboard/User">
								<PeopleAltIcon /> Users
							</Link>
						</li> </>
						: ''
						}

						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> Pending Albums
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> Approved Album
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> Distributed Albums
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> Declined Albums
							</a>
						</li>
						{/* { APIData.role == 'admin' && ( */}
							<li className="bold">
								<a className="waves-effect waves-cyan " href="app-calendar.html">
									<PeopleAltIcon /> Need Edit Albums
								</a>
							</li>
						
						{/* {name == 'roshan' && (
							;saveStudentsdfvmlsd
						)} */}
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> User Request
							</a>
						</li>
						<li className="bold">
							<a
								className="waves-effect waves-cyan "
								href="https://pixinvent.com/materialize-material-design-admin-template/documentation/index.html"
								target="_blank"
							>
								<i className="material-icons">import_contacts</i>
								<span className="menu-title" data-i18n="Documentation">
									Documentation
								</span>
							</a>
						</li>
						<li className="bold">
							<a
								className="waves-effect waves-cyan "
								href="https://pixinvent.ticksy.com/"
								target="_blank"
							>
								<i className="material-icons">help_outline</i>
								<span className="menu-title" data-i18n="Support">
									Support
								</span>
							</a>
						</li>
    </>
  );
}
