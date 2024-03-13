import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 max-w-7xl mx-auto py-5'>
            <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
            <img className='w-16' src='/src/assets/images/boy1.png' alt="" />
        </header>
    );
};

export default Header;