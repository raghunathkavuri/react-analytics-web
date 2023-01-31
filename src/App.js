import React from 'react';
import './style.css';

import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  makeStyles,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Chart from 'chart.js';
import { css } from '@emotion/react';
import { styled } from '@mui/material/styles';

const GlobalStyle = styled('body')`
  background-color: #E0E0E0;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = {
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ff4081',
    },
  },
};

export default function App() {
  const classes = useStyles();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('input URL')
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
