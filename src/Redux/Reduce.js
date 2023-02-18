import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { instance } from '../Uttils/requid';

// Action creator đầu tiên
export const fectData = createAsyncThunk(
  'users/fetch',
  async () => {
    const response = await instance.get('sanphammois');
    return response.data;
  }
);

// Action creator thứ hai
export const fectData1 = createAsyncThunk(
  'users/fetch1',
  async () => {
    const response = await instance.get('tatcarsanpham');
    return response.data;
  }
);

// Reducer
const Getdata = createSlice({
  name: 'users',
  initialState: {
    users: [],
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Xử lý yêu cầu API của fetchUsers
      .addCase(fectData.pending, (state) => {
        state.status = 'loading';
   
      })
      .addCase(fectData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
        

      })
      .addCase(fectData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
   
      })
    //   Xử lý yêu cầu API của fetchPosts
      .addCase(fectData1.pending, (state) => {
        state.status = 'loading';
      
      })
      .addCase(fectData1.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
       
      })
      .addCase(fectData1.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
         
      });
  },
});


export default Getdata.reducer;