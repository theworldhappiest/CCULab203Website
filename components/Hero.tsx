import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 
        [圖片更換說明]:
        更改下方的 background-image url 即可更換首頁大圖。
        現在使用 placehold.co 範例圖。
        建議尺寸: 1920x1080
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}hero/pexels-louis-courbiere-3133037-4733744.jpg')`,
          }}
      >
        {/* 黑色遮罩，增加文字可讀性 */}
        <div className="absolute inset-0 bg-lab-primary/70"></div>
      </div>

      {/* 文字內容 */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-yellow-400 font-bold tracking-widest text-lg md:text-xl mb-4 uppercase animate-fade-in-up">
          Chen's Mechatronics Lab
        </h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight shadow-sm">
          陳世樂教授 機電控制實驗室
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          專注於精密運動控制與迭代學習演算法、智慧機器人與積層製造系統，以及先進磁浮軸承與綠能應用之先端研究。
        </p>
        
        {/* [連結修改說明]: href="#research" 對應到下方的研究領域區塊 */}
        <a 
          href="#research"
          className="inline-block bg-white text-lab-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          探索研究
        </a>
      </div>

      {/* 往下捲動指示器 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10 text-white/70">
        <ChevronDown size={40} />
      </div>
    </section>
  );
};

export default Hero;