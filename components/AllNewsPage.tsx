// src/components/AllNewsPage.tsx
import React, { useEffect } from 'react';
import { newsList } from '../data/newData.ts'; // 匯入剛剛的資料
import { Link } from 'react-router-dom';

const AllNewsPage: React.FC = () => {
  // 進入此頁面時自動捲動到最上方
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* 標題與返回按鈕 */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-lab-primary">所有最新消息</h1>
          <Link to="/" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
            ← 返回首頁
          </Link>
        </div>

        {/* 新聞列表 (顯示全部) */}
        <div className="space-y-6">
          {newsList.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="mr-4">📅 {item.date}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {item.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNewsPage;
