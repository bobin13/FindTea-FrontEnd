import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="card">
      <img src="src/assets/shibu_404.png" alt="" />
      <h2>404 Nothing Found!</h2>
      <Link to="/"> Go Back To Home Page!</Link>
    </div>
  );
}

export default ErrorPage;
