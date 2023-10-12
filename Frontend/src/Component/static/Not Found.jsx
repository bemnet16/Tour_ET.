import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "85vh" }}>
            <h2 className="display-1">Sorry</h2>
            <p className="fw-bold">That page can not be found</p>
            <Link to="/" className="text-decoration-none bg-dark p-2 text-white rounded"> Back to Home page </Link>
        </div>
    );
}

export default NotFound;