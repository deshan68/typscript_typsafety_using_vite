import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state: "Error Cant Find Page" }); //after one minute it will redirect to the home page
      // navigate(-1); //after one minute it will redirect to the previous page
    }, 1000);
  });
  return <h1>NotFound</h1>;
}
