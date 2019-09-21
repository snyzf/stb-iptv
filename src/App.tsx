import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Player from './Player';
import Editor from './EditChannel';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Player} />
      <Route path="/editor" component={Editor} />
    </Router>
  );
};

export default App;
