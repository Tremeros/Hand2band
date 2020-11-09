import * as types from '../actions/types'

const initialState = {photos: {}, modalIsOpen: false, modalData: {}};

export default function(state = initialState, action) {
    switch(action.type) {
       case types.SET_CATHEGORY:
           return {...state, cathegory: action.payload.cathegory, photos: action.payload.photos};
       case types.TOGGLE_MODAL:
          return {...state, modalIsOpen: !state.modalIsOpen, modalData: action.payload}
        default:
        return state;
    }
}