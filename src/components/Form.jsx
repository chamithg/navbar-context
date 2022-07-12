import React from "react";
import { useGlobalContext } from "../Context";

export default function Form() {
  const { setUser, user } = useGlobalContext();
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
        </div>
      </form>
    </div>
  );
}
