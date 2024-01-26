import React  from 'react';
import {GalleryContainer, SearchContainer, StyledContainer} from "./homeStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderComponent from "../slider/SliderComponent";
import Search from "../../container/Search";



const Home = () => {
    return (
        <>
            <StyledContainer>
                <SearchContainer>
                    <Search/>
                </SearchContainer>
                <GalleryContainer>
                    <SliderComponent/>
                </GalleryContainer>
            </StyledContainer>
        </>
    );
};

export default Home;