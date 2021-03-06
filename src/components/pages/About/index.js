import React from "react";
import Jumbotron from "./Jumbotron";

class About extends React.Component {
    render() {
        return (
            <div>
                <Jumbotron />
                <div className="container">
                    <h1>Welcome to Pupster!</h1>
                    <p>
                        Pupster is a React application built using create-react-app and the Dog CEO API. From the Discover page, the user is presented with a photo of a dog. If they like the dog they thumbs up the photo, if they don't like it they thumbs down. Then they are presented with a new photo. If the dog likes you back, you've made a friend! The application keeps track of likes and friends made. You can also head the the Search page to search for a breed of dog. Then you are presented with all the photos of that type of dog found in the Dog CEO API.
                        <br /><br />
                        This was my first attempt at building a React application from scratch and I learned alot about working with components, routing, managing state, and handling events.
                    </p>
                </div>
            </div>
        );
    }
};

export default About;