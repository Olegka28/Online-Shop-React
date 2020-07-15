import React from 'react';

import { Header, Footer } from './components';
import { Home, Card } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/card" component={Card} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
