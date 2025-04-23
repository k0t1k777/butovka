import { useParams } from "react-router-dom";
import { useState } from "react";
import {
  butovki, modal, containers, summer, bathrooms, volers, karkas,
} from "../utills/constants";
import Modal from "./Modal";

export default function ItemDetail() {
  const { slug, id } = useParams<{ slug: string; id: string }>();

  const getArrayBySlug = (slug: string | undefined) => {
    switch (slug) {
      case 'butovki': return butovki;
      case 'modal-buildings': return modal;
      case 'containers': return containers;
      case 'summer-houses': return summer;
      case 'bathrooms': return bathrooms;
      case 'volers': return volers;
      case 'karkas-buildings': return karkas;
      default: return [];
    }
  };

  const items = getArrayBySlug(slug);
  const item = items[parseInt(id || "0")];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + item.img.length) % item.img.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % item.img.length);
  };

  if (!item) {
    return (
      <section className="text-center py-16">
        <h1 className="text-2xl text-gray-500">Карточка не найдена</h1>
      </section>
    );
  }

  return (
    <section className="h-full py-16 px-6 bg-transparent max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
          <p className="text-lg text-gray-700 mb-6">
            Это короткое описание для: <strong>{item.title}</strong>. Здесь может быть техническая информация, особенности и преимущества.
          </p>
        </div>

        <div>
          <img
            src={item.img[0]}
            alt={item.title}
            className="w-full h-80 object-cover rounded-lg mb-4 shadow cursor-pointer"
            onClick={() => openModal(0)}
          />
          <div className="grid grid-cols-2 gap-4">
            {item.img.slice(1).map((imgSrc, index) => (
              <img
                key={index + 1}
                src={imgSrc}
                alt={`${item.title} ${index + 1}`}
                className="w-full h-32 object-cover rounded shadow cursor-pointer"
                onClick={() => openModal(index + 1)}
              />
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal item={item} currentIndex={currentIndex} closeModal={closeModal} prevImage={prevImage} nextImage={nextImage}/>
      )}
    </section>
  );
}
