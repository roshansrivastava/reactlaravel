import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../css/app.css';
import axios from 'axios';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
        files:[],
    };
  }
  handleInit() {
      console.log('FilePond instance has initialised', this.pond);
    }
render() {
  return (
      <div className="App">
      <header className="page-topbar" id="header">
      <div className="navbar navbar-fixed"> 
        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
          <div className="nav-wrapper">
            <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
              <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Materialize" data-search="template-list"/>
              <ul className="search-list collection display-none"></ul>
            </div>
            <ul className="navbar-list right">
              <li className="dropdown-language"><a className="waves-effect waves-block waves-light translation-button" href="#" data-target="translation-dropdown"><span className="flag-icon flag-icon-gb"></span></a></li>
              <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light toggle-fullscreen" href="javascript:void(0);"><i className="material-icons">settings_overscan</i></a></li>
              <li className="hide-on-large-only search-input-wrapper"><a className="waves-effect waves-block waves-light search-button" href="javascript:void(0);"><i className="material-icons">search</i></a></li>
              <li><a className="waves-effect waves-block waves-light notification-button" href="javascript:void(0);" data-target="notifications-dropdown"><i className="material-icons">notifications_none<small className="notification-badge">5</small></i></a></li>
              <li><a className="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown"><span className="avatar-status avatar-online"><img src="/css/images/avatar/avatar-7.png" alt="avatar"/><i></i></span></a></li>
              <li><a className="waves-effect waves-block waves-light sidenav-trigger" href="#" data-target="slide-out-right"><i className="material-icons">format_indent_increase</i></a></li>
            </ul>
            <ul className="dropdown-content" id="translation-dropdown">
              <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="en"><i className="flag-icon flag-icon-gb"></i> English</a></li>
              <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="fr"><i className="flag-icon flag-icon-fr"></i> French</a></li>
              <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="pt"><i className="flag-icon flag-icon-pt"></i> Portuguese</a></li>
              <li className="dropdown-item"><a className="grey-text text-darken-1" href="#!" data-language="de"><i className="flag-icon flag-icon-de"></i> German</a></li>
            </ul>
            <ul className="dropdown-content" id="notifications-dropdown">
              <li>
                <h6>NOTIFICATIONS<span className="new badge">5</span></h6>
              </li>
              <li className="divider"></li>
              <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">2 hours ago</time>
              </li>
              <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">3 days ago</time>
              </li>
              <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">4 days ago</time>
              </li>
              <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">6 days ago</time>
              </li>
              <li><a className="black-text" href="#!"><span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                <time className="media-meta grey-text darken-2" datetime="2015-06-12T20:50:48+08:00">1 week ago</time>
              </li>
            </ul>
            <ul className="dropdown-content" id="profile-dropdown">
              <li><a className="grey-text text-darken-1" href="user-profile-page.html"><i className="material-icons">person_outline</i> Profile</a></li>
              <li><a className="grey-text text-darken-1" href="app-chat.html"><i className="material-icons">chat_bubble_outline</i> Chat</a></li>
              <li><a className="grey-text text-darken-1" href="page-faq.html"><i className="material-icons">help_outline</i> Help</a></li>
              <li className="divider"></li>
              <li><a className="grey-text text-darken-1" href="user-lock-screen.html"><i className="material-icons">lock_outline</i> Lock</a></li>
              <li><a className="grey-text text-darken-1" href="user-login.html"><i className="material-icons">keyboard_tab</i> Logout</a></li>
            </ul>
          </div>
          <nav className="display-none search-sm">
            <div className="nav-wrapper">
              <form id="navbarForm">
                <div className="input-field search-input-sm">
                  <input className="search-box-sm mb-0" type="search" required="" id="search" placeholder="Explore Materialize" data-search="template-list"/>
                  <label className="label-icon" htmlfor="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                  <ul className="search-list collection search-list-sm display-none"></ul>
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
    <ul className="display-none" id="default-search-main">
      <li className="auto-suggestion-title"><a className="collection-item" href="#">
          <h6 className="search-title">FILES</h6></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img src="/css/images/icon/pdf-image.png" width="24" height="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">Two new item submitted</span><small className="grey-text">Marketing Manager</small></div>
            </div>
            <div className="status"><small className="grey-text">17kb</small></div>
          </div></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img src="/css/images/icon/doc-image.png" width="24" height="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">52 Doc file Generator</span><small className="grey-text">FontEnd Developer</small></div>
            </div>
            <div className="status"><small className="grey-text">550kb</small></div>
          </div></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img src="/css/images/icon/xls-image.png" width="24" height="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">25 Xls File Uploaded</span><small className="grey-text">Digital Marketing Manager</small></div>
            </div>
            <div className="status"><small className="grey-text">20kb</small></div>
          </div></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img src="/css/images/icon/jpg-image.png" width="24" height="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">Anna Strong</span><small className="grey-text">Web Designer</small></div>
            </div>
            <div className="status"><small className="grey-text">37kb</small></div>
          </div></a></li>
      <li className="auto-suggestion-title"><a className="collection-item" href="#">
          <h6 className="search-title">MEMBERS</h6></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img className="circle" src="/css/images/avatar/avatar-7.png" width="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">John Doe</span><small className="grey-text">UI designer</small></div>
            </div>
          </div></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img className="circle" src="/css/images/avatar/avatar-8.png" width="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">Michal Clark</span><small className="grey-text">FontEnd Developer</small></div>
            </div>
          </div></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img className="circle" src="/css/images/avatar/avatar-10.png" width="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">Milena Gibson</span><small className="grey-text">Digital Marketing</small></div>
            </div>
          </div></a></li>
      <li className="auto-suggestion"><a className="collection-item" href="#">
          <div className="display-flex">
            <div className="display-flex align-item-center flex-grow-1">
              <div className="avatar"><img className="circle" src="/css/images/avatar/avatar-12.png" width="30" alt="sample image"/></div>
              <div className="member-info display-flex flex-column"><span className="black-text">Anna Strong</span><small className="grey-text">Web Designer</small></div>
            </div>
          </div></a></li>
    </ul>
    <ul className="display-none" id="page-search-title">
      <li className="auto-suggestion-title"><a className="collection-item" href="#">
          <h6 className="search-title">PAGES</h6></a></li>
    </ul>
    <ul className="display-none" id="search-not-found">
      <li className="auto-suggestion"><a className="collection-item display-flex align-items-center" href="#"><span className="material-icons">error_outline</span><span className="member-info">No results found.</span></a></li>
    </ul>

    <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
      <div className="brand-sidebar">
        <h1 className="logo-wrapper"><a className="brand-logo darken-1" href="index.html"><img className="hide-on-med-and-down" src="/css/images/logo/materialize-logo-color.png" alt="materialize logo"/><img className="show-on-medium-and-down hide-on-med-and-up" src="/css/images/logo/materialize-logo.png" alt="materialize logo"/><span className="logo-text hide-on-med-and-down">Materialize</span></a><a className="navbar-toggler" href="#"><i className="material-icons">radio_button_checked</i></a></h1>
      </div>
      <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
        <li className="active bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">settings_input_svideo</i><span className="menu-title" data-i18n="Dashboard">Dashboard</span><span className="badge badge pill orange float-right mr-10">3</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li className="active"><a className="active" href="dashboard-modern.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Modern">Modern</span></a>
              </li>
              <li><a href="dashboard-ecommerce.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="eCommerce">eCommerce</span></a>
              </li>
              <li><a href="dashboard-analytics.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Analytics">Analytics</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">dvr</i><span className="menu-title" data-i18n="Templates">Templates</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a className="collapsible-header waves-effect waves-cyan" href="JavaScript:void(0)"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Vertical">Vertical</span></a>
                <div className="collapsible-body">
                  <ul className="collapsible" data-collapsible="accordion">
                    <li><a href="../vertical-modern-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Modern Menu">Modern Menu</span></a>
                    </li>
                    <li><a href="../vertical-menu-nav-dark-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Navbar Dark">Navbar Dark</span></a>
                    </li>
                    <li><a href="../vertical-gradient-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Gradient Menu">Gradient Menu</span></a>
                    </li>
                    <li><a href="../vertical-dark-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Dark Menu">Dark Menu</span></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header waves-effect waves-cyan" href="JavaScript:void(0)"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Horizontal">Horizontal</span></a>
                <div className="collapsible-body">
                  <ul className="collapsible" data-collapsible="accordion">
                    <li><a href="../horizontal-menu-template/"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Horizontal Menu">Horizontal Menu</span></a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="navigation-header"><a className="navigation-header-text">Applications</a><i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="app-email.html"> <HomeOutlinedIcon /> Home </a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="app-chat.html"><AnalyticsOutlinedIcon /> My Analytics </a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="app-todo.html"><AlbumOutlinedIcon /> Release Album</a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="app-kanban.html"> <MusicNoteOutlinedIcon /> Release New Music </a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="app-file-manager.html"><AccountBalanceWalletOutlinedIcon /> Wallet</a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="app-contacts.html"><PersonIcon /> Admin </a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="/User"><PeopleAltIcon /> Users</a>
        </li>  
        <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><PeopleAltIcon /> Pending Albums</a>
        </li>  
        <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><PeopleAltIcon /> Approved Album </a>
        </li>        
        <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><PeopleAltIcon /> Distributed Albums</a>
        </li>  
        <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><PeopleAltIcon /> Declined Albums</a>
        </li>  
        <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><PeopleAltIcon /> Need Edit Albums </a>
        </li>  
        <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><PeopleAltIcon /> User Request</a>
        </li>  
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">crop_original</i><span className="menu-title" data-i18n="Medias">Medias</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="media-gallery-page.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Gallery Page">Gallery Page</span></a>
              </li>
              <li><a href="media-hover-effects.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Media Hover Effects">Media Hover Effects</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">face</i><span className="menu-title" data-i18n="User">User</span><span className="badge badge pill purple float-right mr-10">3</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="page-users-list.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="List">List</span></a>
              </li>
              <li><a href="page-users-view.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="View">View</span></a>
              </li>
              <li><a href="page-users-edit.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Edit">Edit</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">lock_open</i><span className="menu-title" data-i18n="Authentication">Authentication</span><span className="badge badge pill purple float-right mr-10">10</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="user-login.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Login">Login</span></a>
              </li>
              <li><a href="user-register.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Register">Register</span></a>
              </li>
              <li><a href="user-forgot-password.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Forgot Password">Forgot Password</span></a>
              </li>
              <li><a href="user-lock-screen.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Lock Screen">Lock Screen</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">filter_tilt_shift</i><span className="menu-title" data-i18n="Misc">Misc</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="page-404.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="404">404</span></a>
              </li>
              <li><a href="page-maintenance.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Page Maintenanace">Page Maintenanace</span></a>
              </li>
              <li><a href="page-500.html" target="_blank"><i className="material-icons">radio_button_unchecked</i><span data-i18n="500">500</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="navigation-header"><a className="navigation-header-text">User Interface </a><i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">cast</i><span className="menu-title" data-i18n="Cards">Cards</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="cards-basic.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Cards">Cards</span></a>
              </li>
              <li><a href="cards-advance.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Cards Advance">Cards Advance</span></a>
              </li>
              <li><a href="cards-extended.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Cards Extended">Cards Extended</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">invert_colors</i><span className="menu-title" data-i18n="CSS">CSS</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="css-typography.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Typograpy">Typograpy</span></a>
              </li>
              <li><a href="css-color.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Color">Color</span></a>
              </li>
              <li><a href="css-grid.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Grid">Grid</span></a>
              </li>
              <li><a href="css-helpers.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Helpers">Helpers</span></a>
              </li>
              <li><a href="css-media.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Media">Media</span></a>
              </li>
              <li><a href="css-pulse.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Pulse">Pulse</span></a>
              </li>
              <li><a href="css-sass.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Sass">Sass</span></a>
              </li>
              <li><a href="css-shadow.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Shadow">Shadow</span></a>
              </li>
              <li><a href="css-animations.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Animations">Animations</span></a>
              </li>
              <li><a href="css-transitions.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Transitions">Transitions</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">photo_filter</i><span className="menu-title" data-i18n="Basic UI">Basic UI</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a className="collapsible-header waves-effect waves-cyan" href="JavaScript:void(0)"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Buttons">Buttons</span></a>
                <div className="collapsible-body">
                  <ul className="collapsible" data-collapsible="accordion">
                    <li><a href="ui-basic-buttons.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Basic">Basic</span></a>
                    </li>
                    <li><a href="ui-extended-buttons.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Extended">Extended</span></a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a href="ui-icons.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Icons">Icons</span></a>
              </li>
              <li><a href="ui-alerts.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Alerts">Alerts</span></a>
              </li>
              <li><a href="ui-badges.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Badges">Badges</span></a>
              </li>
              <li><a href="ui-breadcrumbs.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Breadcrumbs">Breadcrumbs</span></a>
              </li>
              <li><a href="ui-chips.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Chips">Chips</span></a>
              </li>
              <li><a href="ui-collections.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Collections">Collections</span></a>
              </li>
              <li><a href="ui-navbar.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Navbar">Navbar</span></a>
              </li>
              <li><a href="ui-pagination.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Pagination">Pagination</span></a>
              </li>
              <li><a href="ui-preloader.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Preloader">Preloader</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">settings_brightness</i><span className="menu-title" data-i18n="Advanced UI">Advanced UI</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="advance-ui-carousel.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Carousel">Carousel</span></a>
              </li>
              <li><a href="advance-ui-collapsibles.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Collapsibles">Collapsibles</span></a>
              </li>
              <li><a href="advance-ui-toasts.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Toasts">Toasts</span></a>
              </li>
              <li><a href="advance-ui-tooltip.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Tooltip">Tooltip</span></a>
              </li>
              <li><a href="advance-ui-dropdown.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Dropdown">Dropdown</span></a>
              </li>
              <li><a href="advance-ui-feature-discovery.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Discovery">Discovery</span></a>
              </li>
              <li><a href="advance-ui-media.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Media">Media</span></a>
              </li>
              <li><a href="advance-ui-modals.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Modals">Modals</span></a>
              </li>
              <li><a href="advance-ui-scrollspy.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Scrollspy">Scrollspy</span></a>
              </li>
              <li><a href="advance-ui-tabs.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Tabs">Tabs</span></a>
              </li>
              <li><a href="advance-ui-waves.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Waves">Waves</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">add_to_queue</i><span className="menu-title" data-i18n="Extra Components">Extra Components</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="extra-components-range-slider.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Range Slider">Range Slider</span></a>
              </li>
              <li><a href="extra-components-sweetalert.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Sweetalert">Sweetalert</span></a>
              </li>
              <li><a href="extra-components-nestable.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Nestable">Nestable</span></a>
              </li>
              <li><a href="extra-components-treeview.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Treeview">Treeview</span></a>
              </li>
              <li><a href="extra-components-ratings.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Ratings">Ratings</span></a>
              </li>
              <li><a href="extra-components-tour.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Tour">Tour</span></a>
              </li>
              <li><a href="extra-components-i18n.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="i18n">i18n</span></a>
              </li>
              <li><a href="extra-components-highlight.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Highlight">Highlight</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="navigation-header"><a className="navigation-header-text">Tables &amp; Forms </a><i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="table-basic.html"><i className="material-icons">border_all</i><span className="menu-title" data-i18n="Basic Tables">Basic Tables</span></a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="table-data-table.html"><i className="material-icons">grid_on</i><span className="menu-title" data-i18n="Data Tables">Data Tables</span></a>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">chrome_reader_mode</i><span className="menu-title" data-i18n="Forms">Forms</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="form-elements.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Elements">Form Elements</span></a>
              </li>
              <li><a href="form-select2.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Select2">Form Select2</span></a>
              </li>
              <li><a href="form-validation.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Validation">Form Validation</span></a>
              </li>
              <li><a href="form-masks.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Masks">Form Masks</span></a>
              </li>
              <li><a href="form-editor.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Form Editor">Form Editor</span></a>
              </li>
              <li><a href="form-file-uploads.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="File Uploads">File Uploads</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="form-layouts.html"><i className="material-icons">image_aspect_ratio</i><span className="menu-title" data-i18n="Form Layouts">Form Layouts</span></a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="form-wizard.html"><i className="material-icons">settings_ethernet</i><span className="menu-title" data-i18n="Form Wizard">Form Wizard</span></a>
        </li>
        <li className="navigation-header"><a className="navigation-header-text">Charts</a><i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">pie_chart_outlined</i><span className="menu-title" data-i18n="Chart">Chart</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="charts-chartjs.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="ChartJS">ChartJS</span></a>
              </li>
              <li><a href="charts-chartist.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Chartist">Chartist</span></a>
              </li>
              <li><a href="charts-sparklines.html"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Sparkline Charts">Sparkline Charts</span></a>
              </li>
            </ul>
          </div>
        </li>
        <li className="navigation-header"><a className="navigation-header-text">Misc </a><i className="navigation-header-icon material-icons">more_horiz</i>
        </li>
        <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="JavaScript:void(0)"><i className="material-icons">photo_filter</i><span className="menu-title" data-i18n="Menu levels">Menu levels</span></a>
          <div className="collapsible-body">
            <ul className="collapsible collapsible-sub" data-collapsible="accordion">
              <li><a href="JavaScript:void(0)"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Second level">Second level</span></a>
              </li>
              <li><a className="collapsible-header waves-effect waves-cyan" href="JavaScript:void(0)"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Second level child">Second level child</span></a>
                <div className="collapsible-body">
                  <ul className="collapsible" data-collapsible="accordion">
                    <li><a href="JavaScript:void(0)"><i className="material-icons">radio_button_unchecked</i><span data-i18n="Third level">Third level</span></a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.com/materialize-material-design-admin-template/documentation/index.html" target="_blank"><i className="material-icons">import_contacts</i><span className="menu-title" data-i18n="Documentation">Documentation</span></a>
        </li>
        <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.ticksy.com/" target="_blank"><i className="material-icons">help_outline</i><span className="menu-title" data-i18n="Support">Support</span></a>
        </li>
      </ul>
      <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
    </aside>
    <div id="main">
      <div className="row">
        <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
        <div className="col s12">
          <div className="container">
            <div className="section">
   
   <div className="row vertical-modern-dashboard">
      <div className="col s12 m4 l4">
        
         <div className="card animate fadeLeft">
            <div className="card-content">
               <h6 className="mb-0 mt-0 display-flex justify-content-between">Current Balance <i
                     className="material-icons float-right">more_vert</i>
               </h6>
               <p className="medium-small">This billing cycle</p>
               <div className="current-balance-container">
                  <div id="current-balance-donut-chart" className="current-balance-shadow"></div>
               </div>
               <h5 className="center-align">$ 50,150.00</h5>
               <p className="medium-small center-align">Used balance this billing cycle</p>
            </div>
         </div>
      </div>
      <div className="col s12 m8 l8 animate fadeRight">
    
         <div className="card">
            <div className="card-content">
               <h4 className="card-title mb-0">Total Transaction <i className="material-icons float-right">more_vert</i></h4>
               <p className="medium-small">This month transaction</p>
               <div className="total-transaction-container">
                  <div id="total-transaction-line-chart" className="total-transaction-shadow"></div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div className="row">
      <div className="col s12 l5">
        
         <div className="card user-statistics-card animate fadeLeft">
            <div className="card-content">
               <h4 className="card-title mb-0">User Statistics <i className="material-icons float-right">more_vert</i></h4>
               <div className="row">
                  <div className="col s12 m6">
                     <ul className="collection border-none mb-0">
                        <li className="collection-item avatar">
                           <i className="material-icons circle pink accent-2">trending_up</i>
                           <p className="medium-small">This year</p>
                           <h5 className="mt-0 mb-0">60%</h5>
                        </li>
                     </ul>
                  </div>
                  <div className="col s12 m6">
                     <ul className="collection border-none mb-0">
                        <li className="collection-item avatar">
                           <i className="material-icons circle purple accent-4">trending_down</i>
                           <p className="medium-small">Last year</p>
                           <h5 className="mt-0 mb-0">40%</h5>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="user-statistics-container">
                  <div id="user-statistics-bar-chart" className="user-statistics-shadow ct-golden-section"></div>
               </div>
            </div>
         </div>
      </div>
      <div className="col s12 l4">
         
         <div className="card recent-buyers-card animate fadeUp">
            <div className="card-content">
               <h4 className="card-title mb-0">Recent Buyers <i className="material-icons float-right">more_vert</i></h4>
               <p className="medium-small pt-2">Today</p>
               <ul className="collection mb-0">
                  <li className="collection-item avatar">
                     <img src="/css/images/avatar/avatar-7.png" alt="" className="circle" />
                     <p className="font-weight-600">John Doe</p>
                     <p className="medium-small">18, January 2019</p>
                     <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                  </li>
                  <li className="collection-item avatar">
                     <img src="/css/images/avatar/avatar-3.png" alt="" className="circle" />
                     <p className="font-weight-600">Adam Garza</p>
                     <p className="medium-small">20, January 2019</p>
                     <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                  </li>
                  <li className="collection-item avatar">
                     <img src="/css/images/avatar/avatar-5.png" alt="" className="circle" />
                     <p className="font-weight-600">Jennifer Rice</p>
                     <p className="medium-small">25, January 2019</p>
                     <a href="#!" className="secondary-content"><i className="material-icons">star_border</i></a>
                  </li>
               </ul>
            </div>
         </div>
      </div>
      <div className="col s12 l3">
         <div className="card animate fadeRight">
            <div className="card-content">
               <h4 className="card-title mb-0">Conversion Ratio</h4>
               <div className="conversion-ration-container mt-8">
                  <div id="conversion-ration-bar-chart" className="conversion-ration-shadow"></div>
               </div>
               <p className="medium-small center-align">This month conversion ratio</p>
               <h5 className="center-align mb-0 mt-0">62%</h5>
            </div>
         </div>
      </div>
   </div>
   

   <div className="row">
      <div className="col s12 m6 l4">
         <div className="card padding-4 animate fadeLeft">
            <div className="row">
               <div className="col s5 m5">
                  <h5 className="mb-0">1885</h5>
                  <p className="no-margin">New</p>
                  <p className="mb-0 pt-8">1,12,900</p>
               </div>
               <div className="col s7 m7 right-align">
                  <i
                     className="material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text">perm_identity</i>
                  <p className="mb-0">Total Clients</p>
               </div>
            </div>
         </div>
         <div id="chartjs" className="card pt-0 pb-0 animate fadeLeft">
            <div className="dashboard-revenue-wrapper padding-2 ml-2">
               <span className="new badge gradient-45deg-indigo-purple gradient-shadow mt-2 mr-2">+ $900</span>
               <p className="mt-2 mb-0 font-weight-600">Today's revenue</p>
               <p className="no-margin grey-text lighten-3">$40,512 avg</p>
               <h5>$ 22,300</h5>
            </div>
            <div className="sample-chart-wrapper card-gradient-chart">
               <canvas id="custom-line-chart-sample-three" className="center"></canvas>
            </div>
         </div>
      </div>
      <div className="col s12 m6 l8">
         <div className="card subscriber-list-card animate fadeRight">
            <div className="card-content pb-1">
               <h4 className="card-title mb-0">Subscriber List <i className="material-icons float-right">more_vert</i></h4>
            </div>
            <table className="subscription-table responsive-table highlight">
               <thead>
                  <tr>
                     <th>Name</th>
                     <th>Company</th>
                     <th>Start Date</th>
                     <th>Status</th>
                     <th>Amount</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>Michael Austin</td>
                     <td>ABC Fintech LTD.</td>
                     <td>Jan 1,2019</td>
                     <td><span className="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
                     <td>$ 1000.00</td>
                     <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                  </tr>
                  <tr>
                     <td>Aldin Rakić</td>
                     <td>ACME Pvt LTD.</td>
                     <td>Jan 10,2019</td>
                     <td><span className="badge green lighten-5 green-text text-accent-4">Open</span></td>
                     <td>$ 3000.00</td>
                     <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                  </tr>
                  <tr>
                     <td>İris Yılmaz</td>
                     <td>Collboy Tech LTD.</td>
                     <td>Jan 12,2019</td>
                     <td><span className="badge green lighten-5 green-text text-accent-4">Open</span></td>
                     <td>$ 2000.00</td>
                     <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                  </tr>
                  <tr>
                     <td>Lidia Livescu</td>
                     <td>My Fintech LTD.</td>
                     <td>Jan 14,2019</td>
                     <td><span className="badge pink lighten-5 pink-text text-accent-2">Close</span></td>
                     <td>$ 1100.00</td>
                     <td className="center-align"><a href="#"><i className="material-icons pink-text">clear</i></a></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>
<aside id="right-sidebar-nav">
  <div id="slide-out-right" className="slide-out-right-sidenav sidenav rightside-navigation">
    <div className="row">
      <div className="slide-out-right-title">
        <div className="col s12 border-bottom-1 pb-0 pt-1">
          <div className="row">
            <div className="col s2 pr-0 center">
              <i className="material-icons vertical-text-middle"><a href="#" className="sidenav-close">clear</a></i>
            </div>
            <div className="col s10 pl-0">
              <ul className="tabs">
                <li className="tab col s4 p-0">
                  <a href="#messages" className="active">
                    <span>Messages</span>
                  </a>
                </li>
                <li className="tab col s4 p-0">
                  <a href="#settings">
                    <span>Settings</span>
                  </a>
                </li>
                <li className="tab col s4 p-0">
                  <a href="#activity">
                    <span>Activity</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-out-right-body row pl-3">
        <div id="messages" className="col s12 pb-0">
          <div className="collection border-none mb-0">
            <input className="header-search-input mt-4 mb-2" type="text" name="Search" placeholder="Search Messages" />
            <ul className="collection right-sidebar-chat p-0 mb-0">
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-7.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Elizabeth Elliott</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                </div>
                <span className="secondary-content medium-small">5.00 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-1.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Mary Adams</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                </div>
                <span className="secondary-content medium-small">4.14 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="/css/images/avatar/avatar-2.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Caleb Richards</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Hello Boo</p>
                </div>
                <span className="secondary-content medium-small">4.14 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-3.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Caleb Richards</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Keny !</p>
                </div>
                <span className="secondary-content medium-small">9.00 PM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-4.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">June Lane</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Ohh God</p>
                </div>
                <span className="secondary-content medium-small">4.14 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="/css/images/avatar/avatar-5.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Edward Fletcher</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Love you</p>
                </div>
                <span className="secondary-content medium-small">5.15 PM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-6.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Crystal Bates</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can we</p>
                </div>
                <span className="secondary-content medium-small">8.00 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="/css/images/avatar/avatar-7.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Nathan Watts</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Great!</p>
                </div>
                <span className="secondary-content medium-small">9.53 PM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="/css/images/avatar/avatar-8.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Willard Wood</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Do it</p>
                </div>
                <span className="secondary-content medium-small">4.20 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-1.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Ronnie Ellis</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Got that</p>
                </div>
                <span className="secondary-content medium-small">5.20 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-9.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Daniel Russell</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Thank you</p>
                </div>
                <span className="secondary-content medium-small">12.00 AM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="/css/images/avatar/avatar-10.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Sarah Graves</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Okay you</p>
                </div>
                <span className="secondary-content medium-small">11.14 PM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-off avatar-50"><img
                    src="/css/images/avatar/avatar-11.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Andrew Hoffman</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Can do</p>
                </div>
                <span className="secondary-content medium-small">7.30 PM</span>
              </li>
              <li className="collection-item right-sidebar-chat-item sidenav-trigger display-flex avatar pl-5 pb-0"
                data-target="slide-out-chat">
                <span className="avatar-status avatar-online avatar-50"><img
                    src="/css/images/avatar/avatar-12.png" alt="avatar" />
                  <i></i>
                </span>
                <div className="user-content">
                  <h6 className="line-height-0">Camila Lynch</h6>
                  <p className="medium-small blue-grey-text text-lighten-3 pt-3">Leave it</p>
                </div>
                <span className="secondary-content medium-small">2.00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="settings" className="col s12">
          <p className="setting-header mt-8 mb-3 ml-5 font-weight-900">GENERAL SETTINGS</p>
          <ul className="collection border-none">
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Notifications</span>
                <div className="switch right">
                  <label>
                    <input checked type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Show recent activity</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Show recent activity</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Show Task statistics</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Show your emails</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Email Notifications</span>
                <div className="switch right">
                  <label>
                    <input checked type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <p className="setting-header mt-7 mb-3 ml-5 font-weight-900">SYSTEM SETTINGS</p>
          <ul className="collection border-none">
            <li className="collection-item border-none">
              <div className="m-0">
                <span>System Logs</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Error Reporting</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Applications Logs</span>
                <div className="switch right">
                  <label>
                    <input checked type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Backup Servers</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
            <li className="collection-item border-none">
              <div className="m-0">
                <span>Audit Logs</span>
                <div className="switch right">
                  <label>
                    <input type="checkbox" />
                    <span className="lever"></span>
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id="activity" className="col s12">
          <div className="activity">
            <p className="mt-5 mb-0 ml-5 font-weight-900">SYSTEM LOGS</p>
            <ul className="widget-timeline mb-0">
              <li className="timeline-items timeline-icon-green active">
                <div className="timeline-time">Today</div>
                <h6 className="timeline-title">Homepage mockup design</h6>
                <p className="timeline-text">Melissa liked your activity.</p>
                <div className="timeline-content orange-text">Important</div>
              </li>
              <li className="timeline-items timeline-icon-cyan active">
                <div className="timeline-time">10 min</div>
                <h6 className="timeline-title">Melissa liked your activity Drinks.</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content green-text">Resolved</div>
              </li>
              <li className="timeline-items timeline-icon-red active">
                <div className="timeline-time">30 mins</div>
                <h6 className="timeline-title">12 new users registered</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content">
                  <img src="/css/images/icon/pdf.png" alt="document" height="30" width="25"
                    className="mr-1"/>Registration.doc 
                </div>
              </li>
              <li className="timeline-items timeline-icon-indigo active">
                <div className="timeline-time">2 Hrs</div>
                <h6 className="timeline-title">Tina is attending your activity</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content">
                  <img src="/css/images/icon/pdf.png" alt="document" height="30" width="25"
                    className="mr-1"/>Activity.doc
                </div>
              </li>
              <li className="timeline-items timeline-icon-orange">
                <div className="timeline-time">5 hrs</div>
                <h6 className="timeline-title">Josh is now following you</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content red-text">Pending</div>
              </li>
            </ul>
            <p className="mt-5 mb-0 ml-5 font-weight-900">APPLICATIONS LOGS</p>
            <ul className="widget-timeline mb-0">
              <li className="timeline-items timeline-icon-green active">
                <div className="timeline-time">Just now</div>
                <h6 className="timeline-title">New order received urgent</h6>
                <p className="timeline-text">Melissa liked your activity.</p>
                <div className="timeline-content orange-text">Important</div>
              </li>
              <li className="timeline-items timeline-icon-cyan active">
                <div className="timeline-time">05 min</div>
                <h6 className="timeline-title">System shutdown.</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content blue-text">Urgent</div>
              </li>
              <li className="timeline-items timeline-icon-red">
                <div className="timeline-time">20 mins</div>
                <h6 className="timeline-title">Database overloaded 89%</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content">
                  <img src="/css/images/icon/pdf.png" alt="document" height="30" width="25"
                    className="mr-1"/>Database-log.doc
                </div>
              </li>
            </ul>
            <p className="mt-5 mb-0 ml-5 font-weight-900">SERVER LOGS</p>
            <ul className="widget-timeline mb-0">
              <li className="timeline-items timeline-icon-green active">
                <div className="timeline-time">10 min</div>
                <h6 className="timeline-title">System error</h6>
                <p className="timeline-text">Melissa liked your activity.</p>
                <div className="timeline-content red-text">Error</div>
              </li>
              <li className="timeline-items timeline-icon-cyan">
                <div className="timeline-time">1 min</div>
                <h6 className="timeline-title">Production server down.</h6>
                <p className="timeline-text">Here are some news feed interactions concepts.</p>
                <div className="timeline-content blue-text">Urgent</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <ul id="slide-out-chat" className="sidenav slide-out-right-sidenav-chat">
    <li className="center-align pt-2 pb-2 sidenav-close chat-head">
      <a href="#!"><i className="material-icons mr-0">chevron_left</i>Elizabeth Elliott</a>
    </li>
    <li className="chat-body">
      <ul className="collection">
        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="/css/images/avatar/avatar-7.png"
              alt="avatar" />
          </span>
          <div className="user-content speech-bubble">
            <p className="medium-small">hello!</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">How can we help? We're here for you!</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="/css/images/avatar/avatar-7.png"
              alt="avatar" />
          </span>
          <div className="user-content speech-bubble">
            <p className="medium-small">I am looking for the best admin template.?</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">Materialize admin is the responsive materializecss admin template.</p>
          </div>
        </li>

        <li className="collection-item display-grid width-100 center-align">
          <p>8:20 a.m.</p>
        </li>

        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="/css/images/avatar/avatar-7.png"
              alt="avatar" />
          </span>
          <div className="user-content speech-bubble">
            <p className="medium-small">Ohh! very nice</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">Thank you.</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="/css/images/avatar/avatar-7.png"
              alt="avatar" />
          </span>
          <div className="user-content speech-bubble">
            <p className="medium-small">How can I purchase it?</p>
          </div>
        </li>

        <li className="collection-item display-grid width-100 center-align">
          <p>9:00 a.m.</p>
        </li>

        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">From ThemeForest.</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">Only $24</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="/css/images/avatar/avatar-7.png"
              alt="avatar" />
          </span>
          <div className="user-content speech-bubble">
            <p className="medium-small">Ohh! Thank you.</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar pl-5 pb-0" data-target="slide-out-chat">
          <span className="avatar-status avatar-online avatar-50"><img src="/css/images/avatar/avatar-7.png"
              alt="avatar" />
          </span>
          <div className="user-content speech-bubble">
            <p className="medium-small">I will purchase it for sure.</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">Great, Feel free to get in touch on</p>
          </div>
        </li>
        <li className="collection-item display-flex avatar justify-content-end pl-5 pb-0" data-target="slide-out-chat">
          <div className="user-content speech-bubble-right">
            <p className="medium-small">https://pixinvent.ticksy.com/</p>
          </div>
        </li>
      </ul>
    </li>
    <li className="center-align chat-footer">
      <form className="col s12" onsubmit="slideOutChat()" action="javascript:void(0);">
        <div className="input-field">
          <input id="icon_prefix" type="text" className="search" />
          <label for="icon_prefix">Type here..</label>
          <a onclick="slideOutChat()"><i className="material-icons prefix">send</i></a>
        </div>
      </form>
    </li>
  </ul>
</aside>


<div id="intro">
    <div className="row">
        <div className="col s12">

            <div id="img-modal" className="modal white">
                <div className="modal-content">
                    <div className="bg-img-div"></div>
                    <p className="modal-header right modal-close">
                        Skip Intro <span className="right"><i className="material-icons right-align">clear</i></span>
                    </p>
                    <div className="carousel carousel-slider center intro-carousel">
                        <div className="carousel-fixed-item center middle-indicator">
                            <div className="left">
                                <button className="movePrevCarousel middle-indicator-text btn btn-flat purple-text waves-effect waves-light btn-prev">
                                    <i className="material-icons">navigate_before</i> <span className="hide-on-small-only">Prev</span>
                                </button>
                            </div>

                            <div className="right">
                                <button className=" moveNextCarousel middle-indicator-text btn btn-flat purple-text waves-effect waves-light btn-next">
                                    <span className="hide-on-small-only">Next</span> <i className="material-icons">navigate_next</i>
                                </button>
                            </div>
                        </div>
                        <div className="carousel-item slide-1">
                            <img src="/css/images/gallery/intro-slide-1.png" alt="" className="responsive-img animated fadeInUp slide-1-img"/>
                            <h5 className="intro-step-title mt-7 center animated fadeInUp">Welcome to Materialize</h5>
                            <p className="intro-step-text mt-5 animated fadeInUp">Materialize is a Material Design Admin
                                Template is the excellent responsive google material design inspired multipurpose admin
                                template. Materialize has a huge collection of material design animation  widgets, UI
                                Elements.</p>
                        </div>
                        <div className="carousel-item slide-2">
                            <img src="/css/images/gallery/intro-features.png" alt="" className="responsive-img slide-2-img"/>
                            <h5 className="intro-step-title mt-7 center">Example Request Information</h5>
                            <p className="intro-step-text mt-5">Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                                Aperiam deserunt nulla
                                repudiandae odit quisquam incidunt, maxime explicabo.</p>
                            <div className="row">
                                <div className="col s6">
                                    <div className="input-field">
                                        <label for="first_name">Name</label>
                                        <input placeholder="Name" id="first_name" type="text" className="validate"/>
                                    </div>
                                </div>
                                <div className="col s6">
                                    <div className="input-field">
                                        <select>
                                            <option value="" disabled selected>Choose your option</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                        </select>
                                        <label>Materialize Select</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item slide-3">
                            <img src="/css/images/gallery/intro-app.png" alt="" className="responsive-img slide-1-img"/>
                            <h5 className="intro-step-title mt-7 center">Showcase App Features</h5>
                            <div className="row">
                                <div className="col m5 offset-m1 s12">
                                    <ul className="feature-list left-align">
                                        <li><i className="material-icons">check</i> Email Application</li>
                                        <li><i className="material-icons">check</i> Chat Application</li>
                                        <li><i className="material-icons">check</i> Todo Application</li>
                                    </ul>
                                </div>
                                <div className="col m6 s12">
                                    <ul className="feature-list left-align">
                                        <li><i className="material-icons">check</i>Contacts Application</li>
                                        <li><i className="material-icons">check</i>Full Calendar</li>
                                        <li><i className="material-icons">check</i> Ecommerce Application</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col s12 center">
                                        <button className="get-started btn waves-effect waves-light gradient-45deg-purple-deep-orange mt-3 modal-close">Get
                                            Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

          </div>
          <div className="content-overlay"></div>
        </div>
      </div>
    </div>


<a
   href="#"
   data-target="theme-cutomizer-out"
   className="btn btn-customizer pink accent-2 white-text sidenav-trigger theme-cutomizer-trigger"
   ><i className="material-icons">settings</i></a
>

<div id="theme-cutomizer-out" className="theme-cutomizer sidenav row">
   <div className="col s12">
      <a className="sidenav-close" href="#!"><i className="material-icons">close</i></a>
      <h5 className="theme-cutomizer-title">Theme Customizer</h5>
      <p className="medium-small">Customize  Preview in Real Time</p>
      <div className="menu-options">
         <h6 className="mt-6">Menu Options</h6>
         <hr className="customize-devider" />
         <div className="menu-options-form row">
            <div className="input-field col s12 menu-color mb-0">
               <p className="mt-0">Menu Color</p>
               <div className="gradient-color center-align">
                  <span className="menu-color-option gradient-45deg-indigo-blue" data-color="gradient-45deg-indigo-blue"></span>
                  <span
                     className="menu-color-option gradient-45deg-purple-deep-orange"
                     data-color="gradient-45deg-purple-deep-orange"
                  ></span>
                  <span
                     className="menu-color-option gradient-45deg-light-blue-cyan"
                     data-color="gradient-45deg-light-blue-cyan"
                  ></span>
                  <span
                     className="menu-color-option gradient-45deg-purple-amber"
                     data-color="gradient-45deg-purple-amber"
                  ></span>
                  <span
                     className="menu-color-option gradient-45deg-purple-deep-purple"
                     data-color="gradient-45deg-purple-deep-purple"
                  ></span>
                  <span
                     className="menu-color-option gradient-45deg-deep-orange-orange"
                     data-color="gradient-45deg-deep-orange-orange"
                  ></span>
                  <span className="menu-color-option gradient-45deg-green-teal" data-color="gradient-45deg-green-teal"></span>
                  <span
                     className="menu-color-option gradient-45deg-indigo-light-blue"
                     data-color="gradient-45deg-indigo-light-blue"
                  ></span>
                  <span className="menu-color-option gradient-45deg-red-pink" data-color="gradient-45deg-red-pink"></span>
               </div>
               <div className="solid-color center-align">
                  <span className="menu-color-option red" data-color="red"></span>
                  <span className="menu-color-option purple" data-color="purple"></span>
                  <span className="menu-color-option pink" data-color="pink"></span>
                  <span className="menu-color-option deep-purple" data-color="deep-purple"></span>
                  <span className="menu-color-option cyan" data-color="cyan"></span>
                  <span className="menu-color-option teal" data-color="teal"></span>
                  <span className="menu-color-option light-blue" data-color="light-blue"></span>
                  <span className="menu-color-option amber darken-3" data-color="amber darken-3"></span>
                  <span className="menu-color-option brown darken-2" data-color="brown darken-2"></span>
               </div>
            </div>
            <div className="input-field col s12 menu-bg-color mb-0">
               <p className="mt-0">Menu Background Color</p>
               <div className="gradient-color center-align">
                  <span
                     className="menu-bg-color-option gradient-45deg-indigo-blue"
                     data-color="gradient-45deg-indigo-blue"
                  ></span>
                  <span
                     className="menu-bg-color-option gradient-45deg-purple-deep-orange"
                     data-color="gradient-45deg-purple-deep-orange"
                  ></span>
                  <span
                     className="menu-bg-color-option gradient-45deg-light-blue-cyan"
                     data-color="gradient-45deg-light-blue-cyan"
                  ></span>
                  <span
                     className="menu-bg-color-option gradient-45deg-purple-amber"
                     data-color="gradient-45deg-purple-amber"
                  ></span>
                  <span
                     className="menu-bg-color-option gradient-45deg-purple-deep-purple"
                     data-color="gradient-45deg-purple-deep-purple"
                  ></span>
                  <span
                     className="menu-bg-color-option gradient-45deg-deep-orange-orange"
                     data-color="gradient-45deg-deep-orange-orange"
                  ></span>
                  <span className="menu-bg-color-option gradient-45deg-green-teal" data-color="gradient-45deg-green-teal"></span>
                  <span
                     className="menu-bg-color-option gradient-45deg-indigo-light-blue"
                     data-color="gradient-45deg-indigo-light-blue"
                  ></span>
                  <span className="menu-bg-color-option gradient-45deg-red-pink" data-color="gradient-45deg-red-pink"></span>
               </div>
               <div className="solid-color center-align">
                  <span className="menu-bg-color-option red" data-color="red"></span>
                  <span className="menu-bg-color-option purple" data-color="purple"></span>
                  <span className="menu-bg-color-option pink" data-color="pink"></span>
                  <span className="menu-bg-color-option deep-purple" data-color="deep-purple"></span>
                  <span className="menu-bg-color-option cyan" data-color="cyan"></span>
                  <span className="menu-bg-color-option teal" data-color="teal"></span>
                  <span className="menu-bg-color-option light-blue" data-color="light-blue"></span>
                  <span className="menu-bg-color-option amber darken-3" data-color="amber darken-3"></span>
                  <span className="menu-bg-color-option brown darken-2" data-color="brown darken-2"></span>
               </div>
            </div>
            <div className="input-field col s12">
               <div className="switch">
                  Menu Dark
                  <label className="float-right"
                     ><input className="menu-dark-checkbox" type="checkbox"/> <span className="lever ml-0"></span
                  ></label>
               </div>
            </div>
            <div className="input-field col s12">
               <div className="switch">
                  Menu Collapsed
                  <label className="float-right"
                     ><input className="menu-collapsed-checkbox" type="checkbox"/> <span className="lever ml-0"></span
                  ></label>
               </div>
            </div>
            <div className="input-field col s12">
               <div className="switch">
                  <p className="mt-0">Menu Selection</p>
                  <label>
                     <input
                        className="menu-selection-radio with-gap"
                        value="sidenav-active-square"
                        name="menu-selection"
                        type="radio"
                     />
                     <span>Square</span>
                  </label>
                  <label>
                     <input
                        className="menu-selection-radio with-gap"
                        value="sidenav-active-rounded"
                        name="menu-selection"
                        type="radio"
                     />
                     <span>Rounded</span>
                  </label>
                  <label>
                     <input className="menu-selection-radio with-gap" value="" name="menu-selection" type="radio" />
                     <span>Normal</span>
                  </label>
               </div>
            </div>
         </div>
      </div>
      <h6 className="mt-6">Navbar Options</h6>
      <hr className="customize-devider" />
      <div className="navbar-options row">
         <div className="input-field col s12 navbar-color mb-0">
            <p className="mt-0">Navbar Color</p>
            <div className="gradient-color center-align">
               <span className="navbar-color-option gradient-45deg-indigo-blue" data-color="gradient-45deg-indigo-blue"></span>
               <span
                  className="navbar-color-option gradient-45deg-purple-deep-orange"
                  data-color="gradient-45deg-purple-deep-orange"
               ></span>
               <span
                  className="navbar-color-option gradient-45deg-light-blue-cyan"
                  data-color="gradient-45deg-light-blue-cyan"
               ></span>
               <span className="navbar-color-option gradient-45deg-purple-amber" data-color="gradient-45deg-purple-amber"></span>
               <span
                  className="navbar-color-option gradient-45deg-purple-deep-purple"
                  data-color="gradient-45deg-purple-deep-purple"
               ></span>
               <span
                  className="navbar-color-option gradient-45deg-deep-orange-orange"
                  data-color="gradient-45deg-deep-orange-orange"
               ></span>
               <span className="navbar-color-option gradient-45deg-green-teal" data-color="gradient-45deg-green-teal"></span>
               <span
                  className="navbar-color-option gradient-45deg-indigo-light-blue"
                  data-color="gradient-45deg-indigo-light-blue"
               ></span>
               <span className="navbar-color-option gradient-45deg-red-pink" data-color="gradient-45deg-red-pink"></span>
            </div>
            <div className="solid-color center-align">
               <span className="navbar-color-option red" data-color="red"></span>
               <span className="navbar-color-option purple" data-color="purple"></span>
               <span className="navbar-color-option pink" data-color="pink"></span>
               <span className="navbar-color-option deep-purple" data-color="deep-purple"></span>
               <span className="navbar-color-option cyan" data-color="cyan"></span>
               <span className="navbar-color-option teal" data-color="teal"></span>
               <span className="navbar-color-option light-blue" data-color="light-blue"></span>
               <span className="navbar-color-option amber darken-3" data-color="amber darken-3"></span>
               <span className="navbar-color-option brown darken-2" data-color="brown darken-2"></span>
            </div>
         </div>
         <div className="input-field col s12">
            <div className="switch">
               Navbar Dark
               <label className="float-right"
                  ><input className="navbar-dark-checkbox" type="checkbox"/> <span className="lever ml-0"></span
               ></label>
            </div>
         </div>
         <div className="input-field col s12">
            <div className="switch">
               Navbar Fixed
               <label className="float-right"
                  ><input className="navbar-fixed-checkbox" type="checkbox" checked/> <span className="lever ml-0"></span
               ></label>
            </div>
         </div>
      </div>
      <h6 className="mt-6">Footer Options</h6>
      <hr className="customize-devider" />
      <div className="navbar-options row">
         <div className="input-field col s12">
            <div className="switch">
               Footer Dark
               <label className="float-right"
                  ><input className="footer-dark-checkbox" type="checkbox"/> <span className="lever ml-0"></span
               ></label>
            </div>
         </div>
         <div className="input-field col s12">
            <div className="switch">
               Footer Fixed
               <label className="float-right"
                  ><input className="footer-fixed-checkbox" type="checkbox"/> <span className="lever ml-0"></span
               ></label>
            </div>
         </div>
      </div>
   </div>
</div>


<a
   href="https://1.envato.market/materialize_admin"
   target="_blank"
   className="btn btn-buy-now gradient-45deg-indigo-purple gradient-shadow white-text tooltipped buy-now-animated tada"
   data-position="left"
   data-tooltip="Buy Now!"
   ><i className="material-icons">add_shopping_cart</i></a
>
    
    

    <footer className="page-footer footer footer-static footer-dark gradient-45deg-indigo-purple gradient-shadow navbar-border navbar-shadow">
      <div className="footer-copyright">
        <div className="container"><span>&copy; 2020          <a href="http://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank">PIXINVENT</a> All rights reserved.</span><span className="right hide-on-small-only">Design and Developed by <a href="https://pixinvent.com/">PIXINVENT</a></span></div>
      </div>
    </footer>

    
    <script src="/css/js/vendors.min.js"></script>
    
    <script src="/css/vendors/chartjs/chart.min.js"></script>
    <script src="/css/vendors/chartist-js/chartist.min.js"></script>
    <script src="/css/vendors/chartist-js/chartist-plugin-tooltip.js"></script>
    <script src="/css/vendors/chartist-js/chartist-plugin-fill-donut.min.js"></script>
    
    <script src="/css/js/plugins.js"></script>
    <script src="/css/js/search.js"></script>
    <script src="/css/js/custom/custom-script.js"></script>
    <script src="/css/js/scripts/customizer.js"></script>
   
    <script src="/css/js/scripts/dashboard-modern.js"></script>
    <script src="/css/js/scripts/intro.js"></script>
      </div>
  );
}

}

export default Dashboard;
