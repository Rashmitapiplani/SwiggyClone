import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 py-4 shadow-md">
      {/* Logo Section */}
      <div>
        <Link to="/">
          <img src="/images/appLogo.png" alt="Logo" className="w-32 object-contain" />
        </Link>
      </div>

      {/* Nav Items */}
      <nav>
        <ul className="flex gap-x-10 text-lg font-medium text-gray-700">
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/corporate">Swiggy Corporate</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/search">Search</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/offers">Offers</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/help">Help</Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
