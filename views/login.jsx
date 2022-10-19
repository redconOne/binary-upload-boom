import React from 'react';
import Main from './components/Main.jsx';
import Messages from './components/Messages.jsx';

export default function Login({ messages }) {
  return (
    <Main>
      <main className="container">
        <div className="row justify-content-center">
          <section className="col-6 mt-5">
            <Messages messages={messages} />
            <form
              action="/login"
              method="POST"
            >
              <div className="mb-3">
                <label
                  htmlFor="inputEmail"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="inputPassword"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>
    </Main>
  );
}
