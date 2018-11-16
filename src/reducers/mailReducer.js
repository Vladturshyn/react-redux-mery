import * as actionTypes from '../actions/actionTypes';

const initialState = {
    formData: {},
    isFetching: false,
    error: null,
    successMsg: null,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_FORM_REQUEST:
        return {
            ...state,
            formData: action.form,
            isFetching: true,
            error: null,
            successMsg: null,
        };

    case actionTypes.ADD_NEW_FORM_REQUEST_SUCCESS:
        return {
            ...state,
            formData: state.formData,
            isFetching: false,
            error: null,
            successMsg: action.message,
        };

    case actionTypes.ADD_NEW_TODO_REQUEST_FAILED:
        return {
            ...state,
            formData: state.formData,
            isFetching: false,
            error: action.error,
            successMsg: null,
        };
    default:
        return state;

  }
}