import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
      else{
        console.log("Unable to logout")
      }
    });
    
  }

  return (
    <Wrapper>
      
      <Nav>
      <Logo>
        <Link to="/" className="link-text">My Recipes</Link>
      </Logo>
        <Logo>
        <Link to="/about" className="link-text">About</Link>
        </Logo>
        <Button as={Link} to="/new">
          New Recipe
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
        <h4>Welcome <em>{user.username}</em></h4>
      </Nav>
    </Wrapper>
  );
}
// display: flex;
  // justify-content: center;
  // align-items: center;
  // padding: 8px;
const Wrapper = styled.header`
  
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e9ecff;
  font-family: "Roboto";
`;



const Logo = styled.h1`
  font-family: "Comic Sans";
  font-size: 3rem;
  color: lightpink;
  margin: 0;
  line-height: 1;
  

  a {
    color: inherit;
    text-decoration: none;
  }
  a.active .link-text {
    opacity: 1;
    transition-delay: 0.1s;
  }
  .link-text {
    z-index: 10;
  width: 20%;
  padding: 1em 0;
  text-align: center;
  cursor: pointer;
  }
`;
//display: flex;
  //gap: 4px;
  //position: absolute;
  //right: 8px;
const Nav = styled.nav`
    position: relative;
    display: inline-flex;
    background: white;
    padding: 5px 200px 5px 200px;
    gap: 100px;
    margin: 1em 0;
    box-shadow: 0 1em 2em rgba(black, .05);
  
  
  Nav.black {
    .underline {
      background: #222;
      border-radius: .25em;
      height: calc(.5em / 2);
      mix-blend-mode: initial;
    }
  }
`;

export default NavBar;
