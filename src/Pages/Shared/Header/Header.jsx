import Logo from '../../../assets/logo.png';
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center space-y-2 mt-5'>
            
             <img className='mx-auto' src={Logo} alt="" />
             <h3 className='text-xl text-gray-500'>Journalism Without Fear or Favour</h3>
             <h3 className='text-xl text-gray-500'>{moment().format("dddd, MMMM D, YYYY")}</h3>
            
        </div>
    );
};

export default Header;