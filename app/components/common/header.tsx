"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type React from "react"

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 mt-9 mx-auto max-w-[1728px] px-4 py-2">
      <nav className="flex items-center justify-between rounded-full bg-card shadow-lg px-6 py-4 border">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Oriums</span>
        </Link>
        <div className="hidden items-center space-x-8 md:flex">
          <NavDropdown text="Services" />
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <motion.button
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote →
          </motion.button>
          <button className="block md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

function NavDropdown({ text }: { text: string }) {
  return (
    <button className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-foreground">
      <span>{text}</span>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
      {children}
    </Link>
  )
}
