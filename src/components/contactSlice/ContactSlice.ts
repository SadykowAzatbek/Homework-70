import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface contactType {
  name: string;
  phone: string;
  email: string;
  photo: string;
}

const initialState: contactType = {
  name: '',
  phone: '',
  email: '',
  photo: '',
};

export const contactSlice = createSlice({
  name: 'contact data',
  initialState,
  reducers: {
    valueData: (state, {payload}: PayloadAction<contactType>) => {
      state.name = payload.name;
      state.phone = payload.phone;
      state.email = payload.email;
      state.photo = payload.photo;
    },
    cleanValue: (state) => {
      state.name = '';
      state.phone = '';
      state.email = '';
      state.photo = '';
    }
  }
});

export const contactReducer = contactSlice.reducer;
export const {
  valueData,
  cleanValue,
} = contactSlice.actions;