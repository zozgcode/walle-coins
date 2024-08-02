'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex items-center p-4 justify-center w-full">
      <Image
        src="https://i.imgur.com/9xswyNU.png" // Replace with the path to your image
        width={100}
        height={100}
        className="w-[150px] h-[150px]"
        alt="sdsmmd"
      />
    </div>
  );
}
