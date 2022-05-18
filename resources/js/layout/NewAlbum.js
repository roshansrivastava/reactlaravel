import React, { useEffect, useState } from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Store , Genre} from '../api/Index';
import './custom.css';
import 'react-calendar/dist/Calendar.css';
import Example from '../components/Example';
import { WithContext as ReactTags } from 'react-tag-input';
import Select from 'react-select';
import Calendar from 'react-calendar';
import {Countri} from '../api/Index';
import { Link } from 'react-router-dom';

export default function NewAlbum(props) {
	const [albumname ,setalbumname]=useState('');
	const [genername ,setgenerename]=useState('');
	const [datename ,setdatename]=useState('');
	const [upcname ,setupcname]=useState('');
	const [languagename ,setlanguagename]=useState('');
	const [spotifyname ,setspotifyname]=useState('');
	const [applyname ,setapplyname]=useState('');
	const [Songselect , setsongselect]=useState('');
	const [ComposerSong , setComposerSong]=useState('');
	const [Radioname , setRadioname] = useState('');
	const [languagename1 ,setlanguagename1]=useState('');
	const [checkdata ,setcheckdata]=useState([]);


	const [ storevalue , setstorevalue ] = useState([]);
    const [ genreValue , setgenreValue ] = useState([]);
	const [tags, setTags] = useState([]);
	const [additionForm , setadditionForm] = useState(false);
	
	const [serviceList ,setServiceList] = useState([
		{songname:'',composername:'',selectname:'',radio:'',isrcname:''}
	]);
	const handleServiceAdd = () => {
		setServiceList([...serviceList,{songname:'',composername:'',selectname:'',radio:'',isrcname:''}]);
	};
	const handleremove = (index) => {
		const list = [...serviceList];
		list.splice(index,1);
		setServiceList(list);
	}
	
	const Saveform = (e) => {
		e.preventDefault();
		let payload = {
			AlbumName:albumname,
			GenerName:genername,
			StoreName:tags,
			DateName:datename,
			UpcName:upcname,
			Languagename:languagename,
			SpotifyName:spotifyname,
			ApplyName:applyname,
		}
		let cooo = [...serviceList,payload];
		console.log('###123',cooo);
		
	}
	
	const GetCountry = async () => {
		await Countri()
		.then((res)=>{
			var Languagedata = res.Language.map(value=>{
				
				return {
					label:value.name,
					value:value.id
				}
			});
            setstorevalue(Languagedata);
		})
	}
    const GetStore = async () => {
		await Store()
		.then((res)=>{
            console.log('stores',res.store);
			var suggestions = res.store.map(value=>{
		
				return {
					id:value.id,
					text:value.store,
				}
			});
            setTags(suggestions);
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
		GetCountry();
    },[0]);
    
	const Addition = ()=>{
		setadditionForm(true);
	}
	console.log('23',additionForm);

	  
	const KeyCodes = {
		comma: 188,
		enter: 13,
	  };
	  
	  const delimiters = [KeyCodes.comma, KeyCodes.enter];
	  const handleDelete = (i) => {
		setTags(tags.filter((tag, index) => index !== i));
		console.log('33',i);
	};
	
	const handleAddition = (tag) => {
		setTags([...tags, tag]);
	};
	
	const handleDrag = (tag, currPos, newPos) => {
		const newTags = tags.slice();
	
		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);
		
		setTags(newTags);
	  };
	
	  const handleTagClick = (index) => {
		  console.log('44',index);
		console.log('The tag at index ' + index + ' was clicked');
	  };
	let data = JSON.parse(localStorage.getItem('user'));

	const onChangeValue = (e , index) => {
		const {name , value } = e.target;
		const list = [...serviceList];
		list[index][name]=value;
		setServiceList(list);
	}
	const onChangeselect = (e , index)=>{
		// const{name,value}=e.target
		// console.log('@@',name);
		const {label} = e;
		const listing = [...serviceList];
		listing[index]['selectname']=label;
		setServiceList(listing);
	}

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
			<div id="main">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="card">
								<div className="card-header">
									<h5> Release new album</h5>
								</div>
								<div className="col s12 m12 l12">
									<div id="Form-advance" className="card card card-default scrollspy">
										<div className="card-body">
											<h5 className="card-title">General Information</h5>
											<form autocomplete="on" onSubmit={Saveform}>
												<div className="row">
													<div className="input-field col m6 s12">
														<input id="first_name01" type="text" 
														onChange={(e) => setalbumname(e.target.value)}
														/>
														<label htmlFor="first_name01">Album Name</label>
													</div>
													<div className="input-field col m6 s12">
													<Select
														className="basic-single"
														classNamePrefix="select"									
														name="color"
														onChange={(e) => setgenerename(e.label)}
														options={genreValue}
														/>
													</div>
												</div>
												<div className='row'>
												<h6>Stores</h6>
												<div className="app">
												<ReactTags
												tags={tags}
												delimiters={delimiters}
												handleDelete={handleDelete}
												handleAddition={handleAddition}
												handleDrag={handleDrag}
												handleTagClick={handleTagClick}
												inputFieldPosition="bottom"
												autocomplete
												editable
												// onChange={(e) => setstorename(e.text)}
												/>
												</div>
												</div>
												<div className='row'>
												<div class="input-field col m6 s12">
													<div className='release'>
														<h6>Release Date
															</h6><span className='mt-4'>
															<pre>
													(The date must be date after today)</pre>	
													</span></div>
													{/* <Calendar 
													  onChange={onChange} 
													  value={value}
													  formatDay ={(locale, date) => formatDate(date, 'd')}
													  maxDate={new Date()}
													/> */}
													 <input
														name="dt_contracting"
														type="date"
														className="form-control"
														id ='unique'
														onChange={(e) => setdatename(e.target.value)}

													/>
													 
													</div>
													<div class="input-field col m6 s12">
													<div className="input-field col m6 s12">
														<h6>UPC</h6>
														<input id="first_name02" type="text"
														placeholder="If you don't have one leave this blank"
														onChange={(e) => setupcname(e.target.value)}

														/>
													</div>
													</div>
													<div class="input-field col m6 s12">
														<h6>Languages</h6>
													<Select
														className="single"
														classNamePrefix="select"								
														name="color"
														options={storevalue}
														onChange={(e) => setlanguagename(e.label)}

														/>
													</div>
												</div>
												<div className="row">
													<h6>Upload Cover <span className='question'>?</span></h6>
												<Example token={props.token}/>
												</div>	
												<div className='row'>
												<h6>Spotify Artist URL <span className='question'>?</span></h6>
												<div class="input-field col m6 s12">
												<div className='row'>
													<div className='col-sm-9'>
												<input id="first_name04" type="text"
													placeholder="If you don't have one leave this blank"
													onChange={(e) => setspotifyname(e.target.value)}
													
													/></div>
													
													<div className='col-sm-3'><span>
													<button className='btn btn-primary'>
														Check URL
													</button></span>
													</div>
													</div>
												</div>
												</div>					


												<div className='row'>
												<h6>Apply Artist URL <span className='question'>?</span></h6>
												<div class="input-field col m6 s12">
												<div className='row'>
													<div className='col-sm-9'>
												<input id="first_name04" type="text"
													placeholder="If you don't have one leave this blank"
													onChange={(e) => setapplyname(e.target.value)}

													/></div>
													
													<div className='col-sm-3'><span>
													<button className='btn btn-primary'>
														Check URL
													</button></span>
													</div>
													</div>
												</div>
												</div>					
												<div className='row'>
												<div class="input-field col m6 s12">
													<h5>Songs</h5>
													<button type= 'button'className='btn btn-primary' onClick={Addition}>+ Add Song</button>
													</div>
													</div>
													{ additionForm == true ?
													<div className="row">
													<div className="col-md-12">
													{ serviceList.map((singleService,index)=>(
														<div key={index}className="card">
															<div className="card-header">
																<h5> Song-{index+1}</h5>
															</div>
															<div className="col s12 m12 l12">
																{/* <div id="Form-advance" className="card card card-default scrollspy"> */}
																	<div className="card-body">
																		<h5 className="card-title"></h5>
																		
																			<div  className="row">
																				<div className="input-field col m6 s12">
																					<input id="first_name10" type="text" name='songname' 
																					onChange={(e)=>onChangeValue(e,index)}
																					/>
																					<label htmlFor="first_name10">Song Name</label>
																				</div>
																			</div>
																			<div className="row">
																				<div className="input-field col m6 s12">
																					<input id="first_name11" type="text" name='composername'
																					onChange={(e)=>onChangeValue(e,index)}
																					 />
																					<label htmlFor="first_name11">Composer ( Song )</label>
																				</div>
																			</div>
																			<div className="row">
																				<div className="input-field col m6 s12">
																				<h6>Languages</h6>
																					<Select
																						className="single"
																						classNamePrefix="select"								
																						name="selectname"
																						options={storevalue}
																						onChange={(e)=>onChangeselect(e,index)}
																						/>
																				</div>
																				<div className="input-field col m6 s12">
																				<h6>ISRC</h6>
																				<input id="first_name04" type="text"
																				name='isrcname'
																				placeholder="If you don't have one leave this blank"
																				onChange={(e)=>onChangeValue(e,index)}
																				/></div>
																			</div>

																			<div className='radiobutton'>
																			<div className="radio">
																				<label>
																					<input
																					type="radio"
																					value="Male"
																					name='radio'
																					onChange={(e)=>onChangeValue(e,index)}
																					/>
																					<span class="check"></span>  
																					Male
																				</label>
																				</div>
																				<div className="radio">
																				<label>
																					<input
																					type="radio"
																					value="Female"
																					name='radio'
																					onChange={(e)=>onChangeValue(e,index)}
																					/>
																					<span class="check"></span>  
																					Female
																				</label>
																				</div>
																				<div className="radio">
																				<label>
																					<input
																					type="radio"
																					value="Other"
																					name='radio'
																					onChange={(e)=>onChangeValue(e,index)}
																					/>
																					<span class="check"></span>
																					Other
																				</label>
																				</div>
																				</div>
																			<div className="row">
																				<h6>Upload Song</h6>
																			<Example token={props.token}/>
																			<p>Allowed formats: flac.Wav</p><br/>
																			<p>If your files in other format, go to this website Convert to wav <Link className="color:red" to='https://www.freeconvert.com/'>freeconvert.com</Link>.</p>
																			</div>
																			<div className='row'>
																			{serviceList.length-1 === index && serviceList.length<4 && (
																			<div class="input-field col m6 s12">
																			<h5>Songs</h5>
																			<button type= 'button'className='btn btn-primary' onClick={handleServiceAdd}> + Add Song</button>
																			</div>
																			)}
																			{serviceList.length > 1 && (
																			<div class="input-field col m6 s12">
																			<h5>Songs</h5>
																			<button type= 'button'className='btn btn-primary' onClick={()=>{handleremove(index)}}> Remove Button</button>
																			</div>
																			)}
																			</div>
																	{/* </div> */}
																</div>
															</div>
														</div>
																))}
													</div>
												</div>
											: ''	}
												<div className="row">
													<div className="row">
														<div className="input-field col s12">
															<button
																className="btn cyan waves-effect waves-light right"
																type="submit"
															>
																Submit
																<i className="material-icons right">send</i>
															</button>
														</div>
													</div>
												</div>
											</form>
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
