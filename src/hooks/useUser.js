import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../features/user/userAPI';
import { setUser } from '../features/user/userSlice';

const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // Fetch user data from the API and dispatch an action to set user data in the Redux store
    fetchUserData().then((userData) => {
      dispatch(setUser(userData));
    });
  }, [dispatch]);

  return user;
};

export default useUser;
