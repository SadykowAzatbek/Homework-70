import {useLocation, useNavigate} from 'react-router-dom';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {cleanValue, valueData} from '../contactSlice/ContactSlice';
import {fetchContactPost, fetchEditContact} from '../contactSlice/ContactThunks';
import Loader from '../Loader/Loader';

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const contactData = useSelector((state: RootState) => state.contact);
  const isLoading = useSelector((state: RootState) => state.contact.isLoading);
  const dispatch: AppDispatch = useDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    dispatch(valueData({...contactData, [name]: value}));
  };

  const formSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (location.pathname === '/edit/' + contactData.id) {
      await dispatch(fetchEditContact(contactData.id));
    } else {
      await dispatch(fetchContactPost());
    }

    navigate('/');
    dispatch(cleanValue());
  };

  return (
    <div>
      <h2>Add new contact</h2>
      {isLoading ? <Loader /> : <form onSubmit={formSubmit} className="d-flex flex-column w-50 gap-2">
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

        {
          !contactData.hasPhoto ? <div className="photo"></div> :
            <div className="photo">
              <img src={contactData.photo} alt="Photo"/>
            </div>
        }

        <button type="submit" className="btn btn-success" disabled={false}>Save</button>
        <button type="button"
                onClick={() => navigate('/')}
                className="btn btn-light"
        >Back to contacts
        </button>
      </form>}
    </div>
  );
};

export default ContactForm;