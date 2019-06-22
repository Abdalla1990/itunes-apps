import React from 'react';
import { useSelector } from 'react-redux';
import { fetchAppPayload } from '../adapters/apps.adapter';

const RenderAppDetailsField = ({ field, value, type }) => 
{ return type === 'url' ?
    <span className="c-pdp-product-fields_container">
      <a  href={value} target="_blank" className="c-pdp-product-field" >{ field }</a>
    </span>
    :
    <span className="c-pdp-product-fields_container">
      <h3 className="c-pdp-product-field">{ field }</h3>
      <p className="c-pdp-product-value" >{ value }</p>
    </span>
}


const RenderContent = ( { appName , appDetailsFields, appImage, appGenres} ) => (
  <div className="c-pdp-inner">
    <h2 className="c-pdp-product-title">{appName}</h2>
    <div className="c-pdp-content-container">
      <div className="c-pdp-product-info-container">
        {
          appDetailsFields.length &&
          appDetailsFields.map( props => <RenderAppDetailsField  {...props}/> )
        }
      </div>
      <div className="c-pdp-image-container c-pdp-product-carousel" >
        <img className="c-plp-product-image_source" src={appImage}></img>
        <div className="c-plp-product-tags_container">
          {
            appGenres.length && 
            appGenres.map( ({ name, url , id}) => <a key={id} href={url} target="_blank" >{ name }</a>)
          }
        </div>
      </div>
    </div>
  </div>
);

const AppPage = props => {
  const appDetails = useSelector(state => fetchAppPayload(props.match.params, state))
  return ( 
    <div className="c-pdp-container">
    {appDetails === undefined ?
      <div className="c-pdp-product-info-container">
        LOADING 
      </div> :
      RenderContent(appDetails)
  }
  </div>
  )
}


export default AppPage;