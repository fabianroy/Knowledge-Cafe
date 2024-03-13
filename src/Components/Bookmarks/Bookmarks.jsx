import PropTypes from 'prop-types';
import Bookmark from './../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 mt-10">
            <div>
                <h3 className='text-3xl text-center bg-black text-white p-4 rounded-xl shadow-xl'>Reading Time : {readingTime} min</h3>
            </div>
            <div className='bg-blue-500 mt-10 rounded-xl'>
                <h2 className="text-3xl text-center p-4 text-white rounded-xl shadow-xl">Bookmarks : {bookmarks.length} Blogs</h2>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }

            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;