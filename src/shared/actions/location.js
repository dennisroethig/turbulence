// actions/location.js
export function routeLocationDidUpdate(location) {
  return {
    type: 'LOCATION_UPDATE',
    payload: {
      ...location,
    },
  };
}
