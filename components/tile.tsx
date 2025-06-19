import React from "react";

export interface TileData {
  id: number;
  title: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  image?: string;
  color: string;
  size: "small" | "wide" | "tall" | "large";
  content?: React.ReactNode;
}

interface TileProps {
  tile: TileData;
  isDragging?: boolean;
  isDropTarget?: boolean;
  enableDragDrop?: boolean;
  onClick?: (id: number) => void;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function getSizeClasses(size: TileData["size"]): string {
  switch (size) {
    case "small":
      return "col-span-1 row-span-1 aspect-square";
    case "wide":
      return "col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 aspect-[2/1]";
    case "tall":
      return "col-span-1 row-span-2 aspect-[1/2]";
    case "large":
      return "col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2 aspect-square";
    default:
      return "col-span-1 row-span-1 aspect-square";
  }
}

const Tile: React.FC<TileProps> = ({
  tile,
  isDragging = false,
  isDropTarget = false,
  enableDragDrop = false,
  onClick,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
}) => {
  const IconComponent = tile.icon;
  
  return (
    <div
      key={tile.id}
      draggable={enableDragDrop}
      onDragStart={enableDragDrop ? onDragStart : undefined}
      onDragEnd={enableDragDrop ? onDragEnd : undefined}
      onDragOver={enableDragDrop ? onDragOver : undefined}
      onDragLeave={enableDragDrop ? onDragLeave : undefined}
      onDrop={enableDragDrop ? onDrop : undefined}
      onClick={() => onClick && onClick(tile.id)}
      className={`
        ${tile.color}
        ${getSizeClasses(tile.size)}
        rounded-none
        ${enableDragDrop ? "cursor-move" : "cursor-pointer"}
        relative
        overflow-hidden
        transition-all
        duration-300
        ease-in-out
        hover:scale-90
        hover:shadow-2xl
        hover:z-10
        group
        ${isDragging ? "opacity-100 scale-95" : ""}
        ${isDropTarget && enableDragDrop ? "ring-2 sm:ring-4 ring-white ring-opacity-50 scale-90" : ""}
        select-none
        touch-manipulation
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white to-transparent"></div>
      </div>

      {/* Background Image */}
      {tile.image && (
        <div className="absolute inset-0">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-opacity duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}

      {/* Drag Handle Indicator - Responsive */}
      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10">
        <div className="w-3 h-3 sm:w-4 sm:h-4 grid grid-cols-2 gap-0.5">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Content Container - Responsive */}
      <div className="relative h-full p-2 sm:p-3 md:p-4 flex flex-col justify-between text-white z-10">
        {/* Icon or Image Icon - Responsive Sizing */}
        {IconComponent ? (
          <div className="flex justify-start">
            <IconComponent
              size={
                tile.size === "large"
                  ? typeof window !== "undefined" && window.innerWidth < 640
                    ? 32
                    : typeof window !== "undefined" && window.innerWidth < 768
                    ? 40
                    : 48
                  : tile.size === "wide" || tile.size === "tall"
                  ? typeof window !== "undefined" && window.innerWidth < 640
                    ? 24
                    : typeof window !== "undefined" && window.innerWidth < 768
                    ? 30
                    : 36
                  : typeof window !== "undefined" && window.innerWidth < 640
                  ? 20
                  : typeof window !== "undefined" && window.innerWidth < 768
                  ? 24
                  : 28
              }
              className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ) : <div>&nbsp;</div>}

        {/* Title and Content - Responsive Text */}
        <div className="flex flex-col justify-end">
          <h3
            className={`font-semibold mb-1 drop-shadow-md ${
              tile.size === "large"
                ? "text-sm sm:text-base md:text-lg lg:text-xl"
                : tile.size === "wide" || tile.size === "tall"
                ? "text-xs sm:text-sm md:text-base lg:text-lg"
                : "text-xs sm:text-sm md:text-base"
            }`}
          >
            {tile.title}
          </h3>
          <p
            className={`text-white text-opacity-90 leading-tight drop-shadow-sm ${
              tile.size === "large"
                ? "text-xs sm:text-sm"
                : tile.size === "wide" || tile.size === "tall"
                ? "text-xs"
                : "text-xs hidden sm:block"
            }`}
          >
            {tile.content}
          </p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
      </div>

      {/* Active/Selected Indicator - Responsive */}
      <div className="absolute top-1 right-1 sm:top-2 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-white bg-opacity-30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    </div>
  );
};

export default Tile; 