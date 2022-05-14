import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { NavLink as NavLinkRRD } from "react-router-dom";
import {
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
// APi
import Dataservices from "../../services/requestApi";

// Logo
import Logo from "../../assets/img/logo.png";
const Header = ({ userdata }) => {
  const [mounted, setMounted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [wishCount, setWishCount] = useState(0);
  const user = userdata && userdata;
  const token = sessionStorage.getItem("Authtoken");
  useEffect(() => {
    const getData = async () => {
      try {
        if (token) {
          const [wishRes, Cartres] = await Promise.all([
            Dataservices.GetWishlistAll(),
            Dataservices.GetCartAll(),
          ]);
          if (mounted) {
            setWishCount(wishRes.data.data.length);
            setCartCount(Cartres.data.data.length);
          }
        }
      } catch (e) {
        console.log(e);
      }
    };
    getData();
    return () => {
      getData();
      setMounted(false);
    };
  }, [mounted, token]);
  return (
    <div className="Header">
      <div className="top_bar">
        <>
          <Row>
            <Col lg="6"></Col>
            <Col lg="6">
              <ul className="top_menu">
                <li>
                  <a href="tel:+918385842313">
                    <i className="lnr lnr-phone-handset" />
                    +91-8385842313
                  </a>
                </li>
                <li>
                  <a href="mailto:info@pujyapanditg.com">
                    <i className="lnr lnr-envelope" /> info@pujyapanditg.com
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      </div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand to="/" tag={NavLinkRRD}>
          <img
            src={Logo}
            style={{
              width: "200px",
              position: "absolute",
              top: "5px",
              zIndex: "9",
            }}
            alt="Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" exact tag={NavLinkRRD} activeClassName="active">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" tag={NavLinkRRD} activeClassName="active">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/all-product"
                tag={NavLinkRRD}
                activeClassName="active"
              >
                Our Product
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/all-pooja"
                tag={NavLinkRRD}
                activeClassName="active"
              >
                Pooja
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/all-article"
                tag={NavLinkRRD}
                activeClassName="active"
              >
                Article
              </NavLink>
            </NavItem>
            <NavItem className="wishlist">
              <NavLink to="/wishlist" tag={NavLinkRRD} activeClassName="active">
                <span className="lnr lnr-heart"></span>
                <span className="count">{wishCount}</span>wishlist
              </NavLink>
            </NavItem>
            <NavItem className="cart">
              <NavLink to="/cart" tag={NavLinkRRD} activeClassName="active">
                <span className="lnr lnr-cart"></span>
                <span className="count">{cartCount}</span>cart
              </NavLink>
            </NavItem>
            {!user ? (
              <>
                <NavItem>
                  <NavLink
                    to="/login"
                    tag={NavLinkRRD}
                    className="btn btn-amber btn-rounded px-4 text-white"
                  >
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/register"
                    tag={NavLinkRRD}
                    className="btn btn-outline-amber btn-rounded px-4"
                  >
                    Register
                  </NavLink>
                </NavItem>
              </>
            ) : (
              <>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <Avatar
                      src={require("../../assets/img/abt.png")}
                      size={30}
                    />{" "}
                    {user.name}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem
                      to="/profile"
                      className="m-0"
                      tag={NavLinkRRD}
                    >
                      Profile
                    </DropdownItem>
                    <DropdownItem to="/orders" className="m-0" tag={NavLinkRRD}>
                      Orders
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem
                      href="/"
                      className="m-0"
                      onClick={() => sessionStorage.removeItem("Authtoken")}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
