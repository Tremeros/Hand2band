import React from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../../../actions/modal';
import {ModalImgHeader} from './modal-img-header';


const _ModalImg = ({data, toggleModal}) => {

   const hideModal = () => {
       toggleModal({});
   }

   return (
       <div className='modal-image'>
         <ModalImgHeader />
         <img onClick={hideModal} src={data.url} />
       </div>
   )
}

const mapStateToProps = state => ({
    data: state.gallery.modalData
  })

export const ModalImg = connect(mapStateToProps, {toggleModal})(_ModalImg);