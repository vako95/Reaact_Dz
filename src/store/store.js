import {configureStore} from '@reduxjs/toolkit';
import SideReducer from './Side/SideSlice';

const store =  configureStore({
    reducer:{
        side:SideReducer
    }
})

export default store;