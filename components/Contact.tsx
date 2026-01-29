// components/Contact.tsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lab-primary mb-4">聯絡我們</h2>
          <div className="w-20 h-1 bg-lab-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Contact Information</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
          
          {/* 左側：純文字聯絡資訊 (取代原本的表單) */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">聯絡資訊</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              歡迎對自動控制、磁浮技術及機電整合有興趣的同學加入我們。
              若有任何學術交流或產學合作需求，歡迎透過以下方式聯繫。
            </p>

            <div className="space-y-6">
              {/* 地址 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-lab-primary">
                  <MapPin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">實驗室位置</h4>
                  <p className="text-gray-600">621 嘉義縣民雄鄉大學路一段168號</p>
                  <p className="text-gray-600">國立中正大學 實習工廠 203</p>
                </div>
              </div>

              {/* 電話 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full text-lab-primary">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-800">聯絡電話</h4>
                  <p className="text-gray-600">
                    (05) 272-0411 <span className="text-lab-primary font-bold">分機 23348</span>
                  </p>                
                </div>
              </div>

              
            </div>
          </div>

          {/* 右側：Google 地圖 */}
          <div className="bg-gray-200 relative min-h-[400px]">
             {/* 這裡我幫你換成了中正大學的真實地圖嵌入碼。
                如果你要更精準定位到機械館，可以去 Google Maps 搜尋「中正大學機械工程系」再按分享->嵌入地圖 
             */}
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7314.549256201899!2d120.46585065788504!3d23.55857820528334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ebf0005bb6f2f%3A0x2b53f32a04309b72!2z5a-m57-S5bel5bug!5e0!3m2!1szh-TW!2stw!4v1769577774164!5m2!1szh-TW!2stw" 
               className="w-full h-full absolute inset-0"
               style={{ border: 0 }} 
               allowFullScreen={true} 
               loading="lazy"
               title="CCU Map"
             ></iframe>
             
             {/* 地圖上的浮動小卡片 */}
             <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-lg max-w-xs border-l-4 border-lab-primary">
               <p className="font-bold text-lab-primary">機電控制實驗室</p>
               <p className="text-xs text-gray-500 mt-1">實習工廠203</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;