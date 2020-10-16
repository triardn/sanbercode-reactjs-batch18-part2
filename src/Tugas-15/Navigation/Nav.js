import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

const Nav = () => {
    return (
        <div className="topnav">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/tugas-9">Tugas 9</Link>
            </div>
            <div>
                <Link to="/tugas-10">Tugas 10</Link>
            </div>
            <div>
                <Link to="/tugas-11">Tugas 11</Link>
            </div>
            <div>
                <Link to="/tugas-12">Tugas 12</Link>
            </div>
            <div>
                <Link to="/tugas-13">Tugas 13</Link>
            </div>
            <div>
            <Link to="/tugas-14">Tugas 14</Link>
            </div>
        </div>
    );
}

export default Nav;