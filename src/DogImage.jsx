// @ts-check
import './App.css'
// @ts-ignore
export const DogImage = (url) => {
  return (
    <div>
      <img id = "dogImg" src = {url.imageUrl} alt = "dog"/>
    </div>
  )
}

export default DogImage
