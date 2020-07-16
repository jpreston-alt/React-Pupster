import React from "react";
import PicCard from "./PicCard";
import "./styles.css";
import API from "../../utils/API";

class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPic: "",
            matches: 0,
            currentLikes: 0,
            alertOp: 0
        };

        this.handleDownClick = this.handleDownClick.bind(this);
        this.handleUpClick = this.handleUpClick.bind(this);
    }

    componentDidMount() {
        this.getPic();
    };

    handleUpClick() {
        this.setState({ currentLikes: this.state.currentLikes + 1 });
        this.checkMatch();
        this.getPic();
    };

    checkMatch() {
        if (this.state.currentLikes % 5 === 0
            && this.state.currentLikes !== 0) {
            this.setState({ matches: this.state.matches + 1 });
            this.setState({ alertOp: 1 });
        } else {
            this.setState({ alertOp: 0 });
        }
    };

    handleDownClick() {
        this.getPic();
        this.setState({ alertOp: 0 });
    };

    getPic = () => {
        API.search(`/breeds/image/random`)
            .then(res => {
                this.setState({ currentPic: res.data.message });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container text-center">
                <div className="heading">
                    <h2 className="display-4">Make New Friends</h2>
                    <h4 className="lead" style={{ fontWeight: 100 }}>Thumbs up on any pup you'd like to meet!</h4>
                </div>
                <PicCard
                    url={this.state.currentPic}
                    handleDownClick={this.handleDownClick}
                    handleUpClick={this.handleUpClick}
                />
                <h3 className="lead">Made friends with {this.state.matches} pups so far!</h3>
                <div className="alert alert-success fade in" role="alert" style={{ opacity: this.state.alertOp }}>
                    Yay, that pup liked you too!
                </div>
            </div>
        );
    }
};

export default Discover;