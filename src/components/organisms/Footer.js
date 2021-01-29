import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    
};

function Footer(props) {
    return (
        <footer className="c-footer">
        <div><a href="https://coreui.io">CoreUI</a> © 2020 creativeLabs.</div>
        <div className="ml-auto">Powered by&nbsp;<a href="https://coreui.io/">CoreUI</a></div>
      </footer>
    );
}

export default Footer;