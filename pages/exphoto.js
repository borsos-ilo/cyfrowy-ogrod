import React, { useState, useEffect } from 'react';
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function ExPhoto() {
  const [grid, setGrid] = useState([]);
  const [counter, setCounter] = useState({ count: 0, percentage: 0 });

  const folders = ['isti', 'ilo'];
  const imageCount = 25;

  const getRandomImage = () => {
    const randomFolder = folders[Math.floor(Math.random() * folders.length)];
    return `images/${randomFolder}`;
  };

  const generateGrid = () => {
    let newGrid = [];
    let iloCount = 0;

    for (let i = 1; i <= 25; i++) {
      const path = getRandomImage();
      newGrid.push({ path, number: i });
      if (path.includes('ilo')) {
        iloCount++;
      }
    }

    setGrid(newGrid);
    setCounter({
      count: iloCount,
      percentage: ((iloCount / 25) * 100).toFixed(0)
    });
  };

  useEffect(() => {
    generateGrid();
  }, []);

  return (
    <Layout
      title="Experimental photography course"
      description="Experimental photography project"
      ogImage='https://borsosilona.wpenginepowered.com/wp-content/uploads/2024/10/Zrzut-ekranu-2024-10-9-o-20.35.59.png'
    >
        <div className='flex flex-col items-center'>
        <div className="grid grid-cols-5 gap-1 p-1 mb-5">
          {grid.map((item, index) => (
            <div
              key={index}
              className="w-12 h-12 md:w-24 md:h-24 bg-cover bg-center"
              style={{ backgroundImage: `url('${item.path}/${item.number}.jpg')` }}
            />
          ))}
        </div>
        <button
          onClick={generateGrid}
          className="px-5 py-2 text-base bg-gradient-to-r from-teal-400 to-blue-500 cursor-pointer bg-blue-500 w-25 text-white font-body rounded-lg rounded"
        >
          Generate
        </button>
        </div>
        <div className="grid grid-cols-2">
            <div className="mt-5 text-lg text-center font-body">
                Ilona: {counter.count} ({counter.percentage}%)
            </div>
            <div className="mt-5 text-lg text-center font-body">
                Isti: {25-counter.count} ({100-counter.percentage}%)    
            </div>
        </div>
        <div className="w-full h-6 bg-[#4B878B] rounded-full overflow-hidden">
        <div 
            className="h-full bg-[#921416] rounded-full"
            style={{ width: `${counter.percentage}%` }}
        ></div>
        </div>
    </Layout>
  );
}