// data/newData.ts

// 1. 你只要編輯這個清單，不用填 id
const rawNewsList = [
  {
    date: "2026-08-10",
    category: "榮譽榜",
    title: "本實驗室蔡舜宇同學、莊智翔同學及專題生團隊，榮獲「2026台灣無人飛機創意設計競賽」第一名及最佳飛行表現獎",
    content: "詳細內容..."
  },
  {
    date: "2025-12-08",
    category: "榮譽榜",
    title: "賀！本實驗室陳伯彥同學榮獲東京威力科創 機器人大賽季軍",
    content: "詳細內容..."
  },
  {
    date: "2025-09-01",
    category: "實驗室公告",
    title: "歡迎 115 學年度碩士班新生加入實驗室",
    content: "詳細內容..."
  },
];

// 2. 自動編號（不用動這段）
export const newsList = rawNewsList.map((item, index) => ({
  id: index + 1,
  ...item
}));