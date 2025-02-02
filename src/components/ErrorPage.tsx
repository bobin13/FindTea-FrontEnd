import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="text-center bg-black text-white h-[100%]">
      <img className="" src="../images/shibu_404.png" alt="" />
      <h2 className="font-semibold text-3xl m-2">404 Nothing Found!</h2>
      <Link
        to="/"
        className="border-s-white border-2 shadow-white shadow-md rounded-md p-1 bg-red-600"
      >
        Go Back To Home Page!
      </Link>
    </div>
  );
}

export default ErrorPage;
