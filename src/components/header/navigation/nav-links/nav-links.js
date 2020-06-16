import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../../../firebase/firebase.utils";
import { selectCurrentUser } from "../../../../redux/user/user-selectors";

const NavLinks = ({ showMenu, currentUser, clicked }) => {
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <div className={`options ${showMenu ? "active" : ""}`} onClick={clicked}>
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/contact">
        CONTACT
      </NavLink>
      {currentUser ? (
        <div className="option" onClick={handleSignOut}>
          SIGN OUT
        </div>
      ) : (
        <NavLink className="option" to="/sign-in">
          SIGN IN
        </NavLink>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default React.memo(connect(mapStateToProps)(NavLinks));
