const SUBJECTS = [
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

const VIDEOS = [
  {
    id: "color-parade",
    category: "英语启蒙",
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
    icon: "🌱",
    source: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Timelapse_of_lettuce_emerging.webm",
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
    icon: "🌗",
    source: "https://upload.wikimedia.org/wikipedia/commons/transcoded/b/bb/Lunar_Near_and_Far_Side_Phases_%28SVS14992_-_Waxing_4K%29.webm/Lunar_Near_and_Far_Side_Phases_%28SVS14992_-_Waxing_4K%29.webm.480p.vp9.webm",
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
    icon: "☁️",
    source: "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/8c/Clouds_101_%28SVS20383_-_ExtendedRiverEvaporation_V06%29.webm/Clouds_101_%28SVS20383_-_ExtendedRiverEvaporation_V06%29.webm.480p.vp9.webm",
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
    icon: "🌸",
    source: "https://upload.wikimedia.org/wikipedia/commons/transcoded/8/88/Macroglossum_stellatarum_on_Monarda_didyma_in_Dnipro_by_baby-bear.org.jpg_01.webm/Macroglossum_stellatarum_on_Monarda_didyma_in_Dnipro_by_baby-bear.org.jpg_01.webm.480p.vp9.webm",
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
    icon: "🪲",
    source: "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/76/Male_Polyphylla_fullo_beetle_slipping_from_a_Zea_mays_leaf_in_Dnipro_by_baby-bear.org.webm/Male_Polyphylla_fullo_beetle_slipping_from_a_Zea_mays_leaf_in_Dnipro_by_baby-bear.org.webm.480p.vp9.webm",
    sourcePage: "https://commons.wikimedia.org/wiki/File:Male_Polyphylla_fullo_beetle_slipping_from_a_Zea_mays_leaf_in_Dnipro_by_baby-bear.org.webm",
    sourceName: "Natalka Ukraine · Wikimedia Commons",
    license: "CC BY 4.0",
    narration: "甲虫有六条腿，可是这片叶子又直又光滑。它努力用脚抓住叶片，却还是会慢慢往下滑。",
    question: "在光滑地面和粗糙地面上走路，哪里更不容易滑倒？",
  },
];

const STORAGE_KEY = "seven-rainbow-island-v1";
const todayKey = getDateKey(new Date());

const defaultState = {
  name: "Seven",
  soundOn: true,
  totalStars: 0,
  bilibiliVideos: [],
  days: {},
};

let state = loadState();
let activeSubject = null;
let activeSolved = false;
let movementCount = 0;
let toastTimer;
let activeVideo = null;
let videoPlaying = false;
let videoCurrentTime = 0;
let videoLastTimestamp = 0;
let videoAnimationFrame = null;
let videoChapterIndex = -1;
let videoNarrationOn = true;
let activeOpenVideo = null;
let videoLibraryLimit = 12;
const videoLibraryFilters = { query: "", language: "all", subject: "all" };

const elements = {
  taskGrid: document.querySelector("#task-grid"),
  videoGrid: document.querySelector("#video-grid"),
  videoWatchCount: document.querySelector("#video-watch-count"),
  bilibiliGrid: document.querySelector("#bilibili-grid"),
  bilibiliParentEntry: document.querySelector("#bilibili-parent-entry"),
  videoLibrarySearch: document.querySelector("#video-library-search"),
  videoLanguageFilter: document.querySelector("#video-language-filter"),
  videoSubjectFilter: document.querySelector("#video-subject-filter"),
  videoLibraryCount: document.querySelector("#video-library-count"),
  todayLabel: document.querySelector("#today-label"),
  progressRing: document.querySelector("#progress-ring"),
  progressCount: document.querySelector("#progress-count"),
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
  activityStage: document.querySelector("#activity-stage"),
  activityFeedback: document.querySelector("#activity-feedback"),
  activityHint: document.querySelector("#activity-hint"),
  activityFinish: document.querySelector("#activity-finish"),
  parentDialog: document.querySelector("#parent-dialog"),
  parentClose: document.querySelector("#parent-close"),
  parentStreak: document.querySelector("#parent-streak"),
  parentStars: document.querySelector("#parent-stars"),
  parentToday: document.querySelector("#parent-today"),
  parentVideos: document.querySelector("#parent-videos"),
  parentTipText: document.querySelector("#parent-tip-text"),
  childNameInput: document.querySelector("#child-name-input"),
  saveName: document.querySelector("#save-name"),
  resetToday: document.querySelector("#reset-today"),
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
  externalVideoNarration: document.querySelector("#external-video-narration"),
  externalVideoDuration: document.querySelector("#external-video-duration"),
  externalVideoQuestionText: document.querySelector("#external-video-question-text"),
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
};

ensureToday();
renderAll();
bindEvents();

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...defaultState, ...saved, days: saved.days || {} } : structuredClone(defaultState);
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function ensureToday() {
  state.bilibiliVideos ||= [];
  state.bilibiliVideos.forEach((video) => {
    video.language ||= "中文";
    video.category ||= "综合";
  });
  if (!state.days[todayKey]) {
    state.days[todayKey] = { completed: [], watchedVideos: [], checkedIn: false };
  }
  state.days[todayKey].completed ||= [];
  state.days[todayKey].watchedVideos ||= [];
  state.days[todayKey].watchedOpenVideos ||= [];
  saveState();
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

function renderAll() {
  renderDate();
  renderVideos();
  renderBilibiliVideos();
  renderTasks();
  renderProgress();
  renderWeek();
  updateNameUI();
  updateSoundUI();
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
  const watched = getTodayData().watchedVideos;
  elements.videoWatchCount.textContent = watched.length;
  elements.videoGrid.innerHTML = VIDEOS.map((video) => {
    const isWatched = watched.includes(video.id);
    return `
      <article class="video-card ${isWatched ? "watched" : ""}" data-video="${video.id}" style="--video-accent:${video.accent};--video-bg:${video.background}">
        <div class="video-poster">
          <span class="video-watched-stamp">✓ 今天看过</span>
          <span class="poster-doodle one">${video.doodles[0]}</span>
          <span class="poster-emoji" aria-hidden="true">${video.icon}</span>
          <span class="poster-doodle two">${video.doodles[1]}</span>
          <span class="poster-play" aria-hidden="true">▶</span>
        </div>
        <div class="video-card-info">
          <div class="video-card-meta">
            <span>${video.category}</span>
            <span>${video.durationLabel}</span>
          </div>
          <h3>${video.title}</h3>
          <p>${video.description}</p>
          <button class="video-open-button" type="button" data-video="${video.id}">
            <span aria-hidden="true">${isWatched ? "↻" : "▶"}</span>
            ${isWatched ? "再看一遍" : "开始播放"}
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderBilibiliVideos() {
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

  const libraryItems = [
    ...OPEN_VIDEOS.map((video) => ({ type: "open", video })),
    ...state.bilibiliVideos.map((video) => ({ type: "bilibili", video })),
  ].filter(({ video }) => matchesVideoLibraryFilters(video));
  const visibleItems = libraryItems.slice(0, videoLibraryLimit);
  elements.videoLibraryCount.textContent = libraryItems.length > visibleItems.length
    ? `显示 ${visibleItems.length} / ${libraryItems.length} 个`
    : `${libraryItems.length} 个视频`;

  const libraryCards = visibleItems.map(({ type, video }, index) => {
    if (type === "open") {
      const isWatched = watched.includes(video.id);
      return `
        <article class="bilibili-card open-resource-card ${isWatched ? "watched" : ""}" style="--bili-card-index:${index}">
          <div class="bilibili-card-screen">
            <span class="bilibili-card-category">${video.category}</span>
            <span class="bilibili-card-icon" aria-hidden="true">${video.icon}</span>
            <span class="bilibili-card-badge">${isWatched ? "✓ 今天看过" : "无广告"}</span>
            <button class="bilibili-card-play" type="button" data-open-video-id="${video.id}" aria-label="播放 ${video.title}">▶</button>
          </div>
          <div class="bilibili-card-copy">
            <span>${video.language}讲解 · 开放授权 · ${video.duration}</span>
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
      再显示 ${Math.min(12, libraryItems.length - visibleItems.length)} 个视频
    </button>
  ` : "";

  const addCard = `
    <button class="bilibili-add-card" type="button" data-open-bilibili-parent>
      <span aria-hidden="true">＋</span>
      <strong>家长添加更多视频</strong>
      <small>支持已审核的 B 站 BV 链接</small>
    </button>
  `;
  elements.bilibiliGrid.innerHTML = noResults + libraryCards + loadMore + addCard;
  renderBilibiliManageList();
}

function matchesVideoLibraryFilters(video) {
  const query = videoLibraryFilters.query.trim().toLocaleLowerCase("zh-CN");
  const searchableText = [
    video.title,
    video.summary,
    video.description,
    video.category,
    video.subject,
    video.language,
  ].filter(Boolean).join(" ").toLocaleLowerCase("zh-CN");
  const languageMatches = videoLibraryFilters.language === "all"
    || (video.language || "中文") === videoLibraryFilters.language;
  const subjectMatches = videoLibraryFilters.subject === "all"
    || (video.subject || video.category || "综合") === videoLibraryFilters.subject;
  return (!query || searchableText.includes(query)) && languageMatches && subjectMatches;
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
  elements.taskGrid.innerHTML = SUBJECTS.map((item, index) => {
    const isComplete = completed.includes(item.id);
    return `
      <article class="task-card ${isComplete ? "completed" : ""}" style="--task-color:${item.color};--task-soft:${item.soft};animation-delay:${index * 60}ms">
        <div class="task-top">
          <span class="task-icon" aria-hidden="true">${item.icon}</span>
          <span class="task-duration">${item.duration}</span>
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
}

function renderProgress() {
  const today = getTodayData();
  const count = today.completed.length;
  const progressDegrees = (count / SUBJECTS.length) * 360;
  const streak = calculateStreak();
  const unlocked = count >= 4;

  elements.progressRing.style.setProperty("--progress", `${progressDegrees}deg`);
  elements.progressCount.textContent = count;
  elements.starCount.textContent = count;
  elements.streakCount.textContent = streak;

  const messages = [
    "第一颗星星在等你",
    "太棒了，冒险开始啦",
    "已经点亮两座小岛",
    "再一步就能打卡啦",
    "小彩虹已经准备好",
    "今天探索得真丰富",
    "六座小岛全部点亮",
  ];
  elements.progressMessage.textContent = messages[count];

  if (today.checkedIn) {
    elements.checkinTitle.textContent = "今天的小彩虹已经点亮！";
    elements.checkinButton.disabled = true;
    elements.checkinButton.innerHTML = '<span aria-hidden="true">✓</span> 今日已打卡';
  } else if (unlocked) {
    elements.checkinTitle.textContent = "太棒啦！现在可以点亮小彩虹。";
    elements.checkinButton.disabled = false;
    elements.checkinButton.innerHTML = '<span aria-hidden="true">★</span> 完成今日打卡';
  } else {
    elements.checkinTitle.textContent = `再完成 ${4 - count} 个任务，就能打卡啦！`;
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

function bindEvents() {
  elements.bilibiliGrid.addEventListener("click", (event) => {
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
    if (event.target.closest("[data-open-bilibili-parent]")) openBilibiliManager();
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
  elements.externalVideoPlayer.addEventListener("ended", markExternalVideoWatched);
  elements.externalVideoPlayer.addEventListener("error", () => showToast("视频暂时没有加载成功，可以稍后重试。"));
  elements.addBilibiliVideo.addEventListener("click", addBilibiliVideo);
  elements.bilibiliManageList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-bilibili]");
    if (removeButton) removeBilibiliVideo(removeButton.dataset.removeBilibili);
  });
  elements.shareButton.addEventListener("click", shareSite);
  elements.shareDeviceUrl.addEventListener("click", shareSite);
  elements.copyDeviceUrl.addEventListener("click", copyDeviceUrl);

  elements.videoGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-video]");
    if (!button) return;
    openVideo(button.dataset.video);
  });

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
  elements.videoProgress.addEventListener("input", seekVideo);

  elements.taskGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-subject]");
    if (!button) return;
    openActivity(button.dataset.subject);
  });

  elements.dialogClose.addEventListener("click", closeActivity);
  elements.activityDialog.addEventListener("click", (event) => {
    if (event.target === elements.activityDialog) closeActivity();
  });
  elements.activityDialog.addEventListener("close", () => window.speechSynthesis?.cancel());

  elements.activityHint.addEventListener("click", () => {
    if (!activeSubject) return;
    elements.activityFeedback.textContent = `提示：${activeSubject.hint}`;
    elements.activityFeedback.classList.remove("success");
    playTone(390, 0.13, "sine");
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

  elements.parentButton.addEventListener("click", openParentDialog);
  elements.parentClose.addEventListener("click", () => elements.parentDialog.close());
  elements.parentDialog.addEventListener("click", (event) => {
    if (event.target === elements.parentDialog) elements.parentDialog.close();
  });

  elements.saveName.addEventListener("click", saveChildName);
  elements.childNameInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") saveChildName();
  });

  elements.resetToday.addEventListener("click", resetToday);
  elements.celebrationClose.addEventListener("click", () => elements.celebrationDialog.close());
  elements.privacyButton.addEventListener("click", () => showToast("学习记录只保存在当前浏览器，不会上传。"));
}

function openBilibiliManager() {
  if (!elements.parentDialog.open) openParentDialog();
  setTimeout(() => {
    document.querySelector(".bilibili-manager")?.scrollIntoView({ behavior: "smooth", block: "start" });
    elements.bilibiliTitleInput.focus({ preventScroll: true });
  }, 180);
}

function addBilibiliVideo() {
  const title = elements.bilibiliTitleInput.value.trim();
  const source = elements.bilibiliUrlInput.value.trim();
  const category = elements.bilibiliCategoryInput.value;
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
  elements.externalVideoDuration.textContent = activeOpenVideo.duration;
  elements.externalVideoQuestionText.textContent = activeOpenVideo.question;
  elements.externalVideoSourceLink.href = activeOpenVideo.sourcePage;
  elements.externalVideoSourceLink.textContent = activeOpenVideo.sourceName;
  elements.externalVideoLicense.textContent = ` · ${activeOpenVideo.license}`;
  elements.externalVideoPlayer.src = activeOpenVideo.source;
  elements.externalVideoPlayer.load();
  elements.externalVideoDialog.showModal();
}

function closeExternalVideo() {
  elements.externalVideoDialog.close();
}

function resetExternalVideoPlayer() {
  elements.externalVideoPlayer.pause();
  elements.externalVideoPlayer.removeAttribute("src");
  elements.externalVideoPlayer.load();
  window.speechSynthesis?.cancel();
  activeOpenVideo = null;
}

function narrateExternalVideo() {
  if (!activeOpenVideo) return;
  if (!state.soundOn) {
    showToast("请先打开页面右上角的声音按钮。 ");
    return;
  }
  speak(activeOpenVideo.narration);
}

function markExternalVideoWatched() {
  if (!activeOpenVideo) return;
  const watched = getTodayData().watchedOpenVideos;
  if (watched.includes(activeOpenVideo.id)) return;
  watched.push(activeOpenVideo.id);
  saveState();
  renderBilibiliVideos();
  updateParentStats();
  burstConfetti(24);
  playSuccessSound();
  showToast("真实世界观察完成，获得一枚小科学家徽章！");
}

function openBilibiliVideo(id) {
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
  elements.videoDialogCategory.textContent = activeVideo.category;
  elements.videoDialogDuration.textContent = activeVideo.durationLabel;
  elements.videoDialogTitle.textContent = activeVideo.title;
  elements.videoTalkQuestion.textContent = activeVideo.talk;
  elements.videoNarrationButton.classList.toggle("is-off", !videoNarrationOn);
  elements.videoNarrationButton.setAttribute("aria-pressed", String(videoNarrationOn));
  elements.videoNarrationButton.innerHTML = videoNarrationOn
    ? '<span aria-hidden="true">🔊</span> 讲解开'
    : '<span aria-hidden="true">🔇</span> 讲解关';
  elements.videoFinishedBadge.classList.toggle("show", getTodayData().watchedVideos.includes(activeVideo.id));
  elements.videoFinishedBadge.textContent = getTodayData().watchedVideos.includes(activeVideo.id) ? "今天看过" : "看完啦！";
  elements.canvasBigPlay.classList.remove("hidden");
  elements.canvasBigPlay.innerHTML = '<span aria-hidden="true">▶</span>';
  elements.canvasBigPlay.setAttribute("aria-label", "播放动画");
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
  elements.canvasBigPlay.classList.add("hidden");
  updateVideoChapter(true);
  updateVideoControls();
  videoAnimationFrame = requestAnimationFrame(runVideoFrame);
}

function pauseVideo() {
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  elements.canvasBigPlay.classList.remove("hidden");
  elements.canvasBigPlay.innerHTML = '<span aria-hidden="true">▶</span>';
  elements.canvasBigPlay.setAttribute("aria-label", "继续播放动画");
  updateVideoControls();
}

function stopVideoPlayback() {
  videoPlaying = false;
  if (videoAnimationFrame) cancelAnimationFrame(videoAnimationFrame);
  videoAnimationFrame = null;
}

function replayVideo() {
  if (!activeVideo) return;
  stopVideoPlayback();
  window.speechSynthesis?.cancel();
  videoCurrentTime = 0;
  videoChapterIndex = -1;
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
    const chapter = activeVideo?.chapters[videoChapterIndex];
    if (chapter) speak(chapter.narration, chapter.lang || "zh-CN");
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
  updateVideoControls();
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
  elements.canvasBigPlay.classList.remove("hidden");
  elements.canvasBigPlay.innerHTML = '<span aria-hidden="true">↻</span>';
  elements.canvasBigPlay.setAttribute("aria-label", "重新播放动画");
  markVideoWatched(activeVideo.id);
}

function markVideoWatched(id) {
  const watched = getTodayData().watchedVideos;
  if (watched.includes(id)) return;
  watched.push(id);
  saveState();
  renderVideos();
  updateParentStats();
  burstConfetti(28);
  playSuccessSound();
  showToast("获得一枚“小放映员”徽章！记得望望远处哦。 ");
}

function updateVideoChapter(shouldSpeak) {
  if (!activeVideo) return;
  let nextIndex = 0;
  activeVideo.chapters.forEach((chapter, index) => {
    if (videoCurrentTime >= chapter.time) nextIndex = index;
  });
  const chapterChanged = nextIndex !== videoChapterIndex;
  videoChapterIndex = nextIndex;
  const chapter = activeVideo.chapters[videoChapterIndex];
  elements.videoCaption.textContent = chapter.caption;
  if (chapterChanged && shouldSpeak && videoNarrationOn && state.soundOn) {
    speak(chapter.narration, chapter.lang || "zh-CN");
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
  if (video.renderer === "colors") drawColorsVideo(context, time);
  if (video.renderer === "mountain") drawMountainVideo(context, time);
  if (video.renderer === "stars") drawStarsVideo(context, time);
  if (video.renderer === "seed") drawSeedVideo(context, time);
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
  activeSubject = SUBJECTS.find((item) => item.id === id);
  if (!activeSubject) return;

  activeSolved = false;
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

  if (activeSubject.type === "listen") {
    setTimeout(() => speak(activeSubject.speech, "en-US"), 300);
  }
}

function closeActivity() {
  window.speechSynthesis?.cancel();
  elements.activityDialog.close();
}

function renderActivityStage(subject) {
  if (subject.type === "listen") {
    elements.activityStage.innerHTML = `
      <button class="listen-button" type="button" data-listen>
        <span aria-hidden="true">🔊</span> 听听怎么说
      </button>
      ${renderOptions(subject.options)}
    `;
    elements.activityStage.querySelector("[data-listen]").addEventListener("click", () => speak(subject.speech, "en-US"));
    bindOptionEvents();
    return;
  }

  if (subject.type === "count") {
    elements.activityStage.innerHTML = `
      <div class="count-scene" aria-label="${subject.count} 只瓢虫">
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
        <div class="movement-emoji" aria-hidden="true">🐸</div>
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
    elements.activityFeedback.textContent = "没关系，再仔细看一看！";
    elements.activityFeedback.classList.remove("success");
    playTone(230, 0.12, "sine");
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
  const isFirstCompletion = !today.completed.includes(activeSubject.id);

  if (isFirstCompletion) {
    today.completed.push(activeSubject.id);
    state.totalStars += 1;
    saveState();
    burstConfetti(24);
    showToast(`获得 1 颗星！${activeSubject.subject}点亮啦。`);
  } else {
    showToast("又玩了一次，记忆更牢啦！");
  }

  closeActivity();
  renderTasks();
  renderProgress();
  updateParentStats();
}

function checkInToday() {
  const today = getTodayData();
  if (today.checkedIn || today.completed.length < 4) return;

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
  elements.parentDialog.showModal();
}

function updateParentStats() {
  if (!elements.parentDialog) return;
  elements.parentStreak.textContent = `${calculateStreak()} 天`;
  elements.parentStars.textContent = `${state.totalStars} 颗`;
  elements.parentToday.textContent = `${getTodayData().completed.length} / 6`;
  const watchedVideoCount = getTodayData().watchedVideos.length + getTodayData().watchedOpenVideos.length;
  elements.parentVideos.textContent = `${watchedVideoCount} / ${VIDEOS.length + OPEN_VIDEOS.length}`;
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
  const completedCount = getTodayData().completed.length;
  state.totalStars = Math.max(0, state.totalStars - completedCount);
  state.days[todayKey] = { completed: [], watchedVideos: [], watchedOpenVideos: [], checkedIn: false };
  saveState();
  renderAll();
  updateParentStats();
  elements.parentDialog.close();
  showToast("今天已经重新开始。");
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

function speak(text, language = "zh-CN") {
  if (!state.soundOn || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  utterance.rate = language === "en-US" ? 0.72 : 0.9;
  utterance.pitch = 1.12;
  window.speechSynthesis.speak(utterance);
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
  return value.replace(/[&<>'"]/g, (char) => ({
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
