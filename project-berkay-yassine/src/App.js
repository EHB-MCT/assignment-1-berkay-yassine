import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <UserProfile username="User" />
      <Footer />
    </div>
  );
}

export default App;
