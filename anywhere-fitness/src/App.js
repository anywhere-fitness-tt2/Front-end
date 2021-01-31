import React from 'react';
import InstructorProfile from './components/InstructorProfile';
import ClientProfile from './components/ClientProfile';

export default function App() {
  return (
    <>
      <h1>Home Page</h1>
      <InstructorProfile />
      <ClientProfile />
    </>
  );
}
