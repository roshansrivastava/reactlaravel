import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Store , Genre} from '../api/Index';
import './custom.css';
import { WithContext as ReactTags } from 'react-tag-input';
import Example from '../components/Example';

import Select from 'react-select';

export default function NewAlbum(props) {
    const [ storevalue , setstorevalue ] = useState([]);
    const [ genreValue , setgenreValue ] = useState([]);
    const [ tags, setTags ] = useState([]);
    const GetStore = async () => {
       await Store()
        .then((res)=>{
            console.log('stores',res.store);
			let suggestions = res.store.map(data=>{
				return {
					text:data.name,
					id:data.id
				}
			});
            setstorevalue(suggestions);
        })
        .catch(err => {
			console.log(err);
		})
    }

    const GetGenre = async () => {
        await Genre()
        .then((res)=>{
            console.log('genre',res.genre);
			let geners = res.genre.map(data => {
				return {
					label:data.name,
					value:data.id
				}
			});
            setgenreValue(geners);
        })
        .catch(err => {
			console.log(err);
		})
    }
    useEffect(()=>{
        GetStore();
        GetGenre();
    },[0]);
    
    // const suggestions = storevalue.map((data) => {
    //     // console.log('dd',data)
    //     return {
    //         id: data.id,
    //         text: data.name,
    //     };
    // });
  
const KeyCodes = {
    comma: 188,
    enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];


const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
	};
    
	const handleAddition = (tag) => {
        setTags([ ...tags, tag ]);
	};
    
	const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();
        
		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);
        
		// re-render
		setTags(newTags);
	};
    
	const handleTagClick = (index) => {
        console.log('The tag at index ' + index + ' was clicked');
	};

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
							<AccountCircleIcon />
							<span className="logo-text hide-on-med-and-down">
								{data.name}
								{data.fullname}
							</span>
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
			<select>
				<option>kldfjgdfgj</option>
				{genreValue.map(data => (
					<option  value={data.id}>{data.name}</option>
				))}
			</select>
			<div id="main">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header">
									<h5> Release new album</h5>
								</div>
								<div class="col s12 m12 l12">
									<div id="Form-advance" class="card card card-default scrollspy">
										<div class="card-body">
											<h4 class="card-title">General Information</h4>
											<form>
												<div class="row">
													<div class="input-field col m6 s12">
														<input id="first_name01" type="text" />
														<label for="first_name01">Album Name</label>
													</div>

													

													<div class="input-field col m6 s12">

														
													<Select
														className="basic-single"
														classNamePrefix="select"
																									
														name="color"
														options={genreValue}
														/>

														
													</div>
												</div>
												<div class="row">
													<ReactTags
														tags={tags}
														suggestions={storevalue}
														delimiters={delimiters}
														handleDelete={handleDelete}
														handleAddition={handleAddition}
														handleDrag={handleDrag}
														handleTagClick={handleTagClick}
														inputFieldPosition="bottom"
														autocomplete
														editable
													/>
												</div>
												<div class="row">
												<Example token={props.token}/>
												</div>						

												<div class="row">
													<div class="row">
														<div class="input-field col s12">
															<button
																class="btn cyan waves-effect waves-light right"
																type="submit"
																name="action"
															>
																Submit
																<i class="material-icons right">send</i>
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Script />
		</div>
	);
}
