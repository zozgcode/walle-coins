'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Link from 'next/link';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="w-ful bg-[#161730] h-screen pt-[30px]">
      <Header />
      <div className="mx-auto rounded-xl max-w-[350px] py-7">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <label htmlFor="Username" className="text-[#fff] text-[16px]">
                Email Address or Username
              </label>
              <input type="text" value={username} className="px-[23px] py-[10px] w-full h-[60px] rounded-[15px] bg-[#232436] text-[#ffffff] outline-none" onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-[#fff] hidden flex justify-between items-center text-[16px]">
                <span>Password</span>
                <Link href="" className='text-sm text-[#FFC92C]'>Forgot password?</Link>
              </label>
              <input type="password" value={password} className="px-[23px] py-[10px] w-full h-[60px] rounded-[15px] bg-[#232436] text-[#ffffff] outline-none" onChange={e => setPassword(e.target.value)} />
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-2 mt-6">
            <button type="submit" className="px-[23px] py-[10px] w-full h-[60px] bg-[#FFC92C] text-[#161730] font-semibold rounded-[15px]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
