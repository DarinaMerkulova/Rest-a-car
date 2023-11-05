import { useSelector } from "react-redux"

const FavouriteList = () => {
    const favouriteCars = useSelector(state => state.favourite.favouriteCars)

console.log(favouriteCars)
    

  return (
    
    <div>
      
    </div>
  )
}

export default FavouriteList
