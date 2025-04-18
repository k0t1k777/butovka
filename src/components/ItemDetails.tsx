import { Link, useLocation } from 'react-router-dom';
import { items } from './Main'; // импорт данных

export default function ItemDetails() {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return (
      <section className="py-16 text-center">
        <h1 className="text-2xl text-gray-500">Карточка не найдена</h1>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
        Подробности {item.title}
      </h1>

      <div className="max-w-6xl mx-auto">
        {item.img.map((src: string, index: number) => (
          <img
            key={index}
            src={src}
            alt={`${item.title} ${index}`}
            className="w-full h-120 object-cover mb-8 rounded-lg shadow-lg"
          />
        ))}

        <p className="text-lg text-gray-700 mb-12">
          Это подробное описание для карточки: {item.title}. Здесь вы можете рассказать больше о бытовке, ее особенностях и вариантах.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Похожие карточки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items
            .filter(similar => similar.title !== item.title)
            .slice(0, 3)
            .map((similarItem, index) => (
              <Link
                key={index}
                to={`/item/${index}`}
                state={{ item: similarItem }}
                className="bg-white rounded-xl shadow-md overflow-hidden block transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={similarItem.img[0]}
                  alt={similarItem.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{similarItem.title}</h3>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
