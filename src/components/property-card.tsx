interface PropertyCardProps {
  label: string;
  image: string;
  alt: string;
}

export function PropertyCard({ image, alt }: PropertyCardProps) {
  return (
    <div>
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute left-4 px-2 py-1 rounded text-xs font-medium"></div>
    </div>
  );
}
