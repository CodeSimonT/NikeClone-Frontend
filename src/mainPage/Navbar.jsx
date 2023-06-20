import { useState } from "react";
import { NavLinks } from "../constants";
import { Link } from "react-router-dom";
import { bag, heart, menu, search, close } from "../assets/icons/icons.js";
import { styling } from "../../style/style.js";
const Navbar = () => {
  return (
    <>
      <nav className="navbar position-relative">
        <div className="container-fluid d-flex justify-content-center">
          {/* grid container */}
          <div className="row containerF">
            {/* logo */}
            <div className="col-6 col-lg-3 d-flex align-items-center py-2">
              <a className="navbar-brand" href="#">
                SneakrZ
              </a>
            </div>
            {/* navlinks */}
            <div className="col-6 d-flex align-items-center justify-content-end justify-content-lg-center ">
              <div className="">
                <div className="d-flex">
                  {/* bag */}
                  <div
                    className={`${styling.flexCenter} pointer me-3 d-block d-lg-none`}
                  >
                    <img src={bag} alt="" className="navImgW" />
                  </div>
                  {/* mobile view button */}
                  <button
                    className="btn d-block d-lg-none pe-0 buttonDesign"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                  >
                    <img src={menu} alt="" className="navImgW" />
                  </button>
                </div>
                {/* nav mobile view */}
                <div
                  className="offcanvas offcanvas-end"
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="offcanvas-header">
                    <h5
                      className="offcanvas-title"
                      id="offcanvasWithBothOptionsLabel"
                    >
                      Backdrop with scrolling
                    </h5>
                    <div data-bs-dismiss="offcanvas" aria-label="Close">
                      <img src={close} alt="" className="navImgW" />
                    </div>
                  </div>
                  <div className="offcanvas-body">
                    <p>
                      Try scrolling the rest of the page to see this option in
                      action.
                    </p>
                  </div>
                </div>
                {/* nav web links */}
                <div className="d-none d-lg-block" id="navbarSupportedContent">
                  <ul className=" p-0 mb-0 d-flex w-100">
                    {NavLinks.map((item) => (
                      <li key={item.id} className="me-4 navLinkF pointer py-2">
                        {item.title}
                      </li>
                    ))}
                    <li className={`me-4 navLinkF ${styling.CenterY} `}>
                      <Link
                        className="removeUnderline text-black  py-2"
                        to={"/MenShoes"}
                      >
                        Men
                      </Link>
                    </li>
                    <li className={`navLinkF ${styling.CenterY} `}>
                      <Link
                        className="removeUnderline text-black py-2"
                        to={"/WomenShoes"}
                      >
                        Women
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* search bar */}
            <div className="col-12 col-lg-3 mt-2 mt-lg-0 d-flex align-items-center justify-content-end ">
              <form
                className="d-flex align-items-center justify-content-center w-100"
                role="search"
              >
                {/*  */}
                <div
                  className={`${styling.flexCenter} backColorGray me-0 me-lg-4 rounded-pill w-100`}
                >
                  <div
                    className={`${styling.flexCenter} searchHover rounded-circle p-2 me-1 pointer`}
                  >
                    <img src={search} alt="" className="navImgW" />
                  </div>
                  <input
                    className="navBorderStyle navSearchResposive"
                    placeholder="Search"
                  ></input>
                </div>
                {/* heart */}
                <div
                  className={`${styling.flexCenter} me-3 pointer d-none d-lg-block`}
                >
                  <img src={heart} alt="" className="navImgW" />
                </div>
                {/* bag */}
                <div
                  className={`${styling.flexCenter} pointer d-none d-lg-block`}
                >
                  <img src={bag} alt="" className="navImgW" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
