import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function Header() {
  return (
    <header className="border-b-2 border-stone-500 bg-yellow-400 px-4 py-3 uppercase flex items-center justify-between font-serif">
      <Link to="/" className="text-center uppercase tracking-[5px]">
        Fast Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
