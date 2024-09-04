import {configureStore} from '@reduxjs/toolkit';
import AuthencationSlice from './Slices/Authencation.Slice.js';
import AdminSlice from './Slices/AdminSlice.js';
import PostmenuSlice from './Slices/PostmenuSlice.js';
export const Store = configureStore({
    reducer : {
        authentecation : AuthencationSlice,
        admin : AdminSlice,
        post : PostmenuSlice
    },
});