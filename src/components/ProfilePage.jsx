import React, { useState } from 'react';
import './ProfilePage.css'
import{ UserProfile } from './UserProfile';
import { PetProfile } from './PetProfile';

export const ProfilePage = () => {
  const [view, setView] = useState('user'); // 'user' or 'pet'


  return (
    <div className="profile-page">
      <div className="profile-nav">
        <button onClick={() => setView('user')} className={view === 'user' ? 'active' : ''}>
          User Profile
        </button>
        <button onClick={() => setView('pet')} className={view === 'pet' ? 'active' : ''}>
          Pet Profile
        </button>
      </div>
      {view === 'user' ? <UserProfile /> : <PetProfile />}
    </div>
  );
};
   