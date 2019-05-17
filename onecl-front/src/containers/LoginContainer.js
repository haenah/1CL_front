import {loginRequest} from "../actions/Login";
import Login from "../components/Login/Login";
import {connect} from "react-redux";

const mapStateToProps = (state, props) => ({
  user: state.Login.user,
    history: props.history,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (user) => {
      dispatch(loginRequest(user))
    },
  }
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;



