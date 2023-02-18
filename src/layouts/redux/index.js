import { createSlice } from '@reduxjs/toolkit';

const Props = createSlice({
    name: 'props',
    initialState: {},
    reducers: {
      increment: (state , action) => state = action.payload
  }});


  export const { increment } = Props.actions;
  export default Props.reducer
