import React from 'react';

import { Header, Footer, Categories } from './components';
import { Home, Card } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/categories" component={Categories} exact />
        <Route path="/card" component={Card} exact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
