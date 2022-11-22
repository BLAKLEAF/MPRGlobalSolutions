import React from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";

const authenticate = (WrappedComponent: React.FC) => {
  // eslint-disable-next-line react/display-name
  return (props: any) => {
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const accessToken = cookie.get("accessToken");
      if (!accessToken) {
        Router.replace("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }
    return null;
  };
};

export default authenticate;
