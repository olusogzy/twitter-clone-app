import Image from 'next/image'
import Sidebar from './components/sidebar/Sidebar'
import NavLogo from './components/NavLogo/NavLogo'
import Timeline from './components/TImeline/Timeline'
import './globals.css'
import SearchBar from './components/SearchBar/SearchBar'
import Subscibe from './components/SUbscribe/Subscibe'
import Trending from './components/Trending/Trending'
import MessageSlideHead from './components/MessageSlideHead/MessageSlideHead'
import './page.css'
export default function Home() {
  return (
  <div className='div-set'>
    <div className='flex home-set'>
      <div className='nav-side ps-16'
        style={{height : '100vh'}}
      >
        <NavLogo />
        <Sidebar />
      </div>
      <div className='timeline-post'>
        <Timeline />
      </div>
      <div>
        <SearchBar />
        <Subscibe />
        <Trending />
      </div>
    </div>
    <div className='message-set'>
      <MessageSlideHead />
    </div>
  </div>
  )
}
