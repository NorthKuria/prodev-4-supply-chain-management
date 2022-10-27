import * as React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {Box} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme
    .transitions
    .create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme
      .transitions
      .create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
    marginLeft: 0
  })
}),);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({theme, open}) => ({
  transition: theme
    .transitions
    .create([
      'margin', 'width'
    ], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme
      .transitions
      .create([
        'margin', 'width'
      ], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
  })
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

function Navbar() {
  const theme = useTheme();
  const [open,
    setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{
      display: 'flex'
    }}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        sx={{
        backgroundColor: '#F5F5F5',
        color:'black'
      }}
        open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
            mr: 2,
            ...(open && {
              display: 'none'
            })
          }}>
            <MenuIcon/>
          </IconButton>
          <SearchIcon/>
          <Typography sx={{pl:2}}>Search</Typography>

        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#29339B'
        }
      }}
        variant="persistent"
        anchor="left"
        open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr'
              ? <ChevronLeftIcon/>
              : <ChevronRightIcon/>}
          </IconButton>
        </DrawerHeader>
        <Divider/>
        <List
          sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            color: 'white',
            textAlign: "center",
            textDecoration: 'none'
          }}to={"/categories"}><AddShoppingCartIcon/>
            Category</Link>
          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: 'white',
            textDecoration: 'none'
          }}to={"/products"}>
            <AddShoppingCartIcon/>
            Products</Link>

          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: 'white',
            textDecoration: 'none'
          }}to={"/vendors"}>Vendors</Link>

          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: 'white',
            textDecoration: 'none'
          }}to={"/purchaseorders"}>Purchase Orders</Link>

          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: 'white',
            textDecoration: 'none'
          }}
            to={"/invoices"}>Invoice</Link>
          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            color: 'white',
            textAlign: "center",
            textDecoration: 'none'
          }}
            to={"/purchaseitems"}><StorefrontIcon/>Purchase Items</Link>

          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: 'white',
            textDecoration: 'none'
          }}
            to={"/stocks"}>Stock</Link>
          <Link
            style={{
            padding: 20,
            fontWeight: "bold",
            textAlign: "center",
            textDecoration: 'none',
            color: 'white'
          }}
            to={"/users"}>Users</Link>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader/>

      </Main>
    </Box>
  );
}

export default Navbar