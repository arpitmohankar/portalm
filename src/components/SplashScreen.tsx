'use client';
import { motion, AnimatePresence } from 'framer-motion';

export function SplashScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gold-500 mb-8 text-center"
          >
            Welcome to Arpits Portfolio
          </motion.div>

          <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'linear' }}
              className="h-full bg-gold-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}