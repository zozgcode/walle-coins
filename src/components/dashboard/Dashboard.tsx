'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Account } from '@/utils/types';
import Link from 'next/link';
import Header from './header/Header';
import { formatCurrency } from '../formatCurrency';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../Loader';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { IoReaderOutline } from "react-icons/io5";

import Image from 'next/image';

const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<Account | null>(null);
  const [hideBalance, setHideBalance] = useState(false);
  const [assetPrices, setAssetPrices] = useState<{ [key: string]: number }>({});
  const [showMsg, setShowMsg] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const toggleShowMsg = () => {
    setIsLoading(true);
    setShowMsg(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowMsg(true);
    }, 3000); // 3 seconds loading time
  };

  const toggleHideBalance = () => {
    setHideBalance(true);
  };

  const toggleShowBalance = () => {
    setHideBalance(false);
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  useEffect(() => {
    const fetchAssetPrices = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,bitcoin-cash&vs_currencies=usd`);
        const data = await response.json();
        setAssetPrices({
          BTC: data.bitcoin.usd,
          BCH: data['bitcoin-cash'].usd,
          ETH: data.ethereum.usd,
          BNB: data.binancecoin.usd
        });
      } catch (error) {
        console.error('Error fetching asset prices:', error);
      }
    };

    fetchAssetPrices();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }

  const formattedDate = getFormattedDate();

  return (
    <div className="w-full h-full pb-20">
      <Header handleLogout={handleLogout} user={user} />
      <div className="px-6 mb-5">
        <div className="rounded-[18px] shadow-sm bg-[#fafafa] px-6 flex flex-col gap-2 items-center justify-center w-full text-center min-h-[150px]">
          <span className="text-black/50 flex items-center gap-1">
            Total Balance
            {hideBalance ? <FiEyeOff onClick={toggleShowBalance} /> : <FiEye onClick={toggleHideBalance} />}
          </span>
          <span className="text-black text-[28px]">{hideBalance ? '******' : `${formatCurrency(user.account_details.balance_usd)}`} USD</span>
        </div>
      </div>
      {loading && <p className="text-[#811c1c] text-center text-sm p-4 pt-4 pb-0">Please wait...</p>}
      {!loading && showMsg && <p className="text-[#811c1c] text-center text-sm p-4 pt-4 pb-0">Service is down, Please try again later...</p>}{' '}
      <div className="flex items-center justify-center gap-10 p-4 mb-5">
        <Link href="" className="flex flex-col items-center justify-center gap-2" onClick={toggleShowMsg}>
          <button className="text-2xl p-2 flex items-center justify-center bg-[#e7e7e7] shadow-sm text-black w-[60px] h-[60px] rounded-full">
            <GoArrowUp />
          </button>
          <span className="text-black text-base">Send</span>
        </Link>
        <Link href="" className="flex flex-col items-center justify-center gap-2" onClick={toggleShowMsg}>
          <button className="text-2xl p-2 flex items-center justify-center bg-[#e7e7e7] shadow-sm text-black w-[60px] h-[60px] rounded-full">
            <GoArrowDown />
          </button>
          <span className="text-black text-base">Receive</span>
        </Link>
        <Link href="/dashboard/transactions" className="flex flex-col items-center justify-center gap-2">
          <button className="text-2xl p-2 flex items-center justify-center bg-[#e7e7e7] shadow-sm text-black w-[60px] h-[60px] rounded-full">
            <IoReaderOutline />
          </button>
          <span className="text-black text-base">History</span>
        </Link>
      </div>
      <div className="px-6">
        <div className="p-4 text-sm text-left shadow-sm rounded-[8px] bg-[#e7e7e7]">
          <p>Add crypto from Binance or Coinbase</p>
          <p>Please keep your wallet safe</p>
        </div>
      </div>
      <div className="mt-10 px-6">
        <p className="mb-3">Assets</p>
        {user.assets.map((asset, index) => (
          <div key={asset.assetsName} className={`rounded-[8px] flex bg-[#fafafa] border-[#fafafa] mb-1 shadow-sm justify-between p-4 ${index === 0 ? 'border-t border-b' : 'border-b'}`}>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-[#e7e7e7] shadow-sm text-black w-[40px] h-[40px] rounded-full">
                <Image src={asset.assetsLogo} width={40} height={40} alt={`${asset.assetsName} Logo`} />
              </div>
              <div className="flex flex-col">
                <span className="text-[17px]">{asset.assetsName}</span>
                <span className="text-sm">{assetPrices[asset.assetsName] ? `$${assetPrices[asset.assetsName].toLocaleString()}` : 'Loading...'}</span>
              </div>
            </div>
            <div className="text-sm flex text-right flex-col">
              <span>{asset.quantity}</span>
              <span>{formatCurrency(asset.assetRecentPrice)}</span>
              {/* <span>{assetPrices[asset.assetsName] ? `$${(assetPrices[asset.assetsName] * asset.quantity).toFixed(2)}` : 'Loading...'}</span> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
