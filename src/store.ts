import {configureStore} from '@reduxjs/toolkit';
import {contactReducer} from './components/contactSlice/ContactSlice';
import {contactListReducer} from './components/contactSlice/ContactListSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    contactList: contactListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;