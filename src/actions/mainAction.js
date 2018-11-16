import * as action from "./actionTypes";

const apiUrl = "/api/";

export const addNewForm = form => {
  return dispatch => {
    dispatch(addNewFormRequest(form));
    return fetch(apiUrl, {
      method: "POST",
      body: form
    }).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(addNewFormRequestSuccess(data.successMsg));
        });
      } else {
        response.json().then(error => {
          dispatch(addNewFormRequestFailed(error));
        });
      }
    });
  };
};

export const addNewFormRequest = form => {
  return {
    type: action.ADD_NEW_FORM_REQUEST,
    form
  };
};

export const addNewFormRequestSuccess = message => {
  return {
    type: action.ADD_NEW_FORM_REQUEST_SUCCESS,
    message
  };
};

export const addNewFormRequestFailed = error => {
  return {
    type: action.ADD_NEW_TODO_REQUEST_FAILED,
    error
  };
};