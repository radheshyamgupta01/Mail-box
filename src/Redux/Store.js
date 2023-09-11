// import { configureStore } from '@reduxjs/toolkit';

// import { appReducer} from './Slice';
// import { modalReducer } from './modalSlice';

//  let store=configureStore({
//     reducer:{
//         app:appReducer,modal:modalReducer
//     }
//  })
// export default store
import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './Slice'; // Assuming this is your app's reducer
import { modalReducer } from './modalSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    modal: modalReducer,
  },
});

export default store;
