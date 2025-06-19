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
  Rss,
  MapPin,
  Briefcase,
} from "lucide-react";
import Tile, { TileData } from "@/components/tile";
import FlipModal from "@/components/flip-modal";
import DragDropWrapper from "@/components/drag-drop-wrapper";
import Link from "next/link";

interface DraggedTile {
  tile: TileData;
  index: number;
}

interface MetroGridProps {
  enableDragDrop?: boolean;
}

const MetroGrid: React.FC<MetroGridProps> = ({ enableDragDrop = false }) => {
  const [tiles, setTiles] = useState<TileData[]>([
    {
      id: 7,
      title: "Home",
      icon: Home,
      color: "[#1a2238] bg-[#f6c700]",
      size: "large",
      image: "/images/home-img.png",
      content: "Welcome to HCML!",
    },
    {
      id: 8,
      title: "About Us",
      icon: User,
      color: "bg-[#14213d] text-white",
      size: "small",
      content: "HCML",
    },
    {
      id: 1,
      title: "Mail",
      icon: Mail,
      color: "bg-[#1a2238] text-white",
      size: "small",
      content: <Link href="mailto:wbs.hcml.co.id">wbs.hcml.co.id</Link>,
    },
    {
      id: 2,
      title: "Phone",
      icon: Phone,
      color: "bg-[#008080] text-[#f6c700]",
      size: "small",
      content: "+622150806600",
    },
    {
      id: 9,
      title: "Kang An",
      image: "/images/kang-an.jpg",
      color: "bg-[#ff9900] text-[#1a2238]",
      size: "small",
      content: "General Manager",
    },
    {
      id: 4,
      title: "Work Plan",
      color: "bg-[#008080] text-white",
      size: "wide",
      image: "/images/work-plan.jpg",
      // content: "247 photos",
    },
    
    {
      id: 3,
      title: "BD Field",
      image: "/images/bd-field.jpg",
      color: "bg-[#14213d] text-white",
      size: "wide",
    },
    {
      id: 5,
      title: "MDA & MBH Field",
      image: "/images/mda-mbh-field.jpg",
      color: "bg-[#f6c700] text-[#1a2238]",
      size: "wide",
    },
    {
      id: 14,
      title: "Operational",
      icon: Briefcase,
      color: "bg-[#14213d] text-[#f6c700]",
      size: "wide",
      // content: "72°F Sunny",
    },
    {
      id: 12,
      title: "ISEB Building",
      icon: MapPin,
      color: "bg-[#008080] text-white",
      size: "small",
      content: "Jakarta Office",
    },
    {
      id: 13,
      title: "Intiland Tower",
      icon: MapPin,
      color: "bg-[#23272f] text-white",
      size: "small",
      content: "Surabaya Office",
    },

    {
      id: 11,
      title: "Career",
      icon: Star,
      color: "bg-[#1a2238] text-white",
      size: "small",
      content: "Join Us",
    },
    {
      id: 6,
      title: "News",
      icon: Rss,
      color: "bg-[#ff9900] text-white",
      size: "wide",
      content: "5 updates",
    },
  ]);

  const [selectedTile, setSelectedTile] = useState<TileData | null>(null);

  const handleTileClick = (tileId: number) => {
    const tile = tiles.find((t) => t.id === tileId);
    if (tile) setSelectedTile(tile);
  };

  const handleTilesReorder = (newTiles: TileData[]) => {
    setTiles(newTiles);
  };

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:my-6 md:my-12 ">
          <strong>HCML</strong> - Husky-CNOOC Madura Limited
        </h1>

        <DragDropWrapper
          tiles={tiles}
          onTilesReorder={handleTilesReorder}
          enableDragDrop={enableDragDrop}
        >
          {({
            tiles: currentTiles,
            draggedTile,
            dragOverIndex,
            handleDragStart,
            handleDragEnd,
            handleDragOver,
            handleDragLeave,
            handleDrop,
          }) => (
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-0 auto-rows-min">
              {currentTiles.map((tile, index) => {
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
          )}
        </DragDropWrapper>

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
