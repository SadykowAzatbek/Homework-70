import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import axiosApi from '../../axiosApi';

interface contactInfo {
  state: RootState;
}
export const fetchContactPost = createAsyncThunk<void, void, contactInfo>(
  'contact/post',
  async (_, thunkAPI) => {
      const info = thunkAPI.getState().contact;

      await axiosApi.post('contacts.json', info);
    },
);