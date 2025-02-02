'use client';

import { useState, useEffect  } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface MobileNavProps {
  setActiveTab: (tabId: string) => void;
}

export function MobileNav({ setActiveTab }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false); 

    useEffect(() => {
        setIsMounted(true);
    }, []);

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
    { id: 'skills', label: 'Skills' }
  ];
  if (!isMounted) return null; 
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-black/80 border border-gold-500 rounded-lg"
      >
        {isOpen ? <X className="text-gold-500" /> : <Menu className="text-gold-500" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm lg:hidden z-40 flex items-center justify-center"
          >
            <div className="space-y-8 text-center">
              {tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    href="#"
                    onClick={() => {
                      setActiveTab(tab.id);  // Update active tab
                      setIsOpen(false);  // Close the mobile navigation
                    }}
                    className="text-2xl text-gold-500 hover:text-gold-400 block px-6 py-3"
                  >
                    {tab.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
