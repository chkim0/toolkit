import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//fetch함수 정의
export const fetchYoutube = createAsyncThunk(
  //고유의 문자값 등록 (내부적으로 actionType생성시 활용되는 값)
  'youtube/requestYoutube',
  //비동기 데이터 호출하는 함수
  async () => {
    const key = 'AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM';
    const playlist = "PLtt429gshWMp4G-VhNTFhBzBTd7GOEz-G";
    const num = 6;
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;
    const response = await axios.get(url);
    return response.data.items;
  }
);

//슬라이스 함수 생성
const youtubeSlice = createSlice({
  //내부적으로 리듀서 생성시 관리할 데이터가 담길 key값 
  name: 'youtube',
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: {
    [fetchYoutube.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchYoutube.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [fetchYoutube.rejected]: (state) => {
      state.isLoading = false;
    }
  }
});

//해당 슬라이스로부터 리듀서 내보냄
export default youtubeSlice.reducer;