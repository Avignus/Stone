import SearchService from './search';
const gerUrlForCoffeeStores = (latLong, limit, query) => {
  return `https://api.foursquare.com/v3/places/search?ll=${latLong}&query=${query}&limit=${limit}`;
};
const getListOfCoffeeStorePhotos = async () => {
  const response = await SearchService.searchPhotos({
    query: 'coffee',
    per_page: 6,
  });
  const unsplashResults = response.data.results;
  const photosResponse = unsplashResults.map(result => result.urls['small']);
  return photosResponse;
};
export const fetchCoffeeStores = async (
  latLong = '43.65267326999575,-79.39545615725015',
  limit = 6,
) => {
  const photos = await getListOfCoffeeStorePhotos();
  const url = gerUrlForCoffeeStores(latLong, limit, 'coffee');
  let coffeeStoresData = [];
  const response = await fetch(url, {
    method: 'get',
    headers: {
      Accept: 'application/json',
      Authorization: 'fsq3w/aJU5JAwF4+uFm1woYpIWUkrrEcGAfZRXY4Q9UFcmc=',
    },
  });
  coffeeStoresData = await response.text();
  coffeeStoresData = await JSON.parse(coffeeStoresData);
  return coffeeStoresData.results.map((venue, index) => {
    return {
      // ...venue,
      id: venue.fsq_id,
      name: venue.name,
      address: venue.location.address,
      neighborhood:
        venue.location.neighborhood || venue.location.crossStreet || '',
      imgUrl: photos[index],
    };
  });
};
