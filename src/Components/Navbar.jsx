import { Link, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken");
    confirm("Are you sure you want to logout?");
    alert("Logout Successful");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-success">
        <div className="container">
          <Link className="navbar-brand text-white fs-1 fst-italic" to={"/"}>
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
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbar nav"
          >
            <div className="navbar-nav d-flex">
              <Link
                className="nav-link text-white fs-5 active"
                aria-current="page"
                to={"/home"}
              >
                Home
              </Link>
              {localStorage.getItem("authToken") ? (
                <div>
                  <Link className="nav-link text-white fs-5" to={"/myorders"}>
                    My Orders
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex ">
                <Link className="btn bg-white  text-success me-3" to={"/login"}>
                  Login
                </Link>

                <Link
                  className="btn bg-white  text-success "
                  to={"/createuser"}
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="d-flex">
                <div>
                  <Link
                    className="btn bg-sucess text-white me-4 text-decoration-none "
                    to={"/mycart"}
                  >
                    my Cart
                  </Link>
                </div>
                <div>
                  <Link
                    className="btn bg-white  text-success "
                    onClick={logout}
                  >
                    Log Out
                  </Link>
                </div>
              </div>
            )}
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
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    to={"/home"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to={"/createuser"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
