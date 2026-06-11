import imgB from '@/assets/11.png'
import imgA from '@/assets/bg-f.png'

export interface NewsItem {
  id: string
  date: string
  tag?: string
  title: string
  desc: string
  category: string
  views: number
  image: string
  content: string[]
  pullQuote?: { text: string; author: string }
  contentImage?: { src: string; caption: string }
  tags: string[]
  prev?: { id: string; title: string }
  next?: { id: string; title: string }
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    date: '2024年10月15日',
    tag: '官方',
    title: '第十四届艾特奖国际空间设计大奖全球评审团正式公布',
    desc: '本届评审团由来自15个国家的顶尖建筑师、知名学者及行业先驱组成，确保评审过程的严谨性、公正性与高度分析性。',
    category: 'Official News',
    views: 12405,
    image: imgA,
    content: [
      "The IDEA-TOPS International Space Design Award, recognized as one of the most prestigious architectural and interior design accolades globally, has officially unveiled its distinguished jury panel for the 14th edition. This year's selection underscores the award's commitment to recognizing visionary design that seamlessly integrates cultural context, sustainable practices, and architectural innovation.",
      'Comprising esteemed architects, renowned academics, and industry pioneers from over 15 countries, the jury will evaluate thousands of submissions across 18 distinct categories. Their collective expertise ensures a rigorous, impartial, and highly analytical review process, establishing the benchmark for design excellence in the coming year.',
      'The judging criteria for the current cycle place an unprecedented emphasis on "Digital Materiality"—the elegant synthesis of tactile, physical materials with advanced digital fabrication techniques. Projects that demonstrate a profound understanding of sensory experience while maintaining structural integrity will be favored.',
      'As the deadline for submissions approaches, the international design community eagerly anticipates the announcement of the nominees. The IDEA-TOPS platform continues to serve not merely as a competition, but as a "Temple of Design," fostering a dialogue that transcends borders and disciplines.',
      'The final awards ceremony, scheduled to take place in the architectural nexus of Shenzhen, promises to be a ceremonial celebration of human ingenuity and spatial artistry.',
    ],
    pullQuote: {
      text: 'True architectural majesty is not found in scale alone, but in the profound restraint that allows space to resonate with human emotion and environmental truth.',
      author: 'Chairman of the 14th IDEA-TOPS Jury',
    },
    contentImage: {
      src: imgB,
      caption: 'The Grand Jury Review Venue, designed with Restrained Majesty.',
    },
    tags: ['Architecture', 'Awards 2024', 'Jury'],
    prev: { id: '3', title: 'The Evolution of Sustainable Urban Interiors' },
    next: { id: '4', title: 'Call for Entries: 2024 Category Expansions' },
  },
  {
    id: '2',
    date: '2024年11月28日',
    title: '与米兰设计联盟达成战略合作',
    desc: '艾特奖通过全新的合作框架深化与欧洲设计精英的联系，共同推动可持续城市发展与跨洲建筑交流。',
    category: 'Partnership',
    views: 8921,
    image: imgA,
    content: [
      'The IDEA-TOPS International Space Design Award has announced a landmark strategic partnership with the Milan Design Alliance, marking a significant milestone in cross-continental design collaboration.',
      'This new partnership framework will facilitate increased participation from European design professionals, creating a robust channel for cross-cultural exchange and sustainable urban development initiatives.',
      "The collaboration includes joint research programs, exchange residencies for architects, and a dedicated European jury panel that will bring fresh perspectives to the award's evaluation process.",
      "This alliance reinforces IDEA-TOPS's commitment to global inclusivity and its role as a catalyst for international design dialogue.",
    ],
    tags: ['Partnership', 'Global', 'Collaboration'],
    prev: { id: '1', title: '第十四届艾特奖全球评审团正式公布' },
    next: { id: '3', title: 'The Evolution of Sustainable Urban Interiors' },
  },
  {
    id: '3',
    title: 'The Evolution of Sustainable Urban Interiors',
    date: '2024年9月28日',
    tag: 'Announcement',
    desc: 'New Digital Fabrication Category Introduced for 14th Edition, expanding design possibilities.',
    category: 'Announcement',
    views: 6210,
    image: imgB,
    content: [
      'A new Digital Fabrication category has been introduced for the 14th edition, reflecting the growing significance of computational design and advanced manufacturing techniques.',
      'This category will evaluate works that seamlessly blend digital processes with physical craftsmanship, rewarding projects that push the boundaries of materiality.',
    ],
    tags: ['Technology', 'Innovation', 'Digital'],
    prev: { id: '2', title: '与米兰设计联盟达成战略合作' },
    next: { id: '4', title: 'Call for Entries: 2024 Category Expansions' },
  },
  {
    id: '4',
    title: 'Call for Entries: 2024 Category Expansions',
    date: '2024年9月15日',
    tag: 'Event',
    desc: 'Shenzhen Selected to Host the Grand Award Ceremony, a celebration of design excellence.',
    category: 'Event',
    views: 7580,
    image: imgA,
    content: [
      "Shenzhen has been officially selected to host the grand award ceremony for this year's IDEA-TOPS, a fitting location given the city's reputation as a global hub for design and innovation.",
      'The ceremony will feature exhibitions from finalists, keynote addresses from jury members, and the highly anticipated awards presentation.',
    ],
    tags: ['Ceremony', 'Event', 'Shenzhen'],
    prev: { id: '3', title: 'The Evolution of Sustainable Urban Interiors' },
    next: { id: '1', title: '第十四届艾特奖全球评审团正式公布' },
  },
  {
    id: '5',
    date: '2024年11月15日',
    title: '"绿色建筑"类别评审标准更新',
    desc: '为契合2030可持续发展目标，组委会已修订绿色建筑类别的评审参数，优先考量循环材料使用与净零运营效率。',
    category: 'Standards',
    views: 4530,
    image: imgA,
    content: [
      'In alignment with 2030 Sustainable Development Goals, the organizing committee has revised evaluation parameters for the Green Building category.',
      'Priority will now be given to projects demonstrating circular material usage and net-zero operational efficiency.',
    ],
    tags: ['Green Building', 'Sustainability', 'Standards'],
    prev: { id: '6', title: '第14届颁奖盛典官方高清影像集' },
    next: { id: '1', title: '第十四届艾特奖全球评审团正式公布' },
  },
  {
    id: '6',
    date: '2024年10月30日',
    title: '第14届颁奖盛典官方高清影像集正式发布',
    desc: '重温第14届盛典的辉煌时刻。官方照片与视频档案现已通过数字门户向所有注册参赛者及战略合作伙伴开放。',
    category: 'Media',
    views: 9870,
    image: imgA,
    content: [
      'Relive the glorious moments of the 14th ceremony. Official photo and video archives are now available through the digital portal to all registered participants and strategic partners.',
      'The comprehensive archive features behind-the-scenes footage, winner interviews, and the complete awards ceremony in high definition.',
    ],
    tags: ['Ceremony', 'Media', 'Archive'],
    prev: { id: '2', title: '与米兰设计联盟达成战略合作' },
    next: { id: '5', title: '"绿色建筑"类别评审标准更新' },
  },
]

export const announcementsListData = newsData.map(({ id, date, tag, title, desc }) => ({
  id,
  date,
  tag,
  title,
  desc,
}))
