import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams } from "react-router-dom";


function Search(props) {
    let {exampleParamsWord} = useParams(); //ví dụ về dùng useParams
    return (
        <div>
            <h1>Search</h1>
            <h1>hmmmm: {exampleParamsWord}</h1>
        </div>
    );
}

export default Search;