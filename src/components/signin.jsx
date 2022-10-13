import { useState } from 'react';
import { useUserInfoContext } from './userInfo';
import { useLocalStorage } from './localStorage.jsx';

const SignIn = (props) => {
  const { getLocalStorage, setLocalStorage } = useLocalStorage();
  const { userInfo } = useUserInfoContext();
  const setUserName = { props };

  const handleUserInfo = (key, value) /* key: string value: any */ => {
    console.log(`${key}: ${value}`);
    let changed = userInfo.current;

    changed[key] = value;

    userInfo.current = changed;

    // setUserInfo(changed);
  };

  const handleSubmit = () => {
    const current = JSON.stringify(userInfo.current);
    console.log(`Submitted: ${current}`);
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">What's your name?</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="displayname"
            onChange={(e) => {
              handleUserInfo('displayName', e.target.value);
              handleUserInfo('isLogin', true);
            }}
            placeholder="Diplay Name"
          />

          <button
            type="submit"
            onClick={() => handleSubmit()}
            className="w-full text-center py-3 btn btn-primary"
          >
            Start Chatting
          </button>

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{' '}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="bg-grey-lighter min-h-screen flex flex-col">
<div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
  <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
    <input
      type="text"
      className="block border border-grey-light w-full p-3 rounded mb-4"
      name="fullname"
      placeholder="Full Name" />

    <input
      type="text"
      className="block border border-grey-light w-full p-3 rounded mb-4"
      name="email"
      placeholder="Email" />

    <input
      type="password"
      className="block border border-grey-light w-full p-3 rounded mb-4"
      name="password"
      placeholder="Password" />
    <input
      type="password"
      className="block border border-grey-light w-full p-3 rounded mb-4"
      name="confirm_password"
      placeholder="Confirm Password" />

    <button
      type="submit"
      className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
    >Create Account</button>

    <div className="text-center text-sm text-grey-dark mt-4">
      By signing up, you agree to the
      <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
        Terms of Service
      </a> and
      <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
        Privacy Policy
      </a>
    </div>
  </div>

  <div className="text-grey-dark mt-6">
    Already have an account?
    <a className="no-underline border-b border-blue text-blue" href="../login/">
      Log in
    </a>.
  </div>
</div>
</div> */
}

export default SignIn;
