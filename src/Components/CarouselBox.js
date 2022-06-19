import React, { Component } from 'react'
import Carousel from 'better-react-carousel'
import razmytIMG from './razmyt.jpg'
import razmyt2IMG from './razmyt2.jpg'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export default class CarouselBox extends Component {
    render() {
        return (
            
            <Carousel>
                <Carousel.Item>
                    <div class='imgblock'>
                    <img sclassName="d-block w-100" src={razmytIMG} alt='Утуки' />
                    {/* <Carousel.Caption> */}
                    <span>Утуки, республика Карелия</span>
                    </div>
                    <h3><a href="https://yandex.ru/maps/-/CCUJn8At8D">мы здесь</a></h3>
                    {/* </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                <div class='imgblock'>
                    <img sclassName="d-block w-100" src={razmyt2IMG} alt='Утуки' />
                    {/* <Carousel.Caption> */}
                    <span>Утуки, республика Карелия</span>
                    </div>

                    {/* <Carousel.Caption> */}
                    
                    
                    {/* </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        )
    }
}
