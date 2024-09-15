import React from 'react';
import Image from 'next/image';

const OptimizedVideoPlayer = ({ src, aspectRatio = '9/16', maxWidth = '300px' }) => {
  return (
    <div style={{ maxWidth: maxWidth, margin: '0 auto' }}>
      <div style={{ position: 'relative', paddingTop: `calc(100% / (${aspectRatio}))`, overflow: 'hidden' }}>
        <video 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          controls 
          //poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* {poster && (
        <Image
          src={poster}
          alt="Video thumbnail"
          layout="responsive"
          width={100}
          height={100 / (eval(aspectRatio))}
          priority
        />
      )} */}
    </div>
  );
};

export default OptimizedVideoPlayer;