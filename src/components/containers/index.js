import HomePage from "../HomePage";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    miniPackages: state.homeReducer.miniPackages,
});

const mapDispatchToProps =  dispatch => ({
    addNewItem: miniPackage => dispatch({
        type: 'ADD_MINI_PACKAGE',
        payload: miniPackage
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)