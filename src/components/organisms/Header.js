import React from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    
};

function Header(props) {
    return (
            <header className="c-header c-header-light c-header-fixed c-header-with-subheader">
            <button className="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
              <svg className="c-icon c-icon-lg">
                <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-menu" />
              </svg>
            </button><a className="c-header-brand d-lg-none" href="#">
              <svg width={118} height={46} alt="CoreUI Logo">
                <use xlinkHref="assets/brand/coreui.svg#full" />
              </svg></a>
            <button className="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
              <svg className="c-icon c-icon-lg">
                <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-menu" />
              </svg>
            </button>
            <ul className="c-header-nav d-md-down-none">
              <li className="c-header-nav-item px-3"><a className="c-header-nav-link" >Dashboard</a></li>
              <li className="c-header-nav-item px-3"><a className="c-header-nav-link" >Users</a></li>
              <li className="c-header-nav-item px-3"><a className="c-header-nav-link" >Settings</a></li>
            </ul>
            <div className="c-subheader px-3">
              {/* Breadcrumb*/}
              <ol className="breadcrumb border-0 m-0">
                <li className="breadcrumb-item">Home</li>
                <li className="breadcrumb-item"><a>Admin</a></li>
                <li className="breadcrumb-item active">Dashboard</li>
                {/* Breadcrumb Menu*/}
              </ol>
            </div>
          </header>
    );
}

export default Header;