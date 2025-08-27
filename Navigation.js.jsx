// components/Navigation.js
import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Data Member', href: '/members' },
    { name: 'Informasi', href: '/info' },
    { name: 'Syarat OT', href: '/requirements' },
    { name: 'Leaderboard', href: '/leaderboard' },
  ]

  return (
    <nav className="bg-gray-800 border-b-2 border-cyan-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-cyan-400 glitch-effect" data-text="XFive Community">
              XFive Community
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="cyber-button-sm text-sm px-4 py-2 rounded-lg transition-all duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="cyber-button-sm px-3 py-2 rounded"
            >
              <span className="block">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="cyber-button-sm text-sm block px-4 py-2 rounded-lg transition-all duration-300">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}