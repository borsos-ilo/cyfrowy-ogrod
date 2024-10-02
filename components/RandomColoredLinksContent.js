import { useEffect, useRef } from 'react';
import { useRandomRainbowColor } from '@/hooks/useRandomRainbowColor';

const RandomColoredLinksContent = ({ content }) => {
  const contentRef = useRef(null);
  const getRandomColor = useRandomRainbowColor();

  useEffect(() => {
    if (contentRef.current) {
      // Najpierw przekształcamy nagłówki w linki
      const headers = contentRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      headers.forEach(header => {
        if (!header.id) {
          header.id = header.textContent.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        }
        const wrapper = document.createElement('a');
        wrapper.href = `#${header.id}`;
        wrapper.style.color = 'inherit';
        wrapper.style.textDecoration = 'none';
        header.parentNode.insertBefore(wrapper, header);
        wrapper.appendChild(header);
      });

      // Teraz kolorujemy pozostałe linki
      const links = contentRef.current.getElementsByTagName('a');
      Array.from(links).forEach(link => {
        // Sprawdzamy, czy link nie zawiera nagłówka
        if (!link.querySelector('h1, h2, h3, h4, h5, h6')) {
          link.style.color = getRandomColor();
        }
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