import React from 'react';
import imgLogo from '../assets/images/BySedna.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';

import ContentRowData from './ContentRowData';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import {Link, Route, Routes} from 'react-router-dom';
import Products from './Products';
import Users from './Users';

function SideBar({props}){

    return(
        <React.Fragment>

            <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar" style={{backgroundColor: '#AD8F8F'}}>

        
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={imgLogo} alt="Digital House"/>
                    </div>
                </a>

            
                <hr className="sidebar-divider my-0"/>

            
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - BySedna</span></Link>
                </li>

             
                <hr className="sidebar-divider"/>

            
                <div className="sidebar-heading">Actions</div>

             
                <li className="nav-item">
                <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categories</span>
                    </Link>
                </li>


                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Users">
                        <i class="fas fa-users"></i>
                        <span>Users in DB</span></Link>
                </li>

                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Products in DB</span></Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Routes>
                <Route exact path="/" element={<ContentWrapper  props={props}/>}/>
                <Route path="/Products" element={<Products props={props}/>}/>
                <Route path="/Users" element={<Users props={props}/>}/>
                <Route path="/CategoriesInDb" element={<CategoriesInDb  />}/>
                <Route path="/ContentRowData" element={<ContentRowData props={props}/>}/>
                <Route path="/SearchMovies" element={<SearchMovies />}/>

                <Route element={NotFound} />
            </Routes>
        </React.Fragment>
    )
}
export default SideBar;