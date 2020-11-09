import * as types from './types';
import axios from 'axios';



// export const fetchPhotos = (cathegory) => ({type: types.SET_CATHEGORY, payload: cathegory});


export const fetchPhotos = (cathegory) => async dispatch => {
    try {
        const res = await axios.get('https://api.unsplash.com/search/photos', {
      params: {per_page: 999, query: cathegory},
      headers: {
        Authorization: 'Client-ID a3ZmX7EFke8vQOmGr6FgTYA4OY8Iw2M2GfRnqMg0Pgg'
      }
    });
    dispatch({
        type: types.SET_CATHEGORY,
        payload: {cathegory, photos: res.data}
    });
    // dispatch({
    //     type: types.GET_PHOTOS,
    //     payload: res.data
    // })
    } catch (error) {
        console.log(error);
    }
}