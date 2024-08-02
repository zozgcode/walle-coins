'use client';

import { UimBars } from '@/components/svgIcons';
import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full mb-2 min-h-[30px] relative flex items-center justify-between p-[16px] py-[15px]">
      <div className="flex items-center gap-2">
        <Image src="https://i.imgur.com/zELSpwE.png" width={200} height={200} className="w-[20px] h-20px] rounded-full" alt="logo" />
        <div className="">
          <p className="text-black text-xs font-semibold">Public Address</p>
          <p className="text-black/60 text-xs font-light">{user.account_details.wallet_address}</p>
        </div>
      </div>
    </div>
  );
}
