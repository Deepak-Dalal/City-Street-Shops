import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
export default function AdminRoute({ element: Element }) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  return userInfo && userInfo.isAdmin ? <Element /> : <Navigate to="/signin" />;
}
