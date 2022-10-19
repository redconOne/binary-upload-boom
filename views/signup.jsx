import React from 'react';
import Main from './components/Main';

export default function Signup({ messages }) {
  return (
    <Main>
      <main class="container">
        <div class="row justify-content-center">
          <section class="col-6 mt-5">
            {messages.errors
              ? messages.errors.map((el, i) => (
                  <div
                    key={i}
                    className="alert alert-danger"
                  >
                    {el.msg}
                  </div>
                ))
              : null}
            {messages.info
              ? messages.info.map((el, i) => (
                  <div
                    className="alert alert-danger"
                    key={i}
                  >
                    {el.msg}
                  </div>
                ))
              : null}
            <form
              action="/signup"
              method="POST"
            >
              <div className="mb-3">
                <label
                  for="userName"
                  className="form-label"
                >
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="userName"
                />
              </div>
              <div className="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                />
                <div
                  id="emailHelp"
                  className="form-text"
                >
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="password"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                />
              </div>
              <div className="mb-3">
                <label
                  for="confirmPassword"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
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
