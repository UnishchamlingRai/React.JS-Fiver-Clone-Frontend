import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const[show,setShow]=useState()
  const{pathname}=useLocation()
  const isAcitve = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };
  useEffect(() => {
    return () => {
      window.addEventListener("scroll", isAcitve);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "Unishrai",
    isSeller: true,
  };

  return (
    <div className={active ||pathname!=='/' ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link"><span className="text">Fiverr</span></Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become Seller</span>}
          {!currentUser && (
            <button className={active ? "btnActive" : "button"}>Join</button>
          )}
          {currentUser && (
            <>
              <div className="user" onClick={()=>{setShow(!show)}}>
                <img src="#" alt="#" />
                <span> {currentUser?.username}</span>
                {show &&<div className="option">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/Mygigs" className="link">Gigs</Link >
                      <Link to="/add" className="link">Add New Gig</Link >
                    </>
                  )}
                  <Link to="/orders" className="link">Oders</Link >
                  <Link to="messages" className="link">Messages</Link >
                  <Link to="" className="link">Logout</Link >
                </div>}
              </div>
            </>
          )}
        </div>
      </div>
      {(active || pathname!=='/') && (
        <>
          <hr />
          <div className="menu">
            <span>text1</span>
            <span>text2</span>
            <span>text2</span>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
