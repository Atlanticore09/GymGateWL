import React from 'react';

interface PhoneFrameProps {
  src: string;          // Path to your image or video
  type?: 'image' | 'video'; // Is it a video or image?
  alt?: string;         // Alt text for images
}

const PhoneFrame = ({ src, type = 'image', alt = 'App Screenshot' }: PhoneFrameProps) => {
  return (
    // 1. The Phone Container (Border & Shape)
    <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl overflow-hidden">
      
      {/* 2. The Dynamic Island (The black pill at the top) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[32px] w-[120px] bg-black rounded-b-[18px] z-20"></div>

      {/* 3. The Screen Content (Video or Image) */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        {type === 'video' ? (
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline // Critical for iPhone autoplay
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover" 
          />
        )}
      </div>
    </div>
  );
};

export default PhoneFrame;