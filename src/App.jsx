import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Header, Footer, Categories } from './components';
import { Home, Card } from './pages';
import { Route } from 'react-router-dom';
import { setPizzas } from './redux/action/pizza';

function App() {
  const dispatch = useDispatch();

  // console.log(state);
  React.useEffect(() => {
    axios.get('http://localhost:3004/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    });
  }, []);

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
