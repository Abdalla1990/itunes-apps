import { map, filter, find, propEq, pipe } from 'ramda';

const checkLength = arg => arg.length > 20 ? arg.slice(0, 20) + '...' : arg;
export const buildAppsDataProps = ({ results = [] }) => search => pipe(
	map(({ id, name, genres, artworkUrl100: image }) =>({ id, name: checkLength(name), genres, image }) ),
	filter( app => 
		app.genres !== undefined  && app.genres.length && search !== "" ?
		find(genre => genre.name && genre.name.toLowerCase().indexOf(search.toLowerCase()) !== -1)(app.genres) :
		app
	),
)(results);

const formatDate = date => {
	const oldformat = new Date(date);
	return (`${oldformat.getMonth() + 1}` +' / '+ `${oldformat.getDay()} `+ ' / ' + `${oldformat.getFullYear()}`);
}
export const fetchAppPayload = ( { appId: id}, { appsData } ) => { 
	if( appsData.length === 0 ) {
		return undefined;
	}

	if(find( propEq('id', id) )(appsData.results) === undefined){
		return undefined;
	}

	const  { name, artworkUrl100, releaseDate, kind, genres, artistName, artistUrl, url }  = 
		appsData && appsData.results && appsData.results.length && find( propEq('id', id) )(appsData.results);
	const appName = name;
	const appImage= artworkUrl100;
	const appGenres = genres;
	const appDetailsFields = [
		{
			field: 'Release Date',
			value: formatDate(releaseDate),
		},
		{
			field: 'App Type',
			value: kind
		},
		{
			field: 'Artist Name',
			value: artistName
		},
		{
			field: 'Click to visit the artist page',
			value: artistUrl,
			type: 'url'
		},
		{
			field: 'Click to visit the app page',
			value: url,
			type: 'url'
		},
	];
	return { appName, appImage, appGenres, appDetailsFields};
}