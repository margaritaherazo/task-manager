// Mock function to simulate fetching user profile from an API
export const fetchUserProfile = async () => {
    return { id: 1, name: 'Andres Perez', email: 'andres.perez@example.com' };
  };
  
  // Mock function to simulate updating user profile in the API
  export const updateUserProfile = async (userProfile) => {
    return userProfile;
  };
  