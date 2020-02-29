import React, { Fragment } from 'react';
import Routes from './routes';
import GlobalStyle from './styles';
import Header from './components/Header';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <div className="App">
      <Header />
      <Routes />
    </div>
  </Fragment>  
);

export default App;