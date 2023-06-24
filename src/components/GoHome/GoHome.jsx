import React from "react";
import './GoHome.css';
import { withRouter } from "react-router-dom";
import homeIconWhite from "./../../Assets/home_white.png";
import homeIconBlack from "./../../Assets/home_black.png";

// This component is there to teach programatic navigation
class GoHome extends React.Component {
    navigateToHome = () => {
        const { history } = this.props;
        // setTimeout(() => {
        // }, 2000)
        history.push("/")
    }
    render() {
        const { location } = this.props;
        const whiteBtn = location.pathname === ('/');

        return (
            <button
                onClick={this.navigateToHome}
                className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'}`}
            >
                <img
                    className="home-icon"
                    src={whiteBtn ? homeIconBlack : homeIconWhite}
                    alt='home-icon' />
            </button>
        )
    }
}
export default withRouter(GoHome);