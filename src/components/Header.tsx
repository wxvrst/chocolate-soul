import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Header = () => {
    //@ts-ignore
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [cartItemsCount, serCartItemsCour] = useState(0);
    const isSmallScreen = useMediaQuery('(max-width: 640px)');
    const menuItems = [
        { label: 'ГЛАВНАЯ', to: 'chocolate-soul/' },
        { label: 'МЕНЮ', to: 'chocolate-soul/menu' },
        { label: 'КОНТАКТЫ', href: '#contacts' },
    ];
    return (
        <header
            className='flex gap-2 p-2 justify-around font-thin bg-neutral-900/80 items-center fixed top-0 w-full'>
            <nav>
                {isSmallScreen ? (
                    <>
                        <IconButton
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{ color: 'white' }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            {menuItems.map((item, idx) =>

                                <MenuItem
                                    onClick={handleClose}
                                    key={idx}
                                >
                                    {item.to ?
                                        (
                                            <Link
                                                to={item.to}
                                                className="hover:text-white"
                                            >
                                                {item.label}
                                            </Link>
                                        )
                                        :
                                        (
                                            <a href={item.href} className="hover:text-white">
                                                {item.label}
                                            </a>
                                        )
                                    }
                                </MenuItem>


                            )}


                        </Menu>
                    </>
                ) :
                    (
                        <ul className="hidden sm:flex gap-6">
                            {menuItems.map((item, idx) =>
                                item.to ? (
                                    <li key={idx}>
                                        <Link to={item.to} className="hover:text-white">
                                            {item.label}
                                        </Link>
                                    </li>
                                ) : (
                                    <li key={idx}>
                                        <a href={item.href} className="hover:text-white">
                                            {item.label}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    )}



            </nav>
            <Stack direction='row' spacing={0} className="flex justify-center items-center">
                <Link to='/'>
                    <IconButton aria-label='profile' className="flex gap-2">
                        <AccountCircleIcon sx={{ color: 'white', fontSize: 32 }} />
                        <span
                            className='text-white text-base'
                        >
                            Войти
                        </span>
                    </IconButton>
                </Link>
                <div
                    className='flex items-center gap-2'>
                    <Link
                        to='/'
                    >
                        <IconButton>
                            <XIcon sx={{ color: 'white', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                    <Link
                        to='/'
                    >
                        <IconButton>
                            <InstagramIcon sx={{ color: 'white', fontSize: 18 }} />
                        </IconButton>
                    </Link>

                </div>
                <Link
                    to='/'
                >
                    <IconButton>
                        <ShoppingCartOutlinedIcon sx={{ color: 'white', fontSize: 20 }} />
                        <span
                            className="text-white text-base"
                        >
                            {cartItemsCount}
                        </span>
                    </IconButton>
                </Link>

            </Stack>
        </header>
    )
}
export default Header;