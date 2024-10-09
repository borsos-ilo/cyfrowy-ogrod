import React from 'react';
import { Bean, Sprout, Cherry } from 'lucide-react';

const StatusCard = ({ statusRozwoju, datePublished, dateModified }) => {
  const getIcon = (statusRozwoju) => {
    switch (statusRozwoju) {
      case 'Nasiono':
        return <Bean color="#1f1200" />;
      case 'Sadzonka':
        return <Sprout color="#114b12" />;
      case 'Owoc':
        return <Cherry color="#ad1010" />;
      default:
        return <Bean color="#1f1200" />;
    }
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('pl-PL', options);
  };

  return (
    <div className="font-body bg-white shadow-sm rounded-lg p-4 max-w-sm mx-auto">
      <div className="flex items-center mb-3">
        <span className="mr-2">{getIcon(statusRozwoju)}</span>
        <span className="font-semibold text-lg">Status: {statusRozwoju}</span>
      </div>
      <div className="text-sm">
        <p>Data publikacji: {formatDate(datePublished)}</p>
        <p>Ostatnia edycja: {formatDate(dateModified)}</p>
      </div>
    </div>
  );
};

export default StatusCard;