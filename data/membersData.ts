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
  image: string; // 確保匯出時一定有圖
}

export interface Alumni extends RawAlumni {
  id: number;
}

// ==========================================
// 2. [現任成員] 請在這裡編輯名單 (不用填 ID)
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
  // 若有新成員，直接在這裡往下加一行即可...
];

// 自動轉換邏輯：產生 ID + 自動大頭貼
export const currentMembers: Member[] = rawMembersData.map((member, index) => ({
  ...member,
  id: index + 1,
  // [修改重點]
  // 1. 加上 length=${member.name.length} -> 讓它根據名字長度決定顯示幾個字 (3個字就顯示3個)
  // 2. 加上 font-size=0.3 -> 字稍微縮小一點，才不會 3 個字擠爆圓圈
  image: member.image || `https://ui-avatars.com/api/?name=${member.name}&background=1e3a8a&color=fff&size=200&length=${member.name.length}&font-size=0.3`
}));

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
  id: index + 1, // 自動產生 1, 2, 3... 避免重複 ID 報錯
  ...alumni
}));