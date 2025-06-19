"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  Calendar,
  Camera,
  Music,
  Settings,
  Home,
  User,
  Search,
  Heart,
  Star,
  Clock,
} from "lucide-react";
import Tile, { TileData } from "@/components/tile";
import FlipModal from "@/components/flip-modal";

// Define types for tile and drag state
interface Tile {
  id: number;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  size: 'small' | 'wide' | 'tall' | 'large';
  content: string;
}

interface DraggedTile {
  tile: Tile;
  index: number;
}

interface MetroGridProps {
  enableDragDrop?: boolean;
}

const MetroGrid: React.FC<MetroGridProps> = ({ enableDragDrop = false }) => {
  const [tiles, setTiles] = useState<TileData[]>([
    {
      id: 1,
      title: "Mail",
      icon: Mail,
      color: "bg-[#1a2238] text-white",
      size: "small",
      content: "12 new messages",
    },
    {
      id: 2,
      title: "Phone",
      icon: Phone,
      color: "bg-[#23272f] text-[#f6c700]",
      size: "small",
      content: "3 missed calls",
    },
    {
      id: 3,
      title: "Calendar",
      icon: Calendar,
      color: "bg-[#14213d] text-white",
      size: "wide",
      content: "Meeting at 3 PM",
    },
    {
      id: 4,
      title: "Camera",
      icon: Camera,
      color: "bg-[#008080] text-white",
      size: "wide",
      content: "247 photos",
    },
    {
      id: 5,
      title: "Music",
      icon: Music,
      color: "bg-[#f6c700] text-[#1a2238]",
      size: "small",
      content: "Now playing...",
    },
    {
      id: 6,
      title: "Settings",
      icon: Settings,
      color: "bg-[#23272f] text-white",
      size: "small",
      content: "5 updates",
    },
    {
      id: 7,
      title: "Home",
      icon: Home,
      color: "[#1a2238] bg-[#f6c700]",
      size: "large",
      content: "Welcome back!",
    },
    {
      id: 8,
      title: "Profile",
      icon: User,
      color: "bg-[#14213d] text-white",
      size: "small",
      content: "John Doe",
    },
    {
      id: 9,
      title: "Search",
      icon: Search,
      color: "bg-[#ff9900] text-[#1a2238]",
      size: "wide",
      content: "Find anything...",
    },
    {
      id: 10,
      title: "Favorites",
      icon: Heart,
      color: "bg-[#23272f] text-[#f6c700]",
      size: "small",
      content: "24 items",
    },
    {
      id: 11,
      title: "Reviews",
      icon: Star,
      color: "bg-[#1a2238] text-white",
      size: "small",
      content: "4.8 stars",
    },
    {
      id: 12,
      title: "Recent",
      icon: Clock,
      color: "bg-[#008080] text-white",
      size: "wide",
      content: "Last activity",
    },
    {
      id: 13,
      title: "Gallery",
      icon: Camera,
      color: "bg-[#23272f] text-white",
      size: "wide",
      content: "Photo strip",
    },
    {
      id: 14,
      title: "Weather",
      icon: Star,
      color: "bg-[#14213d] text-[#f6c700]",
      size: "wide",
      content: "72°F Sunny",
    },
  ]);

  const [draggedTile, setDraggedTile] = useState<DraggedTile | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [selectedTile, setSelectedTile] = useState<TileData | null>(null);

  const getSizeClasses = (size: Tile['size']): string => {
    switch (size) {
      case "small": // 1:1 ratio - responsive spans
        return "col-span-1 row-span-1 aspect-square";
      case "wide": // 2:1 ratio - responsive spans
        return "col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-1 aspect-[2/1]";
      case "tall": // 1:2 ratio - responsive spans
        return "col-span-1 row-span-2 aspect-[1/2]";
      case "large": // 2:2 ratio - adaptive sizing
        return "col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2 row-span-2 aspect-square";
      default:
        return "col-span-1 row-span-1 aspect-square";
    }
  };

  const handleTileClick = (tileId: number) => {
    const tile = tiles.find((t) => t.id === tileId);
    if (tile) setSelectedTile(tile);
  };

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    tile: Tile,
    index: number
  ) => {
    setDraggedTile({ tile, index });
    e.dataTransfer.effectAllowed = "move";
    if (e.target instanceof HTMLDivElement) {
      e.dataTransfer.setData("text/html", e.target.outerHTML);
      e.target.style.opacity = "0.5";
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      e.target.style.opacity = "1";
    }
    setDraggedTile(null);
    setDragOverIndex(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();

    if (!draggedTile || draggedTile.index === dropIndex) {
      setDragOverIndex(null);
      return;
    }

    const newTiles = [...tiles];
    const draggedItem = newTiles[draggedTile.index];

    // Remove the dragged item
    newTiles.splice(draggedTile.index, 1);

    // Insert at new position
    const insertIndex =
      draggedTile.index < dropIndex ? dropIndex - 1 : dropIndex;
    newTiles.splice(insertIndex, 0, draggedItem);

    setTiles(newTiles);
    setDraggedTile(null);
    setDragOverIndex(null);
  };

  return (
    <div className="  p-3 sm:p-4 md:p-6 ">
      <div className="max-w-7xl mx-auto ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 sm:my-6 md:my-12">
          Metro Dashboard
        </h1>

        {/* Main Grid Container - Fully Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6  xl:grid-cols-8 gap-0  auto-rows-min">
          {tiles.map((tile, index) => {
            const isDragging = draggedTile?.index === index;
            const isDropTarget = dragOverIndex === index;
            return (
              <Tile
                key={tile.id}
                tile={tile}
                isDragging={isDragging}
                isDropTarget={isDropTarget}
                enableDragDrop={enableDragDrop}
                onClick={handleTileClick}
                onDragStart={(e) => handleDragStart(e, tile, index)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
              />
            );
          })}
        </div>
        {selectedTile && (
          <FlipModal
            tile={selectedTile}
            onClose={() => setSelectedTile(null)}
          />
        )}
      </div>
    </div>
  );
};

export default MetroGrid;
