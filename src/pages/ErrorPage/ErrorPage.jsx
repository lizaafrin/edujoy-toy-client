import React from "react";
import Lottie from "lottie-react";
import reader from "../../assets/reader.json";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();

  return (
    <>
      <div className="min-h-fit bg-white relative">
        <Lottie animationData={reader} loop={true}>
          <div className="absolute top-60 left-60 text-2xl font-bold bg-red-500">
            <Link to="/"> Go to Home</Link>
          </div>
        </Lottie>
      </div>
      <div></div>
    </>
  );
};

export default ErrorPage;
