import constants from './constants'


const initState = []

export default (state = initState, action) => {
  switch(action.type){
    case `${constants.SEND_IT}_FULFILLED`: {
      return [...state, {...action.payload.data}]
    }
    default: return state
  }
}
