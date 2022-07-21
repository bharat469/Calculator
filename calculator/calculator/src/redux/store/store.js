import {configureStore} from '@reduxjs/toolkit';
import {CalculateSlice} from '../slice/calculator';

const Store = configureStore({
  reducer: {
    Calculator: CalculateSlice.reducer,
  },
});

export default Store;
