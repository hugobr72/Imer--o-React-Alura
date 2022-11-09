import config from '../config.json'
import Header from './Header'
import Menu from '../src/components/Menu'
import Timeline from './Timeline'
import { useState } from 'react'


const Home = () => {

  const [valorDoFiltro, setValorDoFiltro] = useState("");
  
  return (
    <>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>

        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} />
      </div>
    </>
  )
}

export default Home