import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

export default function Receive() {
  return (
    <div className="border w-full bg-[#FAFAF8]">
      <div className="sticky bg-[#212121] top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <IoIosArrowBack />
          <span className="text-[#252525] font-semibold">Receive Crypto</span>
        </Link>
      </div>
      <div className="px-4 mt-4">
        <div className="bg-[#212121] flex flex-col items-center justify-center text-xl px-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <Image src="https://i.imgur.com/N6UMWP2.png" width={100} height={100} alt="logo" className="w-[25px] h-[25px]" />
            <span className="font-bold text-black">BTC</span>
            <span className="text-sm bg-[#f5f5f5] px-3 py-1 rounded-[20px]">COIN</span>
          </div>

          <Image src="https://i.imgur.com/N6UMWP2.png" width={100} height={100} alt="logo" className="w-[25px] h-[25px]" />
        </div>
      </div>
    </div>
  );
}
