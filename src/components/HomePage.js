import React from 'react';
import {useSelector} from 'react-redux';
import { buildAppsDataProps } from '../adapters/apps.adapter';
import AppsListItem from './AppsListItem';

const HomePage = ({ history }) => {

  const apps = useSelector( ({ appsData = { results : [] } , search}) => buildAppsDataProps(appsData)(search));
  const handleProductClick = app => {
    history.push(`/apps/${app.id}`);
  }

  return ( 
    <div className="div-container home-wrapper">
      <div className="c-plp-products-container">
        {apps.length === 0 && <div>LOADING</div>}
        {apps.map( (app, index) => (
          <AppsListItem app={app} index={index} onAppImageClick={handleProductClick}/>
        ))}
      </div>
    </div>
  );
}

export default HomePage;