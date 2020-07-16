import React from "react";

const styles = {
    jumbotron: {
        backgroundImage: "url('https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "0px",
        marginBottom: 60
    },

    h1: {
        color: "White",
        fontWeight: 400
    },

    h2: {
        color: "White",
        fontWeight: 200,
        textTransform: "uppercase",
        fontSize: 14
    }
};

class Jumbotron extends React.Component {
    render() {
        return (
            <div className="jumbotron" style={styles.jumbotron}>
                <h1 className="display-4" style={styles.h1}>Pupster</h1>
                <p className="lead" style={styles.h2}>Make friends with the worlds cutest dogs</p>
            </div>
        );
    }
};

export default Jumbotron;