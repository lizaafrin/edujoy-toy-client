import React from "react";
import { Link, useRouteError } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle('Error');

  return (
    <>
      <div className="text-2xl font-bold mx-auto">
        <img className="max-w-screen-2xl mx-auto" src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=826&t=st=1684600567~exp=1684601167~hmac=6a2cce3f556e56f8e547597c0f639a5a6dc359f85f6e6ebf7b5be0a7be61ca42" alt="" />
        <p className="text-center underline mt-0"><Link to="/"> Go to Home</Link></p>
      </div>
    </>
  );
};

export default ErrorPage;
