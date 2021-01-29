import React from 'react';
import PropTypes from 'prop-types';
import Main from "../../components/organisms/Main";
import { Cookies, useCookies } from 'react-cookie';

Home.propTypes = {
    
};

function Home(props) {
    const [cookies, setCookies] = useCookies([""]);
    return (
        <Main>
            <h1>Hello {cookies.name_user}</h1>
        </Main>
    );
}

export default Home;