import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useState } from "react";
const Header = () => {
    //@ts-ignore
    const [cartItemsCount, serCartItemsCour] = useState(0);
    return (
        <header
            className='flex gap-2 p-2 justify-around font-thin bg-neutral-900/80 items-center fixed top-0 w-full'>
            <nav>
                <ul
                    className='flex flex-col sm:flex-row gap-6'
                >
                    <li>
                        <Link to='chocolate-soul/'
                            className="hover:text-white"
                        >
                            ГЛАВНАЯ
                        </Link>
                    </li>
                    <li>
                        <Link to='chocolate-soul/menu'
                            className="hover:text-white"
                        >
                            МЕНЮ
                        </Link>
                    </li>
                    <li>
                        <a href='#contacts'
                            className="hover:text-white"
                        >
                            КОНТАКТЫ
                        </a>
                    </li>
                </ul>
            </nav>
            <Stack direction='row' spacing={0} className="flex justify-center items-center">
                <Link to=''>
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
                    <Link to='/'>
                        <IconButton>
                            <XIcon sx={{ color: 'white', fontSize: 16 }} />
                        </IconButton>
                    </Link>
                    <Link to='/'>
                        <IconButton>
                            <InstagramIcon sx={{ color: 'white', fontSize: 18 }} />
                        </IconButton>
                    </Link>

                </div>
                <Link to='/'>
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