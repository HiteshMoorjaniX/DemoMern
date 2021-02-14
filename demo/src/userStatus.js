import React, { useContext } from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function UserStatus() {
    const [userId,setUserId] = useContext(UserContext)

    const path = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleProfile = () => {
        setAnchorEl(null)
        path.push('/profile')
    };

    const handleLogout = () => {
        localStorage.clear()
        setUserId(null)
        setAnchorEl(null)
    }

    const renderLogin = () => (
        <div>
            {userId}
            <Button color="inherit">
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}> Login </Link>
            </Button>

            <Button color="inherit">
                <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}> Signup </Link>
            </Button>
        </div>
    )

    const renderLogout = () => (
        <div>
            {userId}
            <Button style={{ color: 'white' }}
                aria-controls="simple-menu" aria-haspopup="true"
                onClick={handleClick}>
                <AccountCircleIcon />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>

                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </div>
    )


    return {
        isLoggedIn : userId != null ? true : false,
        // isLoggedIn: localStorage.getItem('userId') != null ? true : false,
        loggedInRender: renderLogout,
        loggedOutRender: renderLogin
    }
}
