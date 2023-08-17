const navigation = [
  {
    text: 'ホーム',
    emoji: '🏠',  
    path: '/',
    bold: true,
  },
  {
    text: '知見',
    emoji: '📚',
    path: '/curate',
    bold: true,
  },
];

const categories = [
  {
    text: 'インフラ',
    emoji: '🌐',
    path: '/infrastructure',
    bold: false,
  },
  {
    text: '開発',
    emoji: '👨‍💻',
    path: '/development',
    bold: false,
  },
];

const links = [
  {
    text: 'ポートフォリオ',
    emoji: '📋',
    path: 'https://portfolio.yumekiti.net/',
    bold: false,
  },
  {
    text: 'Marplify',
    emoji: '📝',
    path: 'http://marplify.yumekiti.net/',
    bold: false,
  },
  {
    text: 'Slide Sync',
    emoji: '📜',
    path: 'https://chrome.google.com/webstore/detail/naimcoenmacdfkjnhphjgikaigaedgae?authuser=0&hl=ja',
    bold: false,
  },
  {
    text: 'Diff Sync Code',
    emoji: '🔀',
    path: 'http://diff.yumekiti.net/',
    bold: false,
  },
  {
    text: 'Twitter',
    emoji: '🐦',
    path: 'https://twitter.com/yumekiti1204',
    bold: false,
  },
  {
    text: 'GitHub',
    emoji: '🐙',
    path: 'https://github.com/yumekiti',
    bold: false,
  },
];

export { categories, navigation, links };
