import {createSlice, createAssyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//fetch 함수 정의

export const fetchYoutube = createAssyncThunk(

    'youtube/requestYoutube',
    async () => {
        const key = 'AIzaSyAKqZ1Dx9awi1lCS84qziASeQYZJqLxLSM';
        const playlist = "PLtt429gshWMp4G-VhNTFhBzBTd7GOEz-G";
        const num = 6;
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlist}&maxResults=${num}`;

    }
);