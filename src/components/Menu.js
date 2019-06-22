import React, {useState} from 'react';
import Input from './Input/';
import { useDispatch } from 'react-redux';
import { setSearch } from '../actions/search';

const Menu = () => {
  const [ searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  dispatch(setSearch(searchValue));
  return ( 
    <div className="c-menu-container">
      <div className="c-menu-wrapper" >
        <Input label={"Search By Category "} value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
      </div>
    </div>
  )
}

export default Menu;