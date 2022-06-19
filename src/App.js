import React from 'react'
import './App.css'

import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarouselBox from './Components/CarouselBox'


function App() {
  return (
    <div>
      <Header />
      <CarouselBox />
      <a class="el-content uk-button uk-button-default uk-button-large" href="ьь">

        ЗАБРОНИРОВАТЬ

      </a>
      <p>
        О НАС
      </p>
      <h2 class="uk-heading-medium uk-text-left uk-scrollspy-inview " uk-scrollspy-class="" >     О НАС    </h2>





    </div>
  )
}

export default App
