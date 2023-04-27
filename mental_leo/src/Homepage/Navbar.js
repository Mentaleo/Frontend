import * as React from 'react';
import { Nav } from 'react-bootstrap'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Navbar() {

  return (
    <AppBar sx={{ height: '60px', backgroundColor: '#14212e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MENTALEO
          </Typography>
          <Nav>
            <Nav.Link href="/#visualization" style={{ fontWeight: 700, color: "#fff", textDecoration: "None", padding: "0 3vw" }}><b>VISUALIZATION</b></Nav.Link>
            <Nav.Link href="/#prediction" style={{  fontWeight: 700, color: "#fff", textDecoration: "None", paddingRight: "3vw" }}><b>PREDICTION</b></Nav.Link>
            <Nav.Link href="/#aboutus" style={{  fontWeight: 700, color: "#fff", textDecoration: "None", paddingRight: "3vw" }}><b>ABOUT US</b></Nav.Link>
          </Nav>          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;