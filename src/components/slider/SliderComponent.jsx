import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector} from "react-redux";
import { selectStatus} from "../../store/galaxySlice";
import {CustomDot, SliderItem, TopSlider,} from "./sliderStyled";
import GallerySlide from "../slidePage/GallerySlide";

import axios from "axios";
import {Img, StyledSlide} from "../slidePage/slydePageStyled";

const SliderComponent = () => {
    let allGalaxyImg = useSelector((state) => state?.galaxy?.galaxy);
    const status = useSelector(selectStatus);
    const [todayImage, setTodayImage] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const nowDate = new Date().toISOString().split('T')[0];
                const res = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=m1sNxbIbSh9l0evJ29kMHT619HKpWeX1YpEbh03V&date=${nowDate}`);
                setTodayImage(res.data);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    var settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        customPaging: () => <CustomDot></CustomDot>,

        responsive: [{
            breakpoint: 1440, settings: {},
        }, {
            breakpoint: 1024, settings: {}
        }, {
            breakpoint: 640, settings: {},

        },


        ],

    };
    return (<>

        <TopSlider>
            <Slider{...settings}>
                {status === "loading" ? ( <StyledSlide><Img src={todayImage.url} alt={todayImage.title}/></StyledSlide>) : (
                    allGalaxyImg.map((item, index) => {
                        return (<>
                            <SliderItem key={index}>
                                <GallerySlide key={index} item={item}/>
                            </SliderItem>

                        </>);
                    })
                )}

            </Slider>

        </TopSlider>


    </>);
};


export default SliderComponent;
