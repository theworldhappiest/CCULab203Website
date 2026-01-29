// components/Research.tsx
import React from 'react';
import { researchList } from '../data/researchData';
import { Link } from 'react-router-dom';

const Research: React.FC = () => {
  // 只顯示前 3 個 (精華版)
  const featuredResearch = researchList.slice(0, 3);

  return (
    <section id="research" className="py-20 bg-lab-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lab-primary mb-4">研究領域</h2>
          <div className="w-20 h-1 bg-lab-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Research Fields</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredResearch.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-lab-primary mb-3 group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm text-justify">
                  {item.description}
                </p>

                {/* [新增重點]: 這就是你要的「了解更多」按鈕 */}
                {/* 它會根據資料的 id 自動產生連結，例如 /research/1 */}
                <Link 
                  to={`/research/${item.id}`} 
                  className="mt-4 inline-block text-sm font-bold text-lab-primary hover:text-blue-800 transition-colors border-b-2 border-transparent hover:border-blue-800"
                >
                  了解更多 &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 底部的大按鈕：查看所有列表 */}
        <div className="text-center mt-12">
          <Link 
            to="/research" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-lab-primary hover:bg-blue-800 md:py-4 md:text-lg md:px-10 transition-all shadow-md hover:shadow-lg"
          >
            查看更多研究領域
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Research;