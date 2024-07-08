// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h1 id = "title"> dog app</h1>
      </header>
      <body>
        <h2 id = "siteDescription">犬の画像が見れます</h2>
        <img src = 'https://images.dog.ceo/breeds/entlebucher/n02108000_2064.jpg'></img>
      </body>
      
    </div>
  )
}
