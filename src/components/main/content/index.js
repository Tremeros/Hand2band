import React, {useEffect} from 'react';
import { Redirect } from "react-router-dom";
import {SearchBar} from './search-bar';
import { connect } from 'react-redux';






const _Content = ({cathegory}) => {

  
    if(cathegory) {
        return <Redirect to='/gallery' />
      }

    return (
        <div className='main-content'>
           <h1>Unsplash</h1>
           <p>The internet's source of freely-usable images.</p>
           <p>Powered by reators everywhere.</p>
           <SearchBar barClass={'main'}/>
           <p>Trending: flower, wallpapers, background, happy, love.</p>
        </div>
    )
}

const mapStateToProps = state => ({
    cathegory: state.gallery.cathegory
  })

export const Content = connect(mapStateToProps)(_Content);