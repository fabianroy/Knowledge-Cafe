import PropTypes from 'prop-types';
import { IoBookmark } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mt-10 mb-20 shadow-xl p-8 rounded-xl'>
            <img className='w-full rounded-xl mb-5' src={cover} alt={`cover picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-5 items-center mb-5'>
                    <img className='w-16 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <span className='text-sm'>{posted_date}</span>
                    </div>
                </div>
                <div className='flex items-start'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-2xl ml-3 text-blue-600'><IoBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-5">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a className='mr-2 text-blue-500'>#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className='text-lg text-blue-600 mt-6 border-2 px-2 border-blue-500 rounded-xl'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blog;