import { albumsData, songsData } from "../assets/assets"
import AlbumItem from "./AlbumItem"
import Navbar from "./Navbar"
import SongItem from "./SongItem"

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="m-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((items, index) => (<AlbumItem key={index} name={items.name} desc={items.desc} id={items.id} image={items.image} />))}
        </div>
      </div>
      <div className="m-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto">
            {songsData.map((items,index)=> (<SongItem key={index} name={items.name} desc={items.desc} id={items.id} image={items.image}/>))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome
