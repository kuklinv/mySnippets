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

    changeNameInput = (name, index) => {
        const thisPicture = this.state.pics[index];
        thisPicture.name = name;
        // console.log(thisPicture.name);
        const picsClone = [...this.state.pics]; // Important!! its clone of state! without this cant set new state
        picsClone[index] = thisPicture;
        this.setState({
            pics: picsClone,
        });
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
                        changeTitleButton={this.changeStateTitleHandler.bind(
                            this,
                            pic.name
                        )}
                        // !HERE IS
                        onChangeName={(event) =>
                            this.changeNameInput(event.target.value, index)
                        }
                    />
                );
            });
        }

    export default App;
