import {useNavigate} from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {cleanValue, valueData} from '../contactSlice/ContactSlice';
import {fetchContactPost} from '../contactSlice/ContactThunks';

const ContactForm = () => {
  const navigate = useNavigate();

  const contactData = useSelector((state: RootState) => state.contact);
  const dispatch: AppDispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    dispatch(valueData({...contactData, [name]: value}));
  };

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await dispatch(fetchContactPost());

    navigate('/');
    dispatch(cleanValue());
  };

  return (
    <div>
      <h2>Add new contact</h2>
      <form onSubmit={formSubmit}>
        <input id="name" name="name" type="text"
               required
               placeholder="name"
               autoFocus
               value={contactData.name}
               onChange={onChange}
        />
        <input id="phone" name="phone" type="number"
               required
               placeholder="phone"
               value={contactData.phone}
               onChange={onChange}
        />
        <input id="email" name="email"
               placeholder="email"
               value={contactData.email}
               onChange={onChange}
        />
        <input id="photo" name="photo"
               required
               placeholder="photo"
               value={contactData.photo}
               onChange={onChange}
        />

        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate('/')}>Back to contacts</button>
      </form>
    </div>
  );
};

export default ContactForm;