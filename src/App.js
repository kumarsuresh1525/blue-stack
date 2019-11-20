import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Layouts
import AppLayout from './layouts/AppLayouts';

const App = () => {
  return (
      <Router>
        <Route path='/' component={AppLayout}/>
      </Router>
  );
};

export default App;
