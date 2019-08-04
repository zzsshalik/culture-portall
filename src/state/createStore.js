import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
  if (action.type === `ru`) {
    return {language: 'ru'}
  }
  if (action.type === `by`) {
    return {language: 'by'}
  }
  if (action.type === `en-US`) {
    return {language: 'en-US'}
  }
  return state
}

const initialState = { language: 'en-US' }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
