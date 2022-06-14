import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css";

// STATE
import { uiStateActions } from "../../../store/ui-state";

// ICONS

function NavBar({ title, children }) {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.uiState.isLoading);

  const updateHandler = () => dispatch(uiStateActions.setIsUpdating(true));

  return (
    <nav className="admin-nav">
      <div className="nav-left">
        <h3>{title}</h3>
      </div>
      <div className="nav-right">
        <ul>{children}</ul>
        <button onClick={updateHandler} disabled={isLoading}>
          Update
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
