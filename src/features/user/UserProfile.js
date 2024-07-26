import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './userSlice';

const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

export default UserProfile;
