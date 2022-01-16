import React from 'react';

import AuthProvider from './contexts/AuthContext';

import Routes from './src/routes';

export default () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>

  );
}