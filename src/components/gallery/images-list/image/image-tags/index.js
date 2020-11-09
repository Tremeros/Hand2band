import React from 'react';


const ImageTags = ({tags}) => {

    return (
        <div className='image-tags'>
           {tags.tags.map((tag, index) => {
               return <div className='image-tags-element'><p>{tag.title}</p></div>
           })}
        </div>
    )
};



export default ImageTags;