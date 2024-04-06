import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingsTime, setReadingsTime] = useState(0)

  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleMarksAsRead = (time) => {
    setReadingsTime(readingsTime + time)
  }

  return (
    <>
      <Header />
      <div className='md:flex justify-between max-w-6xl mx-auto'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarksAsRead={handleMarksAsRead} />
        <Bookmarks bookmarks={bookmarks} readingsTime={readingsTime} />
      </div>
    </>
  )
}

export default App
