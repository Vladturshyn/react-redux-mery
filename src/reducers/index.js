import { combineReducers } from 'redux';
import { rootReducer } from './mailReducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  rootReducer
});



