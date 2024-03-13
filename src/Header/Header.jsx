
import image from '../assets/images/profile.png'

const Header = () => {
    return (
        <header className='md:flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Knowledge Cafe </h1>
          <img src={image} alt="" />
        </header>
    );
};

export default Header;