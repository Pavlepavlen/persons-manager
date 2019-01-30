import React, {Component} from "react";
import PersonStateful from "./Person/PersonStateful";

class PersonsStateful extends Component {

    constructor(props) {
        super(props);

        this.lastPersonRef = React.createRef();
    }

    componentDidMount() {
        this.lastPersonRef.current.focus();
    }

    render () {

        return  this.props.persons.map((person,index) => {
            return (<PersonStateful
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            id={person.id}
            ref={this.lastPersonRef}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />)
        })
    }
        
}

export default PersonsStateful