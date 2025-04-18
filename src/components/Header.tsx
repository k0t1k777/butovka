import Logo from "./../assets/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Лого" className="h-10" />
          <span className="text-2xl font-extrabold text-gray-800">Компания</span>
        </div>

        <div className="text-center text-lg font-medium text-gray-800 hidden md:block">
          Адрес, Москва и т.д.
        </div>

        <div className="text-right text-sm text-gray-600">
          <div className="flex flex-col space-y-2">
            <div>
              <a 
                href="tel:+79781234567" 
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                📞 +7 (978) 123-45-67
              </a>
            </div>
            <div>
              <a 
                href="mailto:info@example.com" 
                className="text-blue-500 hover:text-blue-700 transition duration-300"
              >
                ✉ info@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
