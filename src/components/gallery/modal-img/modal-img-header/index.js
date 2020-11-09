import React from 'react';
import {connect} from 'react-redux';

const _ModalImgHeader = ({data}) => {
    return (
        <div className='modal-image-header'>
           <div className='modal-image-header-user'>
               <img src={data.userAvatar} />
               <div className='user-name'>
                   <strong>{data.userName}</strong>
                   <p>{data.userNick}</p>
               </div>
           </div>
           <div className='modal-image-header-buttons'>
               <div className='modal-image-header-buttons-element'><i className="fas fa-heart fa-lg"></i></div>
               <div className='modal-image-header-buttons-element'><i className="fas fa-plus fa-lg"></i></div>
           </div>
        </div>
    )
};

const mapStateToProps = state => ({
    data: state.gallery.modalData
  })

export const ModalImgHeader = connect(mapStateToProps)(_ModalImgHeader);