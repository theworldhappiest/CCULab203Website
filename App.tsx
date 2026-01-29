import React from 'react';
import { Routes, Route } from 'react-router-dom'; // [新增 1]: 匯入路由工具
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Research from './components/Research';
import Professor from './components/Professor';
import Members from './components/Members';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllNewsPage from './components/AllNewsPage'; // [新增 2]: 匯入你剛剛做的新聞頁面
import AllResearchPage from './components/AllResearchPage';
import ResearchDetailPage from './components/ResearchDetailPage';
import AllMembersPage from './components/AllMembersPage';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-slate-800 bg-gray-50">
      {/* 導覽列 - 放在 Routes 外面，這樣切換頁面時它還會在 */}
      <Navbar />
      
      {/* [修改重點]: 使用 Routes 來決定現在要顯示哪個頁面 */}
      <Routes>
        
        {/* 情況 A: 網址是 "/" (首頁) -> 顯示原本那一長串區塊 */}
        <Route path="/" element={
          <main>
            <Hero />
            <News />
            <Research />
            <Professor />
            <Members />
            <Contact />
          </main>
        } />

        {/* 情況 B: 網址是 "/news" (所有新聞) -> 只顯示新聞列表頁 */}
        <Route path="/news" element={<AllNewsPage />} />
        <Route path="/research" element={<AllResearchPage />} />
        <Route path="/research/:id" element={<ResearchDetailPage />} />
        <Route path="/members" element={<AllMembersPage />} />

      </Routes>

      {/* 頁尾 - 同樣放在外面，每一頁都看得到 */}
      <Footer />
    </div>
  );
};

export default App;