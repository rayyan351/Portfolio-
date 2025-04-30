import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const addMouseListeners = () => {
      document.addEventListener('mousemove', (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      });

      document.addEventListener('mousedown', () => setClicked(true));
      document.addEventListener('mouseup', () => setClicked(false));
    };

    addMouseListeners();
    return () => {
      document.removeEventListener('mousemove', () => {});
      document.removeEventListener('mousedown', () => {});
      document.removeEventListener('mouseup', () => {});
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${clicked ? 'clicked' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

export default CustomCursor;
