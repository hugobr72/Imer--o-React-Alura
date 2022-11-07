import config from '../config.json'
import { CSSReset } from '../src/components/CSSReset'
import Header from './Header'
import Menu from '../src/components/Menu'
import Timeline from './Timeline'

const Home = () => {
  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>

        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  )
}

export default Home