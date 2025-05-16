import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-success">
        <div className="container">
          <Link className="navbar-brand text-white fs-1 fst-italic" to={'/'}>
           GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Navbar Horizontal  */}
          <div className="collapse navbar-collapse " id="navbar nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/login"}>
                  Login
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/pricing"}>
                  Pricing
                </Link>
              </li> */}
            </ul>
          </div>
          {/* OffCanvas Mobile View */}
          <div
            className="offcanvas offcanvas-start bg-success"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
                 <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white active" aria-current="page" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to={"/login"}>
                Login
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to={"/pricing"}>
                  Pricing
                </Link>
              </li> */}
            </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
