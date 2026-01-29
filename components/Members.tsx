// components/Members.tsx
import React from 'react';
import { currentMembers } from '../data/membersData'; // [修改 1] 匯入資料
import { Link } from 'react-router-dom';             // [修改 2] 匯入 Link

const Members: React.FC = () => {
  // 首頁只顯示前 4 位 (或是 5 位) 現任成員，避免版面太長
  const previewMembers = currentMembers.slice(0, 5);

  return (
    <section id="members" className="py-20 bg-lab-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">實驗室成員</h2>
          <div className="w-20 h-1 bg-white mx-auto opacity-50"></div>
          <p className="mt-4 text-blue-200">Our Team Members</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {previewMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative inline-block mb-4 overflow-hidden rounded-full border-4 border-blue-400/30 group-hover:border-white transition-colors duration-300">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 md:w-40 md:h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-200 text-sm mt-1">{member.role}</p>
            </div>
          ))}
        </div>

        {/* [修改 3] 新增查看更多按鈕 */}
        <div className="text-center mt-12">
          <Link 
            to="/members" 
            className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-lab-primary transition-colors duration-300"
          >
            查看歷屆成員 & 完整名單 &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Members;