import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import React, { useState, useEffect } from 'react';

import Dashboard from './Dashboard';

// Fetch the option chain data
async function fetchOptionChainData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function App() {
  return (
    // <MuiThemeProvider theme={theme}>
    <Router>
      <Route path="/" exact component={Dashboard} />
    </Router>
    // </MuiThemeProvider>
  );

  // export default function App() {
  //   // useEffect(() => {
  //   //   fetch('https://dummyjson.com/users')
  //   //     .then((res) => res.json())
  //   //     .then((res) => {
  //   //       setData(res);
  //   //     });
  //   // }, []);

  //   return (
  //     <div>
  //       {/* <GlobalStyle /> */}

  //       <h1>Hello StackBlitz!</h1>
  //       <p>Start editing to see some magic happen :)</p>
  //     </div>
  //   );
}
