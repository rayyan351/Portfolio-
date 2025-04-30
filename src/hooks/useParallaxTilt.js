import { useRef } from 'react';

const useParallaxTilt = (maxTilt = 15) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top; 

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * -maxTilt;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  };
};

export default useParallaxTilt;
