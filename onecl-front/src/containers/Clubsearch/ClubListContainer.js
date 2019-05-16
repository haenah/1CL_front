import {connect} from 'react-redux';
import Clublist from '../../components/Clubsearch/Clublist';

const mapStateToProps = (state) => {
    return{
        clubs : state.ClubSearch.clubList
    }
};

export default connect(mapStateToProps, null)(Clublist);
