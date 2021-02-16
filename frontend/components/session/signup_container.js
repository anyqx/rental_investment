import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'signup',
        navLink: <Link to='/login'>LOG IN</Link>
    }
}


const mapDispatchToProps = dispatch => {
    return {
        removeErrors: () => dispatch(removeErrors()),
        processForm: user => dispatch(signup(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
