import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';

const trackReducer = (state, action) =>{
    switch (action.type) {
        default:
            return state;
    }
};

const fetchTracks = dispatch => ()=>{};
const createTrack = dispatch => async (name, locations) => {
    try
    {
        await trackerApi.post('/track', {name, locations});
    }catch (e) {
        console.log(e);
    }
};


export const {Context, Provider} = createDataContext(trackReducer, {fetchTracks, createTrack}, []);
