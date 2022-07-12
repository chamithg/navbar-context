import React from "react";
import { useGlobalContext } from "../Context";

export default function Nav() {
  const { user } = useGlobalContext();
  return (
    <div
      className="bg-info h-50 p-4 mb-5"
      style={{ height: 5, textAlign: "right" }}>
      <h3>Hi {user} !</h3>
    </div>
  );
}
