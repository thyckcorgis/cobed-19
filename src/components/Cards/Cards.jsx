import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = (props) => {
  const { confirmed, recovered, deaths, lastUpdate } = props.data;
  if (!confirmed) {
    return 'Loading...';
  }
  const DateStr = new Date(lastUpdate).toDateString();
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.active)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value - (recovered.value + deaths.value)} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{DateStr}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{DateStr}</Typography>
            <Typography variant="body2">Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
            </Typography>
            <Typography color="textSecondary">{DateStr}</Typography>
            <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;