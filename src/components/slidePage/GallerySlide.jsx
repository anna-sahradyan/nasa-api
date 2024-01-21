import React from 'react';
import {Img, StyledSlide} from "./slydePageStyled.js";



const GallerySlide = ({item}) => {
    return (
        <StyledSlide>
            <Img src={item.url} alt={""}/>
        </StyledSlide>
    );
};

export default GallerySlide;
