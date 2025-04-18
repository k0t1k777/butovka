import { useParams } from 'react-router-dom';
import Img from './../assets/10.jpg';

const items = [
  { title: "Бытовка 15", img: Img },
  { title: "Бытовка 2", img: Img },
  { title: "Бытовка 3", img: Img },
  { title: "Бытовка 4", img: Img },
  { title: "Бытовка 77", img: Img },
  { title: "Бытовка 12", img: Img },
];

export default function ItemDetails() {
  const { id } = useParams();
  const item = items[parseInt(id || '0')];

  return (
    <section className=" py-16 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Подробности {item.title}</h1>

      <div className="max-w-6xl mx-auto">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-120 object-cover mb-8 rounded-lg shadow-lg"
        />
        <p className="text-lg text-gray-700 mb-8">
          Это подробное описание для карточки: {item.title}. Здесь вы можете рассказать больше о бытовке, ее особенностях и вариантах.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Похожие карточки</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((similarItem, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={similarItem.img}
                alt={similarItem.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{similarItem.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
