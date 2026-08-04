"use client";

import { useState, useRef } from 'react';

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  const handleMouseMove = (e) => {
    if (disabled || !magnetRef.current) return;

    // Retrieve element bounds to calculate hover distance offsets
    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distX = Math.abs(centerX - e.clientX);
    const distY = Math.abs(centerY - e.clientY);

    // Apply magnet attraction offset within specified padding boundary
    if (distX < width / 2 + padding && distY < height / 2 + padding) {
      setIsActive(true);
      const offsetX = (e.clientX - centerX) / magnetStrength;
      const offsetY = (e.clientY - centerY) / magnetStrength;
      setPosition({ x: offsetX, y: offsetY });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? activeTransition : inactiveTransition,
          willChange: 'transform'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
