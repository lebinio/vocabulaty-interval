import React, { useEffect } from 'react';
import {
  Container, //
  Grid,
  Typography,
  Divider,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { List } from 'react-virtualized';

import DATA from './data/data';
import styles from './App.module.css';

function rowRenderer({
  key, //
  index,
  style,
}) {
  return (
    <ListItem button key={key} style={style}>
      <ListItemText>{DATA[index].original}</ListItemText>
    </ListItem>
  );
}

function App() {
  useEffect(() => {}, []);

  return (
    <>
      <Container className={styles.mainContainer}>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid container item direction="column" justify="center" alignItems="center">
            <Grid item>
              <Typography variant="h6" color="primary">
                abide by (v)
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="secondary">
                /ə'baid/
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">tôn trọng, tuân theo, giữ (lời)</Typography>
            </Grid>
            <Grid item container direction="row" justify="center" alignItems="center">
              <Grid className={styles.example}>
                <Typography variant="body2" display="block">
                  The two parties agreed to abide by the judge's decision
                </Typography>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid className={styles.example}>
                <Typography variant="body2" display="block">
                  Hai bên đã đồng ý tuân theo quyết định của tòa án.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: '20px' }}
        >
          <List
            width={300}
            height={300}
            rowCount={DATA.length}
            rowHeight={40}
            rowRenderer={rowRenderer}
          />
          <List
            width={300}
            height={300}
            rowCount={DATA.length}
            rowHeight={40}
            rowRenderer={rowRenderer}
          />
        </Grid>
      </Container>
    </>
  );
}

export default App;
