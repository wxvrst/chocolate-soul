import { createSlice } from '@reduxjs/toolkit';

interface MenuItem {
    id: number;
    title: string;
    description: string;
    price: number;
    imgPath: string;
}

const initialState: MenuItem[] = [
    {
        id: 1,
        title: 'Трюфель из темного шоколада с орехами',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu1.avif',
    },
    {
        id: 2,
        title: 'Трюфель из белого шоколада с орехами',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu2.avif',
    },
    {
        id: 3,
        title: 'Трюфель из молочного шоколада с карамелью',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu3.avif',
    },
    {
        id: 4,
        title: 'Трюфель из темного шоколада с малиной',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu4.avif',
    },
    {
        id: 5,
        title: 'Карамельно-банановый десерт',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu5.avif',
    },
    {
        id: 6,
        title: 'Печенье с ванильным кремом',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu6.avif',
    },
    {
        id: 7,
        title: 'Черно-белое сердце',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu7.avif',
    },
    {
        id: 8,
        title: 'Плитка шоколада с золотыми фисташками',
        description: 'Это ваше блюдо, опишите его здесь.',
        price: 90,
        imgPath: './images/menu8.avif',
    },

];

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
});

export default menuSlice.reducer;
