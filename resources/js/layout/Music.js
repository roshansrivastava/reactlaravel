import React,{useState} from 'react'
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';
import Script from '../layout/Script';
import DataTable from 'react-data-table-component';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Checkbox from '@material-ui/core/Checkbox';
import Movies from './Movies';
import Paper from "@mui/material/Paper";
import './Data-table.css';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
export default function Music() {
    const [selectedRows, setSelectedRows] = useState(false);
    const [toggledClearRows, setToggleClearRows] =useState(false);
    const isIndeterminate = (indeterminate) => indeterminate;
    const selectableRowsComponentProps = { indeterminate: isIndeterminate };
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));
    
    const LinearIndeterminate = () => {
        const classes = useStyles();
    
        return (
            <div className={classes.root}>
                <LinearProgress />
            </div>
        );
    };
    const columns = [
        {
            id: 'title',
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            id: 'title',
            name: 'Year',
            selector: row => row.year,
            sortable: true,
        },
    ];
  
    const handleChange = ({ selectedRows }) => {
      setSelectedRows(selectedRows);
    };
  
    // Toggle the state so React Data Table changes to clearSelectedRows are triggered
    const handleClearRows = () => {
      setToggleClearRows(!toggledClearRows);
    }
    const sortIcon = <ArrowDownward />;
    // const isIndeterminate = (indeterminate) => indeterminate;
    // const selectableRowsComponentProps = { indeterminate: isIndeterminate };
	let user = JSON.parse(localStorage.getItem('user'));

  return (
    <>
     <div className="App">
    <header className="page-topbar" id="header">
    <Navbar/>
    </header>
    <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
				<div className="brand-sidebar">
					<h1 className="logo-wrapper">
						<a className="brand-logo darken-1" href="index.html">
							<AccountCircleIcon />
							<span className="logo-text hide-on-med-and-down">
								{user.name}
								{user.fullname}
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
        <h4>Released Music Album</h4>
        <div className="App"> 
        <Paper>
        {/* <button onClick={handleClearRows}>
        Clear 
      </button> */}
        <DataTable
            title="Desserts"
            columns={columns}
            data={Movies}
            sortIcon={sortIcon}
            selectableRows
            pagination
            onSelectedRowsChange={handleChange}
            clearSelectedRows={toggledClearRows}
            selectableRowsComponent={Checkbox}
            selectableRowsComponentProps={selectableRowsComponentProps}
            // onSelectedRowsChange={this.updateState}
            // progressPending
            // progressComponent={<LinearIndeterminate />}
        />
        </Paper>
        </div>
    </div>
    <Script/>
</div>
    </>
  );
}
