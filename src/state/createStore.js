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

const createStore = () => reduxCreateStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default createStore