import './App.css'
import Header from './Components/Header';
import Blogs from './Components/Blogs/Blogs';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {

  //Bookmarks
  const [bookmarks, setBookmarks] = useState([])

  //Reading Time
  const [readingTime, setReadingTime] = useState(0);

  // Bookmarks Handle
  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  //Reading Time Handle
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Remove the read blog from the bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>

      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-10'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>

    </>
  )
}

export default App
