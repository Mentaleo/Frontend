import * as React from 'react';
import { Nav } from 'react-bootstrap'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
//import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navimage from './Navbar_Img.jpeg';

function Navbar() {

  return (
    <AppBar sx={{ height: '60px', backgroundColor: '#14212e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <div><img src={Navimage} alt="Nav_Img" height={"50px"} width={"60px"} paddingRight={"3vw"}/></div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Apple Color Emoji"',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft:"1vw"
            }}
          >
           
            MENTALEO
          </Typography>
          <Nav>
            <Nav.Link href="/#visualization" style={{ fontWeight: 700, color: "#fff", textDecoration: "None", padding: "0 3vw", fontFamily: '"Apple Color Emoji"', letterSpacing: '.1rem' }}><b>VISUALIZATION</b></Nav.Link>
            <Nav.Link href="/#prediction" style={{ fontWeight: 700, color: "#fff", textDecoration: "None", paddingRight: "3vw", fontFamily: '"Apple Color Emoji"', letterSpacing: '.1rem' }}><b>PREDICTION</b></Nav.Link>
            <Nav.Link href="/#aboutus" style={{ fontWeight: 700, color: "#fff", textDecoration: "None", paddingRight: "3vw", fontFamily: '"Apple Color Emoji"', letterSpacing: '.1rem' }}><b>ABOUT US</b></Nav.Link>
          </Nav>          
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;