import { useEffect, useRef } from 'react';
import { useRandomRainbowColor } from '@/hooks/useRandomRainbowColor';

const RandomColoredLinksContent = ({ content }) => {
  const contentRef = useRef(null);
  const getRandomColor = useRandomRainbowColor();

  useEffect(() => {
    if (contentRef.current) {
      const links = contentRef.current.getElementsByTagName('a');
      Array.from(links).forEach(link => {
        link.style.color = getRandomColor();
      });
    }
  }, [content, getRandomColor]);

  return (
    <div 
      ref={contentRef} 
      className="wordpress-content"
      dangerouslySetInnerHTML={{ __html: content }} 
    />
  );
};

export default RandomColoredLinksContent;