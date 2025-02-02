'use client';
import { useState, useEffect } from 'react';

type SplashScreenProps = {
  isVisible: boolean;
};
import dynamic from 'next/dynamic'; 
import { motion } from 'framer-motion';
import { Sidebar } from '@/components/Sidebar';
import {About} from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';
import { MobileNav } from '@/components/MobileNav';
import { Skills } from '@/components/Skills';

const SplashScreen = dynamic<SplashScreenProps>(
  () => import('@/components/SplashScreen').then(mod => mod.SplashScreen),
  { ssr: false }
);

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [showSplash, setShowSplash] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;
  return (
    <main className="min-h-screen bg-black text-white ">
      <SplashScreen isVisible={isMounted && showSplash} />
       
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className={`flex h-screen ${showSplash ? 'opacity-0' : 'opacity-100'}`}
      >
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
       {/* Mobile Navigation */}
       <MobileNav setActiveTab={setActiveTab} />
<div className="lg:ml-20 p-4 lg:p-8 flex-1 overflow-hidden">
  <div className="h-full overflow-y-auto scrollbar-hide">
    <div className="max-w-6xl mx-auto">
      {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
      {activeTab === 'experience' && <Experience />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'contact' && <Contact />}
      {activeTab === 'skills' && <Skills />}
    </div>
  </div>
</div>
      </motion.div>
    </main>
  );
}