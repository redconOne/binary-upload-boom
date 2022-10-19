import React from 'react';
import Main from './components/Main.jsx';

const Index = () => (
  <Main>
    <main className="container">
      <div className="row justify-content-around mt-5">
        <a
          href="/login"
          className="col-3 btn btn-primary"
        >
          Login
        </a>
        <a
          href="/signup"
          className="col-3 btn btn-primary"
        >
          Sign Up
        </a>
      </div>
    </main>
  </Main>
);

export default Index;
