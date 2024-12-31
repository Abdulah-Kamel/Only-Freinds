import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../../Store/UserStore";

const Google_Auth = () => {
  const location = useLocation();
  const { exchangeCodeForTokens } = useContext(UserContext);
  const handleCodeExchange = async (state, code) => {
    const data = await exchangeCodeForTokens(state, code)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    // Extract the query parameters using URLSearchParams
    const queryParams = new URLSearchParams(location.search);
    const state = queryParams.get("state");
    const code = queryParams.get("code");

    if (state && code) {
      // handleCodeExchange(state, code);
      console.log("State:", state);
      console.log("Code:", code);
      // You can now use state and code for further processing
    }
  }, [location]);

  return <div>Google_Auth</div>;
};

export default Google_Auth;
