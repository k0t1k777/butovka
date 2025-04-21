import { Link } from "react-router-dom";

export default function Navigation() {
  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'О нас', path: '/about' },
    { label: 'Каталог', path: '/catalog' },
    { label: 'Цены', path: '/prices' },
    { label: 'Доставка', path: '/delivery' },
    { label: 'Отзывы', path: '/reviews' },
    { label: 'Контакты', path: '/contacts' },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-6 px-6 py-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="text-xl font-semibold px-6 py-3 rounded-lg cursor-pointer transition duration-300 hover:bg-white hover:text-purple-600 hover:shadow-md"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
