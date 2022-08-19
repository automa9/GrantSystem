//import React from "react";
//import { Redirect, Route } from "react-router-dom";
//import { projectFirestore } from "../firebase/config"

//function ProtectedRoute({ component: Component, ...restOfProps }) {
  //const isAuthenticated = projectFirestore.getItem("isAuthenticated");
  //console.log("this", isAuthenticated);

  //return (
    //<Route
      //{...restOfProps}
      //render={(props) =>
        //isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      //}
   // />
 // );
// }

import { Navigate } from "react-router-dom";
const Protected = ({ isTeacher, children }) => {
 if (!isLoggedIn) {
 return <Navigate to="/" replace />;
 }
 return children;
};

export default ProtectedRoute;