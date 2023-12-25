import {createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import axiosApi from '../../axiosApi';
import {contactType, valueData} from './ContactSlice';
import {setContactList} from './ContactListSlice';

interface contactInfo {
  state: RootState;
}
export const fetchContactPost = createAsyncThunk<void, void, contactInfo>(
  'contact/post',
  async (_, thunkAPI) => {
      const info = thunkAPI.getState().contact;

      await axiosApi.post<contactType>('contacts.json', info);
    },
);

export const fetchContactsGet = createAsyncThunk<void, void>(
  'contacts/get',
  async (_, {dispatch}) => {
    const response = await axiosApi.get<{[key: string]: contactType}>('contacts.json');

    const data = Object.keys(response.data).map((id) => {
      return {
        ...response.data[id],
        id,
      };
    });

    dispatch(setContactList({contacts: data}));
  },
);

export const fetchGetOneContact = createAsyncThunk<void, string>(
  'get one contact',
  async (id, {dispatch}) => {

    const response = await axiosApi.get<contactType>('contacts/' + id + '.json');
    const result = response.data;

    console.log(response.data);

    await dispatch(valueData({...result, id}));

  },
);