import { Link, Navigate, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const backBtnClickHandler = () => {
    navigate(-1);
  };
  return (
    <>
      <ul className="navBar font-custom">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <div onClick={backBtnClickHandler}>Back!</div>
        </li>
        <li>
          <a href="#">Add Stores</a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
