import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
interface PropertyCardProps {
  title: string;
  label: string;
  // image: string;
  images: string[];
  alt: string;
}

export function PropertyCard({ title, label, images, alt }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="overflow-hidden">
      <div className="h-68 relative group">
        <img
          src={images[currentImageIndex]}
          alt={alt}
          className="w-full h-full object-cover rounded-xl"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
        <div className="absolute bottom-12 left-4 text-white text-xs font-medium">
          {label}
        </div>

        <div className="absolute bottom-6 left-4 text-white">
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}

// <Card className="overflow-hidden">
//   <div className="h-48  relative">
//     <img src={image } alt={alt} className="w-full h-full object-cover  rounded-xl" />
//     <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded text-xs font-medium">{label}</div>
//     <div className="absolute bottom-4 left-4 text-white">
//       <h3 className="font-semibold">{title}</h3>
//     </div>
//   </div>
// </Card>
