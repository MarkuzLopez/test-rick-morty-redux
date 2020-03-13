import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charactersDuck, { getCharactersAction, getCharacterViewAction } from './charactersDuck';
import episodesDuck, { getEpisodesAction } from './episodesDuck';
import thunk from 'redux-thunk';


let rootReducers =  combineReducers({
    characters: charactersDuck,
    episodes: episodesDuck
})

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(thunk))
    )

    getCharactersAction()(store.dispatch, store.getState)
    getEpisodesAction()(store.dispatch, store.getState)

    return store
}
