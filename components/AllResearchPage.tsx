// components/AllResearchPage.tsx
import React, { useEffect } from 'react';
import { researchList } from '../data/researchData'; // 匯入資料
import { Link } from 'react-router-dom';

const AllResearchPage: React.FC = () => {
  // 進入頁面時自動捲到最上面
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區 */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold text-lab-primary">所有研究領域</h1>
            <p className="mt-2 text-gray-600">Research Fields & Projects</p>
          </div>
          <Link to="/" className="mt-4 md:mt-0 px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition">
            ← 返回首頁
          </Link>
        </div>

        {/* 顯示所有研究項目 (單欄式大圖設計) */}
        <div className="space-y-12">
          {researchList.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row hover:shadow-2xl transition-shadow duration-300">
              {/* 圖片區 (左側) */}
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* 文字區 (右側) */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-lab-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify mb-6">
                  {item.description}
                </p>

                {/* [新增] 這裡加入了前往詳細頁面的按鈕 */}
                <Link 
                  to={`/research/${item.id}`} 
                  className="inline-flex items-center text-lab-primary font-bold hover:text-blue-800 transition-colors group self-start"
                >
                  <span className="border-b-2 border-transparent group-hover:border-blue-800">
                    閱讀更多內容
                  </span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllResearchPage;