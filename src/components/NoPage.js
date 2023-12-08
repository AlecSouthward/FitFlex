import { Link } from "react-router-dom";

const NoPage = () => (
    <div>
        <h1 style={{textAlign: "center"}}>404 Error</h1>
        <h3 style={{textAlign: "center"}}>Page not found.</h3>
        <p style={{textAlign: "center"}}><Link to='/'>Go Back</Link></p>
    </div>
);

export default NoPage;