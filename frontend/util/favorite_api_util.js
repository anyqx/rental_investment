export const fetchFavorites = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/favorites`
    })
}

export const fetchFavorite = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/favorites/${id}`
    })
}

export const createFavorite = favorite => {
    return $.ajax({
        method: 'POST',
        url: `/api/favorites`,
        data: { favorite }
    })
};

export const removeFavorite = id => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/favorites/${id}`
    })
}
