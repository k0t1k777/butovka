import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface ModalProps {
    item: {
      img: string[];
      title: string;
      [key: string]: any;
    };
    currentIndex: number;
    closeModal: () => void;
    prevImage: () => void;
    nextImage: () => void;
  }
  
  export default function Modal({
    item,
    currentIndex,
    closeModal,
    prevImage,
    nextImage,
  }: ModalProps) {

  return (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.img[currentIndex]}
              alt={`Фото ${currentIndex}`}
              className="max-h-[80vh] w-full object-contain rounded"
            />

            <button
              onClick={prevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>

            <button
              onClick={closeModal}
              className="absolute top-6 right-8 bg-white bg-opacity-80 rounded-full p-2"
            >
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
  );
}
