import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material/core';
import { Line } from 'react-chartjs-2';

const PCRGraph = () => {
  const { symbol } = useParams();
  const [pcrData, setPcrData] = useState([]);

  useEffect(() => {
    // fetch data for the symbol from the API and set it to the state
    // update the state with the fetched data
  }, [symbol]);

  const data = {
    labels: pcrData.map((d) => d.date),
    datasets: [
      {
        label: 'PCR',
        data: pcrData.map((d) => d.pcr),
        fill: false,
        backgroundColor: '#20b2aa',
        borderColor: '#20b2aa',
        pointRadius: 0,
        pointHitRadius: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#20b2aa',
        pointHoverBorderColor: '#20b2aa',
        spanGaps: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontColor: '#333',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: true,
            color: '#333',
          },
          ticks: {
            fontColor: '#333',
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={8}>
        <Box mt={3} mb={3}>
          <Typography variant="h5" align="center">
            PCR for {symbol}
          </Typography>
        </Box>
        <Line data={data} options={options} />
      </Grid>
    </Grid>
  );
};

export default PCRGraph;
