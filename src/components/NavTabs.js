import React from "react";
import { Link, useLocation } from "react-router-dom";

const styles = {
    links: {
        fontSize: 12,
        textTransform: "uppercase",
        paddingTop: 5
    },

    brand: {
        fontWeight: 400
    }
};

function NavTabs() {
    const location = useLocation();

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link", "navbar-brand"} style={styles.brand}>Pupster</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item" style={styles.links}>
                        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                    </li>
                    <li className="nav-item" style={styles.links}>
                        <Link to="/discover" className={location.pathname === "/discover" ? "nav-link active" : "nav-link"}>Discover</Link>
                    </li>
                    <li className="nav-item" style={styles.links}>
                        <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>Search</Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default NavTabs;
