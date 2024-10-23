// @ts-check
import { useState } from 'react';
import DogImage from './DogImage';
import './App.css'
export const Description = () => {
  const [dogUrl, setdogUrl] = useState('https:\/\/images.dog.ceo\/breeds\/wolfhound-irish\/n02090721_2170.jpg');
  async function changeImg(){
    let document =  await fetch("https://dog.ceo/api/breeds/image/random");
    let infos = await document.json();
    setdogUrl(infos.message);
  }
  return(
    <div>
      
        <h2 id = "siteDescription">犬の画像が見れます</h2>
        <DogImage imageUrl = {dogUrl}/>
        <button onClick={changeImg}>変更</button>
      
    </div>
    
  );
}

export default Description
