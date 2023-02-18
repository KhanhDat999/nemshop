import { configureStore } from '@reduxjs/toolkit';
import Reduce from './Reduce';
import Props from '../layouts/redux'

// Tạo store
const store = configureStore({
    reducer: {
        data: Reduce,
        props : Props
      },
    
})

export default store;