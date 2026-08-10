// data/membersData.ts

// 1. 定義資料型態
interface RawMember {
  name: string;
  role: string;
  image?: string; // 選填，沒填會自動產生
}

interface RawAlumni {
  name: string;
  degree: string;
  year: string;
  thesis?: string;
}

export interface Member extends RawMember {
  id: number;
  image: string; // 確保匯出時一定有圖 (不管是真的還是假的)
}

export interface Alumni extends RawAlumni {
  id: number;
}

// ==========================================
// 2. [現任成員] 請在這裡編輯名單 (不用填 ID)
// ⬇️ [範例] 只有這一行是你需要手動加的
// 請確認你的照片檔名是 .jpg 並且放在 public/member/ 資料夾內
// ==========================================

const rawMembersData: RawMember[] = [
  { name: "Winder Ta", role: "助理研究員" },
  { name: "Ejaz Ahmed", role: "博士班" },
  { name: "林昀嗣", role: "博士班" },
  { name: "魏碩池", role: "博士班" },
  { name: "陳品澔", role: "碩士班二年級" },
  { name: "陳伯彥", role: "碩士班二年級" },
  { name: "汪勇霆", role: "碩士班二年級" },
  { name: "林子棋", role: "碩士班二年級" },
  { name: "鄭永隆", role: "碩士班二年級" },
  { name: "蔡舜宇", role: "碩士班二年級" },
  { name: "黃家俊", role: "碩士班一年級" },
  { name: "張育誠", role: "碩士班一年級" },
  { name: "劉哲銘", role: "碩士班一年級" },
  { name: "李科宏", role: "碩士班一年級" },
  { name: "莊智翔", role: "碩士班一年級" },
];

// 自動轉換邏輯：產生 ID + 處理圖片路徑
export const currentMembers: Member[] = rawMembersData.map((member, index) => {
  // [邏輯說明]
  // 1. 如果有填 image -> 加上 BASE_URL (解決 GitHub Pages 路徑問題)
  // 2. 如果沒填 image -> 使用 ui-avatars 產生預設圖
  
  let finalImageUrl = "";

  if (member.image) {
    // 這裡是關鍵！自動幫你串接 /CCULab203Website/ + members/wang.jpg
    finalImageUrl = `${import.meta.env.BASE_URL}${member.image}`;
  } else {
    // 原本的自動生成邏輯
    finalImageUrl = `https://ui-avatars.com/api/?name=${member.name}&background=1e3a8a&color=fff&size=200&length=${member.name.length}&font-size=0.3`;
  }

  return {
    ...member,
    id: index + 1,
    image: finalImageUrl
  };
});

// ==========================================
// 3. [歷屆成員] 請在這裡編輯名單 (不用填 ID)
// ==========================================
const rawAlumniData: RawAlumni[] = [
  { 
    name: "阮博軒", 
    degree: "碩士", 
    year: "113級", 
    thesis: "基於控制點的雙軸系統迭代學習輪廓控制"
  },
  { 
    name: "王聖鈞", 
    degree: "碩士", 
    year: "113級", 
    thesis: "並聯式無電壓無軸承馬達之建模與分析"
  },
  { 
    name: "王士豪", 
    degree: "碩士", 
    year: "113級", 
    thesis: "薄壁元件加工建模與穩定性分析"
  },
  { 
    name: "張誌軒", 
    degree: "碩士", 
    year: "113級", 
    thesis: "基於估測器之可變阻抗控制應用於輔助加工"
  },
  { 
    name: "黃騰為", 
    degree: "碩士", 
    year: "113級", 
    thesis: "選擇性雷射熔融列印品質自動化量測"
  },
  { 
    name: "林又齊", 
    degree: "碩士", 
    year: "113級", 
    thesis: "電磁彈射器之磁懸浮控制與彈射驗證"
  },
];

// 自動轉換邏輯：產生 ID
export const alumniList: Alumni[] = rawAlumniData.map((alumni, index) => ({
  id: index + 1,
  ...alumni
}));