// components/ResearchDetailPage.tsx
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // 匯入抓取網址參數的工具
import { researchList } from '../data/researchData';

const ResearchDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // 1. 抓取網址上的 ID
  const item = researchList.find((r) => r.id === Number(id)); // 2. 用 ID 去資料庫找資料

  // 每次進入頁面都捲到最上面
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 如果找不到資料 (例如亂打網址 /research/999)
  if (!item) {
    return <div className="text-center py-20">找不研究項目！<Link to="/" className="text-blue-500">回首頁</Link></div>;
  }

  return (
    <div className="pt-24 pb-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* 返回按鈕 */}
        <Link to="/research" className="inline-block mb-6 text-gray-500 hover:text-lab-primary transition">
          ← 返回研究列表
        </Link>

        {/* 大標題 */}
        <h1 className="text-4xl font-bold text-lab-primary mb-6">{item.title}</h1>

        {/* 大圖 */}
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
        />

        {/* 詳細文字內容 (支援換行顯示) */}
        <div className="prose max-w-none text-gray-700 text-lg leading-relaxed whitespace-pre-line mb-12">
          {item.detailContent}
        </div>

        {/* 影片區 (如果有影片連結才會顯示) */}
        {item.videoUrl && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">相關影片</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src={item.videoUrl} 
                title="Video player" 
                className="w-full h-[400px] rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ResearchDetailPage;