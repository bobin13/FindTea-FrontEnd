import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="card text-align-center">
      <img className="col-4" src="../images/shibu_404.png" alt="" />
      <h2>404 Nothing Found!</h2>
      <Link to="/"> Go Back To Home Page!</Link>
    </div>
  );
}

export default ErrorPage;
