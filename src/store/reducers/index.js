import { combineReducers } from 'redux'
import { BUTTONS, PAGES, LINKS, BANNERS, FEATURES, RESTAURANTS, FACTS, SHUFFLE } from '../constants'

export const buttons = (state = BUTTONS) => state
export const pages = (state = PAGES) => state
export const links = (state = LINKS) => state
export const banners = (state = BANNERS) => state
export const features = (state = SHUFFLE(FEATURES)) => state
export const restaurants = (state = RESTAURANTS) => state
export const facts = (state = SHUFFLE(FACTS)) => state

export const rootReducer = combineReducers({
    buttons,
    pages,
    links,
    banners,
    features,
    restaurants,
    facts
})
