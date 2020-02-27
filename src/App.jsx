import React from 'react';
import { Container, Button, Grid } from '@material-ui/core';

import './App.css';

function App() {
  return (
    <>
      <Container>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ height: '100%' }}
        >
          <Grid item>
            <Button variant="outlined" color="primary">STARTA</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
