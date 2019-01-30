import React from 'react';
import classes from './App.css';

import PersonsStateful from '../components/Persons/PersonsStateful';
import Hat from '../components/Hat/Hat';

export const AuthContext = React.createContext(false);

class App extends React.Component {

    state = {
        persons: [
            {id: 'a1', name: 'Max', age: 28},
            {id: 'a2', name: 'Bob', age: 32},
            {id: 'a3', name: 'Nick', age: 23},
        ],
        showPersons: false,
        toggleClicked: 0,
        authenticated: false
    }

    nameChangeHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        });

        const desiredPerson = {
            ...this.state.persons[personIndex]
        }

        desiredPerson.name = event.target.value;

        const personsCopy = [...this.state.persons];
        personsCopy[personIndex] = desiredPerson;

        this.setState({persons: personsCopy});
    }

    deletePersonHandler = (personIndex) => {

        const personsCopy = [...this.state.persons];

        personsCopy.splice(personIndex, 1);

        this.setState({persons: personsCopy});
    }

    showTogglePersonsHandler = () => {

        const isShown = this.state.showPersons;

        this.setState( (prevState, props) => {
            return {
                showPersons: !isShown,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    }

    loginHandler = () => {
        this.setState({authenticated: true})
    }
  
    render () {

        let persons = null;

        if(this.state.showPersons) {
            persons = (
                <div>
                    <PersonsStateful 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangeHandler} />
                </div>
            )
        }
    return(
      <div className={classes.App}>
        <Hat 
            isShown={this.state.showPersons} 
            showToggle={this.showTogglePersonsHandler}
            login={this.loginHandler}
            authenticated={this.state.authenticated}/>

        <AuthContext.Provider value={this.state.authenticated}>
            { persons }
        </AuthContext.Provider>

      </div>
    )
  }
}

export default App