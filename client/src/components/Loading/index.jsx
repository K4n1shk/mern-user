import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Pending() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Form Successfully Submitted</span>
            <span className="block text-indigo-600">Pending for Approval</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <NavLink
                to="/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Back To Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Approved() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Form Approved</span>
            <span className="block text-indigo-600">Visit our campus for further process</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <NavLink
                to="/"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Back To Home
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Declined() {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Form Declined</span>
            <span className="block text-indigo-600">Discrepancy found! Fill the form again</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <NavLink
                to="/form"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Fill Form
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Loading = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location != null ? <div>{location.state.isDeclined === true ? (<Declined />) : (location.state.isVerified !== true ? (<Pending />) : (<Approved />))}</div> : ""}
    </>
  )

}

export default Loading;