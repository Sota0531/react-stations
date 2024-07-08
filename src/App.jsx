// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setdogUrl] = useState('https://images.dog.ceo/breeds/entlebucher/n02108000_2064.jpg');
  function changeImg(){
    setdogUrl('https://images.dog.ceo/breeds/poodle-toy/n02113624_3159.jpg');
  }
  return (
    <div>
      <header>
        <h1 id = "title"> dog app</h1>
      </header>
      <body>
        <h2 id = "siteDescription">犬の画像が見れます</h2>    
        
        <img src = {dogUrl}></img>
        <button onClick={changeImg}>変更</button>
      </body>
      
    </div>
  )
}
