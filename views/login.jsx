import React from 'react';
import Main from './components/Main.jsx';

export default function Login(props) {
  return (
    <Main>
      <main className="container">
        <div className="row justify-content-center">
          <section className="col-6 mt-5">
            {props.messages.errors
              ? props.messages.errors.map((el, i) => (
                  <div
                    key={i}
                    className="alert alert-danger"
                  >
                    {el.msg}
                  </div>
                ))
              : null}
            {props.messages.info
              ? props.messages.info.map((el, i) => (
                  <div
                    className="alert alert-danger"
                    key={i}
                  >
                    {el.msg}
                  </div>
                ))
              : null}

            <form
              action="/login"
              method="POST"
            >
              <div className="mb-3">
                <label
                  for="inputEmail"
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
                  for="inputPassword"
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
