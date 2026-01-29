import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-white font-bold text-lg mb-1">實習工廠203 機電控制實驗室</h3>
          <p className="text-sm">Factory 203, Electromechanical Control Laboratory</p>
        </div>
        
        <div className="text-center md:text-right text-sm">
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          <p className="mt-1">校址：621嘉義縣民雄鄉大學路一段168號</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;