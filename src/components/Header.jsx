const Header = () => {
    return (
      <header className="flex justify-between items-center px-10 py-4 shadow-md">
        {/* Logo Section */}
        <div>
          <img src="/images/appLogo.png" alt="Logo" className="w-32 object-contain" />
        </div>
  
        {/* Nav Items */}
        <nav>
          <ul className="flex gap-x-10 text-lg font-medium text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Swiggy Corporate</li>
            <li className="hover:text-orange-500 cursor-pointer">Search</li>
            <li className="hover:text-orange-500 cursor-pointer">Offers</li>
            <li className="hover:text-orange-500 cursor-pointer">Help</li>
            <li className="hover:text-orange-500 cursor-pointer">Cart</li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;
  