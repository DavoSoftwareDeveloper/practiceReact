import { useEffect } from 'react';

function ScrollComponent({ targetId, axis="X", speed=0.85, reverse="", maxOffset=220}) {
  useEffect(() => {
    const handleScroll = () => {
            const counter = document.getElementById(targetId);
            const value = window.scrollY
            const offset = value * speed; 
            counter.style.transform = `translate${axis}(${reverse}${Math.min(offset, maxOffset)}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [targetId,speed,reverse,maxOffset]);

  return null; 
}

export default ScrollComponent;
