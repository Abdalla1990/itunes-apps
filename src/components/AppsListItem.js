import React from 'react';

const AppsListItem = ({ app, index, onAppImageClick  }) => {
	// console.log({ app })
	return ( 
		<div key={index} className="c-plp-product-container">
			<div className="c-plp-product-title" > <h2> {app.name} </h2> </div>
			<div className="c-plp-product-image" onClick={() => onAppImageClick(app)}>
				<img className="c-plp-product-image_source" src={app.image}></img>
			</div>
			<h2 className="c-plp-product-title" >Genres</h2>
			<div className="c-plp-product-tags_container">
				{ app.genres.length && app.genres.map( (genre, index) => ( <p key={index} > { genre.name } </p>) ) }
			</div>
		</div>
	);
}



export default AppsListItem;