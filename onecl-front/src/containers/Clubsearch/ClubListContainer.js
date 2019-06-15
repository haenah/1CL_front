import {connect} from 'react-redux';
import Clublist from '../../components/Clubsearch/Clublist';

const mapStateToProps = (state, props) => {
    return{
        clubs : state.ClubSearch.clubList,
        history: props.history,
    }
};

export default connect(mapStateToProps, null)(Clublist);
