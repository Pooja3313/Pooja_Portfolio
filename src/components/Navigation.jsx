import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, GraduationCap, Briefcase, Code, FolderOpen, Mail } from 'lucide-react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: GraduationCap, label: 'Education', href: '#education' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: FolderOpen, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Pooja Sorathiya
            </motion.div>
            <div className="flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Always visible on mobile */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-lg"
      >
        <div className="px-2 py-1">
          <div className="flex justify-around items-center">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.href)}
                className="flex flex-col items-center justify-center p-1 min-w-[45px] text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-1"
                >
                  <item.icon size={18} strokeWidth={1.5} />
                </motion.div>
                <span className="text-[10px] font-medium leading-none text-center">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;