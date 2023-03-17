import React from 'react';
import './Home.css';
import Product from './Product.js'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className='home__image' src='https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg' alt=''/>

        <div className="home__row">
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg"
          rating={5}
          />
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg"
          rating={5}
          />
        </div>

        <div className='home__row'>
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg"
          rating={5}
          />
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg"
          rating={5}
          />
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg"
          rating={5}
          />
        </div>

        <div className='home__row'>
          <Product 
          title="The lean startup"
          price={29.99}
          image="https://orion-uploads.openroadmedia.com/sm_f7e651-tolkien-lordoftherings.jpg"
          rating={5}
          />
        </div>

      </div>
    </div>
  )
}

export default Home