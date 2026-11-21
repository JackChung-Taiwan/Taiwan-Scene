const ATTRACTIONS = [
  {
    "id": 1,
    "region": "臺北市",
    "name": "臺北101",
    "category": "都會建築",
    "file": "images/001.jpg"
  },
  {
    "id": 2,
    "region": "臺北市",
    "name": "中正紀念堂",
    "category": "文化建築",
    "file": "images/002.jpg"
  },
  {
    "id": 3,
    "region": "臺北市",
    "name": "國立故宮博物院",
    "category": "博物館",
    "file": "images/003.jpg"
  },
  {
    "id": 4,
    "region": "臺北市",
    "name": "圓山大飯店",
    "category": "歷史建築",
    "file": "images/004.jpg"
  },
  {
    "id": 5,
    "region": "臺北市",
    "name": "艋舺龍山寺",
    "category": "廟宇",
    "file": "images/005.jpg"
  },
  {
    "id": 6,
    "region": "臺北市",
    "name": "西門町",
    "category": "街區",
    "file": "images/006.jpg"
  },
  {
    "id": 7,
    "region": "臺北市",
    "name": "剝皮寮歷史街區",
    "category": "街區",
    "file": "images/007.jpg"
  },
  {
    "id": 8,
    "region": "臺北市",
    "name": "陽明山竹子湖",
    "category": "自然景觀",
    "file": "images/008.jpg"
  },
  {
    "id": 9,
    "region": "臺北市",
    "name": "北投地熱谷",
    "category": "溫泉",
    "file": "images/009.jpg"
  },
  {
    "id": 10,
    "region": "臺北市",
    "name": "貓空纜車",
    "category": "觀光設施",
    "file": "images/010.jpg"
  },
  {
    "id": 11,
    "region": "新北市",
    "name": "九份老街",
    "category": "街區",
    "file": "images/011.jpg"
  },
  {
    "id": 12,
    "region": "新北市",
    "name": "十分瀑布",
    "category": "瀑布",
    "file": "images/012.jpg"
  },
  {
    "id": 13,
    "region": "新北市",
    "name": "野柳女王頭",
    "category": "地質景觀",
    "file": "images/013.jpg"
  },
  {
    "id": 14,
    "region": "新北市",
    "name": "淡水情人橋",
    "category": "橋梁",
    "file": "images/014.jpg"
  },
  {
    "id": 15,
    "region": "新北市",
    "name": "平溪天燈",
    "category": "人文風景",
    "file": "images/015.jpg"
  },
  {
    "id": 16,
    "region": "新北市",
    "name": "野柳地質公園",
    "category": "地質景觀",
    "file": "images/016.jpg"
  },
  {
    "id": 17,
    "region": "基隆市",
    "name": "正濱漁港",
    "category": "港灣",
    "file": "images/017.jpg"
  },
  {
    "id": 18,
    "region": "宜蘭縣",
    "name": "蘭陽博物館",
    "category": "博物館",
    "file": "images/018.jpg"
  },
  {
    "id": 19,
    "region": "宜蘭縣",
    "name": "龜山島",
    "category": "海岸島嶼",
    "file": "images/019.jpg"
  },
  {
    "id": 20,
    "region": "宜蘭縣",
    "name": "太平山森林鐵路",
    "category": "森林鐵道",
    "file": "images/020.jpg"
  },
  {
    "id": 21,
    "region": "新竹縣",
    "name": "內灣老街",
    "category": "街區",
    "file": "images/021.jpg"
  },
  {
    "id": 22,
    "region": "新竹縣",
    "name": "合興車站",
    "category": "鐵路",
    "file": "images/022.jpg"
  },
  {
    "id": 23,
    "region": "新竹縣",
    "name": "北埔老街",
    "category": "街區",
    "file": "images/023.jpg"
  },
  {
    "id": 24,
    "region": "新竹市",
    "name": "新竹都城隍廟",
    "category": "廟宇",
    "file": "images/024.jpg"
  },
  {
    "id": 25,
    "region": "新竹市",
    "name": "南寮漁港",
    "category": "港灣",
    "file": "images/025.jpg"
  },
  {
    "id": 26,
    "region": "苗栗縣",
    "name": "龍騰斷橋",
    "category": "古蹟",
    "file": "images/026.jpg"
  },
  {
    "id": 27,
    "region": "苗栗縣",
    "name": "勝興車站",
    "category": "鐵路",
    "file": "images/027.jpg"
  },
  {
    "id": 28,
    "region": "苗栗縣",
    "name": "南庄老街",
    "category": "街區",
    "file": "images/028.jpg"
  },
  {
    "id": 29,
    "region": "苗栗縣",
    "name": "大湖草莓園",
    "category": "農村",
    "file": "images/029.jpg"
  },
  {
    "id": 30,
    "region": "苗栗縣",
    "name": "三義木雕街",
    "category": "街區",
    "file": "images/030.jpg"
  },
  {
    "id": 31,
    "region": "臺中市",
    "name": "臺中國家歌劇院",
    "category": "現代建築",
    "file": "images/031.jpg"
  },
  {
    "id": 32,
    "region": "臺中市",
    "name": "彩虹眷村",
    "category": "藝術街區",
    "file": "images/032.jpg"
  },
  {
    "id": 33,
    "region": "臺中市",
    "name": "高美濕地",
    "category": "自然景觀",
    "file": "images/033.jpg"
  },
  {
    "id": 34,
    "region": "臺中市",
    "name": "路思義教堂",
    "category": "建築",
    "file": "images/034.jpg"
  },
  {
    "id": 35,
    "region": "臺中市",
    "name": "大甲鎮瀾宮",
    "category": "廟宇",
    "file": "images/035.jpg"
  },
  {
    "id": 36,
    "region": "彰化縣",
    "name": "八卦山大佛",
    "category": "宗教建築",
    "file": "images/036.jpg"
  },
  {
    "id": 37,
    "region": "彰化縣",
    "name": "鹿港老街",
    "category": "街區",
    "file": "images/037.jpg"
  },
  {
    "id": 38,
    "region": "彰化縣",
    "name": "彰化扇形車庫",
    "category": "鐵道文化",
    "file": "images/038.jpg"
  },
  {
    "id": 39,
    "region": "南投縣",
    "name": "溪頭森林遊樂區",
    "category": "森林",
    "file": "images/039.jpg"
  },
  {
    "id": 40,
    "region": "南投縣",
    "name": "日月潭",
    "category": "湖泊",
    "file": "images/040.jpg"
  },
  {
    "id": 41,
    "region": "南投縣",
    "name": "清境農場",
    "category": "高山草原",
    "file": "images/041.jpg"
  },
  {
    "id": 42,
    "region": "南投縣",
    "name": "合歡山",
    "category": "高山",
    "file": "images/042.jpg"
  },
  {
    "id": 43,
    "region": "南投縣",
    "name": "武嶺",
    "category": "高山",
    "file": "images/043.jpg"
  },
  {
    "id": 44,
    "region": "南投縣",
    "name": "奧萬大森林遊樂區",
    "category": "森林",
    "file": "images/044.jpg"
  },
  {
    "id": 45,
    "region": "南投縣",
    "name": "杉林溪森林生態渡假園區",
    "category": "森林",
    "file": "images/045.jpg"
  },
  {
    "id": 46,
    "region": "南投縣",
    "name": "集集綠色隧道",
    "category": "鐵道綠廊",
    "file": "images/046.jpg"
  },
  {
    "id": 47,
    "region": "南投縣",
    "name": "車埕車站",
    "category": "鐵道",
    "file": "images/047.jpg"
  },
  {
    "id": 48,
    "region": "嘉義縣",
    "name": "阿里山森林鐵路",
    "category": "森林鐵道",
    "file": "images/048.jpg"
  },
  {
    "id": 49,
    "region": "嘉義縣",
    "name": "阿里山神木群",
    "category": "森林",
    "file": "images/049.jpg"
  },
  {
    "id": 50,
    "region": "嘉義縣",
    "name": "奮起湖老街",
    "category": "街區",
    "file": "images/050.jpg"
  },
  {
    "id": 51,
    "region": "嘉義市",
    "name": "檜意森活村",
    "category": "歷史建築",
    "file": "images/051.jpg"
  },
  {
    "id": 52,
    "region": "嘉義市",
    "name": "文化路夜市",
    "category": "夜市",
    "file": "images/052.jpg"
  },
  {
    "id": 53,
    "region": "臺南市",
    "name": "赤崁樓",
    "category": "古蹟",
    "file": "images/053.jpg"
  },
  {
    "id": 54,
    "region": "臺南市",
    "name": "安平古堡",
    "category": "古蹟",
    "file": "images/054.jpg"
  },
  {
    "id": 55,
    "region": "臺南市",
    "name": "安平樹屋",
    "category": "歷史景點",
    "file": "images/055.jpg"
  },
  {
    "id": 56,
    "region": "臺南市",
    "name": "奇美博物館",
    "category": "博物館",
    "file": "images/056.jpg"
  },
  {
    "id": 57,
    "region": "臺南市",
    "name": "臺南孔廟",
    "category": "古蹟",
    "file": "images/057.jpg"
  },
  {
    "id": 58,
    "region": "臺南市",
    "name": "四草綠色隧道",
    "category": "水域自然",
    "file": "images/058.jpg"
  },
  {
    "id": 59,
    "region": "臺南市",
    "name": "七股鹽山",
    "category": "地景",
    "file": "images/059.jpg"
  },
  {
    "id": 60,
    "region": "臺南市",
    "name": "井仔腳瓦盤鹽田",
    "category": "地景",
    "file": "images/060.jpg"
  },
  {
    "id": 61,
    "region": "高雄市",
    "name": "衛武營國家藝術文化中心",
    "category": "文化建築",
    "file": "images/061.jpg"
  },
  {
    "id": 62,
    "region": "高雄市",
    "name": "駁二藝術特區",
    "category": "藝術街區",
    "file": "images/062.jpg"
  },
  {
    "id": 63,
    "region": "高雄市",
    "name": "高雄港",
    "category": "港灣",
    "file": "images/063.jpg"
  },
  {
    "id": 64,
    "region": "高雄市",
    "name": "西子灣",
    "category": "海灣",
    "file": "images/064.jpg"
  },
  {
    "id": 65,
    "region": "高雄市",
    "name": "旗津燈塔",
    "category": "海岸建築",
    "file": "images/065.jpg"
  },
  {
    "id": 66,
    "region": "高雄市",
    "name": "美麗島站",
    "category": "公共藝術",
    "file": "images/066.jpg"
  },
  {
    "id": 67,
    "region": "高雄市",
    "name": "佛光山佛陀紀念館",
    "category": "宗教建築",
    "file": "images/067.jpg"
  },
  {
    "id": 68,
    "region": "高雄市",
    "name": "田寮月世界",
    "category": "地質景觀",
    "file": "images/068.jpg"
  },
  {
    "id": 69,
    "region": "高雄市",
    "name": "愛河",
    "category": "城市河川",
    "file": "images/069.jpg"
  },
  {
    "id": 70,
    "region": "高雄市",
    "name": "高雄流行音樂中心",
    "category": "現代建築",
    "file": "images/070.jpg"
  },
  {
    "id": 71,
    "region": "屏東縣",
    "name": "墾丁白沙灣",
    "category": "海岸",
    "file": "images/071.jpg"
  },
  {
    "id": 72,
    "region": "屏東縣",
    "name": "鵝鑾鼻燈塔",
    "category": "海岸建築",
    "file": "images/072.jpg"
  },
  {
    "id": 73,
    "region": "屏東縣",
    "name": "龍磐公園",
    "category": "海岸草原",
    "file": "images/073.jpg"
  },
  {
    "id": 74,
    "region": "屏東縣",
    "name": "船帆石",
    "category": "岩岸",
    "file": "images/074.jpg"
  },
  {
    "id": 75,
    "region": "屏東縣",
    "name": "恆春古城",
    "category": "歷史建築",
    "file": "images/075.jpg"
  },
  {
    "id": 76,
    "region": "屏東縣",
    "name": "國立海洋生物博物館",
    "category": "博物館",
    "file": "images/076.jpg"
  },
  {
    "id": 77,
    "region": "屏東縣",
    "name": "小琉球花瓶岩",
    "category": "海岸地景",
    "file": "images/077.jpg"
  },
  {
    "id": 78,
    "region": "屏東縣",
    "name": "大鵬灣跨海大橋",
    "category": "橋梁",
    "file": "images/078.jpg"
  },
  {
    "id": 79,
    "region": "屏東縣",
    "name": "勝利星村",
    "category": "歷史街區",
    "file": "images/079.jpg"
  },
  {
    "id": 80,
    "region": "屏東縣",
    "name": "四重溪溫泉",
    "category": "溫泉",
    "file": "images/080.jpg"
  },
  {
    "id": 81,
    "region": "宜蘭縣",
    "name": "冬山河親水公園",
    "category": "水岸",
    "file": "images/081.jpg"
  },
  {
    "id": 82,
    "region": "宜蘭縣",
    "name": "南方澳漁港",
    "category": "港灣",
    "file": "images/082.jpg"
  },
  {
    "id": 83,
    "region": "宜蘭縣",
    "name": "礁溪溫泉",
    "category": "溫泉",
    "file": "images/083.jpg"
  },
  {
    "id": 84,
    "region": "宜蘭縣",
    "name": "羅東林業文化園區",
    "category": "林業文化",
    "file": "images/084.jpg"
  },
  {
    "id": 85,
    "region": "花蓮縣",
    "name": "太魯閣國家公園",
    "category": "山岳峽谷",
    "file": "images/085.jpg"
  },
  {
    "id": 86,
    "region": "花蓮縣",
    "name": "七星潭",
    "category": "海岸",
    "file": "images/086.jpg"
  },
  {
    "id": 87,
    "region": "花蓮縣",
    "name": "清水斷崖",
    "category": "海岸",
    "file": "images/087.jpg"
  },
  {
    "id": 88,
    "region": "花蓮縣",
    "name": "鯉魚潭",
    "category": "湖泊",
    "file": "images/088.jpg"
  },
  {
    "id": 89,
    "region": "花蓮縣",
    "name": "東大門夜市",
    "category": "夜市",
    "file": "images/089.jpg"
  },
  {
    "id": 90,
    "region": "花蓮縣",
    "name": "瑞穗牧場",
    "category": "農村",
    "file": "images/090.jpg"
  },
  {
    "id": 91,
    "region": "臺東縣",
    "name": "三仙台",
    "category": "海岸橋梁",
    "file": "images/091.jpg"
  },
  {
    "id": 92,
    "region": "臺東縣",
    "name": "伯朗大道",
    "category": "農村",
    "file": "images/092.jpg"
  },
  {
    "id": 93,
    "region": "臺東縣",
    "name": "池上大坡池",
    "category": "湖泊",
    "file": "images/093.jpg"
  },
  {
    "id": 94,
    "region": "臺東縣",
    "name": "多良車站",
    "category": "鐵道",
    "file": "images/094.jpg"
  },
  {
    "id": 95,
    "region": "臺東縣",
    "name": "鹿野高台",
    "category": "高地草原",
    "file": "images/095.jpg"
  },
  {
    "id": 96,
    "region": "臺東縣",
    "name": "綠島燈塔",
    "category": "島嶼",
    "file": "images/096.jpg"
  },
  {
    "id": 97,
    "region": "臺東縣",
    "name": "蘭嶼青青草原",
    "category": "島嶼草原",
    "file": "images/097.jpg"
  },
  {
    "id": 98,
    "region": "澎湖縣",
    "name": "澎湖跨海大橋",
    "category": "橋梁",
    "file": "images/098.jpg"
  },
  {
    "id": 99,
    "region": "金門縣",
    "name": "莒光樓",
    "category": "歷史建築",
    "file": "images/099.jpg"
  },
  {
    "id": 100,
    "region": "連江縣",
    "name": "芹壁聚落",
    "category": "聚落",
    "file": "images/100.jpg"
  }
];
