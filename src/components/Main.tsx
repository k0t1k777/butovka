import { Link } from 'react-router-dom'; // Импортируем Link для создания ссылок
import Img from './../assets/10.jpg';

const items = [
  { title: "Бытовка 15", img: Img },
  { title: "Бытовка 2", img: Img },
  { title: "Бытовка 3", img: Img },
  { title: "Бытовка 4", img: Img },
  { title: "Бытовка 77", img: Img },
  { title: "Бытовка 12", img: Img },
];

export default function Main() {
  return (
    <section className="h-full text-center py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12 tracking-tight">
        Изготовление бытовок в Крыму
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {items.map((item, index) => (
          <Link
            key={index}
            to={`/item/${index}`}
            className="bg-white rounded-xl shadow-md overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300 z-0"></div>
            
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover transition-opacity duration-300 z-10"
            />
            
            <div className="p-4 z-10">
              <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
