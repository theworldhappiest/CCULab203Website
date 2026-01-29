// components/AllMembersPage.tsx
import React, { useEffect } from 'react';
import { currentMembers, alumniList } from '../data/membersData';
import { Link } from 'react-router-dom';
import { User, GraduationCap, FileText, ChevronRight } from 'lucide-react';

const AllMembersPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // [整體背景]: 使用漸層深藍色，讓畫面更有層次，不會死藍一片
    <div className="pt-24 pb-12 bg-gradient-to-b from-lab-primary to-[#001a33] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 頁面標題 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold text-white tracking-tight">實驗室成員</h1>
            <p className="mt-3 text-blue-200 text-lg">Our Team & Alumni</p>
          </div>
          <Link to="/" className="mt-6 md:mt-0 group flex items-center px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-lab-primary transition-all duration-300">
            <span>返回首頁</span>
            <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* --- 區塊 1: 現任成員 (卡片優化) --- */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-1.5 h-8 bg-blue-400 rounded-full mr-3"></div>
            <span className="flex items-center"><User className="mr-3 text-blue-300" /> 現任成員 (Current Members)</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {currentMembers.map((member) => (
              // [卡片樣式]: 半透明玻璃質感
              <div key={member.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300 text-center group">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-blue-400 transition-colors duration-300 shadow-lg relative">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">{member.name}</h3>
                <span className="inline-block mt-3 px-3 py-1 bg-blue-500/20 text-blue-200 border border-blue-500/30 text-xs rounded-full">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- 區塊 2: 歷屆成員 (表格大整形) --- */}
        <div>
           <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <div className="w-1.5 h-8 bg-amber-400 rounded-full mr-3"></div>
            <span className="flex items-center"><GraduationCap className="mr-3 text-amber-300" /> 歷屆成員 (Alumni)</span>
          </h2>

          {/* [表格容器]: 毛玻璃特效 (背景透明 + 模糊) */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/10">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                {/* 表頭: 深黑色半透明，讓字更清楚 */}
                <thead className="bg-black/20 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-blue-200 uppercase tracking-wider">級數</th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-blue-200 uppercase tracking-wider">姓名</th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-blue-200 uppercase tracking-wider">學位</th>
                    <th className="px-6 py-5 text-left text-sm font-semibold text-blue-200 uppercase tracking-wider hidden md:table-cell">論文題目</th>
                  </tr>
                </thead>
                
                {/* 表格內容 */}
                <tbody className="divide-y divide-white/5">
                  {alumniList.map((alumni) => (
                    <tr key={alumni.id} className="hover:bg-white/5 transition-colors duration-200 group">
                      
                      {/* 年份 */}
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-300 font-mono">
                        {alumni.year}
                      </td>
                      
                      {/* 姓名 (加強亮白) */}
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-white text-lg">
                        {alumni.name}
                      </td>
                      
                      {/* 學位 (螢光標籤: 亮黃與亮青) */}
                      <td className="px-6 py-5 whitespace-nowrap text-sm">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          alumni.degree === '博士' 
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' // 博士: 金黃色
                            : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'    // 碩士: 青藍色
                        }`}>
                          {alumni.degree}
                        </span>
                      </td>
                      
                      {/* 論文 (圖示與文字) */}
                      <td className="px-6 py-5 text-sm text-gray-300 hidden md:table-cell">
                        <div className="flex items-center group-hover:text-blue-200 transition-colors">
                          <FileText size={16} className="mr-2 text-white/40 group-hover:text-blue-400" />
                          {alumni.thesis || "-"}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllMembersPage;