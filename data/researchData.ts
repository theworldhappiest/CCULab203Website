// data/researchData.ts

export interface ResearchItem {
  id: number;
  title: string;
  description: string; // 卡片上的短介紹
  imageUrl: string;
  detailContent: string; // [新增] 點進去後的長篇詳細介紹
  videoUrl?: string;     // [新增] 影片連結 (選填，沒有也沒關係)
}

export const researchList: ResearchItem[] = [
  {
    id: 1,
    title: "磁浮軸承技術",
    description: "專注於主動式磁浮軸承設計、轉子動力學及綠能儲存應用。",
    imageUrl: "https://placehold.co/600x400/003366/FFFFFF?text=Magnetic+Bearings",
    // [新增詳細內容]
    detailContent:  `
      本領域致力於高效能磁浮系統的開發，核心技術涵蓋五自由度主動式磁浮軸承(AMB)與混合式磁浮軸承的設計與控制。
      
      主要研究重點包括：
      1. 飛輪儲能系統：開發具備低能耗特性的環型飛輪儲能系統，利用海爾貝克陣列(Halbach Array)優化磁力模型。
      2. 轉子動力學與振動抑制：針對高速運轉轉子進行偏心補償(Unbalance Compensation)與自動平衡控制，解決高速旋轉下的振動問題。
      3. 磁浮滑軌設計：結合線性馬達與磁浮滑軌，實現無接觸、低磨耗的動子懸浮。
      4. 磁浮應用擴展：包含磁浮冰水機的節能應用以及磁浮線性滑軌的設計。
    `,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // 範例影片 (Youtube 嵌入連結)
  },
  {
    id: 2,
    title: "精密運動控制與演算法",
    description: "針對多軸工具機開發高精度循跡控制與迭代學習演算法。",
    imageUrl: "https://placehold.co/600x400/003366/FFFFFF?text=Motion+Control",
    detailContent:  `
      此領域旨在解決多軸系統的非線性與輪廓誤差問題，核心貢獻在於提出「等效輪廓誤差(Equivalent Contour Error)」模型。

      關鍵技術包含：
      1. 迭代學習控制 (ILC)：發展「線上 (Online) ILC」演算法，能即時修正五軸工具機的加工路徑，大幅降低輪廓誤差。
      2. 路徑平滑化與加減速：利用B-Spline*與貝茲曲線 (Bezier Curve)進行轉角平滑化，結合 **S 型加減速**規劃，實現高速且平滑的運動控制。
      3. 系統鑑別：利用Haar小波等方法鑑別多軸系統動態參數，提升控制模型精確度。
    `,
    // 這筆資料沒有影片，所以不放 videoUrl
  },
  {
    id: 3,
    title: "積層製造與雷射製程優化",
    description: "結合人工智慧與最佳化演算法，提升金屬 3D 列印 (SLM) 品質。",
    imageUrl: "https://placehold.co/600x400/003366/FFFFFF?text=Mechatronics",
    detailContent:`
    打破傳統機械手臂剛性不足的限制，發展雙手臂協同加工系統，使其具備工具機等級的加工能力。

      技術特色：
      1. 雙臂閉鏈架構：利用雙手臂共同夾持工件形成閉鏈機構，大幅提升結構剛性以進行精密銑削。
      2. 阻抗控制(Impedance Control)：應用於薄壁工件的輔助加工，有效抑制切削顫振(Chatter)並提升表面品質。
      3. 視覺伺服與抓取：結合雙相機視覺與CAD模型，實現隨機堆疊物件的姿態估測與自動抓取。
    `,
  },
  {
    id: 4,
    title: "機器人技術與雙手臂製造系統",
    description: "將機械手臂從搬運升級為具備銑削加工能力的智慧製造單元。",
    imageUrl: "https://placehold.co/600x400/003366/FFFFFF?text=Mechatronics",
    detailContent: `
      打破傳統機械手臂剛性不足的限制，發展雙手臂協同加工系統，使其具備工具機等級的加工能力。

      技術特色：
      1. 雙臂閉鏈架構：利用雙手臂共同夾持工件形成閉鏈機構，大幅提升結構剛性以進行精密銑削。
      2. 阻抗控制 (Impedance Control)：應用於薄壁工件的輔助加工，有效抑制切削顫振 (Chatter) 並提升表面品質。
      3. 視覺伺服與抓取：結合雙相機視覺與 CAD 模型，實現隨機堆疊物件的姿態估測與自動抓取。
    `,
  },
   {
    id: 5,
    title: "無人機路徑規劃與飛行控制",
    description: "結合機械、電子、控制與電腦技術...",
    imageUrl: "https://placehold.co/600x400/003366/FFFFFF?text=Mechatronics",
    detailContent: "這裡是機電整合系統的詳細介紹內容...",
  }
];