import {contactType} from './ContactSlice';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface contactList {
  contacts: contactType[];
}

const initialState: contactList = {
  contacts: [],
};

export const contactListSlice = createSlice({
  name: 'contactList',
  initialState,
  reducers: {
    setContactList: (state, {payload}: PayloadAction<contactList>) => {
      state.contacts = [...payload.contacts];

      console.log(payload.contacts);
    },
  },
});

export const contactListReducer = contactListSlice.reducer;
export const {
  setContactList,
} = contactListSlice.actions;