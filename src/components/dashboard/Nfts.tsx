'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';

export default function Nfts() {
  return (
    <div className="border w-full bg-[#FAFAF8]">
      <div className="bg-white sticky top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <IoIosArrowBack />
          <span className="text-[#252525] font-semibold">Your NFTs</span>
        </Link>
      </div>
      <div className="px-4 mt-4">
        <div className="bg-transparent text-xl px-4 text-center">No Assets</div>
      </div>
    </div>
  );
}
