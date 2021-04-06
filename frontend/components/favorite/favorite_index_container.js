import FavoriteIndex from "./favorite_index";
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const favorites = Object.values(state.entities.favorites);
    // debugger
    return {
        favorites: favorites
    }
}


function mapDispatchToProps(dispatch) {
    // debugger
    return {
        fetchFavorites: () => dispatch(fetchFavorites()),
        deleteFavorite: (id) => dispatch(deleteFavorite(id)),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteIndex);