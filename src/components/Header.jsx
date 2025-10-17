import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container-responsive h-[var(--header-height)] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-brand-600 text-white grid place-items-center font-bold">R</div>
          <div className="font-semibold text-lg">Recruiter Dashboard</div>
        </div>
        <nav className="hidden sm:flex items-center gap-2">
          <NavLink to="/" className={({isActive})=>`px-3 py-2 rounded-md text-sm ${isActive ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>Home</NavLink>
          <NavLink to="/results" className={({isActive})=>`px-3 py-2 rounded-md text-sm ${isActive ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>Results</NavLink>
          <NavLink to="/analytics" className={({isActive})=>`px-3 py-2 rounded-md text-sm ${isActive ? 'bg-gray-100 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>Analytics</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
