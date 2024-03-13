import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {

    const {title} = bookmark;

    return (
        <div className='p-2'>
            <h2 className='text-xl text-center bg-white p-4 rounded-xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;