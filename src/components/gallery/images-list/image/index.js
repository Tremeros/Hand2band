import React, {useState, useEffect, createRef} from 'react';
import {connect} from 'react-redux';
import {toggleModal} from '../../../../actions/modal';
import ImageTags from './image-tags';

const _Image = ({image, toggleModal}) => {

    const [imgHeight, setImgHeight] = useState(null);

    const imageRef = createRef();

    const setSpans = () => {
        const height = imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10 + 1);
        setImgHeight(spans);
    };

    useEffect(() => {
        imageRef.current.addEventListener('load', setSpans);
    });

    const showModal = () => {
        toggleModal({url: image.urls.regular, userAvatar: image.user.profile_image.small, userName: image.user.name, userNick: image.user.username})
    }

    return (
    <>
    <div style={{gridRowEnd: `span ${imgHeight}`}} >
        <img ref={imageRef} alt={image.description} src={image.urls.regular} onClick={showModal}/>
        <ImageTags tags={image}/>
    </div>
    </>
    )
}

export default Image = connect(null, {toggleModal})(_Image);