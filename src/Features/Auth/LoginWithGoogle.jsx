import React, { useContext, useReducer } from "react";
import { FcGoogle } from "react-icons/fc";
import { UserContext } from "../../Store/UserStore";

const LoginWithGoogle = () => {
  const { intializeGoogleLogin } = useContext(UserContext);
  const handleClick = async () => {
    await intializeGoogleLogin().then((res) => {
      console.log(res);
      window.location.href = res.data.authorization_url;
    });
  };
  return (
    <>
      <div className="divider w-[70%] max-sm:w-full mx-auto">OR</div>
      <section>
        <button
          className="btn btn-wide bg-base-300 font-semibold text-xl"
          onClick={handleClick}
        >
          Sign in with Google
          <FcGoogle className="text-3xl" />
        </button>
      </section>
    </>
  );
};

export default LoginWithGoogle;
