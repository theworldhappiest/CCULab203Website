// 定義最新消息的資料結構
export interface NewsItem {
  id: number;
  date: string;
  title: string;
  category: string;
}

// 定義研究領域的資料結構
export interface ResearchItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// 定義實驗室成員的資料結構
export interface MemberItem {
  id: number;
  name: string;
  role: string; // e.g., 博士生, 碩士生
  imageUrl: string;
}