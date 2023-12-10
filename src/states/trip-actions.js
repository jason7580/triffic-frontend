import {
    listTrips as listTripsFromApi,
    createTrip as createTripFromApi,
    deleteTrip as deleteTripFromApi,
    updateTrip as updateTripFromApi
} from 'api/trips.js';

export function setSearchText(searchText) {
    return {
        type: '@SEARCH_TEXT/SET_SEARCH_TEXT',
        searchText
    };
}

function startLoading() {
    return {
        type: '@TRIP/START_LOADING'
    };
}

function endLoading() {
    return {
        type: '@TRIP/END_LOADING'
    };
}

function endListTrips(trips)) {
    return {
        type: '@TRIP/END_LIST_TRIPS',
        trips
    };
}


function endCreateTrip(trip) {
    return {
        type: '@TRIP/END_CREATE_TRIP',
        trip
    };
}

function endDeleteTrip(trip) {
    return {
        type: '@TRIP/END_DELETE_TRIP',
        trip
    };
}

function endUpdateTrip(trip) {
    return {
        type: '@TRIP/END_UPDATE_TRIP',
        trip
    };
}

export function listTrips(searchText, reverse = false) {
    return (dispatch, getState) => {
        return listTripsFromApi(searchText, reverse).then(trips => {
            dispatch(endListTrips(trips));
        }).catch(err => {
            console.error('Error listing trips', err);
        }).then(() => {
            dispatch(endLoading())
        });
    };
};

export function createTrip(name, note) {
    return (dispatch, getState) => 
        

        return createTripFromApi(name, note).then(trip => {
            dispatch(endCreateTrip(trip));
        }).catch(err => {
            console.error('Error creating trip', err);
        }).then(() => dispatch(endLoading()));
    };
};


export function deleteTrip(id) {
    return (dispatch, getState) => 
        

        return deleteTripFromApi(id).then(trip => {
            dispatch(endDeleteTrip(trip));
        }).catch(err => {
            console.error('Error deleting trip', err);
        }).then(() => dispatch(endLoading()));
    };
};

export function updateTrip(id, name, note) {
    return (dispatch, getState) => 
        

        return updateTripFromApi(id, name, note).then(trip => {
            dispatch(endUpdateTrip(trip));
        }).catch(err => {
            console.error('Error updating trip', err);
        }).then(() => dispatch(endLoading()));
    };
};

