// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// import { useNavigate } from 'react-router-dom';

// const drawerWidth = 240;
// const navItems = ['Home', 'Projects', 'Contact'];
// const AuthorName = "Yaron Serlin"

// function Navbar(props) {
//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = React.useState(false);
//     let navigate = useNavigate();

//     const handleDrawerToggle = () => {
//         setMobileOpen((prevState) => !prevState);
//     };

//     const drawer = (
//         <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//             <Typography variant="h6" sx={{ my: 2, cursor: 'pointer' }} onClick={() => navigate("/")}>
//                 {AuthorName}
//             </Typography>
//             <Divider />
//             <List>
//                 {navItems.map((item) => (
//                     <ListItem key={item} disablePadding>
//                         <ListItemButton sx={{ textAlign: 'center' }} onClick={() => (navigate(item))}>
//                             <ListItemText primary={item} />
//                         </ListItemButton>
//                     </ListItem>
//                 ))}
//             </List>
//         </Box>
//     );

//     const container = window !== undefined ? () => window().document.body : undefined;

//     return (
//         <Box sx={{ display: 'flex' }}>
//             <CssBaseline />
//             <AppBar component="nav">
//                 <Toolbar>
//                     <IconButton
//                         color="inherit"
//                         aria-label="open drawer"
//                         edge="start"
//                         onClick={handleDrawerToggle}
//                         sx={{ mr: 2, display: { sm: 'none' } }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography
//                         variant="h6"
//                         component="div"
//                         sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
//                         onClick={() => navigate("/")}
//                     >
//                         {AuthorName}
//                     </Typography>
//                     <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//                         {navItems.map(item => (
//                             <Button key={item} sx={{ color: '#fff' }} onClick={() => (navigate(item))}>{item}</Button>
//                         ))}
//                     </Box>
//                 </Toolbar>
//             </AppBar>
//             <nav>
//                 <Drawer
//                     container={container}
//                     variant="temporary"
//                     open={mobileOpen}
//                     onClose={handleDrawerToggle}
//                     ModalProps={{
//                         keepMounted: true, // Better open performance on mobile.
//                     }}
//                     sx={{
//                         display: { xs: 'block', sm: 'none' },
//                         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//                     }}
//                 >
//                     {drawer}
//                 </Drawer>
//             </nav>
//         </Box>
//     );
// }


// export default Navbar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css'; // Adjust the path as necessary

const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'Contact'];

function Navbar({ websiteName }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavigate = (path) => {
        navigate(path === 'Home' ? '/' : `/${path.toLowerCase()}`);
        setMobileOpen(false); // Close menu after clicking
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbarContainer}>
                    <div className={styles.navbarLogo} onClick={() => navigate('/')}>
                        {websiteName}
                    </div>
                    <div className={styles.navbarLinks}>
                        {navItems.map(item => (
                            <button key={item} className={styles.navButton} onClick={() => handleNavigate(item)}>
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className={styles.navbarMenuIcon} onClick={handleDrawerToggle}>
                        &#9776; {/* Unicode for hamburger icon */}
                    </div>
                </div>
                {mobileOpen && (
                    <div className={styles.mobileMenu}>
                        {navItems.map(item => (
                            <div key={item} className={styles.mobileMenuItem} onClick={() => handleNavigate(item)}>
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;
