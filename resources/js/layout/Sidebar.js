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
export default function sidebar() {
	const [APIData, setAPIData] = useState(null);
    useEffect(() => {
        Getuser().then((response) => {
                setAPIData(response.data);
            })
    }, []);

console.log()
  return (
    <>
    	<li className="navigation-header">
							<a className="navigation-header-text">Applications</a>
							<i className="navigation-header-icon material-icons">more_horiz</i>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-email.html">
								{' '}
								<HomeOutlinedIcon /> Home{' '}
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-chat.html">
								<AnalyticsOutlinedIcon /> My Analytics{' '}
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
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-contacts.html">
								<PersonIcon /> Admin{' '}
							</a>
						</li>
							{/* )} */}
						<li className="bold">
							<Link className="waves-effect waves-cyan " to="/dashboard/User">
								<PeopleAltIcon /> Users
							</Link>
						</li>

						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> Pending Albums
							</a>
						</li>
						<li className="bold">
							<a className="waves-effect waves-cyan " href="app-calendar.html">
								<PeopleAltIcon /> Approved Album{' '}
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
									<PeopleAltIcon /> Need Edit Albums{' '}
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
