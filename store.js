import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './src/redux/reducers/counter';

export const store = configureStore({
  reducer: {

    counter:counterReducer
  }
})