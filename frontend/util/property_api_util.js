import { $CombinedState } from "redux"

export const fetchProperties = data => {
    $.ajax({
        method: 'GET',
        url: 'api/properties',
        data
    })
}

export const fetchProperty = id => {
    $.ajax({
        method: 'GET',
        url: `api/properties/${id}`
    })
}

export const 
export const 