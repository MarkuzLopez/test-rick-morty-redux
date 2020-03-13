import axios from 'axios';
import  Url  from '../shared/envioroment/Url';

const { url } = Url;

let initialData = { 
    fetching: false,
    characters: [],
    character: { }
}

let GET_CHARACTERS = "GET_CHARACTERS";
let GET_CHARACTERS_SUCCESS = "GET_CHARACTERS_SUCCESS";
let GET_CHARACTERS_ERROR = "GET_CHARACTERS_ERROR";

let GET_CHARACTERS_EDIT = "GET_CHARACTERS_EDIT";
let GET_CHARACTERS_EDIT_SUCCESS = "GET_CHARACTERS_EDIT_SUCCESS";
let GET_CHARACTERS_EDIT_ERROR = "GET_CHARACTERS_EDIT_ERROR";


export default function reducer( state = initialData, action) {
    switch(action.type){ 

        case GET_CHARACTERS:
            return {...state, fetching: true} 
        
        case GET_CHARACTERS_SUCCESS: 
            return { ...state, characters: action.payload, fetching: false }
        
        case GET_CHARACTERS_ERROR: 
                return { ...state, fetching: true, error: action.payload}

        case GET_CHARACTERS_EDIT: 
            return { ...state, fetching: true, character: action.payload}

        case GET_CHARACTERS_EDIT_SUCCESS:
            return { ...state, fetching: false, character: action.payload }
        
        case GET_CHARACTERS_EDIT_ERROR:
            return {...state,  error: action.payload}
        
        default:
            return state
    }
}


// actions  
export let getCharactersAction = () => (dispatch, getState ) => { 
    dispatch({
        type: GET_CHARACTERS
    })
    return axios.get(`${url}/character`).then( character => { 
        dispatch({
            type: GET_CHARACTERS_SUCCESS,
            payload: character.data.results
        })
    }).catch( err => {
        console.log(err)
        dispatch({
            type: GET_CHARACTERS_ERROR,
            error: err
        })
    })
}


export let getCharacterViewAction = (id) => (dispatch, getState) => { 
    dispatch({
        type: GET_CHARACTERS_EDIT
    })
    return axios.get(`${url}/character/${id}`).then( character => {
        dispatch({
            type: GET_CHARACTERS_EDIT_SUCCESS,
            payload: character.data
        })
    })
}


export let searchCharacterAction = (word) => (dispatch, getState) => {
    return axios.get(`${url}/character/`, { params: { name: word } }).then(res => { 
        console.log(res.data);
    })
} 