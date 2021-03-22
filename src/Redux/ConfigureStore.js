import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { News } from './news';
import { Categories } from './categories';
import { CatNews } from './catNews';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            news: News,
            categories: Categories,
            catnews: CatNews,
        }), applyMiddleware(thunk, logger)
    );
    return store;
}