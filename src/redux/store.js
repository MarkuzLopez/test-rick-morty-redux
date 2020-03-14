import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import charactersDuck, { getCharactersAction } from './charactersDuck';
import episodesDuck, { getEpisodesAction } from './episodesDuck';
import thunk from 'redux-thunk';

//* <<-- almacenar todos los Ducks en un root -->>
let rootReducers =  combineReducers({
    characters: charactersDuck,
    episodes: episodesDuck
})

//* <<--  herramienta de desarollo ene el navegador web -->>
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//* <<-- see configura lo necesaario para que funcione redux, como el store -->>
export default function generateStore() {

    let store = createStore(
        rootReducers,
        composeEnhancers(applyMiddleware(thunk))
    )
    //* <<-- en este apartado se ejecuta las funciones al momento de iniciar la app  -->>
    getCharactersAction()(store.dispatch, store.getState)
    getEpisodesAction()(store.dispatch, store.getState)

    return store
}
