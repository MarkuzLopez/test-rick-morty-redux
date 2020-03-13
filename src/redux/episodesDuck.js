import axios from 'axios';
import Url from '../shared/envioroment/Url';

const { url } =  Url;

let initialData = { 
    fetching: false,
    episodes: [],
    episode: {}
}

let GET_EPISODES = "GET_EPISODES";
let GET_EPISODES_SUCCES = "GET_EPISODES_SUCCES";
let GET_EPISODES_ERROR = "GET_EPISODES_ERROR";

let GET_EPISODE_VIEW = "GET_EPISODE_VIEW";
let GET_EPISODE_VIEW_SUCCESS = "GET_EPISODE_VIEW_SUCCESS";
let GET_EPISODE_VIEW_ERROR = "GET_EPISODE_VIEW_ERROR";

export default function reducer(state = initialData, action) {
    
    switch(action.type) {
        case GET_EPISODES:
            return {...state, fetching: true }
        
        case GET_EPISODES_SUCCES:
            return {...state, episodes: action.payload, fetching: false }

        case GET_EPISODES_ERROR:
            return { ...state, fetching: false, error: action.payload}
        
        case GET_EPISODE_VIEW:
            return { ...state, fetching: true }
        
        case GET_EPISODE_VIEW_SUCCESS:
            return { ...state, episode: action.payload, fetching: false }
        
        case GET_EPISODE_VIEW_ERROR:
            return { ...state, error: action.payload }
        
        default:
            return state;
    }
}


export let getEpisodesAction = () => (dispatch, getState) => { 
    dispatch({
        type: GET_EPISODES
    })
    return axios.get(`${url}/episode`).then( episode => { 
        dispatch({
            type: GET_EPISODES_SUCCES,
            payload: episode.data.results
        })
    }).catch( errr => { 
        dispatch({
            type: GET_EPISODES_ERROR,
            error: errr
        })
    })
}


export let getEpisodeViewAction = (id) => (dispatch, getState) => {
    dispatch({
        type: GET_EPISODE_VIEW
    })

    return axios.get(`${url}/episode/${id}`).then( res => { 
        dispatch({
            type: GET_EPISODE_VIEW_SUCCESS,
            payload: res.data
        })
    }).catch( err => { 
        dispatch({
            type: GET_EPISODE_VIEW_ERROR,
            error: err
        })
    })
}

export let searchEpisodeAction = (word) => (dispatch, getState) => { 
    return axios.get(`${url}/character/`, { params: { episode: word } }).then(res => { 
        console.log(res.data);  
    })
}