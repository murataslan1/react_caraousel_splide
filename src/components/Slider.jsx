import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import "@splidejs/splide/dist/css/splide.min.css";



  export  function Slider({imageUrl}){
    return (
        <Splide options={{
            type: 'loop',
            rewind:true, 
            autoplay: true,
            perMove: 1,
            perPage: 2, 
            gap: '2rem',
            arrows: false,
            pagination: false,
            autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: 2
            },
         }}
        extensions={{ AutoScroll }}> 
        <SplideSlide>
            <img src={imageUrl}/>
        </SplideSlide>
       </Splide>

    )
  }
  export default Slider
  

