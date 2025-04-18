export default function Navigation() {
  const navItems = [
    'Главная',
    'О нас',
    'Каталог',
    'Цены',
    'Доставка',
    'Отзывы',
    'Контакты'
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-6 px-6 py-8">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="text-xl font-semibold px-6 py-3 rounded-lg cursor-pointer transition duration-300 hover:bg-white hover:text-purple-600 hover:shadow-md"
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}
