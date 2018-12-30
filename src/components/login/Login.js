import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import loginActions from '../../reduxSaga/actions/login';
import {getStatusClass} from "../../util/funcUtil";

class Login extends Component {

    validateForm = () => {
        const {username = '', password = ''} = this.props
        return username.length > 0 && password.length > 0;
    }

    handleChange = event => {
        const {onChange} = this.props
        const {target: {id, value}} = event
        onChange({id: id, value})
    }

    handleSubmit = event => {
        event.preventDefault();
        const {username, password, login} = this.props
        login({username, password})
    }

    renderForm = () => {
        const {status, message, logout, username, password} = this.props
        return (
            <div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Status: </td>
                                <td className={getStatusClass(status)}>{status}</td>
                            </tr>
                            <tr>
                                <td>Message: </td>
                                <td>{message}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <br />

                <button onClick={() => logout()}>Log Out</button>

                <br/>

                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId='username' bsSize='large'>
                        <ControlLabel>username</ControlLabel>
                        <FormControl
                            autoFocus
                            type='username'
                            value={username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId='password' bsSize='large'>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={password}
                            onChange={this.handleChange}
                            type='password'
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize='large'
                        disabled={!this.validateForm()}
                        type='submit'
                    >
                        Login
                    </Button>
                </form>
            </div>
        )
    }

    renderFailed = () => {
        return (
            <div>
                Error occurred!!
            </div>
        )
    }

    render() {
        const {status} = this.props
        return (
            <div className='Login'>
                {status !== 'failed' ? this.renderForm() : this.renderFailed()}
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            status: state.login.status,
            message: state.login.message,
            username: state.login.username,
            password: state.login.password
        }
    },
    dispatch => bindActionCreators({
        login: loginActions.login,
        logout: loginActions.logout,
        onChange: loginActions.onChange
    }, dispatch)
)(Login)