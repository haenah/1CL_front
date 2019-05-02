import SignUp from '../components/SignUp';
import * as actions from '../actions';
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    idIsValid: state.SignUpValidationData.idIsValid,
    emailIsValid: state.SignUpValidationData.emailIsValid,
    emailSended: state.SignUpValidationData.emailSended
});

const mapDispatchToProps = (dispatch) => (
        {
        onSignUp: (name,id,pw,email) => {
            dispatch(actions.signUpRequest(name,id,pw,email))
        },
        onIdValidation: (status) => {
            dispatch(actions.idValidation(status))
        },
        onEmailValidation: (status) => {
            dispatch(actions.emailValidation(status))
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
