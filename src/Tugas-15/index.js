import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from './Navigation';

function AppWithRoute() {
    return (
        <Router>
            <Routes />
        </Router>
    );
}

export default AppWithRoute;