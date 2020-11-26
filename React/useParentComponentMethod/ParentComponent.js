import React, { Component } from "react";
import "./App.css";
import Picture from "./PictureComponent/Picture.js";

class App extends Component {

    state = {
        pics: [
            {name: "first pic", id_pic: 1},
            {name: "second pic", id_pic: 2},
            {name: "third pic", id_pic: 3},
        ],
        pageTitle: "Hello UDEMY React course",
    };

    changeStateTitleHandler = (newTitle) => {
        this.setState({pageTitle: newTitle});
    };

    render() {
        let pictureList = null;
        if (this.state.showPicture) {
            pictureList = this.state.pics.map((pic, index) => {
                return (
                    <Picture
                        key={index}
                        name={pic.name}
                        id_pic={pic.id_pic}
                        changeTitleButton={this.changeStateTitleHandler.bind( // this ! here its attribute for use in child Component
                            this,
                            pic.name
                        )}
                    />
                );
            });
        }
    }

    export default App;
