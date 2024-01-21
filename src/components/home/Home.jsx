import React  from 'react';
import SearchEndData from "../../container/SearchEndData";
import SearchStartData from "../../container/SearchStartData";
import {GalleryContainer, SearchContainer, StyledContainer} from "./homeStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../slider/SliderComponent";



const Home = () => {
    return (
        <>
            <StyledContainer>
                <SearchContainer>
                    <SearchStartData/>
                    <SearchEndData/>
                </SearchContainer>
                <GalleryContainer>
                    <SliderComponent/>
                </GalleryContainer>
            </StyledContainer>
        </>
    );
};

export default Home;