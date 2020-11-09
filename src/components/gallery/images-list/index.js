import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import Image from './image';
import {toggleModal} from '../../../actions/modal';

const _ImagesList = ({photos, toggleModal}) => {

    if(!photos.results) {
        return <Redirect to='/' />
      }
   

    return (
        <div className='images-list'>
        {photos.results.map((photo, index) => {
            return <Image image={photo} key={photo.id} />
        })}
    </div>
    )
}

const mapStateToProps = state => ({
    photos: state.gallery.photos
  })


export const ImagesList = connect(mapStateToProps, {toggleModal})(_ImagesList);