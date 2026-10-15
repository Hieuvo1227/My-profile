import React from 'react';

interface RetroCardProps {
  children: React.ReactNode;
  className?: string;
  hasSquareTopRight?: boolean;
  cornerClass?: string;
}

export default function RetroCard({
  children,
  className = "",
  hasSquareTopRight = true,
  cornerClass = "text-terminal-green"
}: RetroCardProps) {
  return (
    <div className={`relative bg-[#0c1017]/90 border border-[#1f2937] hover:border-terminal-green/60 transition-all duration-300 ${className}`}>
      {/* Top Left Bracket */}
      <span className={`absolute top-1.5 left-2 ${cornerClass} text-[11px] font-mono leading-none select-none pointer-events-none z-10`}>┌</span>
      
      {/* Top Right Marker */}
      {hasSquareTopRight ? (
        <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-terminal-green select-none pointer-events-none z-10" />
      ) : (
        <span className={`absolute top-1.5 right-2 ${cornerClass} text-[11px] font-mono leading-none select-none pointer-events-none z-10`}>┐</span>
      )}
      
      {/* Bottom Left Bracket */}
      <span className={`absolute bottom-1.5 left-2 ${cornerClass} text-[11px] font-mono leading-none select-none pointer-events-none z-10`}>└</span>
      
      {/* Bottom Right Bracket */}
      <span className={`absolute bottom-1.5 right-2 ${cornerClass} text-[11px] font-mono leading-none select-none pointer-events-none z-10`}>┘</span>

      {children}
    </div>
  );
}
