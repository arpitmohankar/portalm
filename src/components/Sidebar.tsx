'use client';
import { useState, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, Mail,Cpu } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: 'about', icon: <User size={20} />, label: 'About' },
    { id: 'experience', icon: <Briefcase size={20} />, label: 'Experience' },
    { id: 'projects', icon: <Code2 size={20} />, label: 'Projects' },
    { id: 'contact', icon: <Mail size={20} />, label: 'Contact' },
    { id: 'skills', icon: <Cpu size={20} />, label: 'Skills' }
  ];

  return (
    <div className="hidden lg:block fixed left-0 top-0 h-screen w-20 bg-black/90 border-r border-gold-500">
      <div className="flex flex-col items-center py-6 gap-8">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 rounded-lg ${
              activeTab === tab.id 
                ? 'bg-gold-500 text-black' 
                : 'hover:bg-white/10'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {tab.icon}
          </motion.button>
        ))}
      </div>
    </div>
  );
}