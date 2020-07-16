import React from "react";

const styles = {
    footer: {
        backgroundColor: "gray",
        color: "white",
        marginTop: 100,
        textTransform: "uppercase",
        fontSize: 12
    }
};

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small blue" style={styles.footer}>
                <div className="footer-copyright text-center py-3">© 2020 Joanna Preston</div>
            </footer>
        );
    }
};

export default Footer;