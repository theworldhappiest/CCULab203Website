import React from 'react';
import { Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';         // [修改 1]: 引入 Link 元件
import { newsList } from '../data/newData.ts';     // [修改 2]: 引入剛剛建立的外部資料庫

const News: React.FC = () => {
  // [修改 3]: 自動排序邏輯
  // 1. [...newsList] -> 複製一份資料以免動到原始檔
  // 2. sort -> 比較日期 (b - a 代表新的日期排前面)
  // 3. slice(0, 3) -> 只拿前三名
  const latestNews = [...newsList]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lab-primary mb-4">最新消息</h2>
          <div className="w-20 h-1 bg-lab-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">News & Announcements</p>
        </div>

        {/* 這裡改用 latestNews 來產生列表 */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {latestNews.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white border-l-4 border-lab-primary shadow-sm hover:shadow-md rounded-r-lg p-6 transition-all duration-300 hover:translate-x-2"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex items-center space-x-4 mb-2 md:mb-0 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {item.date}
                  </span>
                  <span className="flex items-center bg-gray-100 px-2 py-1 rounded text-lab-primary font-medium">
                    <Tag size={14} className="mr-1" />
                    {/* [注意]: 這裡使用 item.tag，請確保你的 newsData.ts 裡是用 tag 這個欄位名稱
                        如果是用 category，請自行改為 item.category */}
                    {item.category} 
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mt-2 group-hover:text-lab-primary transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        
        {/* [修改 4]: 按鈕改成 Link */}
        <div className="text-center mt-10">
          <Link 
            to="/news" 
            className="text-lab-primary font-bold hover:text-blue-800 transition-colors border-b-2 border-transparent hover:border-blue-800 inline-block cursor-pointer"
          >
            查看更多動態 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default News;