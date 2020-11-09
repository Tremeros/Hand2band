import React, {useEffect} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {SearchBar} from '../main/content/search-bar';
import {ImagesList} from './images-list';
import {ModalImg} from './modal-img';

const _Gallery = ({cathegory, photos, modalIsOpen}) => {

  const uppercaseWords = str => str.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      maxHeight             : '80vh',
      marginRight           : '-50%',
      transition            : '1s',
      transform             : 'translate(-50%, -50%)'
    }
  };

  Modal.setAppElement('#root');

  

    return (
      <div className='gallery'>
     
        <SearchBar barClass={'gallery'}/>
        <h1>{cathegory && uppercaseWords(cathegory)}</h1>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalImg />
        </Modal>
        {photos &&  <ImagesList />}
      
      </div>
    )
}

const mapStateToProps = state => ({
    cathegory: state.gallery.cathegory,
    photos: state.gallery.photos,
    modalIsOpen: state.gallery.modalIsOpen
  })

export const Gallery = connect(mapStateToProps)(_Gallery);