import {AppDispatch, RootState} from '../../store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactsGet, fetchGetOneContact} from '../contactSlice/ContactThunks';
import {useEffect} from 'react';
import {cleanValue, toggleHiddenBlock} from '../contactSlice/ContactSlice';
import {useNavigate} from 'react-router-dom';
import Loader from '../Loader/Loader';

const Home = () => {
  const navigate = useNavigate();

  const contactsList = useSelector((state: RootState) => state.contactList);
  const contactHidden = useSelector((state: RootState) => state.contact.hiddenBlock);
  const oneContact = useSelector((state: RootState) => state.contact);
  const isLoading = useSelector((state: RootState) => state.contact.isLoading);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsGet());
  }, [dispatch]);

  const contactData = async (id: string) => {
    dispatch(toggleHiddenBlock());

    await dispatch(fetchGetOneContact(id));
  };

  const closeBtn = () => {
    dispatch(toggleHiddenBlock());

    dispatch(cleanValue());
  };

  return (
    <>
      <div>
        {isLoading ? <Loader /> : contactsList.contacts.map((item) => (
          <div className="border border-dark w-50 m-3 p-2 d-flex align-items-center rounded-1" onClick={() => contactData(item.id)} key={item.id}>
            <div className="block me-1">
              <img className="contact-image" src={item.photo} alt="photo" />
            </div>
            <strong>{item.name}</strong>
          </div>
        ))}
        {contactHidden ? (
          <div className="background-gray">
            <div className="toggle-block d-flex flex-wrap p-4 justify-content-around gap-2 rounded-3">
              <strong className="position-absolute close" onClick={closeBtn}>X</strong>
              <div className="w-50 position-relative">
                <img className="info-image" src={oneContact.photo} alt="photo" />
              </div>
              <div>
                <h3>{oneContact.name}</h3>
                <div>Phone: {oneContact.phone}</div>
                <div>Email: {oneContact.email !== '' ? oneContact.email : 'there is not email'}</div>
              </div>
              <div className="d-flex gap-5">
                <button className="btn btn-warning" onClick={() => navigate('/edit/' + oneContact.id)} disabled={false}>edit</button>
                <button className="btn btn-danger">delete</button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Home;