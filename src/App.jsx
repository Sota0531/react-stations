// DO NOT DELETE

import './App.css'
import { useState } from 'react';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setdogUrl] = useState('https://images.dog.ceo/breeds/entlebucher/n02108000_2064.jpg');
  async function changeImg(){
    let document =  await fetch("https://dog.ceo/api/breeds/image/random");
    let infos = await document.json();
    setdogUrl(infos.message);
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
