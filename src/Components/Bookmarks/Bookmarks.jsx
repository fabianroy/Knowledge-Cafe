import PropTypes from 'prop-types';
import Bookmark from './../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 mt-10">
            <h2 className="text-3xl font-semibold bg-blue-500 w-fit mx-auto p-4 text-white rounded-xl">Bookmarks: {bookmarks.length}</h2>
            <p className='mt-10 bg-blue-500 rounded-xl'>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </p>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;