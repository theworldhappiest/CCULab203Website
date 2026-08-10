import React from 'react';
import { Mail, Phone, MapPin, Award } from 'lucide-react';

const Professor: React.FC = () => {
  return (
    <section id="professor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* 左側：照片區 */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-lab-primary rounded-lg transform translate-x-3 translate-y-3"></div>
              {/* [圖片修改]: 請將 src 換成教授的實際照片連結 */}
              <img 
                src={`${import.meta.env.BASE_URL}professor/SL_Chen_0.jpg`}
                alt="指導教授" 
                className="relative rounded-lg shadow-xl w-full max-w-sm object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* 右側：簡介與聯絡方式 */}
          <div className="w-full md:w-2/3">
            <h4 className="text-lab-primary font-bold uppercase tracking-wider mb-2">指導教授</h4>
            {/* [文字修改]: 教授姓名 */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">陳世樂 特聘教授兼研發長 (Dr. Chen, Shyh-Leh)</h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              專長於非線性動態系統分析、穩定性分析、磁浮技術與非線性控制系統。致力於培養具備實作能力與理論基礎的工程人才。
            </p>

            <div className="space-y-4 mb-8">
               {/* [文字修改]: 聯絡資訊 */}
              <div className="flex items-center text-gray-700">
                <Mail className="text-lab-primary mr-3" size={20} />
                <span>imeslc@ccu.edu.tw</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="text-lab-primary mr-3" size={20} />
                <span>(05) 270-0411 分機 33320</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="text-lab-primary mr-3" size={20} />
                <span>創新大樓 230</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                <Award className="mr-2 text-yellow-500" />
                主要學歷
              </h5>
              <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                 {/* [文字修改]: 學歷 */}
                <li>密西根州立大學 / 美國 / 機械工程 / 博士</li>
                <li>國立清華大學 / 動力機械 / 碩士</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professor;