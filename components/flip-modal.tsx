import React from "react";
import { TileData } from "@/components/tile";
import { X } from "lucide-react";

interface FlipModalProps {
  tile: TileData;
  onClose: () => void;
  children?: React.ReactNode;
}

const FlipModal: React.FC<FlipModalProps> = ({ tile, onClose, children }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-md p-6" style={{ perspective: 1200 }}>
        <div 
          className="flip-card-inner animate-flip"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flip-card-front bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={onClose}
              aria-label="Close"
            >
              <X size={32}/>
            </button>
            <div className={`mb-4 ${tile.color} rounded-full w-16 h-16 flex items-center justify-center`}>
              {tile.icon && <tile.icon size={32} className="" />}
            </div>
            <h2 className="text-xl font-bold mb-2 text-center text-gray-900">{tile.title}</h2>
            <div className="text-gray-700 text-center mb-4">{tile.content}</div>
            {/* Dynamic content area: you can add more custom rendering here */}
            <div className="mt-4">
              <span className="text-xs text-gray-400">{children}</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flip-card-inner {
          transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .animate-flip {
          animation: flipIn 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        @keyframes flipIn {
          from {
            transform: rotateY(90deg) scale(0.8);
            opacity: 0;
          }
          to {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default FlipModal; 