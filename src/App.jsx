import React from 'react'
import Slider from './components/Slider';


export function App  ()  {
  return (
    // <Routes>
    //   <Route path='/' element={<Home />} />
    // </Routes>
   
    <div className='max-w-2xl mx-auto py-10 flex justify-center items-center space-y-3 flex-col'>
        <div className='text-2xl font-bold text-gray-800'>Building Carousel with Splide.js</div>
        <div className=" bg-purple-600  rounded-lg py-10">
            <Slider 
                imageUrl="/src/assets/nature1.jpg " 
            />
        </div>
      </div>
  )
}

export default App
