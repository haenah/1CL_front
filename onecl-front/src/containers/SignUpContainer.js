import SignUp from '../components/SignUp';
import * as actions from '../actions';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    idIsValid: state.SignUpValidationData.idIsValid,
    emailIsValid: state.SignUpValidationData.emailIsValid,
    emailNotSended: state.SignUpValidationData.emailNotSended
});

const mapDispatchToProps = (dispatch) => (
        {
        onSignUp: (name,id,pw,email) => {
            dispatch(actions.signUpRequest(name,id,pw,email))
        },
        onIdValidation: (bool) => {
            dispatch(actions.idValidation(bool))
        },
        onEmailValidation: (bool) => {
            dispatch(actions.emailValidation(bool))
        },
        onConfirmId: (id) => {
            dispatch(actions.confirmIdRequest(id))
        },
        onSendEmail: (email) => {
            dispatch(actions.sendEmailRequest(email))
        },
        onConfirmCode: (code) => {
            dispatch(actions.confirmCodeRequest(code))
        }
        }
)

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

export default SignUpContainer;
