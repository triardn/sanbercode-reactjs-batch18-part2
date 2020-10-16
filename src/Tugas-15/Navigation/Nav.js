import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

const Nav = () => {
    return (
        <div className="topnav">
            <div className="nav-item">
                <Link to="/">Home</Link>
                <Link to="/tugas-9">Tugas 9</Link>
                <Link to="/tugas-10">Tugas 10</Link>
                <Link to="/tugas-11">Tugas 11</Link>
                <Link to="/tugas-12">Tugas 12</Link>
                <Link to="/tugas-13">Tugas 13</Link>
                <Link to="/tugas-14">Tugas 14</Link>
            </div>
        </div>
    );
}

export default Nav;