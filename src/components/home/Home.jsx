import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncAllImages, selectAllGalaxyImg, selectStatus} from "../../store/galaxySlice";
import SearchEndData from "../../container/SearchEndData";
import SearchStartData from "../../container/SearchStartData";
import {GalleryContainer, SearchContainer, StyledContainer} from "./homeStyled";

const Home = () => {
    let allGalaxyImg = useSelector((state) => state.galaxy.galaxy);
    const status = useSelector(selectStatus);
    const [data, setData] = useState();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAsyncAllImages())
    }, [dispatch]);
    console.log(allGalaxyImg);
    return (
        <>
            <StyledContainer>
                <SearchContainer>
                    <SearchStartData/>
                    <SearchEndData/>
                </SearchContainer>
                <GalleryContainer>

                </GalleryContainer>


            </StyledContainer>
        </>
    );
};

export default Home;