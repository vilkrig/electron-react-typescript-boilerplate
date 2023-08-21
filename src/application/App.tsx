import * as React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import logo from './logo.svg';
import theme from './theme';

const Body = styled(Grid)(({
  textAlign: "center",
  margin: 0,
}));

const Content = styled(Box)(({
  color: "white",
  backgroundColor: "#0f232a",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  display: "flex",
  minHeight: "100vh",
  fontSize: "calc(10px + 2vmin)",
}));

const Logo = styled("img")(({
  height: "40vmin",
  pointerEvents: "none",
}));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Body>
        <Content>
          <Logo src={logo} />
          <Typography>
            React, Typescript, and Electron boilerplate.
          </Typography>
        </Content>
      </Body>
    </ThemeProvider>
  );
};

export default App;