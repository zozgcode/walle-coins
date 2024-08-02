'use client'

import { Account, Transaction } from '@/utils/types';
import React, { useEffect, useState } from 'react';
import { GoArrowDownLeft, GoArrowUpRight } from 'react-icons/go';
import { AiOutlineFileText } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { formatCurrency } from '../formatCurrency';
import Link from 'next/link';
import Image from 'next/image';

const getFormattedDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const transactionDate = new Date(date);
  return transactionDate.toLocaleDateString('en-US', options);
};

export default function TransactionHistory() {
  const [user, setUser] = useState<Account | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      try {
        const user = JSON.parse(loggedInUser) as Account;
        setUser(user);
      } catch (error) {
        console.error("Error parsing loggedInUser from localStorage", error);
      }
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border w-full bg-[#FAFAF8]">
      <div className="bg-white sticky top-0 z-10 p-3 py-5 flex items-center justify-between gap-1">
        <Link href="/dashboard" className="flex items-center gap-2">
          <IoIosArrowBack />
          <span className="text-[#252525] font-semibold">Transactions</span>
        </Link>
      </div>
      <div className="pt-4">
        {user.transaction_history.map((transaction: Transaction) => (
          <div key={transaction.transaction_id} className="flex justify-between p-4 mb-2 bg-white shadow-sm rounded-lg">
            <div className="flex items-center">
              <div className="mr-4">
                {transaction.description === 'Transfer' ? (
                  <GoArrowUpRight className="text-2xl text-gray-500" />
                ) : (
                  <GoArrowDownLeft className="text-2xl text-gray-500" />
                )}
              </div>
              <div>
                <p className="text-sm text-gray-500">{getFormattedDate(transaction.date)}</p>
                <p className="text-lg">{transaction.description}</p>
                <p className="text-sm text-gray-500">To: {transaction.walletAddress}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg">
                {transaction.quantity.toFixed(6)} {transaction.description === 'Transfer' ? 'BNB' : ''}
              </p>
              <p className="text-sm text-gray-500">≈ {formatCurrency(transaction.amount_in_usd)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
