import React from 'react';
import Image from 'next/image';

const StatusCard = ({ statusRozwoju, datePublished, dateModified }) => {
  const getIcon = (statusRozwoju) => {
    switch (statusRozwoju) {
      case 'Nasiono':
        return '/icons/seed.png';
      case 'Sadzonka':
        return '/icons/bud.png';
      case 'Owoc':
        return '/icons/strawberry.png';
      default:
        return '/icons/seed.png';
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pl-PL', options);
  };

  return (
    <div className="grid grid-cols-2 p-3 my-3 bg-[#c4f2d0] bg-opacity-50">
      <div className="w-16 h-16 shrink-0 items-center justify-center">
        <Image
          src={getIcon(statusRozwoju)}
          alt={statusRozwoju}
          width={56}
          height={56}
          layout="fixed"
        />
      </div>
      <div className="justify-center">
        <span className="font-semibold text-green-700 text-lg mb-1 my-3">Status: {statusRozwoju}</span>
        <div className="text-sm text-green-600">
          <p>Data publikacji: {formatDate(datePublished)}</p>
          <p>Ostatnia edycja: {formatDate(dateModified)}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;