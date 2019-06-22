import React, {useState, useEffect} from 'react';
import Input from './Input/';
import { useDispatch } from 'react-redux';
import { setSearch } from '../actions/search';
import { Link, withRouter } from 'react-router-dom';

const findRoute = route => route.indexOf('/apps/') === -1 ;

const Menu = props => {
  const [ searchValue, setSearchValue] = useState('');
  
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(setSearch(searchValue));
  }, [searchValue]);

  let isHome = findRoute(props.location.pathname);
  useEffect ( () => {
    isHome= findRoute(props.location.pathname);
  },[props.location.pathname])
  
  return ( 
    <div className="c-menu-container">
      <div className="c-menu-wrapper" >
        {isHome && <Input label={"Search By Category "} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>}
        {!isHome && <Link to='/'>Home</Link>}
      </div>
    </div>
  )
}

export default withRouter(Menu);