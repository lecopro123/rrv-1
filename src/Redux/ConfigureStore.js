import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { News } from './news';
import { Categories } from './categories';
import { CatNews } from './catNews';
import { Reqotp } from './reqotp';
import { Resotp } from './resotp';
import { Subjects } from './subs';
import { SubMaterials } from './sbm';
import { Schools } from './Schools';
import { TestCase } from './test';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            news: News,
            categories: Categories,
            catnews: CatNews,
            resotp: Resotp,
            reqotp: Reqotp,
            subs: Subjects,
            sbm: SubMaterials,
            sch: Schools,
            test: TestCase
        }), applyMiddleware(thunk, logger)
    );
    return store;
}