import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchContactPost, fetchContactsGet, fetchGetOneContact} from './ContactThunks';

export interface contactType {
  id: string;
  name: string;
  phone: string;
  email: string;
  photo: string;
  hasPhoto: boolean;
  hiddenBlock: boolean;
  isLoading: boolean;
}

const initialState: contactType = {
  id: '',
  name: '',
  phone: '',
  email: '',
  photo: '',
  hasPhoto: false,
  hiddenBlock: false,
  isLoading: false,

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
  extraReducers: (builder) => {
    builder.addCase(fetchContactPost.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContactPost.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchContactPost.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchContactsGet.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContactsGet.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchContactsGet.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchGetOneContact.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchGetOneContact.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(fetchGetOneContact.rejected, (state) => {
      state.isLoading = false;
    });

  }
});

export const contactReducer = contactSlice.reducer;
export const {
  valueData,
  cleanValue,
  toggleHiddenBlock
} = contactSlice.actions;