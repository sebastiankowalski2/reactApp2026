import React from 'react'
import './App.css'
import Header from '../Header/Header.jsx'
import Landscapes from '../Landscapes/Landscapes.jsx'
import gora1 from '../../assets/images/gora1.jpg'
import gora2 from '../../assets/images/gora2.jpeg'
import gora3 from '../../assets/images/gora3.webp'
import gora4 from '../../assets/images/gora4.jpg'

function App() {
  return (
    <>
      <Header />
      <Landscapes
        img={gora1}
        location="JAPAN"
        mapLink="https://maps.app.goo.gl/Z1mUHP9kwoW7EQBXA"
        title="Mount Fuji"
        date="12 Jan, 2021 - 24 Jan, 2021"
        description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). It is an active stratovolcano that last erupted in 1707-1708. Mount Fuji is a popular destination for tourists and climbers, and it is also a symbol of Japan."
      />
      <Landscapes
        img={gora2}
        location="CHINA"
        mapLink="https://maps.app.goo.gl/CKv3MaoXdsqnUbwh9"
        title="Mount Luma"
        date="5 Jan, 2018 - 01 Aug, 2021"
        description="Mount Luma is a majestic mountain in China, known for its stunning views and challenging trails. It attracts hikers and nature enthusiasts from around the world."
      />
      <Landscapes
        img={gora3}
        location="KOREA"
        mapLink="https://maps.app.goo.gl/i5sV4Buo4GcHLgLQ7"
        title="Mount Paradise"
        date="12 Jan, 2019 - 24 Jan, 2021"
        description="Mount Paradise is a beautiful mountain in Korea, famous for its lush forests and serene atmosphere. It is a popular spot for camping and outdoor activities."
      />
      <Landscapes
        img={gora4}
        location="ITALY"
        mapLink="https://maps.app.goo.gl/7J4ZfEoDeqvVRuyz9"
        title="Mount Everest"
        date="29 Jan, 2022 - 12 Mar, 2024"
        description="Mount Everest is the highest mountain in the world, located in the Himalayas on the border between Nepal and China. It stands at 8,848 meters (29,029 feet) and is a popular destination for climbers and adventurers."
      />
    </>
  )
}

export default App
