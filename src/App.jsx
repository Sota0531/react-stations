// DO NOT DELETE

import './App.css'
import { useState} from 'react';
import Header from './Header';
import { Declaration } from 'postcss';
import Description from './Description';
import DogImage from './DogImage';
import DogListContainer from './DogListContainer';

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
      <Header/>
      <Description/>
      <DogListContainer/>
    </div>
  )
}
