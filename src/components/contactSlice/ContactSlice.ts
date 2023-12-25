import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface contactType {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
  hasPhoto: boolean;
  hiddenBlock: boolean;
}

const initialState: contactType = {
  id: '',
  name: '',
  phone: '',
  email: '',
  photo: '',
  hasPhoto: false,
  hiddenBlock: false,
};

export const contactSlice = createSlice({
  name: 'contact data',
  initialState,
  reducers: {
    valueData: (state, {payload}: PayloadAction<contactType>) => {
      state.id = payload.id;
      state.name = payload.name;
      state.phone = payload.phone;
      state.email = payload.email;
      state.photo = payload.photo;
      state.hasPhoto = state.photo.length > 1;

      console.log(payload.id);

    },
    cleanValue: (state) => {
      state.name = '';
      state.phone = '';
      state.email = '';
      state.photo = '';
    },
    toggleHiddenBlock: (state) => {
      state.hiddenBlock = !state.hiddenBlock;
    },
  },
});

export const contactReducer = contactSlice.reducer;
export const {
  valueData,
  cleanValue,
  toggleHiddenBlock
} = contactSlice.actions;