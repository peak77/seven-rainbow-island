const LEGACY_SUBJECTS = [
  {
    id: "english",
    subject: "英语岛",
    title: "颜色魔法",
    description: "听一听英文，找到它代表的颜色。",
    icon: "🎈",
    duration: "3 分钟",
    color: "#4f8fdf",
    soft: "#e8f2ff",
    type: "listen",
    instruction: "先点喇叭听一听，再选出正确的颜色。",
    word: "yellow",
    speech: "Yellow. Find the color yellow.",
    options: [
      { label: "蓝色", emoji: "🔵", value: "blue" },
      { label: "黄色", emoji: "🟡", value: "yellow" },
      { label: "红色", emoji: "🔴", value: "red" },
    ],
    answer: "yellow",
    hint: "像太阳和小鸭子的颜色。",
  },
  {
    id: "chinese",
    subject: "语文岛",
    title: "汉字捉迷藏",
    description: "看图找汉字，认识身边的小世界。",
    icon: "🪁",
    duration: "4 分钟",
    color: "#ec6c73",
    soft: "#ffedf0",
    type: "choice",
    instruction: "小山长得尖尖的，哪个字是“山”？",
    options: [
      { label: "水", emoji: "💧", value: "水" },
      { label: "山", emoji: "⛰️", value: "山" },
      { label: "日", emoji: "☀️", value: "日" },
    ],
    answer: "山",
    hint: "“山”字中间高，两边低，就像三座小山。",
  },
  {
    id: "math",
    subject: "数学岛",
    title: "数数瓢虫",
    description: "用小手指着数，看看来了几只朋友。",
    icon: "🐞",
    duration: "3 分钟",
    color: "#db9f20",
    soft: "#fff6cf",
    type: "count",
    instruction: "一只一只数一数，一共有几只瓢虫？",
    count: 4,
    countEmoji: "🐞",
    options: [
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ],
    answer: "4",
    hint: "伸出四根小手指，再数一次：1、2、3、4。",
  },
  {
    id: "science",
    subject: "科学岛",
    title: "种子的秘密",
    description: "猜一猜，什么会慢慢长成一棵植物？",
    icon: "🌱",
    duration: "4 分钟",
    color: "#59aa75",
    soft: "#e9f8ee",
    type: "choice",
    instruction: "把它放进泥土，浇一点水，谁会发芽？",
    options: [
      { label: "种子", emoji: "🫘", value: "seed" },
      { label: "石头", emoji: "🪨", value: "stone" },
      { label: "积木", emoji: "🧱", value: "block" },
    ],
    answer: "seed",
    hint: "它小小的，里面藏着一棵植物。",
  },
  {
    id: "creative",
    subject: "创意岛",
    title: "图案小侦探",
    description: "观察重复的规律，找出消失的图案。",
    icon: "🎨",
    duration: "3 分钟",
    color: "#9570c7",
    soft: "#f1ebfb",
    type: "pattern",
    instruction: "苹果、星星、苹果、星星……接下来是谁？",
    pattern: ["🍎", "⭐", "🍎", "⭐"],
    options: [
      { label: "苹果", emoji: "🍎", value: "apple" },
      { label: "月亮", emoji: "🌙", value: "moon" },
      { label: "小鱼", emoji: "🐟", value: "fish" },
    ],
    answer: "apple",
    hint: "它们在轮流出现：苹果、星星、苹果、星星……",
  },
  {
    id: "health",
    subject: "活力岛",
    title: "小青蛙跳跳",
    description: "站起来动一动，身体也要一起长大。",
    icon: "🐸",
    duration: "2 分钟",
    color: "#32a6a2",
    soft: "#e4f7f5",
    type: "movement",
    instruction: "像小青蛙一样跳 5 下，每跳一下就点一次按钮。",
    target: 5,
    hint: "弯弯小膝盖，轻轻跳起来。注意旁边不要有东西哦！",
  },
];

const SUBJECT_DEFS = window.SEVEN_CONTENT?.SUBJECT_DEFS || LEGACY_SUBJECTS.map((subject) => ({
  id: subject.id,
  subject: subject.subject,
  icon: subject.icon,
  color: subject.color,
  soft: subject.soft,
}));
const DAILY_LESSON_BANK = window.SEVEN_CONTENT?.DAILY_LESSON_BANK || Object.fromEntries(
  LEGACY_SUBJECTS.map((subject) => [subject.id, [{ ...subject, subjectId: subject.id }]]),
);
let SUBJECTS = selectDailySubjects(new Date());

const FAVORITE_MISSIONS = [
  {
    id: "ultraman-energy-pattern",
    favorite: true,
    series: "宇宙能量英雄",
    subject: "宇宙能量站",
    title: "能量规律大挑战",
    description: "观察红蓝能量交替出现，帮宇宙小队补上最后一格。",
    icon: "✦",
    duration: "3 分钟",
    color: "#d94d4d",
    soft: "#fff0e8",
    visual: "cosmic",
    type: "pattern",
    instruction: "红能量、蓝能量轮流出现。看看问号的位置应该放什么？",
    pattern: ["🔴", "🔵", "🔴", "🔵"],
    options: [
      { label: "红能量", emoji: "🔴", value: "red" },
      { label: "黄能量", emoji: "🟡", value: "yellow" },
      { label: "绿能量", emoji: "🟢", value: "green" },
    ],
    answer: "red",
    hint: "它们在轮流出现：红、蓝、红、蓝……",
  },
  {
    id: "labrador-safety-detective",
    favorite: true,
    series: "安全警犬侦探",
    subject: "安全侦探局",
    title: "过马路安全判断",
    description: "和小警长一起观察场景，找出最安全的过马路方法。",
    icon: "🐾",
    duration: "4 分钟",
    color: "#c78329",
    soft: "#fff4cf",
    visual: "police",
    type: "choice",
    instruction: "准备过马路时，下面哪一种做法最安全？",
    options: [
      { label: "牵好大人的手，绿灯时走斑马线", emoji: "🚦", value: "safe" },
      { label: "追着皮球跑到马路上", emoji: "⚽", value: "ball" },
      { label: "从停着的汽车中间钻过去", emoji: "🚗", value: "cars" },
    ],
    answer: "safe",
    hint: "先停下、左右看，牵好大人的手，从斑马线通过。",
  },
  {
    id: "mini-agent-english-command",
    favorite: true,
    series: "迷你行动队",
    subject: "英语行动队",
    title: "听口令做动作",
    description: "听懂简单英语行动口令，选出小特工要做的动作。",
    icon: "⚡",
    duration: "3 分钟",
    color: "#596bd8",
    soft: "#eef0ff",
    visual: "agent",
    type: "listen",
    instruction: "点喇叭听英语口令，再选出正确动作。",
    speech: "Jump! Jump like a brave little agent!",
    options: [
      { label: "跳一跳", emoji: "⬆️", value: "jump" },
      { label: "坐下来", emoji: "🪑", value: "sit" },
      { label: "睡觉", emoji: "😴", value: "sleep" },
    ],
    answer: "jump",
    hint: "Jump 的意思是“跳一跳”。可以跟着一起跳一下！",
  },
];

const VIDEOS = [
  {
    id: "color-parade",
    category: "英语启蒙",
    subject: "英语",
    language: "中英双语",
    resolution: "720P 原创动画",
    title: "颜色气球大游行",
    description: "跟着苹果、气球和太阳认识 red、blue、yellow。",
    duration: 18,
    durationLabel: "18 秒",
    icon: "🎈",
    doodles: ["RED", "YELLOW"],
    accent: "#e75f4b",
    background: "linear-gradient(145deg, #ffd36d, #ff9d7d 54%, #75c9e8)",
    talk: "今天你还在哪里见过红色、蓝色和黄色？",
    chapters: [
      { time: 0, caption: "颜色朋友来集合啦！", narration: "颜色朋友来集合啦！" },
      { time: 3.5, caption: "红苹果，red！", narration: "红苹果，Red。Red。", lang: "zh-CN" },
      { time: 7.5, caption: "蓝气球，blue！", narration: "蓝气球，Blue。Blue。", lang: "zh-CN" },
      { time: 11.5, caption: "黄太阳，yellow！", narration: "黄太阳，Yellow。Yellow。", lang: "zh-CN" },
      { time: 15.5, caption: "Red、blue、yellow，颜色真好看！", narration: "Red，Blue，Yellow。你都记住了吗？" },
    ],
    renderer: "colors",
  },
  {
    id: "mountain-character",
    category: "汉字故事",
    subject: "语文",
    language: "中文",
    resolution: "720P 原创动画",
    title: "“山”字变变变",
    description: "看看三座高高低低的山峰，怎样变成汉字“山”。",
    duration: 18,
    durationLabel: "18 秒",
    icon: "⛰️",
    doodles: ["象形字", "山"],
    accent: "#b85f48",
    background: "linear-gradient(145deg, #f6d89e, #eaa56e 58%, #8cb49d)",
    talk: "“山”字为什么中间高、两边低呢？",
    chapters: [
      { time: 0, caption: "很久以前，人们把看到的东西画下来。", narration: "很久以前，人们把看到的东西画下来。" },
      { time: 4, caption: "你看，三座山峰高高低低。", narration: "你看，三座山峰高高低低。" },
      { time: 8.5, caption: "中间高，两边低，慢慢变成了“山”。", narration: "中间高，两边低，慢慢变成了，山。" },
      { time: 14, caption: "看到“山”，就想起高高的山峰！", narration: "看到山字，就想起高高的山峰。" },
    ],
    renderer: "mountain",
  },
  {
    id: "five-stars",
    category: "数学儿歌",
    subject: "数学",
    language: "中文",
    resolution: "720P 原创动画",
    title: "五颗星星排排坐",
    description: "一颗一颗亮起来，跟着动画从 1 数到 5。",
    duration: 17,
    durationLabel: "17 秒",
    icon: "⭐",
    doodles: ["1 2 3", "4 5"],
    accent: "#d29b20",
    background: "linear-gradient(145deg, #354b80, #263665 57%, #876aae)",
    talk: "闭上眼睛，你还能伸出五根手指数到 5 吗？",
    chapters: [
      { time: 0, caption: "夜空黑黑的，谁要亮起来？", narration: "夜空黑黑的，谁要亮起来？" },
      { time: 3, caption: "1、2，来了两颗星星。", narration: "一，二。来了两颗星星。" },
      { time: 7, caption: "3、4，又来了两颗星星。", narration: "三，四。又来了两颗星星。" },
      { time: 11, caption: "5！一共有五颗亮晶晶的星星。", narration: "五！一共有五颗亮晶晶的星星。" },
      { time: 14.5, caption: "从 1 数到 5：1、2、3、4、5！", narration: "一起数。一，二，三，四，五！" },
    ],
    renderer: "stars",
  },
  {
    id: "seed-adventure",
    category: "科学观察",
    subject: "科学",
    language: "中文",
    resolution: "720P 原创动画",
    title: "小种子的长大旅行",
    description: "泥土、水、阳光来帮忙，小种子会发生什么？",
    duration: 20,
    durationLabel: "20 秒",
    icon: "🌱",
    doodles: ["水 + 阳光", "发芽啦"],
    accent: "#4f9a68",
    background: "linear-gradient(145deg, #76c9e8, #c5e7b2 52%, #a87d56)",
    talk: "种子长大需要哪三位好朋友？",
    chapters: [
      { time: 0, caption: "小种子睡在软软的泥土里。", narration: "小种子睡在软软的泥土里。" },
      { time: 4, caption: "小雨滴答滴答，泥土变湿润了。", narration: "小雨滴答滴答，泥土变湿润了。" },
      { time: 8, caption: "小种子喝饱水，钻出一根嫩芽。", narration: "小种子喝饱水，钻出一根嫩芽。" },
      { time: 12.5, caption: "太阳暖暖的，小叶子慢慢张开。", narration: "太阳暖暖的，小叶子慢慢张开。" },
      { time: 17, caption: "有泥土、水和阳光，小种子长大啦！", narration: "有泥土，水和阳光，小种子长大啦！" },
    ],
    renderer: "seed",
  },
  {
    id: "rhythm-train",
    category: "音乐启蒙",
    subject: "音乐",
    language: "中文",
    resolution: "720P 原创动画",
    title: "节奏小火车",
    description: "听鼓点、拍小手，认识快快和慢慢的节奏。",
    duration: 19,
    durationLabel: "19 秒",
    icon: "🥁",
    doodles: ["咚 咚", "拍拍手"],
    accent: "#df6c73",
    background: "linear-gradient(145deg, #ffd8a8, #f5a0b5 55%, #8bc9dc)",
    talk: "你能拍出“慢、慢、快快快”的节奏吗？",
    chapters: [
      { time: 0, caption: "节奏小火车要出发啦！", narration: "节奏小火车要出发啦！准备好你的小手。" },
      { time: 3.5, caption: "慢慢拍：咚——咚——", narration: "先听慢节奏。咚，咚。跟着拍两下。" },
      { time: 8, caption: "快快拍：咚咚咚！", narration: "现在是快节奏。咚咚咚！拍三下。" },
      { time: 12.5, caption: "慢、慢、快快快！", narration: "合在一起。慢，慢，快快快！" },
      { time: 16.5, caption: "你就是小小音乐家！", narration: "节奏完成啦！你就是小小音乐家。" },
    ],
    renderer: "rhythm",
  },
  {
    id: "animal-move",
    category: "运动儿歌",
    subject: "运动",
    language: "中文",
    resolution: "720P 原创动画",
    title: "动物动作操",
    description: "像小兔跳、像小鸟伸展、像小熊稳稳走。",
    duration: 20,
    durationLabel: "20 秒",
    icon: "🐰",
    doodles: ["跳一跳", "伸伸手"],
    accent: "#32a69b",
    background: "linear-gradient(145deg, #a9e5ce, #78c8df 56%, #f6d277)",
    talk: "哪一个动作让你的身体最有力量？",
    chapters: [
      { time: 0, caption: "站稳啦，动物动作操开始！", narration: "找一块安全的空地，站稳啦。动物动作操开始！" },
      { time: 3.5, caption: "小兔子：轻轻跳 3 下", narration: "像小兔子一样，轻轻跳三下。一，二，三。" },
      { time: 8.5, caption: "小鸟：张开翅膀伸一伸", narration: "像小鸟一样，张开手臂，向两边伸一伸。" },
      { time: 13, caption: "小熊：抬高膝盖走一走", narration: "像小熊一样，抬高膝盖，稳稳走四步。" },
      { time: 17, caption: "深呼吸，动作操完成！", narration: "吸气，呼气。动物动作操完成啦！" },
    ],
    renderer: "movement",
  },
  {
    id: "morning-routine",
    category: "生活综合",
    subject: "综合",
    language: "中文",
    resolution: "720P 原创动画",
    title: "早晨任务排排队",
    description: "起床、刷牙、穿衣、吃早餐，学会生活顺序。",
    duration: 20,
    durationLabel: "20 秒",
    icon: "☀️",
    doodles: ["先做什么", "排排队"],
    accent: "#e09035",
    background: "linear-gradient(145deg, #fff0a8, #f7b67a 55%, #8bc7d9)",
    talk: "Seven 每天早晨还会做哪些事情？",
    chapters: [
      { time: 0, caption: "太阳出来啦，新的一天开始！", narration: "太阳出来啦。新的一天开始，看看早晨要做哪些事情。" },
      { time: 3.5, caption: "第一步：起床叠好小被子", narration: "第一步，起床，把小被子整理好。" },
      { time: 7.5, caption: "第二步：认真刷牙洗脸", narration: "第二步，认真刷牙，再把小脸洗干净。" },
      { time: 11.5, caption: "第三步：穿好衣服和鞋子", narration: "第三步，穿好衣服和鞋子。" },
      { time: 15.5, caption: "第四步：吃早餐，准备出发！", narration: "第四步，吃一份健康早餐。准备出发啦！" },
    ],
    renderer: "routine",
  },
];

const OPEN_VIDEOS = [
  {
    id: "lettuce-sprout",
    category: "植物观察",
    subject: "科学",
    language: "中文",
    title: "小生菜钻出泥土",
    summary: "真实的延时摄影：一棵小生菜怎样顶开泥土，慢慢露出嫩芽。",
    duration: "19 秒",
    resolution: "720P 高清",
    icon: "🌱",
    mp4Source: "./assets/videos/lettuce-sprout-720p.mp4",
    source: "./assets/videos/lettuce-sprout-720p.webm",
    poster: "./assets/posters/lettuce-sprout.webp",
    captions: { 中文: "./assets/captions/lettuce-sprout.zh-CN.vtt", 英语: "./assets/captions/lettuce-sprout.en.vtt" },
    sourcePage: "https://commons.wikimedia.org/wiki/File:Timelapse_of_lettuce_emerging.webm",
    sourceName: "Dwight Sipler · Wikimedia Commons",
    license: "CC BY 2.0",
    narration: "小种子喝到了水，正在用力往上长。先看到弯弯的小芽，然后叶子一点点打开。",
    question: "小芽为什么总是努力向上长？",
  },
  {
    id: "moon-sides",
    category: "宇宙观察",
    subject: "科学",
    language: "中文",
    title: "月亮的两张脸",
    summary: "NASA 动画展示月球亮的一面和暗的一面怎样一起变化。",
    duration: "15 秒",
    resolution: "1080P 高清",
    icon: "🌗",
    mp4Source: "./assets/videos/moon-sides-1080p.mp4",
    source: "./assets/videos/moon-sides-1080p.webm",
    poster: "./assets/posters/moon-sides.webp",
    captions: { 中文: "./assets/captions/moon-sides.zh-CN.vtt", 英语: "./assets/captions/moon-sides.en.vtt" },
    sourcePage: "https://commons.wikimedia.org/wiki/File:Lunar_Near_and_Far_Side_Phases_(SVS14992_-_Waxing_4K).webm",
    sourceName: "NASA Scientific Visualization Studio",
    license: "Public domain",
    narration: "月亮自己不会发光。太阳照到的地方亮亮的，照不到的地方暗暗的，所以我们会看到不同形状的月亮。",
    question: "今晚的月亮像圆盘、香蕉，还是小船？",
  },
  {
    id: "cloud-water",
    category: "天气科学",
    subject: "科学",
    language: "中文",
    title: "水跑到天空变成云",
    summary: "NASA 动画展示河水变成水汽，升到天空加入云朵。",
    duration: "22 秒",
    resolution: "1080P 高清",
    icon: "☁️",
    mp4Source: "./assets/videos/cloud-water-1080p.mp4",
    source: "./assets/videos/cloud-water-1080p.webm",
    poster: "./assets/posters/cloud-water.webp",
    captions: { 中文: "./assets/captions/cloud-water.zh-CN.vtt", 英语: "./assets/captions/cloud-water.en.vtt" },
    sourcePage: "https://commons.wikimedia.org/wiki/File:Clouds_101_(SVS20383_-_ExtendedRiverEvaporation_V06).webm",
    sourceName: "NASA Scientific Visualization Studio",
    license: "Public domain",
    narration: "太阳把水晒得暖暖的，一些水变成看不见的水汽飞上天空。水汽聚在一起，就可能变成白白的云。",
    question: "云朵里的水最后还会回到地面吗？",
  },
  {
    id: "moth-flower",
    category: "昆虫观察",
    subject: "科学",
    language: "中文",
    title: "像小鸟一样悬停的蛾",
    summary: "蜂鸟蛾快速扇动翅膀，停在空中用长长的口器吸花蜜。",
    duration: "33 秒",
    resolution: "1080P 竖屏高清",
    icon: "🌸",
    mp4Source: "./assets/videos/moth-flower-1080p.mp4",
    source: "./assets/videos/moth-flower-1080p.webm",
    poster: "./assets/posters/moth-flower.webp",
    captions: { 中文: "./assets/captions/moth-flower.zh-CN.vtt", 英语: "./assets/captions/moth-flower.en.vtt" },
    sourcePage: "https://commons.wikimedia.org/wiki/File:Macroglossum_stellatarum_on_Monarda_didyma_in_Dnipro_by_baby-bear.org.jpg_01.webm",
    sourceName: "Natalka Ukraine · Wikimedia Commons",
    license: "CC BY 4.0",
    narration: "它不是小鸟，而是一只蜂鸟蛾。它的翅膀扇得非常快，可以停在空中，再把长长的口器伸进花朵里喝花蜜。",
    question: "它身上哪些地方像小鸟，哪些地方像昆虫？",
  },
  {
    id: "beetle-leaf",
    category: "动物运动",
    subject: "科学",
    language: "中文",
    title: "甲虫的防滑小实验",
    summary: "一只甲虫在光滑的玉米叶片上努力行走，观察它怎样使用六条腿。",
    duration: "20 秒",
    resolution: "1080P 竖屏高清",
    icon: "🪲",
    mp4Source: "./assets/videos/beetle-leaf-1080p.mp4",
    source: "./assets/videos/beetle-leaf-1080p.webm",
    poster: "./assets/posters/beetle-leaf.webp",
    captions: { 中文: "./assets/captions/beetle-leaf.zh-CN.vtt", 英语: "./assets/captions/beetle-leaf.en.vtt" },
    sourcePage: "https://commons.wikimedia.org/wiki/File:Male_Polyphylla_fullo_beetle_slipping_from_a_Zea_mays_leaf_in_Dnipro_by_baby-bear.org.webm",
    sourceName: "Natalka Ukraine · Wikimedia Commons",
    license: "CC BY 4.0",
    narration: "甲虫有六条腿，可是这片叶子又直又光滑。它努力用脚抓住叶片，却还是会慢慢往下滑。",
    question: "在光滑地面和粗糙地面上走路，哪里更不容易滑倒？",
  },
];

const VIDEO_LANGUAGE_META = {
  中文: { label: "中文", nativeLabel: "中文", lang: "zh-CN" },
  英语: { label: "英语", nativeLabel: "English", lang: "en-US" },
  中英双语: { label: "中英双语", nativeLabel: "中文 + English", lang: "bilingual" },
  日语: { label: "日语", nativeLabel: "日本語", lang: "ja-JP" },
  西班牙语: { label: "西班牙语", nativeLabel: "Español", lang: "es-ES" },
  法语: { label: "法语", nativeLabel: "Français", lang: "fr-FR" },
  德语: { label: "德语", nativeLabel: "Deutsch", lang: "de-DE" },
};

const OPEN_VIDEO_TRANSLATIONS = {
  "lettuce-sprout": {
    英语: {
      narration: "The little lettuce sprout is pushing up through the soil. First we see a curved stem, and then its tiny leaves slowly open.",
      question: "Why do you think the sprout keeps growing upward?",
    },
    日语: {
      narration: "小さなレタスの芽が、土を押し上げて伸びています。曲がった茎が見えたあと、小さな葉っぱがゆっくり開きます。",
      question: "芽はどうして上へ上へと伸びるのでしょう？",
    },
    西班牙语: {
      narration: "El pequeño brote de lechuga empuja la tierra para salir. Primero vemos un tallo curvado y después sus hojitas se abren poco a poco.",
      question: "¿Por qué crees que el brote crece hacia arriba?",
    },
    法语: {
      narration: "La petite pousse de laitue traverse doucement la terre. On voit d'abord une tige courbée, puis ses petites feuilles s'ouvrent peu à peu.",
      question: "Pourquoi la pousse grandit-elle vers le haut ?",
    },
    德语: {
      narration: "Der kleine Salatkeim drückt sich durch die Erde. Zuerst sehen wir einen gebogenen Stängel, dann öffnen sich langsam die kleinen Blätter.",
      question: "Warum wächst der Keim wohl nach oben?",
    },
  },
  "moon-sides": {
    英语: {
      narration: "The Moon does not make its own light. The side touched by sunlight looks bright, while the other side stays dark, so the Moon seems to change shape.",
      question: "Does tonight's Moon look like a circle, a banana, or a little boat?",
    },
    日语: {
      narration: "月は自分で光っているのではありません。太陽の光が当たるところは明るく、当たらないところは暗いので、月の形が変わって見えます。",
      question: "今夜の月は、丸、バナナ、それとも小さな船に見えますか？",
    },
    西班牙语: {
      narration: "La Luna no produce su propia luz. La parte iluminada por el Sol se ve brillante y la otra queda oscura, por eso parece cambiar de forma.",
      question: "¿La Luna de esta noche parece un círculo, un plátano o un barquito?",
    },
    法语: {
      narration: "La Lune ne fabrique pas sa propre lumière. La partie éclairée par le Soleil brille et l'autre reste sombre, alors sa forme semble changer.",
      question: "Ce soir, la Lune ressemble-t-elle à un cercle, une banane ou un petit bateau ?",
    },
    德语: {
      narration: "Der Mond leuchtet nicht von selbst. Die von der Sonne beleuchtete Seite ist hell, die andere bleibt dunkel. Deshalb scheint seine Form sich zu verändern.",
      question: "Sieht der Mond heute wie ein Kreis, eine Banane oder ein kleines Boot aus?",
    },
  },
  "cloud-water": {
    英语: {
      narration: "The Sun warms the water. Some of it turns into invisible water vapor and rises into the sky. When the vapor gathers together, it can become a white cloud.",
      question: "Can the water inside a cloud come back down to the ground?",
    },
    日语: {
      narration: "太陽が水をあたためると、水の一部は見えない水蒸気になって空へ上がります。水蒸気が集まると、白い雲になります。",
      question: "雲の中の水は、また地面に戻ってくるでしょうか？",
    },
    西班牙语: {
      narration: "El Sol calienta el agua. Una parte se convierte en vapor invisible y sube al cielo. Cuando el vapor se junta, puede formar una nube blanca.",
      question: "¿Puede el agua de una nube volver a bajar al suelo?",
    },
    法语: {
      narration: "Le Soleil réchauffe l'eau. Une partie devient de la vapeur invisible et monte dans le ciel. Quand la vapeur se rassemble, elle peut former un nuage blanc.",
      question: "L'eau d'un nuage peut-elle redescendre jusqu'au sol ?",
    },
    德语: {
      narration: "Die Sonne erwärmt das Wasser. Ein Teil wird zu unsichtbarem Wasserdampf und steigt in den Himmel. Sammelt sich der Dampf, kann daraus eine weiße Wolke werden.",
      question: "Kann das Wasser aus einer Wolke wieder auf die Erde fallen?",
    },
  },
  "moth-flower": {
    英语: {
      narration: "This is not a tiny bird. It is a hummingbird hawk-moth. Its wings beat very fast, so it can hover and use its long tongue to drink nectar from flowers.",
      question: "Which parts look like a bird, and which parts look like an insect?",
    },
    日语: {
      narration: "これは小鳥ではなく、ホウジャクというガです。羽をとても速く動かして空中に止まり、長い口で花の蜜を飲みます。",
      question: "鳥に似ているところと、虫に似ているところはどこでしょう？",
    },
    西班牙语: {
      narration: "No es un pájaro pequeño. Es una polilla colibrí. Mueve las alas muy rápido, puede quedarse en el aire y usa su larga lengua para beber néctar.",
      question: "¿Qué partes parecen de pájaro y cuáles parecen de insecto?",
    },
    法语: {
      narration: "Ce n'est pas un petit oiseau. C'est un moro-sphinx. Il bat des ailes très vite, reste en vol sur place et utilise sa longue trompe pour boire le nectar.",
      question: "Quelles parties ressemblent à un oiseau et lesquelles ressemblent à un insecte ?",
    },
    德语: {
      narration: "Das ist kein kleiner Vogel, sondern ein Taubenschwänzchen. Es schlägt sehr schnell mit den Flügeln, schwebt in der Luft und trinkt mit seinem langen Rüssel Nektar.",
      question: "Was sieht wie ein Vogel aus und was wie ein Insekt?",
    },
  },
  "beetle-leaf": {
    英语: {
      narration: "A beetle has six legs, but this corn leaf is steep and smooth. The beetle tries to grip the leaf with its feet, yet it still slips down little by little.",
      question: "Is it easier to walk on a smooth floor or on a rough floor?",
    },
    日语: {
      narration: "甲虫には六本の足があります。でも、このトウモロコシの葉は急でつるつるです。足でつかまろうとしても、少しずつ滑ってしまいます。",
      question: "つるつるの床と、ざらざらの床では、どちらが歩きやすいでしょう？",
    },
    西班牙语: {
      narration: "El escarabajo tiene seis patas, pero esta hoja de maíz es inclinada y lisa. Intenta agarrarse con sus pies, aunque sigue resbalando poco a poco.",
      question: "¿Es más fácil caminar sobre un suelo liso o sobre uno rugoso?",
    },
    法语: {
      narration: "Le scarabée a six pattes, mais cette feuille de maïs est raide et lisse. Il essaie de s'accrocher avec ses pieds, pourtant il glisse peu à peu.",
      question: "Est-il plus facile de marcher sur un sol lisse ou sur un sol rugueux ?",
    },
    德语: {
      narration: "Der Käfer hat sechs Beine, aber dieses Maisblatt ist steil und glatt. Er versucht sich mit den Füßen festzuhalten und rutscht trotzdem langsam nach unten.",
      question: "Kann man auf einem glatten oder auf einem rauen Boden leichter laufen?",
    },
  },
};

const CANVAS_VIDEO_LANGUAGE_DATA = window.SEVEN_VIDEO_LANGUAGE_PACKS || {};
const CANVAS_VIDEO_LANGUAGE_PACKS = CANVAS_VIDEO_LANGUAGE_DATA.videos || {};
const CANVAS_LANGUAGE_CODE_BY_LABEL = {
  英语: "en-US",
  日语: "ja-JP",
  西班牙语: "es-ES",
  法语: "fr-FR",
  德语: "de-DE",
};

const STORAGE_KEY = "seven-rainbow-island-v1";
let todayKey = getDateKey(new Date());
const VOICE_SETTINGS_VERSION = 2;
const STATE_VERSION = 2;
const CHECKIN_TARGET = 4;

const VOICE_STYLES = {
  gentle: { rates: { zh: 0.84, en: 0.76, ja: 0.82, es: 0.82, fr: 0.8, de: 0.78 }, pitch: 1 },
  captain: { rates: { zh: 0.98, en: 0.88, ja: 0.94, es: 0.92, fr: 0.9, de: 0.88 }, pitch: 1.03 },
  teacher: { rates: { zh: 0.92, en: 0.82, ja: 0.88, es: 0.86, fr: 0.84, de: 0.82 }, pitch: 1 },
};

const defaultState = {
  stateVersion: STATE_VERSION,
  name: "Seven",
  soundOn: true,
  voiceStyle: "gentle",
  voiceName: "",
  voiceSettingsVersion: VOICE_SETTINGS_VERSION,
  videoLanguage: "中文",
  totalStars: 0,
  bilibiliVideos: [],
  days: {},
};

let state = loadState();
let activeSubject = null;
let activeSolved = false;
let activityAttempts = 0;
let movementCount = 0;
let toastTimer;
let activeVideo = null;
let activeCanvasVideoLanguage = "中文";
let videoPlaying = false;
let videoCurrentTime = 0;
let videoLastTimestamp = 0;
let videoLastUiUpdate = 0;
let videoAnimationFrame = null;
let videoChapterIndex = -1;
let videoNarrationOn = true;
let activeOpenVideo = null;
let activeOpenVideoLanguage = "中文";
let videoLibraryLimit = 6;
let availableSpeechVoices = [];
let parentModeUnlocked = false;
let parentGateAnswer = 13;
let pendingParentSection = null;
let pendingExternalVideoCompletion = false;
let pendingCanvasVideoCompletion = false;
const videoLibraryFilters = { query: "", language: "all", subject: "all" };

const elements = {
  taskGrid: document.querySelector("#task-grid"),
  taskGridStatus: document.querySelector("#task-grid-status"),
  continueTaskTitle: document.querySelector("#continue-task-title"),
  continueTaskButton: document.querySelector("#continue-task-button"),
  favoriteMissionGrid: document.querySelector("#favorite-mission-grid"),
  favoriteMissionCount: document.querySelector("#favorite-mission-count"),
  videoWatchCount: document.querySelector("#video-watch-count"),
  videoTotalCount: document.querySelector("#video-total-count"),
  bilibiliGrid: document.querySelector("#bilibili-grid"),
  bilibiliParentEntry: document.querySelector("#bilibili-parent-entry"),
  videoLibrarySearch: document.querySelector("#video-library-search"),
  videoLanguageFilter: document.querySelector("#video-language-filter"),
  videoSubjectFilter: document.querySelector("#video-subject-filter"),
  videoLibraryCount: document.querySelector("#video-library-count"),
  videoLibraryStatus: document.querySelector("#video-library-status"),
  todayLabel: document.querySelector("#today-label"),
  progressRing: document.querySelector("#progress-ring"),
  progressCount: document.querySelector("#progress-count"),
  progressTotal: document.querySelector("#progress-total"),
  progressMessage: document.querySelector("#progress-message"),
  starCount: document.querySelector("#star-count"),
  streakCount: document.querySelector("#streak-count"),
  checkinButton: document.querySelector("#checkin-button"),
  checkinTitle: document.querySelector("#checkin-title"),
  weekCalendar: document.querySelector("#week-calendar"),
  soundToggle: document.querySelector("#sound-toggle"),
  shareButton: document.querySelector("#share-button"),
  parentButton: document.querySelector("#parent-button"),
  activityDialog: document.querySelector("#activity-dialog"),
  dialogClose: document.querySelector("#dialog-close"),
  dialogSubject: document.querySelector("#dialog-subject"),
  activityTitle: document.querySelector("#activity-title"),
  activityInstruction: document.querySelector("#activity-instruction"),
  activityRepeat: document.querySelector("#activity-repeat"),
  activityStage: document.querySelector("#activity-stage"),
  activityFeedback: document.querySelector("#activity-feedback"),
  activityHint: document.querySelector("#activity-hint"),
  activityFinish: document.querySelector("#activity-finish"),
  parentDialog: document.querySelector("#parent-dialog"),
  parentGateDialog: document.querySelector("#parent-gate-dialog"),
  parentGateClose: document.querySelector("#parent-gate-close"),
  parentGateQuestion: document.querySelector("#parent-gate-question"),
  parentGateAnswer: document.querySelector("#parent-gate-answer"),
  parentGateFeedback: document.querySelector("#parent-gate-feedback"),
  parentGateSubmit: document.querySelector("#parent-gate-submit"),
  exitParentMode: document.querySelector("#exit-parent-mode"),
  parentClose: document.querySelector("#parent-close"),
  parentStreak: document.querySelector("#parent-streak"),
  parentStars: document.querySelector("#parent-stars"),
  parentToday: document.querySelector("#parent-today"),
  parentVideos: document.querySelector("#parent-videos"),
  parentTipText: document.querySelector("#parent-tip-text"),
  childNameInput: document.querySelector("#child-name-input"),
  saveName: document.querySelector("#save-name"),
  resetToday: document.querySelector("#reset-today"),
  exportProgress: document.querySelector("#export-progress"),
  importProgress: document.querySelector("#import-progress"),
  backupStatus: document.querySelector("#backup-status"),
  voiceStyleSelect: document.querySelector("#voice-style-select"),
  voiceSelect: document.querySelector("#voice-select"),
  voicePreview: document.querySelector("#voice-preview"),
  voiceStatus: document.querySelector("#voice-status"),
  celebrationDialog: document.querySelector("#celebration-dialog"),
  celebrationName: document.querySelector("#celebration-name"),
  celebrationClose: document.querySelector("#celebration-close"),
  toast: document.querySelector("#toast"),
  confettiLayer: document.querySelector("#confetti-layer"),
  privacyButton: document.querySelector("#privacy-button"),
  bilibiliDialog: document.querySelector("#bilibili-dialog"),
  bilibiliDialogClose: document.querySelector("#bilibili-dialog-close"),
  bilibiliDialogTitle: document.querySelector("#bilibili-dialog-title"),
  bilibiliFrame: document.querySelector("#bilibili-frame"),
  externalVideoDialog: document.querySelector("#external-video-dialog"),
  externalVideoClose: document.querySelector("#external-video-close"),
  externalVideoTitle: document.querySelector("#external-video-title"),
  externalVideoSummary: document.querySelector("#external-video-summary"),
  externalVideoPlayer: document.querySelector("#external-video-player"),
  externalVideoLoading: document.querySelector("#external-video-loading"),
  externalVideoStatus: document.querySelector("#external-video-status"),
  externalVideoRetry: document.querySelector("#external-video-retry"),
  externalVideoNarration: document.querySelector("#external-video-narration"),
  externalVideoLanguage: document.querySelector("#external-video-language"),
  externalVideoDuration: document.querySelector("#external-video-duration"),
  externalVideoQuestionText: document.querySelector("#external-video-question-text"),
  externalVideoTranscript: document.querySelector("#external-video-transcript"),
  externalVideoCompleteAction: document.querySelector("#external-video-complete-action"),
  externalVideoActionText: document.querySelector("#external-video-action-text"),
  externalVideoActionDone: document.querySelector("#external-video-action-done"),
  externalVideoSourceLink: document.querySelector("#external-video-source-link"),
  externalVideoLicense: document.querySelector("#external-video-license"),
  deviceAccessStatus: document.querySelector("#device-access-status"),
  deviceUrl: document.querySelector("#device-url"),
  copyDeviceUrl: document.querySelector("#copy-device-url"),
  shareDeviceUrl: document.querySelector("#share-device-url"),
  bilibiliTitleInput: document.querySelector("#bilibili-title-input"),
  bilibiliUrlInput: document.querySelector("#bilibili-url-input"),
  bilibiliCategoryInput: document.querySelector("#bilibili-category-input"),
  bilibiliLanguageInput: document.querySelector("#bilibili-language-input"),
  addBilibiliVideo: document.querySelector("#add-bilibili-video"),
  bilibiliFormFeedback: document.querySelector("#bilibili-form-feedback"),
  bilibiliManageList: document.querySelector("#bilibili-manage-list"),
  videoDialog: document.querySelector("#video-dialog"),
  videoDialogClose: document.querySelector("#video-dialog-close"),
  videoDialogCategory: document.querySelector("#video-dialog-category"),
  videoDialogDuration: document.querySelector("#video-dialog-duration"),
  videoDialogTitle: document.querySelector("#video-dialog-title"),
  videoDialogLanguage: document.querySelector("#video-dialog-language"),
  videoCanvas: document.querySelector("#video-canvas"),
  canvasBigPlay: document.querySelector("#canvas-big-play"),
  videoCaption: document.querySelector("#video-caption"),
  videoFinishedBadge: document.querySelector("#video-finished-badge"),
  videoPlayPause: document.querySelector("#video-play-pause"),
  videoProgress: document.querySelector("#video-progress"),
  videoTime: document.querySelector("#video-time"),
  videoNarrationButton: document.querySelector("#video-narration-button"),
  videoReplayButton: document.querySelector("#video-replay-button"),
  videoTalkQuestion: document.querySelector("#video-talk-question"),
  canvasVideoCompleteAction: document.querySelector("#canvas-video-complete-action"),
  canvasVideoActionText: document.querySelector("#canvas-video-action-text"),
  canvasVideoActionDone: document.querySelector("#canvas-video-action-done"),
};

ensureToday();
renderAll();
bindEvents();
initBottomNavigation();
initSpeechVoices();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return structuredClone(defaultState);
    return sanitizeState(saved);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isPlainRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function hasOwn(record, key) {
  return Object.prototype.hasOwnProperty.call(record, key);
}

function sanitizeStringList(value, limit = 200) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item) => typeof item === "string").map((item) => item.slice(0, 120)))].slice(0, limit);
}

function sanitizeDayData(value) {
  const day = isPlainRecord(value) ? value : {};
  return {
    completed: sanitizeStringList(day.completed),
    favoriteCompleted: sanitizeStringList(day.favoriteCompleted),
    watchedVideos: sanitizeStringList(day.watchedVideos),
    watchedOpenVideos: sanitizeStringList(day.watchedOpenVideos),
    checkedIn: day.checkedIn === true,
  };
}

function sanitizeBilibiliVideos(value) {
  if (!Array.isArray(value)) return [];
  const allowedCategories = new Set(["英语", "语文", "数学", "科学", "音乐", "运动", "综合"]);
  const allowedLanguages = new Set(["中文", "英语", "中英双语", "日语", "西班牙语", "法语", "德语", "其他"]);
  return value.flatMap((video, index) => {
    if (!isPlainRecord(video) || typeof video.title !== "string") return [];
    const bvid = extractBvid(String(video.bvid || ""));
    const title = video.title.trim().slice(0, 30);
    if (!bvid || !title) return [];
    const id = typeof video.id === "string" && video.id.trim()
      ? video.id.trim().slice(0, 80)
      : `bili-import-${index}-${bvid}`;
    return [{
      id,
      bvid,
      title,
      category: allowedCategories.has(video.category) ? video.category : "综合",
      language: allowedLanguages.has(video.language) ? video.language : "中文",
      addedAt: typeof video.addedAt === "string" ? video.addedAt.slice(0, 60) : "",
    }];
  }).slice(0, 100);
}

function sanitizeState(value) {
  if (!isPlainRecord(value)) throw new Error("invalid-state");
  const days = {};
  if (isPlainRecord(value.days)) {
    Object.entries(value.days).slice(0, 2000).forEach(([dateKey, day]) => {
      if (/^\d{4}-\d{2}-\d{2}$/.test(dateKey)) days[dateKey] = sanitizeDayData(day);
    });
  }
  const voiceSettingsOutdated = Number(value.voiceSettingsVersion || 0) < VOICE_SETTINGS_VERSION;
  const requestedName = typeof value.name === "string" ? value.name.trim().slice(0, 12) : "";
  return {
    stateVersion: STATE_VERSION,
    name: requestedName || defaultState.name,
    soundOn: typeof value.soundOn === "boolean" ? value.soundOn : defaultState.soundOn,
    voiceStyle: !voiceSettingsOutdated && VOICE_STYLES[value.voiceStyle] ? value.voiceStyle : "gentle",
    voiceName: !voiceSettingsOutdated && typeof value.voiceName === "string" ? value.voiceName.slice(0, 120) : "",
    voiceSettingsVersion: VOICE_SETTINGS_VERSION,
    videoLanguage: hasOwn(VIDEO_LANGUAGE_META, value.videoLanguage) ? value.videoLanguage : "中文",
    totalStars: Number.isFinite(Number(value.totalStars))
      ? Math.min(Math.max(Math.trunc(Number(value.totalStars)), 0), 1000000)
      : 0,
    bilibiliVideos: sanitizeBilibiliVideos(value.bilibiliVideos),
    days,
  };
}

function ensureToday() {
  state.days = isPlainRecord(state.days) ? state.days : {};
  state.bilibiliVideos = sanitizeBilibiliVideos(state.bilibiliVideos);
  state.videoLanguage = hasOwn(VIDEO_LANGUAGE_META, state.videoLanguage) ? state.videoLanguage : "中文";
  state.days[todayKey] = sanitizeDayData(state.days[todayKey]);
  migrateLegacyTodayCompletions(state.days[todayKey]);
  saveState();
}

function migrateLegacyTodayCompletions(today) {
  const legacySubjectMap = {
    english: "english",
    chinese: "chinese",
    math: "math",
    science: "science",
    creative: "music",
    health: "movement",
    life: "life",
  };
  const migrated = today.completed.map((completedId) => {
    const subjectId = legacySubjectMap[completedId] || Object.entries(DAILY_LESSON_BANK).find(([, lessons]) => (
      lessons.some((lesson) => lesson.id === completedId)
    ))?.[0];
    if (!subjectId) return completedId;
    return SUBJECTS.find((lesson) => lesson.subjectId === subjectId)?.id || completedId;
  });
  today.completed = [...new Set(migrated)].filter((completedId) => SUBJECTS.some((lesson) => lesson.id === completedId));
}

function selectDailySubjects(date) {
  const dateSeed = getDateKey(date);
  return SUBJECT_DEFS.map((subject, subjectIndex) => {
    const lessons = DAILY_LESSON_BANK[subject.id] || [];
    if (!lessons.length) {
      return LEGACY_SUBJECTS[subjectIndex] || LEGACY_SUBJECTS[0];
    }
    const seedText = `${dateSeed}:${subject.id}`;
    let hash = 2166136261;
    for (const character of seedText) {
      hash ^= character.codePointAt(0);
      hash = Math.imul(hash, 16777619);
    }
    return lessons[Math.abs(hash) % lessons.length];
  });
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTodayData() {
  return state.days[todayKey];
}

function refreshCurrentDay() {
  const now = new Date();
  const nextTodayKey = getDateKey(now);
  if (nextTodayKey === todayKey) return false;
  todayKey = nextTodayKey;
  SUBJECTS = selectDailySubjects(now);
  if (elements.activityDialog.open) elements.activityDialog.close();
  if (elements.videoDialog.open) elements.videoDialog.close();
  if (elements.externalVideoDialog.open) elements.externalVideoDialog.close();
  ensureToday();
  renderAll();
  updateParentStats();
  showToast("新的一天到啦，今天的小岛任务已经换新！");
  return true;
}

function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
}

function getScrollBehavior() {
  return prefersReducedMotion() ? "auto" : "smooth";
}

function initBottomNavigation() {
  const links = [...document.querySelectorAll(".child-bottom-nav a[href^='#']")];
  if (!links.length) return;
  const sections = links.map((link) => ({
    link,
    section: document.querySelector(link.getAttribute("href")),
  })).filter((item) => item.section);
  const setActiveLink = (activeLink) => {
    links.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  const updateFromScroll = () => {
    const guideLine = window.innerHeight * 0.42;
    let active = sections[0]?.link;
    sections.forEach(({ link, section }) => {
      if (section.getBoundingClientRect().top <= guideLine) active = link;
    });
    if (active) setActiveLink(active);
  };
  let scrollFrame = 0;
  const requestUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = requestAnimationFrame(() => {
      scrollFrame = 0;
      updateFromScroll();
    });
  };
  links.forEach((link) => link.addEventListener("click", () => setActiveLink(link)));
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateFromScroll();
}

function renderAll() {
  renderDate();
  renderVideos();
  renderBilibiliVideos();
  renderTasks();
  renderFavoriteMissions();
  renderProgress();
  renderWeek();
  updateNameUI();
  updateSoundUI();
  updateParentModeUI();
  updateDeviceAccessUI();
}

function renderDate() {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  elements.todayLabel.textContent = formatter.format(new Date());
}

function renderVideos() {
  const today = getTodayData();
  const watchedCount = today.watchedVideos.length + today.watchedOpenVideos.length;
  elements.videoWatchCount.textContent = watchedCount;
  elements.videoTotalCount.textContent = VIDEOS.length + OPEN_VIDEOS.length;
}

function renderBilibiliVideos() {
  renderVideos();
  const watched = getTodayData().watchedOpenVideos;
  const categoryIcons = {
    英语: "🔤",
    语文: "📖",
    数学: "🔢",
    科学: "🔬",
    音乐: "🎵",
    运动: "🤸",
    综合: "🌈",
  };

  const allLibraryItems = [
    ...VIDEOS.map((video) => ({ type: "canvas", video })),
    ...OPEN_VIDEOS.map((video) => ({ type: "open", video })),
    ...(parentModeUnlocked ? state.bilibiliVideos.map((video) => ({ type: "bilibili", video })) : []),
  ];
  updateVideoFilterCounts(allLibraryItems.map(({ video }) => video));
  const libraryItems = allLibraryItems.filter(({ video }) => matchesVideoLibraryFilters(video));
  const visibleItems = libraryItems.slice(0, videoLibraryLimit);
  elements.videoLibraryCount.textContent = libraryItems.length > visibleItems.length
    ? `显示 ${visibleItems.length} / ${libraryItems.length} 个`
    : `${libraryItems.length} 个视频`;

  const libraryCards = visibleItems.map(({ type, video }, index) => {
    if (type === "canvas") {
      const isWatched = getTodayData().watchedVideos.includes(video.id);
      const videoLanguages = getVideoLanguages(video);
      const filteredLanguage = videoLibraryFilters.language !== "all" && videoLanguages.includes(videoLibraryFilters.language)
        ? videoLibraryFilters.language
        : null;
      return `
        <article class="bilibili-card canvas-library-card ${isWatched ? "watched" : ""}" style="--bili-card-index:${index};--canvas-card-bg:${video.background}">
          <div class="bilibili-card-screen">
            <span class="bilibili-card-category">${video.subject}</span>
            <span class="bilibili-card-icon" aria-hidden="true">${video.icon}</span>
            <span class="bilibili-card-badge">${isWatched ? "✓ 今天看过" : filteredLanguage || "多语言动画"}</span>
            <button class="bilibili-card-play" type="button" data-library-video="${video.id}" aria-label="播放 ${video.title}">▶</button>
          </div>
          <div class="bilibili-card-copy">
            <span>${filteredLanguage ? VIDEO_LANGUAGE_META[filteredLanguage].nativeLabel : `${videoLanguages.length} 种语言`} · 本站原创 · ${video.durationLabel}</span>
            <h3>${video.title}</h3>
            <button type="button" data-library-video="${video.id}">${isWatched ? "再看一遍" : "开始播放"} <span aria-hidden="true">→</span></button>
          </div>
        </article>
      `;
    }

    if (type === "open") {
      const isWatched = watched.includes(video.id);
      const videoLanguages = getVideoLanguages(video);
      const filteredLanguage = videoLibraryFilters.language !== "all" && videoLanguages.includes(videoLibraryFilters.language)
        ? videoLibraryFilters.language
        : null;
      return `
        <article class="bilibili-card open-resource-card ${isWatched ? "watched" : ""}" style="--bili-card-index:${index}">
          <div class="bilibili-card-screen">
            <span class="bilibili-card-category">${video.category}</span>
            <span class="bilibili-card-icon" aria-hidden="true">${video.icon}</span>
            <span class="bilibili-card-badge">${isWatched ? "✓ 今天看过" : filteredLanguage || `${videoLanguages.length} 种语言`}</span>
            <button class="bilibili-card-play" type="button" data-open-video-id="${video.id}" aria-label="播放 ${video.title}">▶</button>
          </div>
          <div class="bilibili-card-copy">
            <span>${filteredLanguage ? VIDEO_LANGUAGE_META[filteredLanguage].nativeLabel : "多语言讲解"} · 本站托管 · ${video.duration}</span>
            <h3>${video.title}</h3>
            <button type="button" data-open-video-id="${video.id}">${isWatched ? "再观察一次" : "开始观察"} <span aria-hidden="true">→</span></button>
          </div>
        </article>
      `;
    }

    return `
      <article class="bilibili-card" style="--bili-card-index:${index}">
        <div class="bilibili-card-screen">
          <span class="bilibili-card-category">${escapeHTML(video.category)}</span>
          <span class="bilibili-card-icon" aria-hidden="true">${categoryIcons[video.category] || "🌈"}</span>
          <span class="bilibili-card-badge">家长已审核</span>
          <button class="bilibili-card-play" type="button" data-bilibili-id="${video.id}" aria-label="播放 ${escapeHTML(video.title)}">▶</button>
        </div>
        <div class="bilibili-card-copy">
          <span>${escapeHTML(video.language || "中文")} · 来自 Bilibili · 弹幕关闭</span>
          <h3>${escapeHTML(video.title)}</h3>
          <button type="button" data-bilibili-id="${video.id}">家长陪同观看 <span aria-hidden="true">→</span></button>
        </div>
      </article>
    `;
  }).join("");

  const noResults = libraryItems.length === 0 ? `
    <div class="video-library-empty">
      <span aria-hidden="true">🔎</span>
      <strong>没有找到符合条件的视频</strong>
      <small>试试更换语言、学科或搜索词。</small>
    </div>
  ` : "";

  const loadMore = libraryItems.length > visibleItems.length ? `
    <button class="video-library-load-more" type="button" data-load-more-videos>
      再显示 ${Math.min(6, libraryItems.length - visibleItems.length)} 个视频
    </button>
  ` : "";

  const addCard = parentModeUnlocked ? `
    <button class="bilibili-add-card" type="button" data-open-bilibili-parent>
      <span aria-hidden="true">＋</span>
      <strong>家长添加更多视频</strong>
      <small>支持已审核的 B 站 BV 链接</small>
    </button>
  ` : "";
  elements.bilibiliGrid.innerHTML = noResults + libraryCards + loadMore + addCard;
  elements.videoLibraryStatus.textContent = libraryItems.length
    ? `找到 ${libraryItems.length} 个视频。`
    : "没有找到符合条件的视频。";
  renderBilibiliManageList();
}

function updateVideoFilterCounts(videos) {
  [...elements.videoLanguageFilter.options].forEach((option) => {
    option.dataset.baseLabel ||= option.textContent.replace(/\s*\(\d+\)$/, "");
    if (option.value === "all") {
      option.textContent = `${option.dataset.baseLabel} (${videos.length})`;
      option.disabled = false;
      return;
    }
    const count = videos.filter((video) => getVideoLanguages(video).includes(option.value)).length;
    option.textContent = `${option.dataset.baseLabel} (${count})`;
    option.disabled = count === 0;
  });
  [...elements.videoSubjectFilter.options].forEach((option) => {
    option.dataset.baseLabel ||= option.textContent.replace(/\s*\(\d+\)$/, "");
    if (option.value === "all") {
      option.textContent = `${option.dataset.baseLabel} (${videos.length})`;
      option.disabled = false;
      return;
    }
    const count = videos.filter((video) => (video.subject || video.category || "综合") === option.value).length;
    option.textContent = `${option.dataset.baseLabel} (${count})`;
    option.disabled = count === 0;
  });
}

function matchesVideoLibraryFilters(video) {
  const query = videoLibraryFilters.query.trim().toLocaleLowerCase("zh-CN");
  const searchableText = [
    video.title,
    video.summary,
    video.description,
    video.category,
    video.subject,
    ...getVideoLanguages(video),
  ].filter(Boolean).join(" ").toLocaleLowerCase("zh-CN");
  const languageMatches = videoLibraryFilters.language === "all"
    || getVideoLanguages(video).includes(videoLibraryFilters.language);
  const subjectMatches = videoLibraryFilters.subject === "all"
    || (video.subject || video.category || "综合") === videoLibraryFilters.subject;
  return (!query || searchableText.includes(query)) && languageMatches && subjectMatches;
}

function getVideoLanguages(video) {
  if (CANVAS_VIDEO_LANGUAGE_PACKS[video.id]) {
    return ["中文", "英语", "中英双语", "日语", "西班牙语", "法语", "德语"];
  }
  if (OPEN_VIDEO_TRANSLATIONS[video.id]) {
    return ["中文", "英语", "中英双语", "日语", "西班牙语", "法语", "德语"];
  }
  if (video.language === "中英双语") return ["中文", "英语", "中英双语"];
  return [video.language || "中文"];
}

function getOpenVideoNarration(video, language) {
  if (language === "中文") {
    return { narration: video.narration, question: video.question, lang: "zh-CN" };
  }
  const translated = OPEN_VIDEO_TRANSLATIONS[video.id]?.[language];
  if (!translated) return { narration: video.narration, question: video.question, lang: "zh-CN" };
  return { ...translated, lang: VIDEO_LANGUAGE_META[language].lang };
}

function getCanvasVideoLanguagePack(video, language) {
  const languageCode = CANVAS_LANGUAGE_CODE_BY_LABEL[language] || language;
  return CANVAS_VIDEO_LANGUAGE_PACKS[video.id]?.[language]
    || CANVAS_VIDEO_LANGUAGE_PACKS[video.id]?.[languageCode]
    || null;
}

function setElementLanguage(element, language) {
  const languageCode = VIDEO_LANGUAGE_META[language]?.lang;
  if (!languageCode || languageCode === "bilingual") element.removeAttribute("lang");
  else element.setAttribute("lang", languageCode);
}

function getCanvasVideoChapterContent(video, chapterIndex, language) {
  const baseChapter = video.chapters[chapterIndex];
  if (!baseChapter || language === "中文") {
    return {
      caption: baseChapter?.caption || "",
      narration: baseChapter?.narration || "",
      lang: baseChapter?.lang || "zh-CN",
    };
  }

  if (language === "中英双语") {
    const englishPack = getCanvasVideoLanguagePack(video, "英语");
    const englishChapter = englishPack?.chapters?.[chapterIndex];
    const englishText = typeof englishChapter === "string" ? englishChapter : englishChapter?.narration;
    const englishCaption = typeof englishChapter === "string" ? englishChapter : englishChapter?.caption || englishText;
    return {
      caption: englishCaption ? `${baseChapter.caption}\n${englishCaption}` : baseChapter.caption,
      sequence: [
        { text: baseChapter.narration, language: baseChapter.lang || "zh-CN" },
        ...(englishText ? [{ text: englishText, language: englishPack.lang || "en-US" }] : []),
      ],
    };
  }

  const pack = getCanvasVideoLanguagePack(video, language);
  const translatedChapter = pack?.chapters?.[chapterIndex];
  const translatedText = typeof translatedChapter === "string"
    ? translatedChapter
    : translatedChapter?.narration;
  const translatedCaption = typeof translatedChapter === "string"
    ? translatedChapter
    : translatedChapter?.caption || translatedText;
  return {
    caption: translatedCaption || baseChapter.caption,
    narration: translatedText || baseChapter.narration,
    lang: pack?.lang || VIDEO_LANGUAGE_META[language]?.lang || baseChapter.lang || "zh-CN",
  };
}

function updateCanvasVideoLanguageUI() {
  if (!activeVideo) return;
  setElementLanguage(elements.videoTalkQuestion, activeCanvasVideoLanguage);
  setElementLanguage(elements.canvasVideoActionText, activeCanvasVideoLanguage);
  if (activeCanvasVideoLanguage === "中文") {
    elements.videoTalkQuestion.textContent = activeVideo.talk;
    elements.canvasVideoActionText.textContent = activeVideo.action || activeVideo.talk;
    return;
  }
  if (activeCanvasVideoLanguage === "中英双语") {
    const englishPack = getCanvasVideoLanguagePack(activeVideo, "英语");
    elements.videoTalkQuestion.textContent = englishPack?.talk
      ? `${activeVideo.talk} / ${englishPack.talk}`
      : activeVideo.talk;
    elements.canvasVideoActionText.textContent = "先用中文说一遍，再跟着说一个英文词。";
    return;
  }
  const pack = getCanvasVideoLanguagePack(activeVideo, activeCanvasVideoLanguage);
  elements.videoTalkQuestion.textContent = pack?.talk || activeVideo.talk;
  elements.canvasVideoActionText.textContent = pack?.action || pack?.talk || activeVideo.talk;
}

function renderBilibiliManageList() {
  if (!state.bilibiliVideos.length) {
    elements.bilibiliManageList.innerHTML = '<p class="bilibili-manage-empty">暂时还没有添加视频。</p>';
    return;
  }
  elements.bilibiliManageList.innerHTML = state.bilibiliVideos.map((video) => `
    <div class="bilibili-manage-item">
      <span>${escapeHTML(video.category)}</span>
      <div><strong>${escapeHTML(video.title)}</strong><small>${escapeHTML(video.language || "中文")} · ${video.bvid}</small></div>
      <button type="button" data-remove-bilibili="${video.id}" aria-label="移除 ${escapeHTML(video.title)}">移除</button>
    </div>
  `).join("");
}

function renderTasks() {
  const completed = getTodayData().completed;
  const nextTask = SUBJECTS.find((item) => !completed.includes(item.id)) || SUBJECTS[0];
  elements.continueTaskTitle.textContent = completed.length === SUBJECTS.length
    ? "七座小岛都点亮了，想再玩哪个都可以"
    : `${nextTask.subject} · ${nextTask.title}`;
  elements.continueTaskButton.dataset.continueSubject = nextTask.id;
  elements.continueTaskButton.textContent = completed.length === SUBJECTS.length ? "再玩一次" : "从这里开始";
  elements.taskGrid.innerHTML = SUBJECTS.map((item, index) => {
    const isComplete = completed.includes(item.id);
    return `
      <article class="task-card ${isComplete ? "completed" : ""}" style="--task-color:${item.color};--task-soft:${item.soft};animation-delay:${index * 60}ms">
        <div class="task-top">
          <span class="task-icon" aria-hidden="true">${item.icon}</span>
          <div class="task-top-actions">
            <button class="task-listen" type="button" data-speak-subject="${item.id}" aria-label="听 ${item.title} 的介绍">🔊</button>
            <span class="task-duration">${item.duration}</span>
          </div>
        </div>
        <span class="task-subject">${item.subject}</span>
        <h3 class="task-title">${item.title}</h3>
        <p class="task-description">${item.description}</p>
        <div class="task-footer">
          <span class="task-stars" aria-label="完成获得一颗星">★</span>
          <button class="task-start" type="button" data-subject="${item.id}">
            ${isComplete ? "再玩一次" : "去闯关"}
          </button>
        </div>
      </article>
    `;
  }).join("");
  elements.taskGridStatus.textContent = `今天已经完成 ${completed.length} 个任务，共 ${SUBJECTS.length} 个。`;
}

function renderFavoriteMissions() {
  const completed = getTodayData().favoriteCompleted;
  elements.favoriteMissionCount.textContent = `${completed.length} / ${FAVORITE_MISSIONS.length}`;
  elements.favoriteMissionGrid.innerHTML = FAVORITE_MISSIONS.map((item, index) => {
    const isComplete = completed.includes(item.id);
    return `
      <article class="favorite-mission-card ${isComplete ? "completed" : ""}" style="--mission-color:${item.color};--mission-soft:${item.soft};animation-delay:${index * 80}ms">
        <div class="favorite-mission-visual mission-${item.visual}" aria-hidden="true">
          ${renderFavoriteMissionVisual(item.visual)}
          <span class="favorite-mission-icon">${item.icon}</span>
        </div>
        <div class="favorite-mission-copy">
          <span class="favorite-mission-series">${item.series}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="favorite-mission-footer">
            <span>${item.duration} · 奖励 ★</span>
            <button type="button" data-favorite-mission="${item.id}">${isComplete ? "再执行一次" : "接受任务"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderFavoriteMissionVisual(visual) {
  if (visual === "cosmic") {
    return '<span class="cosmic-ring one"></span><span class="cosmic-ring two"></span><span class="cosmic-core"></span><i class="cosmic-star one">✦</i><i class="cosmic-star two">✧</i>';
  }
  if (visual === "police") {
    return '<span class="safety-shield">✓</span><span class="safety-road"><i></i><i></i><i></i></span><span class="safety-light"><i></i><i></i><i></i></span>';
  }
  return '<span class="agent-orbit one"></span><span class="agent-orbit two"></span><span class="agent-bolt">⚡</span><i class="agent-dot one"></i><i class="agent-dot two"></i>';
}

function renderProgress() {
  const today = getTodayData();
  const count = today.completed.length;
  const progressDegrees = (count / SUBJECTS.length) * 360;
  const streak = calculateStreak();
  const unlocked = count >= CHECKIN_TARGET;

  elements.progressRing.style.setProperty("--progress", `${progressDegrees}deg`);
  elements.progressCount.textContent = count;
  elements.progressTotal.textContent = SUBJECTS.length;
  elements.starCount.textContent = count + today.favoriteCompleted.length;
  elements.streakCount.textContent = streak;

  const messages = [
    "第一颗星星在等你",
    "太棒了，冒险开始啦",
    "已经点亮两座小岛",
    "再一步就能打卡啦",
    "小彩虹已经准备好",
    "今天探索得真丰富",
    "六座小岛已经亮起来",
    "七座小岛全部点亮",
  ];
  elements.progressMessage.textContent = messages[Math.min(count, messages.length - 1)];

  if (today.checkedIn) {
    elements.checkinTitle.textContent = "今天的小彩虹已经点亮！";
    elements.checkinButton.disabled = true;
    elements.checkinButton.innerHTML = '<span aria-hidden="true">✓</span> 今日已打卡';
  } else if (unlocked) {
    elements.checkinTitle.textContent = "太棒啦！现在可以点亮小彩虹。";
    elements.checkinButton.disabled = false;
    elements.checkinButton.innerHTML = '<span aria-hidden="true">★</span> 完成今日打卡';
  } else {
    elements.checkinTitle.textContent = `再完成 ${CHECKIN_TARGET - count} 个任务，就能打卡啦！`;
    elements.checkinButton.disabled = true;
    elements.checkinButton.innerHTML = '<span aria-hidden="true">★</span> 完成今日打卡';
  }
}

function renderWeek() {
  const today = new Date();
  const weekday = today.getDay() === 0 ? 7 : today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - weekday + 1);
  const weekdayNames = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];

  elements.weekCalendar.innerHTML = weekdayNames.map((label, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    const key = getDateKey(date);
    const isToday = key === todayKey;
    const isChecked = Boolean(state.days[key]?.checkedIn);
    return `
      <div class="day-cell ${isToday ? "today" : ""} ${isChecked ? "checked" : ""}">
        <span>${label}</span>
        <strong>${date.getDate()}</strong>
        <div class="day-stamp" aria-label="${isChecked ? "已打卡" : "未打卡"}">${isChecked ? "✓" : "·"}</div>
      </div>
    `;
  }).join("");
}

function updateNameUI() {
  document.querySelector("#hero-title").innerHTML = `${escapeHTML(state.name)}，出发吧！<br><em>今天想探索什么？</em>`;
  elements.celebrationName.textContent = state.name;
  elements.childNameInput.value = state.name;
  document.title = `${state.name} 的彩虹成长岛`;
}

function updateSoundUI() {
  elements.soundToggle.classList.toggle("is-muted", !state.soundOn);
  elements.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  elements.soundToggle.setAttribute("aria-label", state.soundOn ? "关闭声音" : "打开声音");
  elements.soundToggle.querySelector("span").textContent = state.soundOn ? "♫" : "×";
}

function requestParentMode() {
  if (parentModeUnlocked) {
    openParentDialog();
    return;
  }
  const first = 6 + Math.floor(Math.random() * 4);
  const second = 4 + Math.floor(Math.random() * 5);
  parentGateAnswer = first + second;
  elements.parentGateQuestion.textContent = `${first} + ${second} = ?`;
  elements.parentGateAnswer.value = "";
  elements.parentGateFeedback.textContent = "";
  elements.parentGateDialog.showModal();
  setTimeout(() => elements.parentGateAnswer.focus(), 80);
}

function verifyParentGate() {
  if (Number(elements.parentGateAnswer.value) !== parentGateAnswer) {
    elements.parentGateFeedback.textContent = "答案不对，请家长再算一次。";
    elements.parentGateAnswer.select();
    return;
  }
  parentModeUnlocked = true;
  elements.parentGateDialog.close();
  updateParentModeUI();
  renderBilibiliVideos();
  openParentDialog();
  if (pendingParentSection === "bilibili") {
    pendingParentSection = null;
    setTimeout(() => {
      document.querySelector(".bilibili-manager")?.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
      elements.bilibiliTitleInput.focus({ preventScroll: true });
    }, 220);
  }
  showToast("家长模式已开启。关闭后仍可继续管理，退出时会恢复儿童模式。");
}

function updateParentModeUI() {
  document.body.classList.toggle("parent-mode", parentModeUnlocked);
  elements.parentButton.classList.toggle("is-unlocked", parentModeUnlocked);
  elements.parentButton.setAttribute("aria-label", parentModeUnlocked ? "打开家长小屋，家长模式已开启" : "进入家长小屋");
}

function exitParentMode() {
  parentModeUnlocked = false;
  elements.parentDialog.close();
  updateParentModeUI();
  renderBilibiliVideos();
  showToast("已经回到儿童安全模式。第三方视频和管理入口已隐藏。");
}

function bindEvents() {
  elements.bilibiliGrid.addEventListener("click", (event) => {
    const canvasVideoButton = event.target.closest("[data-library-video]");
    if (canvasVideoButton) {
      openVideo(canvasVideoButton.dataset.libraryVideo);
      return;
    }
    const openVideoButton = event.target.closest("[data-open-video-id]");
    if (openVideoButton) {
      openExternalVideo(openVideoButton.dataset.openVideoId);
      return;
    }
    const playButton = event.target.closest("[data-bilibili-id]");
    if (playButton) {
      openBilibiliVideo(playButton.dataset.bilibiliId);
      return;
    }
    if (event.target.closest("[data-load-more-videos]")) {
      videoLibraryLimit += 6;
      renderBilibiliVideos();
      return;
    }
    if (event.target.closest("[data-open-bilibili-parent]")) openBilibiliManager();
  });
  elements.videoLibrarySearch.addEventListener("input", () => {
    videoLibraryFilters.query = elements.videoLibrarySearch.value;
    videoLibraryLimit = 6;
    renderBilibiliVideos();
  });
  elements.videoLanguageFilter.addEventListener("change", () => {
    videoLibraryFilters.language = elements.videoLanguageFilter.value;
    videoLibraryLimit = 6;
    renderBilibiliVideos();
  });
  elements.videoSubjectFilter.addEventListener("change", () => {
    videoLibraryFilters.subject = elements.videoSubjectFilter.value;
    videoLibraryLimit = 6;
    renderBilibiliVideos();
  });
  elements.bilibiliParentEntry.addEventListener("click", openBilibiliManager);
  elements.bilibiliDialogClose.addEventListener("click", closeBilibiliVideo);
  elements.bilibiliDialog.addEventListener("click", (event) => {
    if (event.target === elements.bilibiliDialog) closeBilibiliVideo();
  });
  elements.bilibiliDialog.addEventListener("close", () => {
    elements.bilibiliFrame.src = "about:blank";
  });
  elements.externalVideoClose.addEventListener("click", closeExternalVideo);
  elements.externalVideoDialog.addEventListener("click", (event) => {
    if (event.target === elements.externalVideoDialog) closeExternalVideo();
  });
  elements.externalVideoDialog.addEventListener("close", resetExternalVideoPlayer);
  elements.externalVideoNarration.addEventListener("click", narrateExternalVideo);
  elements.externalVideoLanguage.addEventListener("change", () => {
    activeOpenVideoLanguage = elements.externalVideoLanguage.value;
    state.videoLanguage = activeOpenVideoLanguage;
    saveState();
    updateExternalVideoLanguageUI();
  });
  elements.externalVideoPlayer.addEventListener("loadstart", () => setExternalVideoLoading("正在准备高清画面…", true));
  elements.externalVideoPlayer.addEventListener("waiting", () => setExternalVideoLoading("网络有点慢，正在缓冲…", true));
  elements.externalVideoPlayer.addEventListener("stalled", () => setExternalVideoLoading("视频正在努力赶过来…", true));
  elements.externalVideoPlayer.addEventListener("canplay", () => setExternalVideoLoading("画面准备好了，点击播放吧。", false));
  elements.externalVideoPlayer.addEventListener("playing", () => setExternalVideoLoading("正在播放高清画面。", false));
  elements.externalVideoPlayer.addEventListener("ended", showExternalVideoCompletion);
  elements.externalVideoPlayer.addEventListener("error", handleExternalVideoError);
  elements.externalVideoRetry.addEventListener("click", retryExternalVideo);
  elements.externalVideoActionDone.addEventListener("click", markExternalVideoWatched);
  elements.addBilibiliVideo.addEventListener("click", addBilibiliVideo);
  elements.bilibiliManageList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-bilibili]");
    if (removeButton) removeBilibiliVideo(removeButton.dataset.removeBilibili);
  });
  elements.shareButton.addEventListener("click", shareSite);
  elements.shareDeviceUrl.addEventListener("click", shareSite);
  elements.copyDeviceUrl.addEventListener("click", copyDeviceUrl);

  elements.videoDialogClose.addEventListener("click", closeVideo);
  elements.videoDialog.addEventListener("click", (event) => {
    if (event.target === elements.videoDialog) closeVideo();
  });
  elements.videoDialog.addEventListener("close", () => {
    stopVideoPlayback();
    window.speechSynthesis?.cancel();
  });
  elements.canvasBigPlay.addEventListener("click", toggleVideoPlayback);
  elements.videoPlayPause.addEventListener("click", toggleVideoPlayback);
  elements.videoReplayButton.addEventListener("click", replayVideo);
  elements.videoNarrationButton.addEventListener("click", toggleVideoNarration);
  elements.videoDialogLanguage.addEventListener("change", () => {
    activeCanvasVideoLanguage = elements.videoDialogLanguage.value;
    state.videoLanguage = activeCanvasVideoLanguage;
    saveState();
    videoChapterIndex = -1;
    updateCanvasVideoLanguageUI();
    updateVideoChapter(videoPlaying);
  });
  elements.videoProgress.addEventListener("input", seekVideo);
  elements.canvasVideoActionDone.addEventListener("click", markCanvasVideoWatched);

  elements.taskGrid.addEventListener("click", (event) => {
    const listenButton = event.target.closest("[data-speak-subject]");
    if (listenButton) {
      const subject = SUBJECTS.find((item) => item.id === listenButton.dataset.speakSubject);
      if (subject) speak(`${subject.subject}。${subject.title}。${subject.description}`);
      return;
    }
    const button = event.target.closest("[data-subject]");
    if (!button) return;
    openActivity(button.dataset.subject);
  });
  elements.continueTaskButton.addEventListener("click", () => {
    openActivity(elements.continueTaskButton.dataset.continueSubject);
  });

  elements.favoriteMissionGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-favorite-mission]");
    if (!button) return;
    openActivity(button.dataset.favoriteMission);
  });

  elements.dialogClose.addEventListener("click", closeActivity);
  elements.activityDialog.addEventListener("click", (event) => {
    if (event.target === elements.activityDialog) closeActivity();
  });
  elements.activityDialog.addEventListener("close", () => window.speechSynthesis?.cancel());
  elements.activityRepeat.addEventListener("click", speakActiveActivityInstruction);

  elements.activityHint.addEventListener("click", () => {
    if (!activeSubject) return;
    elements.activityFeedback.textContent = `提示：${activeSubject.hint}`;
    elements.activityFeedback.classList.remove("success");
    playTone(390, 0.13, "sine");
    speak(activeSubject.hint);
  });

  elements.activityFinish.addEventListener("click", finishActivity);
  elements.checkinButton.addEventListener("click", checkInToday);

  elements.soundToggle.addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    saveState();
    updateSoundUI();
    if (state.soundOn) playSuccessSound();
    else window.speechSynthesis?.cancel();
  });

  elements.parentButton.addEventListener("click", requestParentMode);
  elements.parentGateClose.addEventListener("click", () => elements.parentGateDialog.close());
  elements.parentGateDialog.addEventListener("click", (event) => {
    if (event.target === elements.parentGateDialog) elements.parentGateDialog.close();
  });
  elements.parentGateSubmit.addEventListener("click", verifyParentGate);
  elements.parentGateAnswer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") verifyParentGate();
  });
  elements.parentClose.addEventListener("click", () => elements.parentDialog.close());
  elements.parentDialog.addEventListener("click", (event) => {
    if (event.target === elements.parentDialog) elements.parentDialog.close();
  });
  elements.exitParentMode.addEventListener("click", exitParentMode);

  elements.saveName.addEventListener("click", saveChildName);
  elements.childNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveChildName();
  });

  elements.resetToday.addEventListener("click", resetToday);
  elements.exportProgress.addEventListener("click", exportProgressBackup);
  elements.importProgress.addEventListener("change", importProgressBackup);
  document.querySelector("label[for='import-progress']")?.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    elements.importProgress.click();
  });
  elements.voiceStyleSelect.addEventListener("change", () => {
    state.voiceStyle = elements.voiceStyleSelect.value;
    saveState();
    updateVoiceSettingsUI();
  });
  elements.voiceSelect.addEventListener("change", () => {
    state.voiceName = elements.voiceSelect.value;
    saveState();
    updateVoiceSettingsUI();
  });
  elements.voicePreview.addEventListener("click", previewVoice);
  elements.celebrationClose.addEventListener("click", () => elements.celebrationDialog.close());
  elements.privacyButton.addEventListener("click", () => showToast("本站学习记录只保存在当前浏览器；家长打开第三方视频时会连接对应平台。"));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      refreshCurrentDay();
      return;
    }
    if (videoPlaying) stopVideoPlayback();
    if (!elements.externalVideoPlayer.paused) elements.externalVideoPlayer.pause();
    window.speechSynthesis?.cancel();
  });
  window.addEventListener("pageshow", refreshCurrentDay);
  window.addEventListener("focus", refreshCurrentDay);
}

function openBilibiliManager() {
  if (!parentModeUnlocked) {
    pendingParentSection = "bilibili";
    requestParentMode();
    return;
  }
  if (!elements.parentDialog.open) openParentDialog();
  setTimeout(() => {
    document.querySelector(".bilibili-manager")?.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
    elements.bilibiliTitleInput.focus({ preventScroll: true });
  }, 180);
}

function addBilibiliVideo() {
  const title = elements.bilibiliTitleInput.value.trim();
  const source = elements.bilibiliUrlInput.value.trim();
  const category = elements.bilibiliCategoryInput.value;
  const language = elements.bilibiliLanguageInput.value;
  const bvid = extractBvid(source);

  if (!title) {
    setBilibiliFormFeedback("请先填写一个孩子容易看懂的视频名称。", false);
    return;
  }
  if (!bvid) {
    setBilibiliFormFeedback("没有找到有效的 BV 号，请粘贴 B 站视频链接或 BV 号。", false);
    return;
  }
  if (state.bilibiliVideos.some((video) => video.bvid === bvid)) {
    setBilibiliFormFeedback("这个视频已经在学习列表里啦。", false);
    return;
  }

  state.bilibiliVideos.push({
    id: `bili-${Date.now().toString(36)}`,
    bvid,
    title: title.slice(0, 30),
    category,
    language,
    addedAt: new Date().toISOString(),
  });
  saveState();
  renderBilibiliVideos();
  elements.bilibiliTitleInput.value = "";
  elements.bilibiliUrlInput.value = "";
  setBilibiliFormFeedback("已添加到家长精选视频课。", true);
  showToast("B 站学习视频添加成功。");
}

function removeBilibiliVideo(id) {
  const video = state.bilibiliVideos.find((item) => item.id === id);
  if (!video) return;
  const confirmed = window.confirm(`确定从学习列表移除“${video.title}”吗？`);
  if (!confirmed) return;
  state.bilibiliVideos = state.bilibiliVideos.filter((item) => item.id !== id);
  saveState();
  renderBilibiliVideos();
  setBilibiliFormFeedback("视频已从学习列表移除。", true);
}

function extractBvid(value) {
  const match = value.match(/BV[0-9A-Za-z]{10}/i);
  if (!match) return null;
  return `BV${match[0].slice(2)}`;
}

function setBilibiliFormFeedback(message, success) {
  elements.bilibiliFormFeedback.textContent = message;
  elements.bilibiliFormFeedback.classList.toggle("success", success);
}

function openExternalVideo(id) {
  activeOpenVideo = OPEN_VIDEOS.find((video) => video.id === id);
  if (!activeOpenVideo) return;
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  elements.externalVideoTitle.textContent = activeOpenVideo.title;
  elements.externalVideoSummary.textContent = activeOpenVideo.summary;
  elements.externalVideoDuration.textContent = `${activeOpenVideo.resolution} · ${activeOpenVideo.duration}`;
  const availableLanguages = getVideoLanguages(activeOpenVideo);
  activeOpenVideoLanguage = videoLibraryFilters.language !== "all" && availableLanguages.includes(videoLibraryFilters.language)
    ? videoLibraryFilters.language
    : (availableLanguages.includes(state.videoLanguage) ? state.videoLanguage : "中文");
  elements.externalVideoLanguage.innerHTML = availableLanguages.map((language) => `
    <option value="${language}">${VIDEO_LANGUAGE_META[language].label} · ${VIDEO_LANGUAGE_META[language].nativeLabel}</option>
  `).join("");
  elements.externalVideoLanguage.value = activeOpenVideoLanguage;
  pendingExternalVideoCompletion = false;
  elements.externalVideoCompleteAction.hidden = true;
  elements.externalVideoRetry.hidden = true;
  elements.externalVideoActionText.textContent = activeOpenVideo.action || "把刚才看到的东西讲给爸爸妈妈听。";
  updateExternalVideoLanguageUI();
  elements.externalVideoSourceLink.href = activeOpenVideo.sourcePage;
  elements.externalVideoSourceLink.textContent = activeOpenVideo.sourceName;
  elements.externalVideoLicense.textContent = ` · ${activeOpenVideo.license}`;
  elements.externalVideoPlayer.removeAttribute("src");
  const sourceMarkup = getExternalVideoSources(activeOpenVideo).map((source) => (
    `<source src="${source.src}" type="${source.type}">`
  )).join("");
  const captionMarkup = Object.entries(activeOpenVideo.captions || {}).map(([language, source]) => {
    const languageCode = language === "中文" ? "zh-CN" : "en";
    const isDefault = activeOpenVideoLanguage === language || (activeOpenVideoLanguage === "中英双语" && language === "中文");
    return `<track kind="captions" src="${source}" srclang="${languageCode}" label="${language}" ${isDefault ? "default" : ""}>`;
  }).join("");
  elements.externalVideoPlayer.innerHTML = sourceMarkup + captionMarkup;
  if (activeOpenVideo.poster) elements.externalVideoPlayer.poster = activeOpenVideo.poster;
  else elements.externalVideoPlayer.removeAttribute("poster");
  setExternalVideoLoading("正在准备高清画面…", true);
  elements.externalVideoPlayer.load();
  elements.externalVideoDialog.showModal();
}

function getExternalVideoSources(video) {
  if (Array.isArray(video.sources) && video.sources.length) return video.sources;
  const sources = [];
  if (video.mp4Source) sources.push({ src: video.mp4Source, type: "video/mp4" });
  sources.push({ src: video.source, type: "video/webm" });
  return sources;
}

function closeExternalVideo() {
  elements.externalVideoDialog.close();
}

function resetExternalVideoPlayer() {
  elements.externalVideoPlayer.pause();
  elements.externalVideoPlayer.removeAttribute("src");
  elements.externalVideoPlayer.removeAttribute("poster");
  elements.externalVideoPlayer.innerHTML = "";
  elements.externalVideoPlayer.load();
  elements.externalVideoCompleteAction.hidden = true;
  pendingExternalVideoCompletion = false;
  window.speechSynthesis?.cancel();
  activeOpenVideo = null;
  activeOpenVideoLanguage = "中文";
}

function narrateExternalVideo() {
  if (!activeOpenVideo) return;
  if (!state.soundOn) {
    showToast("请先打开页面右上角的声音按钮。 ");
    return;
  }
  if (activeOpenVideoLanguage === "中英双语") {
    const chinese = getOpenVideoNarration(activeOpenVideo, "中文");
    const english = getOpenVideoNarration(activeOpenVideo, "英语");
    speakSequence([
      { text: chinese.narration, language: chinese.lang },
      { text: english.narration, language: english.lang },
    ]);
    return;
  }
  const selectedNarration = getOpenVideoNarration(activeOpenVideo, activeOpenVideoLanguage);
  speak(selectedNarration.narration, selectedNarration.lang);
}

function updateExternalVideoLanguageUI() {
  if (!activeOpenVideo) return;
  const languageMeta = VIDEO_LANGUAGE_META[activeOpenVideoLanguage] || VIDEO_LANGUAGE_META.中文;
  if (activeOpenVideoLanguage === "中英双语") {
    const chinese = getOpenVideoNarration(activeOpenVideo, "中文");
    const english = getOpenVideoNarration(activeOpenVideo, "英语");
    elements.externalVideoQuestionText.textContent = `${chinese.question} / ${english.question}`;
    elements.externalVideoTranscript.textContent = `${chinese.narration}\n${english.narration}`;
  } else {
    const selectedNarration = getOpenVideoNarration(activeOpenVideo, activeOpenVideoLanguage);
    elements.externalVideoQuestionText.textContent = selectedNarration.question;
    elements.externalVideoTranscript.textContent = selectedNarration.narration;
  }
  setElementLanguage(elements.externalVideoQuestionText, activeOpenVideoLanguage);
  setElementLanguage(elements.externalVideoTranscript, activeOpenVideoLanguage);
  elements.externalVideoNarration.innerHTML = `<span aria-hidden="true">🔊</span> 听 ${languageMeta.nativeLabel} 讲解`;
  updateExternalVideoCaptionTrack();
}

function updateExternalVideoCaptionTrack() {
  if (!elements.externalVideoPlayer.textTracks) return;
  Array.from(elements.externalVideoPlayer.textTracks).forEach((track) => {
    const shouldShowChinese = activeOpenVideoLanguage === "中文" || activeOpenVideoLanguage === "中英双语";
    const shouldShowEnglish = activeOpenVideoLanguage === "英语";
    track.mode = (shouldShowChinese && track.language.toLowerCase().startsWith("zh"))
      || (shouldShowEnglish && track.language.toLowerCase().startsWith("en"))
      ? "showing"
      : "disabled";
  });
}

function setExternalVideoLoading(message, isLoading) {
  elements.externalVideoStatus.textContent = message;
  elements.externalVideoLoading.hidden = !isLoading;
  if (!isLoading) elements.externalVideoRetry.hidden = true;
}

function handleExternalVideoError() {
  elements.externalVideoLoading.hidden = true;
  elements.externalVideoStatus.textContent = "视频暂时没有加载成功。可以检查网络后再试一次。";
  elements.externalVideoRetry.hidden = false;
  showToast("视频暂时没有加载成功，可以稍后重试。");
}

function retryExternalVideo() {
  if (!activeOpenVideo) return;
  elements.externalVideoRetry.hidden = true;
  setExternalVideoLoading("正在重新加载视频…", true);
  elements.externalVideoPlayer.load();
}

function showExternalVideoCompletion() {
  if (!activeOpenVideo) return;
  pendingExternalVideoCompletion = true;
  elements.externalVideoCompleteAction.hidden = false;
  elements.externalVideoStatus.textContent = "视频看完啦！完成下面的小动作就能收下徽章。";
  elements.externalVideoCompleteAction.scrollIntoView({ behavior: getScrollBehavior(), block: "nearest" });
}

function markExternalVideoWatched() {
  if (!activeOpenVideo) return;
  if (!pendingExternalVideoCompletion && !getTodayData().watchedOpenVideos.includes(activeOpenVideo.id)) return;
  const watched = getTodayData().watchedOpenVideos;
  const isFirstCompletion = !watched.includes(activeOpenVideo.id);
  if (isFirstCompletion) {
    watched.push(activeOpenVideo.id);
    saveState();
    burstConfetti(24);
    playSuccessSound();
  }
  pendingExternalVideoCompletion = false;
  elements.externalVideoCompleteAction.hidden = true;
  renderBilibiliVideos();
  updateParentStats();
  showToast(isFirstCompletion ? "观察和小挑战都完成啦，获得一枚视频徽章！" : "又认真观察了一次，真棒！");
}

function openBilibiliVideo(id) {
  if (!parentModeUnlocked) {
    requestParentMode();
    return;
  }
  const video = state.bilibiliVideos.find((item) => item.id === id);
  if (!video) return;
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  elements.bilibiliDialogTitle.textContent = video.title;
  const parameters = new URLSearchParams({
    bvid: video.bvid,
    page: "1",
    high_quality: "1",
    danmaku: "0",
    autoplay: "0",
  });
  elements.bilibiliFrame.src = `https://player.bilibili.com/player.html?${parameters.toString()}`;
  elements.bilibiliDialog.showModal();
}

function closeBilibiliVideo() {
  elements.bilibiliFrame.src = "about:blank";
  elements.bilibiliDialog.close();
}

function getShareableUrl() {
  if (window.SEVEN_LAN_URL) return window.SEVEN_LAN_URL;
  if (window.location.protocol === "file:") return null;
  const url = new URL(window.location.href);
  url.hash = "";
  url.search = "";
  return url.toString();
}

function updateDeviceAccessUI() {
  const shareableUrl = getShareableUrl();
  if (!shareableUrl) {
    elements.deviceAccessStatus.textContent = "当前是单机文件模式。请双击 start.command 启动家庭访问服务。";
    elements.deviceUrl.textContent = "启动服务后，这里会显示手机可访问的网址";
    elements.copyDeviceUrl.disabled = true;
    elements.shareDeviceUrl.disabled = true;
    return;
  }

  elements.deviceAccessStatus.textContent = window.SEVEN_LAN_URL
    ? "让手机、iPad 和电脑连接同一个 Wi‑Fi，再打开下面的网址。"
    : "可以复制或分享下面的网址；局域网访问请使用启动服务显示的地址。";
  elements.deviceUrl.textContent = shareableUrl;
  elements.copyDeviceUrl.disabled = false;
  elements.shareDeviceUrl.disabled = false;
}

async function shareSite() {
  const url = getShareableUrl();
  if (!url) {
    showToast("请先双击 start.command，启动手机访问服务。 ");
    openParentDialog();
    return;
  }
  const shareData = {
    title: `${state.name} 的彩虹成长岛`,
    text: `一起打开 ${state.name} 的每日学习成长岛`,
    url,
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error?.name === "AbortError") return;
    }
  }
  await copyText(url);
  showToast("访问网址已经复制，可以发到手机或 iPad。 ");
}

async function copyDeviceUrl() {
  const url = getShareableUrl();
  if (!url) {
    showToast("请先启动家庭访问服务。 ");
    return;
  }
  await copyText(url);
  showToast("网址复制好啦！");
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back for non-secure local network pages.
    }
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function openVideo(id) {
  activeVideo = VIDEOS.find((video) => video.id === id);
  if (!activeVideo) return;

  stopVideoPlayback();
  videoCurrentTime = 0;
  videoChapterIndex = -1;
  videoNarrationOn = state.soundOn;
  pendingCanvasVideoCompletion = false;
  elements.canvasVideoCompleteAction.hidden = true;
  elements.canvasVideoActionText.textContent = activeVideo.action || activeVideo.talk || "把刚才学到的内容说一遍。";
  elements.videoDialogCategory.textContent = activeVideo.category;
  elements.videoDialogDuration.textContent = activeVideo.durationLabel;
  elements.videoDialogTitle.textContent = activeVideo.title;
  const availableLanguages = getVideoLanguages(activeVideo);
  activeCanvasVideoLanguage = videoLibraryFilters.language !== "all" && availableLanguages.includes(videoLibraryFilters.language)
    ? videoLibraryFilters.language
    : (availableLanguages.includes(state.videoLanguage) ? state.videoLanguage : "中文");
  elements.videoDialogLanguage.innerHTML = availableLanguages.map((language) => `
    <option value="${language}">${VIDEO_LANGUAGE_META[language]?.label || language} · ${VIDEO_LANGUAGE_META[language]?.nativeLabel || language}</option>
  `).join("");
  elements.videoDialogLanguage.value = activeCanvasVideoLanguage;
  updateCanvasVideoLanguageUI();
  elements.videoNarrationButton.classList.toggle("is-off", !videoNarrationOn);
  elements.videoNarrationButton.setAttribute("aria-pressed", String(videoNarrationOn));
  elements.videoNarrationButton.innerHTML = videoNarrationOn
    ? '<span aria-hidden="true">🔊</span> 讲解开'
    : '<span aria-hidden="true">🔇</span> 讲解关';
  elements.videoFinishedBadge.classList.toggle("show", getTodayData().watchedVideos.includes(activeVideo.id));
  elements.videoFinishedBadge.textContent = getTodayData().watchedVideos.includes(activeVideo.id) ? "今天看过" : "看完啦！";
  setCanvasBigPlayButton(true, "播放动画", "▶");
  drawVideoFrame(activeVideo, 0);
  updateVideoChapter(false);
  updateVideoControls();
  elements.videoDialog.showModal();
}

function closeVideo() {
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  elements.videoDialog.close();
}

function toggleVideoPlayback() {
  if (!activeVideo) return;
  if (videoPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
}

function playVideo() {
  if (!activeVideo || videoPlaying) return;
  if (videoCurrentTime >= activeVideo.duration - 0.05) {
    videoCurrentTime = 0;
    videoChapterIndex = -1;
    elements.videoFinishedBadge.classList.remove("show");
  }
  videoPlaying = true;
  videoLastTimestamp = performance.now();
  videoLastUiUpdate = 0;
  setCanvasBigPlayButton(false);
  updateVideoChapter(true);
  updateVideoControls();
  videoAnimationFrame = requestAnimationFrame(runVideoFrame);
}

function pauseVideo() {
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  setCanvasBigPlayButton(true, "继续播放动画", "▶");
  updateVideoControls();
}

function stopVideoPlayback() {
  videoPlaying = false;
  if (videoAnimationFrame) cancelAnimationFrame(videoAnimationFrame);
  videoAnimationFrame = null;
}

function setCanvasBigPlayButton(visible, label = "播放动画", icon = "▶") {
  elements.canvasBigPlay.classList.toggle("hidden", !visible);
  elements.canvasBigPlay.disabled = !visible;
  elements.canvasBigPlay.tabIndex = visible ? 0 : -1;
  elements.canvasBigPlay.setAttribute("aria-hidden", String(!visible));
  if (!visible) return;
  elements.canvasBigPlay.innerHTML = `<span aria-hidden="true">${icon}</span>`;
  elements.canvasBigPlay.setAttribute("aria-label", label);
}

function replayVideo() {
  if (!activeVideo) return;
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  videoCurrentTime = 0;
  videoChapterIndex = -1;
  pendingCanvasVideoCompletion = false;
  elements.canvasVideoCompleteAction.hidden = true;
  elements.videoFinishedBadge.classList.remove("show");
  drawVideoFrame(activeVideo, 0);
  updateVideoChapter(false);
  updateVideoControls();
  playVideo();
}

function toggleVideoNarration() {
  videoNarrationOn = !videoNarrationOn;
  elements.videoNarrationButton.classList.toggle("is-off", !videoNarrationOn);
  elements.videoNarrationButton.setAttribute("aria-pressed", String(videoNarrationOn));
  elements.videoNarrationButton.innerHTML = videoNarrationOn
    ? '<span aria-hidden="true">🔊</span> 讲解开'
    : '<span aria-hidden="true">🔇</span> 讲解关';
  if (!videoNarrationOn) {
    window.speechSynthesis?.cancel();
  } else if (videoPlaying) {
    const chapter = activeVideo ? getCanvasVideoChapterContent(activeVideo, videoChapterIndex, activeCanvasVideoLanguage) : null;
    if (chapter?.sequence) speakSequence(chapter.sequence);
    else if (chapter) speak(chapter.narration, chapter.lang || "zh-CN");
  }
}

function seekVideo() {
  if (!activeVideo) return;
  videoCurrentTime = (Number(elements.videoProgress.value) / 1000) * activeVideo.duration;
  videoChapterIndex = -1;
  videoLastTimestamp = performance.now();
  window.speechSynthesis?.cancel();
  drawVideoFrame(activeVideo, videoCurrentTime);
  updateVideoChapter(false);
  updateVideoControls();
}

function runVideoFrame(timestamp) {
  if (!videoPlaying || !activeVideo) return;
  const elapsed = Math.min((timestamp - videoLastTimestamp) / 1000, 0.1);
  videoLastTimestamp = timestamp;
  videoCurrentTime += elapsed;

  if (videoCurrentTime >= activeVideo.duration) {
    finishVideo();
    return;
  }

  drawVideoFrame(activeVideo, videoCurrentTime);
  updateVideoChapter(true);
  if (timestamp - videoLastUiUpdate >= 125) {
    updateVideoControls();
    videoLastUiUpdate = timestamp;
  }
  videoAnimationFrame = requestAnimationFrame(runVideoFrame);
}

function finishVideo() {
  if (!activeVideo) return;
  stopVideoPlayback();
  videoCurrentTime = activeVideo.duration;
  drawVideoFrame(activeVideo, videoCurrentTime);
  updateVideoChapter(false);
  updateVideoControls();
  elements.videoFinishedBadge.textContent = "看完啦！";
  elements.videoFinishedBadge.classList.add("show");
  setCanvasBigPlayButton(true, "重新播放动画", "↻");
  pendingCanvasVideoCompletion = true;
  elements.canvasVideoCompleteAction.hidden = false;
  elements.canvasVideoCompleteAction.scrollIntoView({ behavior: getScrollBehavior(), block: "nearest" });
}

function markCanvasVideoWatched() {
  if (!activeVideo) return;
  const id = activeVideo.id;
  const watched = getTodayData().watchedVideos;
  if (!pendingCanvasVideoCompletion && !watched.includes(id)) return;
  const isFirstCompletion = !watched.includes(id);
  if (isFirstCompletion) {
    watched.push(id);
    saveState();
    burstConfetti(28);
    playSuccessSound();
  }
  pendingCanvasVideoCompletion = false;
  elements.canvasVideoCompleteAction.hidden = true;
  renderBilibiliVideos();
  updateParentStats();
  showToast(isFirstCompletion ? "视频和小挑战都完成啦，获得一枚小放映员徽章！" : "又认真完成了一次，真棒！");
}

function updateVideoChapter(shouldSpeak) {
  if (!activeVideo) return;
  let nextIndex = 0;
  activeVideo.chapters.forEach((chapter, index) => {
    if (videoCurrentTime >= chapter.time) nextIndex = index;
  });
  const chapterChanged = nextIndex !== videoChapterIndex;
  videoChapterIndex = nextIndex;
  const chapter = getCanvasVideoChapterContent(activeVideo, videoChapterIndex, activeCanvasVideoLanguage);
  elements.videoCaption.textContent = chapter.caption;
  setElementLanguage(elements.videoCaption, activeCanvasVideoLanguage);
  if (chapterChanged && shouldSpeak && videoNarrationOn && state.soundOn) {
    if (chapter.sequence) speakSequence(chapter.sequence);
    else speak(chapter.narration, chapter.lang || "zh-CN");
  }
}

function updateVideoControls() {
  if (!activeVideo) return;
  const progress = Math.round((videoCurrentTime / activeVideo.duration) * 1000);
  elements.videoProgress.value = String(progress);
  elements.videoTime.textContent = `${formatVideoTime(videoCurrentTime)} / ${formatVideoTime(activeVideo.duration)}`;
  elements.videoPlayPause.innerHTML = videoPlaying ? '<span aria-hidden="true">Ⅱ</span>' : '<span aria-hidden="true">▶</span>';
  elements.videoPlayPause.setAttribute("aria-label", videoPlaying ? "暂停" : "播放");
}

function formatVideoTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  return `${Math.floor(safeSeconds / 60)}:${String(safeSeconds % 60).padStart(2, "0")}`;
}

function drawVideoFrame(video, time) {
  const canvas = elements.videoCanvas;
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.scale(canvas.width / 960, canvas.height / 540);
  if (video.renderer === "colors") drawColorsVideo(context, time);
  if (video.renderer === "mountain") drawMountainVideo(context, time);
  if (video.renderer === "stars") drawStarsVideo(context, time);
  if (video.renderer === "seed") drawSeedVideo(context, time);
  if (video.renderer === "rhythm") drawRhythmVideo(context, time);
  if (video.renderer === "movement") drawMovementVideo(context, time);
  if (video.renderer === "routine") drawRoutineVideo(context, time);
  context.restore();
}

function drawColorsVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 540);
  gradient.addColorStop(0, "#88d5ed");
  gradient.addColorStop(0.67, "#dff5e9");
  gradient.addColorStop(1, "#9ad484");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 540);
  drawCloud(context, 85 + Math.sin(time * 0.45) * 18, 88, 0.9);
  drawCloud(context, 705 - Math.sin(time * 0.35) * 24, 128, 0.68);

  const scene = time < 3.5 ? 0 : time < 7.5 ? 1 : time < 11.5 ? 2 : time < 15.5 ? 3 : 4;
  if (scene === 0) {
    drawCanvasTitle(context, "颜色气球大游行", "HELLO, COLORS!", Math.min(time / 1.3, 1));
  }

  const appleActive = scene === 0 || scene === 1 || scene === 4;
  const balloonActive = scene === 0 || scene === 2 || scene === 4;
  const sunActive = scene === 0 || scene === 3 || scene === 4;
  const appleScale = appleActive ? 1 + Math.sin(time * 3) * 0.035 : 0.72;
  const balloonScale = balloonActive ? 1 + Math.sin(time * 2.4) * 0.04 : 0.72;
  const sunScale = sunActive ? 1 + Math.sin(time * 2.1) * 0.04 : 0.72;

  drawApple(context, 220, 300, appleScale, appleActive ? 1 : 0.34);
  drawBalloon(context, 480, 285 + Math.sin(time * 2) * 8, balloonScale, balloonActive ? 1 : 0.34);
  drawSun(context, 745, 278, 70 * sunScale, sunActive ? 1 : 0.34);

  if (scene === 1 || scene === 4) drawWordLabel(context, "RED", 220, 432, "#d9493f");
  if (scene === 2 || scene === 4) drawWordLabel(context, "BLUE", 480, 432, "#347dcd");
  if (scene === 3 || scene === 4) drawWordLabel(context, "YELLOW", 745, 432, "#c88c13");
}

function drawMountainVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 540);
  gradient.addColorStop(0, "#f8e5bc");
  gradient.addColorStop(0.72, "#e5c28e");
  gradient.addColorStop(1, "#b27e59");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 540);
  context.fillStyle = "rgba(255,255,255,0.17)";
  for (let x = 30; x < 960; x += 90) {
    context.beginPath();
    context.arc(x, 45 + ((x / 90) % 2) * 34, 3, 0, Math.PI * 2);
    context.fill();
  }

  drawSun(context, 790, 105, 52, 0.72);
  const rise = easeOut(clamp(time / 4, 0, 1));
  drawMountain(context, 40, 470, 340, 250 * rise, "#759582", "#eef3e7");
  drawMountain(context, 285, 470, 385, 350 * rise, "#527661", "#f7f3df");
  drawMountain(context, 600, 470, 320, 225 * rise, "#6f907a", "#edf3e9");
  context.fillStyle = "#9b684d";
  context.fillRect(0, 470, 960, 70);

  if (time < 4) {
    drawCanvasTitle(context, "汉字从哪里来？", "看一看，猜一猜", Math.min(time / 1.2, 1));
  }

  const characterProgress = easeOut(clamp((time - 8) / 3, 0, 1));
  if (characterProgress > 0) {
    context.save();
    context.translate(480, 285);
    context.scale(0.55 + characterProgress * 0.45, 0.55 + characterProgress * 0.45);
    context.globalAlpha = characterProgress;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.shadowColor = "rgba(101, 56, 42, 0.2)";
    context.shadowBlur = 18;
    context.fillStyle = "#513c33";
    context.font = '260px "Kaiti SC", "STKaiti", serif';
    context.fillText("山", 0, 0);
    context.restore();
  }

  if (time >= 14) {
    const alpha = clamp((time - 14) / 1.5, 0, 1);
    context.save();
    context.globalAlpha = alpha;
    drawWordLabel(context, "中间高 · 两边低", 480, 90, "#6f4938", 32);
    context.restore();
  }
}

function drawStarsVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 540);
  gradient.addColorStop(0, "#192953");
  gradient.addColorStop(0.7, "#3f4c86");
  gradient.addColorStop(1, "#7b71a8");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 540);
  context.fillStyle = "rgba(255,255,255,0.38)";
  for (let index = 0; index < 28; index += 1) {
    const x = (index * 137 + 41) % 940;
    const y = (index * 83 + 27) % 390;
    context.beginPath();
    context.arc(x, y, 1.5 + (index % 3), 0, Math.PI * 2);
    context.fill();
  }
  drawMoon(context, 815, 96, 55);
  drawCloud(context, 80 + Math.sin(time * 0.3) * 22, 98, 0.56, "rgba(220,225,246,0.23)");

  if (time < 3) {
    drawCanvasTitle(context, "星星排排坐", "准备从 1 数到 5", Math.min(time / 1.1, 1), "#fff7cf");
  }

  const positions = [
    [165, 300], [320, 225], [480, 315], [640, 220], [795, 300],
  ];
  const appearTimes = [3, 4.5, 7, 8.5, 11];
  positions.forEach(([x, y], index) => {
    const progress = easeOut(clamp((time - appearTimes[index]) / 0.7, 0, 1));
    if (progress <= 0) return;
    drawStar(context, x, y, 54 * progress * (1 + Math.sin(time * 4 + index) * 0.04), "#ffd75b");
    context.save();
    context.globalAlpha = progress;
    drawWordLabel(context, String(index + 1), x, y + 91, "#fff9db", 31);
    context.restore();
  });

  if (time >= 14.5) {
    drawWordLabel(context, "1 · 2 · 3 · 4 · 5", 480, 462, "#fff2a5", 40);
  }
}

function drawSeedVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 355);
  gradient.addColorStop(0, "#79cce9");
  gradient.addColorStop(1, "#d8f1d5");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 355);
  context.fillStyle = "#a97855";
  context.fillRect(0, 355, 960, 185);
  context.fillStyle = "rgba(86,50,35,0.12)";
  for (let x = 30; x < 960; x += 72) {
    context.beginPath();
    context.arc(x, 385 + ((x / 72) % 3) * 37, 5, 0, Math.PI * 2);
    context.fill();
  }

  drawCloud(context, 95 + Math.sin(time * 0.35) * 30, 72, 0.83);
  drawCloud(context, 635 - Math.sin(time * 0.28) * 25, 105, 0.64);
  const sunAlpha = clamp((time - 10) / 2, 0, 1);
  if (sunAlpha > 0) drawSun(context, 810, 95, 58, sunAlpha);

  if (time >= 3.5 && time <= 9) {
    context.save();
    context.strokeStyle = "rgba(59,137,196,0.75)";
    context.lineWidth = 5;
    context.lineCap = "round";
    for (let index = 0; index < 12; index += 1) {
      const x = 145 + index * 58 + Math.sin(time * 2 + index) * 9;
      const y = 120 + ((time * 110 + index * 43) % 210);
      context.beginPath();
      context.moveTo(x, y);
      context.lineTo(x - 6, y + 18);
      context.stroke();
    }
    context.restore();
  }

  context.save();
  context.translate(480, 407);
  context.rotate(-0.2);
  context.fillStyle = "#74503b";
  context.beginPath();
  context.ellipse(0, 0, 32, 19, 0, 0, Math.PI * 2);
  context.fill();
  context.restore();

  const grow = easeOut(clamp((time - 7) / 7, 0, 1));
  if (grow > 0) {
    const stemTop = 385 - grow * 190;
    context.save();
    context.strokeStyle = "#3e9657";
    context.lineWidth = 13;
    context.lineCap = "round";
    context.beginPath();
    context.moveTo(480, 389);
    context.quadraticCurveTo(468, 305, 480, stemTop);
    context.stroke();
    context.restore();

    if (grow > 0.36) drawLeaf(context, 474, 315, -1, clamp((grow - 0.36) / 0.25, 0, 1));
    if (grow > 0.57) drawLeaf(context, 486, 270, 1, clamp((grow - 0.57) / 0.25, 0, 1));
  }

  const flowerProgress = easeOut(clamp((time - 16) / 2, 0, 1));
  if (flowerProgress > 0) drawFlower(context, 480, 190, 42 * flowerProgress);

  if (time < 3.5) {
    drawWordLabel(context, "一颗小种子", 480, 290, "#704a38", 42);
  }
  if (time >= 17) {
    drawWordLabel(context, "泥土 + 水 + 阳光", 480, 72, "#3c7450", 33);
  }
}

function drawRhythmVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 540);
  gradient.addColorStop(0, "#8fd4e8");
  gradient.addColorStop(0.7, "#fff0b9");
  gradient.addColorStop(1, "#e9b76d");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 540);
  drawCloud(context, 75 + Math.sin(time * 0.4) * 22, 70, 0.7);
  drawCloud(context, 680 - Math.sin(time * 0.3) * 25, 95, 0.55);

  context.fillStyle = "#6e9870";
  context.fillRect(0, 420, 960, 120);
  context.strokeStyle = "#574b48";
  context.lineWidth = 8;
  context.beginPath();
  context.moveTo(0, 475);
  context.lineTo(960, 475);
  context.stroke();
  context.strokeStyle = "#e6d1a2";
  context.lineWidth = 5;
  for (let x = 10; x < 960; x += 55) {
    context.beginPath();
    context.moveTo(x, 450);
    context.lineTo(x + 18, 500);
    context.stroke();
  }

  const trainX = 120 + (time / 19) * 600;
  const beatFast = time >= 8 && time < 16.5;
  const bounce = Math.sin(time * (beatFast ? 9 : 3.2)) * (beatFast ? 7 : 3);
  context.save();
  context.translate(trainX, 338 + bounce);
  context.fillStyle = "#dd5b62";
  context.beginPath();
  if (typeof context.roundRect === "function") context.roundRect(0, 0, 205, 92, 22);
  else context.rect(0, 0, 205, 92);
  context.fill();
  context.fillStyle = "#f4c451";
  context.fillRect(25, -58, 84, 68);
  context.fillStyle = "#4d849e";
  context.fillRect(38, -45, 55, 38);
  context.fillStyle = "#4d849e";
  context.fillRect(132, 17, 51, 46);
  context.fillStyle = "#2d3c4b";
  context.beginPath();
  context.arc(48, 91, 25, 0, Math.PI * 2);
  context.arc(160, 91, 25, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#f7e1a5";
  context.beginPath();
  context.arc(48, 91, 10, 0, Math.PI * 2);
  context.arc(160, 91, 10, 0, Math.PI * 2);
  context.fill();
  context.restore();

  const pulse = 1 + Math.max(0, Math.sin(time * (beatFast ? 10 : 3))) * 0.12;
  context.save();
  context.translate(735, 260);
  context.scale(pulse, pulse);
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = '112px "Apple Color Emoji", sans-serif';
  context.fillText("🥁", 0, 0);
  context.restore();

  const notes = ["♪", "♫", "♪"];
  notes.forEach((note, index) => {
    context.save();
    context.globalAlpha = 0.55 + Math.sin(time * 3 + index) * 0.25;
    context.fillStyle = ["#d75262", "#4a82c1", "#9168bd"][index];
    context.font = `${43 + index * 5}px serif`;
    context.fillText(note, 640 + index * 70, 110 + Math.sin(time * 2 + index) * 18);
    context.restore();
  });

  if (time < 3.5) drawCanvasTitle(context, "节奏小火车", "拍起小手，准备出发", Math.min(time / 1.2, 1));
  if (time >= 3.5 && time < 8) drawWordLabel(context, "慢 · 慢", 480, 92, "#875b3c", 42);
  if (time >= 8 && time < 12.5) drawWordLabel(context, "快 快 快！", 480, 92, "#c74652", 42);
  if (time >= 12.5) drawWordLabel(context, "慢 · 慢 · 快快快！", 480, 92, "#744f85", 40);
}

function drawMovementVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 540);
  gradient.addColorStop(0, "#80cce6");
  gradient.addColorStop(0.68, "#d9f2cf");
  gradient.addColorStop(1, "#8bc47d");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 540);
  drawSun(context, 820, 92, 54, 0.8);
  drawCloud(context, 75 + Math.sin(time * 0.35) * 25, 78, 0.65);
  context.fillStyle = "#6caf66";
  context.fillRect(0, 420, 960, 120);

  let emoji = "🐰";
  let action = "轻轻跳 3 下";
  let motionY = Math.abs(Math.sin(time * 3.4)) * -58;
  if (time >= 8.5 && time < 13) {
    emoji = "🐦";
    action = "张开翅膀伸一伸";
    motionY = Math.sin(time * 2.5) * 18 - 40;
  } else if (time >= 13) {
    emoji = "🐻";
    action = time >= 17 ? "深呼吸" : "抬高膝盖走一走";
    motionY = time >= 17 ? Math.sin(time * 1.5) * 5 : Math.abs(Math.sin(time * 4)) * -24;
  }

  context.save();
  context.translate(480, 325 + motionY);
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.font = '180px "Apple Color Emoji", sans-serif';
  context.fillText(emoji, 0, 0);
  context.restore();

  context.fillStyle = "rgba(255,255,255,0.75)";
  context.beginPath();
  if (typeof context.roundRect === "function") context.roundRect(265, 438, 430, 70, 28);
  else context.rect(265, 438, 430, 70);
  context.fill();
  drawWordLabel(context, action, 480, 474, "#315e56", 34);

  if (time < 3.5) drawCanvasTitle(context, "动物动作操", "请先找一块安全的空地", Math.min(time / 1.2, 1));
}

function drawRoutineVideo(context, time) {
  const gradient = context.createLinearGradient(0, 0, 0, 540);
  gradient.addColorStop(0, "#ffe69a");
  gradient.addColorStop(0.62, "#f9c38d");
  gradient.addColorStop(1, "#8fc8d8");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 960, 540);
  drawSun(context, 820, 88, 56, 0.88);
  drawCloud(context, 72 + Math.sin(time * 0.28) * 20, 70, 0.55);

  const steps = [
    { time: 3.5, emoji: "🛏️", label: "1 起床" },
    { time: 7.5, emoji: "🪥", label: "2 刷牙" },
    { time: 11.5, emoji: "👕", label: "3 穿衣" },
    { time: 15.5, emoji: "🥣", label: "4 早餐" },
  ];
  steps.forEach((step, index) => {
    const progress = easeOut(clamp((time - step.time) / 0.8, 0, 1));
    const x = 95 + index * 215;
    const y = 220 + (index % 2) * 40;
    context.save();
    context.globalAlpha = 0.22 + progress * 0.78;
    context.translate(x + 85, y + 90);
    context.scale(0.82 + progress * 0.18, 0.82 + progress * 0.18);
    context.fillStyle = "rgba(255,255,255,0.88)";
    context.beginPath();
    if (typeof context.roundRect === "function") context.roundRect(-82, -92, 164, 184, 28);
    else context.rect(-82, -92, 164, 184);
    context.fill();
    context.strokeStyle = index === 0 ? "#e67c62" : index === 1 ? "#4b91bd" : index === 2 ? "#9170c4" : "#d29a2e";
    context.lineWidth = 5;
    context.stroke();
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = '76px "Apple Color Emoji", sans-serif';
    context.fillText(step.emoji, 0, -20);
    context.fillStyle = "#4b4c49";
    context.font = '25px "Kaiti SC", "STKaiti", serif';
    context.fillText(step.label, 0, 57);
    context.restore();

    if (index < steps.length - 1 && time >= step.time) {
      context.save();
      context.globalAlpha = progress;
      context.fillStyle = "#8e6844";
      context.font = "34px sans-serif";
      context.fillText("→", x + 184, y + 101);
      context.restore();
    }
  });

  if (time < 3.5) drawCanvasTitle(context, "早晨任务排排队", "先做什么，再做什么？", Math.min(time / 1.2, 1));
  if (time >= 18) drawWordLabel(context, "准备好啦，开心出发！", 480, 485, "#6d4e35", 38);
}

function drawCloud(context, x, y, scale = 1, color = "rgba(255,255,255,0.78)") {
  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.fillStyle = color;
  context.beginPath();
  context.arc(45, 34, 31, 0, Math.PI * 2);
  context.arc(82, 24, 42, 0, Math.PI * 2);
  context.arc(125, 39, 29, 0, Math.PI * 2);
  if (typeof context.roundRect === "function") context.roundRect(25, 35, 125, 42, 22);
  else context.rect(25, 35, 125, 42);
  context.fill();
  context.restore();
}

function drawCanvasTitle(context, title, subtitle, alpha, color = "#26364a") {
  context.save();
  context.globalAlpha = alpha;
  context.textAlign = "center";
  context.fillStyle = color;
  context.font = '58px "Kaiti SC", "STKaiti", serif';
  context.fillText(title, 480, 150);
  context.font = '25px "Kaiti SC", "STKaiti", serif';
  context.globalAlpha = alpha * 0.72;
  context.fillText(subtitle, 480, 193);
  context.restore();
}

function drawWordLabel(context, text, x, y, color, size = 35) {
  context.save();
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillStyle = color;
  context.font = `${size}px "Kaiti SC", "STKaiti", serif`;
  context.fillText(text, x, y);
  context.restore();
}

function drawApple(context, x, y, scale, alpha) {
  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.globalAlpha = alpha;
  context.fillStyle = "#e64e43";
  context.beginPath();
  context.arc(-29, 0, 53, 0, Math.PI * 2);
  context.arc(29, 0, 53, 0, Math.PI * 2);
  context.ellipse(0, 24, 66, 66, 0, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#714633";
  context.lineWidth = 11;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(0, -47);
  context.lineTo(9, -80);
  context.stroke();
  context.fillStyle = "#55a267";
  context.beginPath();
  context.ellipse(34, -63, 29, 14, -0.45, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(255,255,255,0.42)";
  context.beginPath();
  context.ellipse(-32, -16, 13, 22, -0.55, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawBalloon(context, x, y, scale, alpha) {
  context.save();
  context.translate(x, y);
  context.scale(scale, scale);
  context.globalAlpha = alpha;
  context.fillStyle = "#438fd9";
  context.beginPath();
  context.ellipse(0, -10, 65, 78, 0, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "rgba(255,255,255,0.43)";
  context.beginPath();
  context.ellipse(-23, -38, 13, 23, -0.45, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#3478bd";
  context.beginPath();
  context.moveTo(-9, 68);
  context.lineTo(0, 83);
  context.lineTo(9, 68);
  context.fill();
  context.strokeStyle = "#6d6a66";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(0, 82);
  context.quadraticCurveTo(-16, 125, 8, 158);
  context.stroke();
  context.restore();
}

function drawSun(context, x, y, radius, alpha = 1) {
  context.save();
  context.translate(x, y);
  context.globalAlpha = alpha;
  context.strokeStyle = "#efb322";
  context.lineWidth = Math.max(5, radius * 0.1);
  context.lineCap = "round";
  for (let index = 0; index < 12; index += 1) {
    const angle = (Math.PI * 2 * index) / 12;
    context.beginPath();
    context.moveTo(Math.cos(angle) * radius * 1.25, Math.sin(angle) * radius * 1.25);
    context.lineTo(Math.cos(angle) * radius * 1.58, Math.sin(angle) * radius * 1.58);
    context.stroke();
  }
  context.fillStyle = "#ffd454";
  context.beginPath();
  context.arc(0, 0, radius, 0, Math.PI * 2);
  context.fill();
  context.fillStyle = "#72512d";
  context.beginPath();
  context.arc(-radius * 0.28, -radius * 0.08, radius * 0.07, 0, Math.PI * 2);
  context.arc(radius * 0.28, -radius * 0.08, radius * 0.07, 0, Math.PI * 2);
  context.fill();
  context.strokeStyle = "#72512d";
  context.lineWidth = Math.max(3, radius * 0.055);
  context.beginPath();
  context.arc(0, radius * 0.09, radius * 0.28, 0.15, Math.PI - 0.15);
  context.stroke();
  context.restore();
}

function drawMountain(context, x, baseY, width, height, color, snowColor) {
  context.fillStyle = color;
  context.beginPath();
  context.moveTo(x, baseY);
  context.lineTo(x + width * 0.5, baseY - height);
  context.lineTo(x + width, baseY);
  context.closePath();
  context.fill();
  context.fillStyle = snowColor;
  context.beginPath();
  context.moveTo(x + width * 0.5, baseY - height);
  context.lineTo(x + width * 0.37, baseY - height * 0.72);
  context.lineTo(x + width * 0.49, baseY - height * 0.78);
  context.lineTo(x + width * 0.59, baseY - height * 0.66);
  context.lineTo(x + width * 0.68, baseY - height * 0.62);
  context.closePath();
  context.fill();
}

function drawMoon(context, x, y, radius) {
  context.save();
  context.fillStyle = "#fff2b4";
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
  context.globalCompositeOperation = "destination-out";
  context.beginPath();
  context.arc(x + radius * 0.38, y - radius * 0.1, radius * 0.9, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawStar(context, x, y, radius, color) {
  context.save();
  context.translate(x, y);
  context.fillStyle = color;
  context.shadowColor = "rgba(255, 225, 94, 0.7)";
  context.shadowBlur = 28;
  context.beginPath();
  for (let point = 0; point < 10; point += 1) {
    const angle = -Math.PI / 2 + (Math.PI * point) / 5;
    const pointRadius = point % 2 === 0 ? radius : radius * 0.45;
    const px = Math.cos(angle) * pointRadius;
    const py = Math.sin(angle) * pointRadius;
    if (point === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.closePath();
  context.fill();
  context.restore();
}

function drawLeaf(context, x, y, direction, progress) {
  context.save();
  context.translate(x, y);
  context.scale(progress * direction, progress);
  context.fillStyle = "#62ad68";
  context.beginPath();
  context.moveTo(0, 0);
  context.quadraticCurveTo(48, -45, 79, -4);
  context.quadraticCurveTo(46, 25, 0, 0);
  context.fill();
  context.restore();
}

function drawFlower(context, x, y, radius) {
  context.save();
  context.translate(x, y);
  context.fillStyle = "#f1879f";
  for (let index = 0; index < 6; index += 1) {
    const angle = (Math.PI * 2 * index) / 6;
    context.beginPath();
    context.arc(Math.cos(angle) * radius * 0.72, Math.sin(angle) * radius * 0.72, radius * 0.53, 0, Math.PI * 2);
    context.fill();
  }
  context.fillStyle = "#ffd454";
  context.beginPath();
  context.arc(0, 0, radius * 0.55, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function easeOut(value) {
  return 1 - (1 - value) ** 3;
}

function openActivity(id) {
  activeSubject = [...SUBJECTS, ...FAVORITE_MISSIONS].find((item) => item.id === id);
  if (!activeSubject) return;

  activeSolved = false;
  activityAttempts = 0;
  movementCount = 0;
  elements.activityFinish.disabled = true;
  elements.activityFeedback.textContent = "";
  elements.activityFeedback.className = "activity-feedback";
  elements.activityDialog.style.setProperty("--active-color", activeSubject.color);
  elements.activityDialog.style.setProperty("--active-soft", activeSubject.soft);
  elements.dialogSubject.innerHTML = `<span aria-hidden="true">${activeSubject.icon}</span>${activeSubject.subject}`;
  elements.activityTitle.textContent = activeSubject.title;
  elements.activityInstruction.textContent = activeSubject.instruction;
  renderActivityStage(activeSubject);
  elements.activityDialog.showModal();
  setTimeout(speakActiveActivityInstruction, 320);
}

function closeActivity() {
  window.speechSynthesis?.cancel();
  elements.activityDialog.close();
}

function speakActiveActivityInstruction() {
  if (!activeSubject) return;
  const items = [{ text: activeSubject.instruction, language: "zh-CN" }];
  if (activeSubject.type === "listen" && activeSubject.speech) {
    items.push({ text: activeSubject.speech, language: activeSubject.speechLanguage || "en-US" });
  }
  speakSequence(items);
}

function renderActivityStage(subject) {
  if (subject.type === "listen") {
    elements.activityStage.innerHTML = `
      <button class="listen-button" type="button" data-listen>
        <span aria-hidden="true">🔊</span> 听听怎么说
      </button>
      ${renderOptions(subject.options)}
    `;
    elements.activityStage.querySelector("[data-listen]").addEventListener("click", () => speak(subject.speech, subject.speechLanguage || "en-US"));
    bindOptionEvents();
    return;
  }

  if (subject.type === "count") {
    const countUnit = {
      "🐞": "只瓢虫",
      "🍎": "个苹果",
      "🐥": "只小鸭",
      "🚙": "辆小汽车",
      "🔔": "个小铃铛",
    }[subject.countEmoji] || "个图案";
    elements.activityStage.innerHTML = `
      <div class="count-scene" aria-label="${subject.count} ${subject.countLabel || countUnit}">
        ${Array.from({ length: subject.count }, () => `<span class="count-item">${subject.countEmoji}</span>`).join("")}
      </div>
      ${renderOptions(subject.options)}
    `;
    bindOptionEvents();
    return;
  }

  if (subject.type === "pattern") {
    elements.activityStage.innerHTML = `
      <div class="pattern-row" aria-label="图案规律">
        ${subject.pattern.map((item) => `<span>${item}</span>`).join("")}
        <span class="pattern-missing">?</span>
      </div>
      ${renderOptions(subject.options)}
    `;
    bindOptionEvents();
    return;
  }

  if (subject.type === "movement") {
    elements.activityStage.innerHTML = `
      <div class="movement-stage">
        <div class="movement-emoji" aria-hidden="true">${subject.icon || "🐸"}</div>
        <div class="movement-counter">已经跳了 <strong id="movement-count">0</strong> / ${subject.target} 下</div>
        <button class="movement-button" type="button" id="movement-button">我跳了一下！</button>
      </div>
    `;
    document.querySelector("#movement-button").addEventListener("click", handleMovement);
    return;
  }

  elements.activityStage.innerHTML = renderOptions(subject.options);
  bindOptionEvents();
}

function renderOptions(options) {
  return `
    <div class="option-grid">
      ${options.map((option) => `
        <button class="option-button" type="button" data-value="${option.value}">
          ${option.emoji ? `<span class="option-emoji" aria-hidden="true">${option.emoji}</span>` : ""}
          <span>${option.label}</span>
        </button>
      `).join("")}
    </div>
  `;
}

function bindOptionEvents() {
  elements.activityStage.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button));
  });
}

function handleAnswer(button) {
  if (activeSolved) return;
  activityAttempts += 1;

  if (button.dataset.value === activeSubject.answer) {
    activeSolved = true;
    button.classList.add("correct");
    elements.activityStage.querySelectorAll(".option-button").forEach((item) => {
      item.disabled = true;
    });
    elements.activityFeedback.textContent = randomPraise();
    elements.activityFeedback.classList.add("success");
    elements.activityFinish.disabled = false;
    playSuccessSound();
    speakPraise();
  } else {
    button.classList.remove("wrong");
    void button.offsetWidth;
    button.classList.add("wrong");
    const shouldHelp = activityAttempts >= 2;
    elements.activityFeedback.textContent = shouldHelp ? `小提示：${activeSubject.hint}` : "没关系，再仔细看一看！";
    elements.activityFeedback.classList.remove("success");
    playTone(230, 0.12, "sine");
    speak(shouldHelp ? activeSubject.hint : "没关系，我们再试一次。慢慢来。", "zh-CN");
  }
}

function handleMovement() {
  if (activeSolved) return;
  movementCount += 1;
  document.querySelector("#movement-count").textContent = movementCount;
  playTone(330 + movementCount * 55, 0.09, "triangle");

  if (movementCount >= activeSubject.target) {
    activeSolved = true;
    document.querySelector("#movement-button").disabled = true;
    document.querySelector("#movement-button").textContent = "跳完啦！";
    elements.activityFeedback.textContent = "小青蛙能量满满！做得真棒！";
    elements.activityFeedback.classList.add("success");
    elements.activityFinish.disabled = false;
    playSuccessSound();
  }
}

function finishActivity() {
  if (!activeSubject || !activeSolved) return;
  const today = getTodayData();
  const completionList = activeSubject.favorite ? today.favoriteCompleted : today.completed;
  const isFirstCompletion = !completionList.includes(activeSubject.id);

  if (isFirstCompletion) {
    completionList.push(activeSubject.id);
    state.totalStars += 1;
    saveState();
    burstConfetti(24);
    showToast(activeSubject.favorite
      ? `英雄任务完成！${activeSubject.subject}奖励 1 颗星。`
      : `获得 1 颗星！${activeSubject.subject}点亮啦。`);
  } else {
    showToast("又玩了一次，记忆更牢啦！");
  }

  closeActivity();
  renderTasks();
  renderFavoriteMissions();
  renderProgress();
  updateParentStats();
}

function checkInToday() {
  const today = getTodayData();
  if (today.checkedIn || today.completed.length < CHECKIN_TARGET) return;

  today.checkedIn = true;
  saveState();
  renderProgress();
  renderWeek();
  updateParentStats();
  elements.celebrationName.textContent = state.name;
  elements.celebrationDialog.showModal();
  burstConfetti(80);
  playCelebrationSound();
}

function openParentDialog() {
  if (!parentModeUnlocked) {
    requestParentMode();
    return;
  }
  const tips = [
    "问问孩子“你是怎么发现的？”，比直接告诉答案更能保护好奇心。",
    "如果孩子今天不想学，可以只选一个喜欢的小任务，保持愉快更重要。",
    "完成任务后，请具体地鼓励努力过程，例如“你刚才数得很认真”。",
    "试着把今天学到的颜色、数字或汉字，在家里再找一次。",
    "每 10 分钟活动一下眼睛和身体，幼儿学习不追求久坐。",
  ];
  const dayIndex = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  elements.parentTipText.textContent = tips[dayIndex % tips.length];
  updateParentStats();
  updateDeviceAccessUI();
  renderBilibiliManageList();
  updateVoiceSettingsUI();
  elements.parentDialog.showModal();
}

function updateParentStats() {
  if (!elements.parentDialog) return;
  elements.parentStreak.textContent = `${calculateStreak()} 天`;
  elements.parentStars.textContent = `${state.totalStars} 颗`;
  elements.parentToday.textContent = `${getTodayData().completed.length} / ${SUBJECTS.length}`;
  const watchedVideoCount = getTodayData().watchedVideos.length + getTodayData().watchedOpenVideos.length;
  elements.parentVideos.textContent = `${watchedVideoCount} 集`;
}

function saveChildName() {
  const name = elements.childNameInput.value.trim();
  if (!name) {
    showToast("请先写下宝宝的称呼。");
    return;
  }
  state.name = name.slice(0, 12);
  saveState();
  updateNameUI();
  showToast("称呼保存好啦！");
}

function resetToday() {
  const confirmed = window.confirm("要清空今天的任务、视频和打卡记录吗？累计星星会扣除今天获得的数量。");
  if (!confirmed) return;
  const completedCount = getTodayData().completed.length + getTodayData().favoriteCompleted.length;
  state.totalStars = Math.max(0, state.totalStars - completedCount);
  state.days[todayKey] = { completed: [], favoriteCompleted: [], watchedVideos: [], watchedOpenVideos: [], checkedIn: false };
  saveState();
  renderAll();
  updateParentStats();
  elements.parentDialog.close();
  showToast("今天已经重新开始。");
}

function exportProgressBackup() {
  const payload = {
    product: "seven-rainbow-island",
    version: STATE_VERSION,
    exportedAt: new Date().toISOString(),
    state,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `seven-growth-${getDateKey(new Date())}.json`;
  link.click();
  URL.revokeObjectURL(url);
  elements.backupStatus.textContent = "成长记录已经导出，可以发送到另一台设备保存。";
}

async function importProgressBackup(event) {
  const [file] = event.target.files || [];
  if (!file) return;
  const previousState = state;
  let stateWasReplaced = false;
  try {
    const payload = JSON.parse(await file.text());
    if (payload?.product !== "seven-rainbow-island" || !isPlainRecord(payload.state)) {
      throw new Error("invalid-backup");
    }
    const importedState = sanitizeState(payload.state);
    const confirmed = window.confirm(`确认导入“${file.name}”吗？这会替换当前设备上的成长记录。`);
    if (!confirmed) return;
    state = importedState;
    stateWasReplaced = true;
    ensureToday();
    renderAll();
    updateParentStats();
    elements.backupStatus.textContent = "成长记录已导入完成。";
    showToast("另一台设备的成长脚印已经搬过来啦！");
  } catch {
    if (stateWasReplaced) {
      state = previousState;
      saveState();
      renderAll();
      updateParentStats();
    }
    elements.backupStatus.textContent = "这个文件不是有效的 Seven 成长记录。";
  } finally {
    event.target.value = "";
  }
}

function calculateStreak() {
  let streak = 0;
  const cursor = new Date();

  if (!state.days[todayKey]?.checkedIn) {
    cursor.setDate(cursor.getDate() - 1);
  }

  while (state.days[getDateKey(cursor)]?.checkedIn) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function initSpeechVoices() {
  if (!("speechSynthesis" in window)) {
    updateVoiceSettingsUI();
    return;
  }
  const refreshVoices = () => {
    availableSpeechVoices = window.speechSynthesis.getVoices();
    updateVoiceSettingsUI();
  };
  refreshVoices();
  if (typeof window.speechSynthesis.addEventListener === "function") {
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
  } else {
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }
  setTimeout(refreshVoices, 300);
}

function updateVoiceSettingsUI() {
  if (!elements.voiceSelect || !elements.voiceStyleSelect) return;
  const supported = "speechSynthesis" in window;
  const chineseVoices = availableSpeechVoices
    .filter((voice) => normalizeVoiceLanguage(voice.lang).startsWith("zh"))
    .sort((first, second) => scoreVoice(second) - scoreVoice(first));

  elements.voiceStyleSelect.value = VOICE_STYLES[state.voiceStyle] ? state.voiceStyle : "gentle";
  elements.voiceSelect.innerHTML = [
    '<option value="">自动选择温柔自然女声</option>',
    ...chineseVoices.map((voice, index) => `<option value="${escapeHTML(voice.name)}">${index === 0 ? "温柔女声推荐 · " : ""}${escapeHTML(voice.name)} (${escapeHTML(voice.lang)})</option>`),
  ].join("");
  elements.voiceSelect.value = chineseVoices.some((voice) => voice.name === state.voiceName) ? state.voiceName : "";
  elements.voiceSelect.disabled = !supported || chineseVoices.length === 0;
  elements.voicePreview.disabled = !supported;

  if (!supported) {
    elements.voiceStatus.textContent = "当前浏览器不支持系统语音，可换 Safari、Chrome 或 Edge 试试。";
    return;
  }
  if (!availableSpeechVoices.length) {
    elements.voiceStatus.textContent = "正在读取这台设备上的自然语音…";
    return;
  }
  const selectedVoice = getBestVoice("zh-CN");
  elements.voiceStatus.textContent = selectedVoice
    ? `当前温柔女声：${selectedVoice.name}。不同手机上的可选声音会不一样。`
    : "没有检测到自然中文女声，将使用浏览器默认语音。";
}

function normalizeVoiceLanguage(language = "") {
  return language.toLowerCase().replace("_", "-");
}

function scoreVoice(voice) {
  const name = voice.name.toLowerCase();
  let score = 0;
  if (/natural|premium|enhanced|siri/.test(name)) score += 80;
  if (/female|woman|女声|xiaoxiao|xiaoyi|xiaomo|xiaorui|xiaoshuang|xiaohan|xiaomeng|ting[- ]?ting|tingting|meijia|mei-jia|sin-ji|hiu.*maan|hiu.*gaai|hsiaochen|samantha|ava|victoria|karen|moira|tessa|fiona|zira|jenny|aria|susan|serena|veena|kyoko|nanami|aoi|mayu|shiori|monica|paulina|helena|elvira|dalia|amelie|audrey|denise|julie|hortense|sylvie|anna|katja|hedda|vicki|amala/.test(name)) score += 70;
  if (/yunxi|yunjian|yunyang|yunhao|wanlung|li-mu|alex|daniel|david|fred|ralph|thomas|tom|guy|aaron|arthur|oliver|otoya|ichiro|keita|daichi|naoki|jorge|diego|alvaro|pablo|henri|remy|markus|hans|conrad|killian|christoph/.test(name)) score -= 70;
  if (/google|microsoft|apple/.test(name)) score += 24;
  if (voice.localService) score += 12;
  if (voice.default) score += 8;
  if (/compact/.test(name)) score -= 60;
  return score;
}

function getBestVoice(language) {
  const voices = availableSpeechVoices.length
    ? availableSpeechVoices
    : ("speechSynthesis" in window ? window.speechSynthesis.getVoices() : []);
  const languagePrefix = normalizeVoiceLanguage(language).split("-")[0];
  const compatibleVoices = voices.filter((voice) => normalizeVoiceLanguage(voice.lang).startsWith(languagePrefix));
  if (languagePrefix === "zh" && state.voiceName) {
    const chosenVoice = compatibleVoices.find((voice) => voice.name === state.voiceName);
    if (chosenVoice) return chosenVoice;
  }
  return compatibleVoices.sort((first, second) => scoreVoice(second) - scoreVoice(first))[0] || null;
}

function previewVoice() {
  if (!state.soundOn) {
    showToast("请先打开页面右上角的声音按钮。");
    return;
  }
  speak("Seven，你好呀。今天，我们一起慢慢探索，好吗？");
}

function speak(text, language = "zh-CN") {
  if (!state.soundOn || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(createSpeechUtterance(text, language));
}

function speakSequence(items) {
  if (!state.soundOn || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  items.forEach((item) => {
    window.speechSynthesis.speak(createSpeechUtterance(item.text, item.language));
  });
}

function createSpeechUtterance(text, language) {
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = getBestVoice(language);
  const voiceStyle = VOICE_STYLES[state.voiceStyle] || VOICE_STYLES.gentle;
  if (voice) utterance.voice = voice;
  utterance.lang = voice?.lang || language;
  const languagePrefix = normalizeVoiceLanguage(language).split("-")[0];
  utterance.rate = voiceStyle.rates[languagePrefix] || voiceStyle.rates.zh;
  utterance.pitch = voiceStyle.pitch;
  utterance.volume = 1;
  return utterance;
}

function speakPraise() {
  const praises = ["答对啦", "真棒", "你发现了", "太厉害啦"];
  speak(praises[Math.floor(Math.random() * praises.length)]);
}

function playTone(frequency, duration, type = "sine") {
  if (!state.soundOn) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    gain.gain.setValueAtTime(0.0001, context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.09, context.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + duration + 0.03);
    oscillator.addEventListener("ended", () => context.close());
  } catch {
    // Audio feedback is optional; the visual feedback remains available.
  }
}

function playSuccessSound() {
  playTone(523, 0.14, "triangle");
  setTimeout(() => playTone(659, 0.15, "triangle"), 110);
}

function playCelebrationSound() {
  [523, 659, 784, 1046].forEach((frequency, index) => {
    setTimeout(() => playTone(frequency, 0.2, "triangle"), index * 120);
  });
}

function burstConfetti(amount) {
  if (prefersReducedMotion()) return;
  const colors = ["#ff7657", "#ffd859", "#73c68e", "#73c8e9", "#9b79d1", "#f59ab0"];
  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[index % colors.length];
    piece.style.setProperty("--fall-duration", `${2 + Math.random() * 2}s`);
    piece.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    piece.style.transform = `rotate(${Math.random() * 180}deg)`;
    elements.confettiLayer.appendChild(piece);
    setTimeout(() => piece.remove(), 4700);
  }
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2600);
}

function randomPraise() {
  const messages = ["答对啦！你观察得真仔细！", "哇，你找到答案啦！", "太棒了，小脑袋转得真快！", "成功！送你一颗亮晶晶的星星！"];
  return messages[Math.floor(Math.random() * messages.length)];
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>'"]/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[char]);
}

if (
  "serviceWorker" in navigator &&
  (window.location.protocol === "https:" || ["localhost", "127.0.0.1"].includes(window.location.hostname))
) {
  navigator.serviceWorker.register("./sw.js").catch(() => {
    // The website still works normally if installation is unavailable.
  });
}
