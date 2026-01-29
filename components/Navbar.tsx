import React, { useState, useEffect } from 'react';
import { Menu, X, Microscope } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // 1. 監聽捲動變色 (原本的功能)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // [新增重點] 2. 監聽網址變化，處理「換頁後的捲動」
  useEffect(() => {
    // 只有當我們在首頁 ('/') 且網址有錨點 (例如 #research) 時才執行
    if (location.pathname === '/' && location.hash) {
      
      // 使用 setTimeout 稍微延遲 100 毫秒，確保網頁元素已經長出來了
      const timer = setTimeout(() => {
        const id = location.hash.replace('#', ''); // 把 #research 變成 research
        const element = document.getElementById(id);
        
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100); // 延遲 0.1 秒

      return () => clearTimeout(timer); // 清除計時器
    }
  }, [location]); // 只要 location (網址) 一變，這段程式碼就會跑

  const navLinks = [
    { name: '首頁', href: '#home' },
    { name: '最新消息', href: '#news' },
    { name: '研究領域', href: '#research' },
    { name: '指導教授', href: '#professor' },
    { name: '實驗室成員', href: '#members' },
    { name: '聯絡我們', href: '#contact' },
  ];

  // 3. 修改點擊邏輯
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname === '/') {
      // 情況 A: 人已經在首頁 -> 直接更改網址 Hash，觸發上面的 useEffect
      // (這樣寫可以讓邏輯統一，不用寫兩套 scroll)
      window.history.pushState(null, '', href); // 默默修改網址不換頁
      
      // 手動觸發一次捲動 (因為 pushState 不會觸發 useEffect)
      const targetId = href.replace('#', '');
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }

    } else {
      // 情況 B: 人在其他頁面 -> 跳轉回首頁並帶著錨點 (例如 /#research)
      // 這會觸發上面的 useEffect
      navigate(`/${href}`); 
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-lab-primary shadow-lg py-2' : 'bg-lab-primary/90 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo 點擊回首頁頂部 */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={(e) => handleNavClick(e as any, '#home')}
          >
            <Microscope className="h-8 w-8 text-white mr-2" />
            <span className="font-bold text-xl text-white tracking-wide">
              Chen's Lab 機電控制實驗室
            </span>
          </div>

          {/* 電腦版選單 */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 手機版按鈕 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 手機版選單內容 */}
      {isOpen && (
        <div className="md:hidden bg-lab-primary border-t border-blue-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;