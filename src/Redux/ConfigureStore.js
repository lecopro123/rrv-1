import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { News } from './news';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            news: News,
        }), applyMiddleware(thunk, logger)
    );
    return store;
}