import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../../../firebase/firebase.utils";
import { selectCurrentUser } from "../../../../redux/user/user-selectors";
import { OptionsContainer, OptionNavLink } from "./nav-links.styles";

const OptionNavLinks = ({ showMenu, currentUser, clicked }) => {
  const handleSignOut = () => {
    auth.signOut();
  };
  return (
    <OptionsContainer isActive={showMenu} onClick={clicked}>
      <OptionNavLink to="/shop">SHOP</OptionNavLink>
      <OptionNavLink to="/contact">CONTACT</OptionNavLink>
      {currentUser ? (
        <OptionNavLink as="div" onClick={handleSignOut}>SIGN OUT</OptionNavLink>
      ) : (
        <OptionNavLink to="/sign-in">SIGN IN</OptionNavLink>
      )}
    </OptionsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default React.memo(connect(mapStateToProps)(OptionNavLinks));
