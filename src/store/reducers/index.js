import { combineReducers } from 'redux'
import { BUTTONS, PAGES, LINKS, BANNERS, FEATURES, RESTAURANTS, FACTS, SHUFFLE, INCREMENT, DECREMENT } from '../constants'


export const buttons = (state = BUTTONS) => state
export const pages = (state = PAGES) => state
export const links = (state = LINKS) => state
export const banners = (state = BANNERS) => state
export const features = (state = SHUFFLE(FEATURES)) => state
export const restaurants = (state = RESTAURANTS) => state
export const facts = (state = SHUFFLE(FACTS)) => state

export function counter(state = 3, action) {
    switch (action.type) {
      case INCREMENT:
        if (state === 15) {
            alert('Try Again')
            return state
        } else {
          return state + 1
        }
      case DECREMENT:
          if (state === 0) {
              alert('Try Again')
              return state
          } else {
            return state - 1
          }
      default:
        return state
    }
  }

export const rootReducer = combineReducers({
    buttons,
    pages,
    links,
    banners,
    features,
    restaurants,
    facts,
    counter
})
