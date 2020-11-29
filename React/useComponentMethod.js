// **важно!**
//
// обращение к методу родительского компонента через байнд!
//     можно и через стрелочную функцию но! тогда компонент рендериться заново
// и это потеря производительности

// var1 its best practice for browser - not re-render page
class example extends Component {
    render(){
        return(
            <Picture
                name={pics[0].name}
                id_pic={pics[0].id_pic}
                changeTitleButton={this.changeStateTitleHandler.bind(
                    // its best practice for browser - not re-render page
                    this,
                    pics[0].name
                )}
            />
        )
    }
}

//var 2
class example extends Component {
    render(){
        return(
            <Picture
                name={pics[0].name}
                id_pic={pics[0].id_pic}
                changeTitleButton={() =>
                    this.changeStateTitleHandler(pics[1].name)
                }
            />
        )
    }
}



