import { useParams } from 'react-router-dom';
import {
  butovki,
  modal,
  containers,
  summer,
  bathrooms,
  volers,
  karkas,
} from '../utills/constants';

export default function Category() {
  const { slug } = useParams();

  const getArrayBySlug = (slug: string | undefined) => {
    switch (slug) {
      case 'butovki':
        return butovki;
      case 'modal-buildings':
        return modal;
      case 'containers':
        return containers;
      case 'summer-houses':
        return summer;
      case 'bathrooms':
        return bathrooms;
      case 'volers':
        return volers;
      case 'karkas-buildings':
        return karkas;
      default:
        return [];
    }
  };

  const categoryItems = getArrayBySlug(slug);

  if (!categoryItems.length) {
    return (
      <section className="py-16 text-center">
        <h1 className="text-2xl text-gray-500">Карточки не найдены</h1>
      </section>
    );
  }

  return (
    <section className="text-center py-16 px-6 bg-transparent">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 capitalize">
        Категория: {slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {categoryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={item.img[0]}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
