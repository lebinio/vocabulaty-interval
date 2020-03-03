import React, { useEffect } from 'react';
import {
  Container, //
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import Electron from 'electron';

import styles from './App.module.css';

const { BrowserWindow, screen, getCurrentWindow } = Electron.remote;

function App() {
  useEffect(() => {
    const mainWindow = getCurrentWindow();

    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    let win = new BrowserWindow({
      parent: mainWindow,
      x: width - 320,
      y: height - 200,
      width: 320,
      height: 200,
      resizable: false,
      movable: false,
      alwaysOnTop: true,
      frame: false,
      transparent: true,
    });
    win.on('closed', () => {
      win = null;
    });

    const html = `<html lang="en">
      <head>
        <title>Popover</title>
        <style>
          .popover-container {
            height: 100%;
            width: 100%;
          }
        </style>
      </head>
      <body>
        <div class="popover-container">
          <h1>Welcome, this is the Index page.</h1>
          <h3>Hello there</h3>
        </div>
      </body>
      </html>`;

    function closePopover() {
      win.close();
    }

    win.loadURL(`data:text/html;charset=utf-8,${encodeURI(html)}`);
    setTimeout(closePopover, 5000);
  }, []);

  return (
    <>
      <Container className={styles.mainContainer}>
        <Grid container direction="column" justify="center" alignItems="center">
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
      </Container>
    </>
  );
}

export default App;
