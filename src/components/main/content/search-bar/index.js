import React, {useState} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../../../../actions/fetch';
import { useDispatch } from 'react-redux';


const _SearchBar = ({fetchPhotos, barClass}) => {

  const dispatch = useDispatch();

 

  const [cathegory, setCathegory] = useState({cathegory: ''})
  const onChange = (e) => setCathegory({...cathegory, [e.target.name]: e.target.value});

  const onSubmit = (e) => {
    e.preventDefault();
    fetchPhotos(cathegory.cathegory);
  }

    return (
   
     
        <div className={`search-bar-${barClass}`}>
          <form onSubmit={onSubmit}>
            <input type='text' name='cathegory' placeholder='Search free high-resolution photos' onChange={e => onChange(e)} />
          </form>
        </div>
    
    )
}

export const SearchBar = connect(null, {fetchPhotos})(_SearchBar);