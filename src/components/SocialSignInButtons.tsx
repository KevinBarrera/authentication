import React from 'react';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
  const handleSignInFacebook = () => {
    console.log('User pressed Sign In with Facebook');
  };

  const handleSignInGoogle = () => {
    console.log('User pressed Sign In with Google');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPressButton={handleSignInFacebook}
        backgroundColor="#e7e8f6"
        textColor="#4b67aa"
      />
      <CustomButton
        text="Sign In with Google"
        onPressButton={handleSignInGoogle}
        backgroundColor="#f3e9ea"
        textColor="#cd6960"
      />
    </>
  );
};

export default SocialSignInButtons;
