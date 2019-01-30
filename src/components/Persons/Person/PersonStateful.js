import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';

import { AuthContext } from '../../../containers/App';

class PersonStateful extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showInput: true
        }
        this.inputElement = React.createRef();
        this.position = props.index
    }

    componentDidMount() {
        console.log('component did mount');
    }

    focus() {
            this.inputElement.current.focus();
    }

    hideBtnHandler(prevState) {
            this.setState({
                showInput: !prevState
            })
    }


    render() {

        const btnClassList = [];
        const inputWrapperClassList = [];
        console.log(this.props.authenticated);

        if (this.state.showInput) {
            btnClassList.pop()
            btnClassList.push(classes.EditBtn)
            inputWrapperClassList.pop()
            inputWrapperClassList.push(classes.Hide)
            
        } else {
            btnClassList.pop()
            btnClassList.push(classes.Hide)
            inputWrapperClassList.pop()
            inputWrapperClassList.push(classes.InputWrapper)
        }
        return (
            <div className={classes.Person}>
                <AuthContext.Consumer>
                        {auth => auth ? <p className={classes.Authedtication}>logged in</p> :  null}
                </AuthContext.Consumer>
                <div className={classes.Wrapper}>
                    <p className={classes.Info}>Hello i'm <span>{this.props.name}</span> and also i'm {this.props.age} y.o</p>
                    <button 
                        className={classes.DeleteBtn} 
                        onClick={this.props.click}>Delete Person
                    </button>
                </div>
                <button 
                    className={btnClassList.join()} 
                    onClick={() => {this.hideBtnHandler(this.state.showInput)}}>Edit person
                </button>
                <div className={inputWrapperClassList}>
                    <input  
                            ref={this.inputElement}
                            className={classes.NameInput} 
                            type="text" 
                            value={this.props.name} 
                            onChange={ (event) => {
                                this.props.changed(event, this.props.id)
                    }}/>
                    <button 
                        className={classes.SaveChangesBtn} 
                        onClick={() => {this.hideBtnHandler(this.state.showInput)}}>Save
                    </button>
                </div>
            </div>
        )  
    }
    
} 

PersonStateful.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func, 
}

export default PersonStateful