import { createContext, useContext, useState } from "react";

const ProfileContext = createContext({});
const UpdateProfileContext = createContext(() => {});

export const useProfile = () => {
  return useContext(ProfileContext);
};

export const useUpdateProfile = (payload) => {
  return useContext(UpdateProfileContext);
};

export const ProfileProvider = (props) => {
  const [profile, setProfile] = useState({});

  const updateProfile = (payload) => {
    setProfile(payload);
  };

  return (
    <ProfileContext.Provider value={profile}>
      <UpdateProfileContext.Provider value={updateProfile}>
        {props.children}
      </UpdateProfileContext.Provider>
    </ProfileContext.Provider>
  );
};
