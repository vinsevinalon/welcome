"use client"
// Importing required libraries
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from '@/components/theme-toggle';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
    setOpen(false);
  };

  return (
    <header className="p-5 text-black w-full bg-background text-foreground">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div onClick={() => navigateTo('/')}>
          <h1 className="cursor-pointer">Logo</h1>
        </div>
        <div className="hidden md:flex">
          <button type="button" onClick={() => router.push('/home')}>
           Home 
          </button>
          <button type="button" onClick={() => router.push('/about')}>
           About 
          </button>
          <ModeToggle/>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <p onClick={() => navigateTo('/home')} className="cursor-pointer mx-2">Home</p>
          <p onClick={() => navigateTo('/about')} className="cursor-pointer mx-2">About</p>
          <ModeToggle/>
        </div>
      )}
    </header>
  )
}

export default Header;
