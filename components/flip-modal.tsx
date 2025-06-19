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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-lg mx-4" style={{ perspective: 1200 }}>
        <div 
          className="flip-card-inner animate-flip"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flip-card-front bg-white border-0 p-0 flex flex-col overflow-hidden">
            {/* Header Bar */}
            <div className={`${tile.color} p-6 flex items-center justify-between`}>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 w-12 h-12 flex items-center justify-center">
                  {tile.icon && <tile.icon size={24} className="text-white" />}
                </div>
                <h2 className="text-2xl font-light text-white uppercase tracking-wide">{tile.title}</h2>
              </div>
              <button
                className="text-white/80 hover:text-white transition-colors duration-200 p-2 hover:bg-white/10"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={24} strokeWidth={1}/>
              </button>
            </div>
            
            {/* Content Area */}
            <div className="p-8 flex-1">
              <div className="text-gray-800 text-lg font-light leading-relaxed mb-6">
                {tile.content}
              </div>
              
              {/* Additional Content */}
              {children && (
                <div className="border-l-4 border-gray-300 pl-6 mt-8">
                  <div className="text-gray-600 text-sm font-light uppercase tracking-wider">
                    {children}
                  </div>
                </div>
              )}
            </div>
            
            {/* Bottom Action Bar */}
            <div className="bg-gray-100 px-8 py-4 border-t border-gray-200">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-gray-800 text-white px-8 py-3 uppercase text-sm font-medium tracking-wide hover:bg-gray-700 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .flip-card-inner {
          transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }
        .animate-flip {
          animation: flipIn 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        @keyframes flipIn {
          from {
            transform: rotateY(90deg) scale(0.9);
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