import * as React from 'react';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './LeftMenu.css'

function LeftMenu() {
    const [selectedElement, setselectedElement] = React.useState(null);
    const [open, setOpen] = React.useState(false)
    function handleOpenMenu() {
        setOpen(true);
    }
    function handleCloseMenu(event) {
        setOpen(false);
        setselectedElement(event.target);
    }
    return (
        <div>
            <div onClick={handleOpenMenu}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </div>
            <Menu className="LeftMenuClass"
                // id="basic-menu"
                // selectedElement={selectedElement}
                open={open}
                // onClose={handleCloseMenu}
            >
            </Menu>
        </div>
    );
}
export default LeftMenu;