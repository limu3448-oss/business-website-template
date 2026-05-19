export type Stat = { label: string; value: string; suffix?: string };
export type ImageItem = { title: string; description: string; image: string };

export const siteConfig = {
  // 修改客户信息从这里开始：公司名、行业、品牌色、图片路径和各模块内容都集中在本文件。
  // 替换图片：把新图片放到 public/images/，再把下面的 /images/xxx.svg 改成对应路径。
  // 修改品牌颜色：调整 primaryColor / secondaryColor，页面会通过 CSS 变量自动应用。
  companyName: "木森家居定制有限公司",
  shortName: "木森家居",
  slogan: "让家的每一寸空间都恰到好处",
  description: "专注高端全屋家具定制，从空间规划、材质甄选到安装交付，为家庭与商业空间提供稳定、耐用、有审美的整体解决方案。",
  industry: "高端家具定制",
  logo: "/images/logo-placeholder.svg",
  favicon: "/images/favicon.svg",
  siteUrl: "http://localhost:3000",
  primaryColor: "#173B63",
  secondaryColor: "#C89B62",

  contact: {
    phone: "400-888-2026",
    email: "hello@musen-home.com",
    wechat: "musen-home",
    address: "上海市浦东新区世纪大道 100 号品牌体验中心",
    businessHours: "周一至周六 09:00 - 18:30",
    mapUrl: "https://map.baidu.com"
  },

  hero: {
    title: "高端全屋定制，让空间更懂生活",
    subtitle: "设计、生产、安装一站式交付",
    description: "用成熟的项目流程、可靠的供应链和细致的服务，帮助客户把理想空间落到实处。适合企业官网、门店展示、产品介绍与活动落地页快速复用。",
    mainButtonText: "立即咨询",
    mainButtonLink: "#contact",
    secondaryButtonText: "查看案例",
    secondaryButtonLink: "#cases",
    heroImage: "/images/hero-placeholder.svg"
  },

  about: {
    aboutTitle: "深耕定制家居，用专业交付放心体验",
    aboutDescription: "木森家居定制有限公司以设计为起点，以交付为核心。我们为住宅、样板间、办公室和精品门店提供从需求沟通、方案深化、生产跟进到现场安装的完整服务，重视每一个影响体验的细节。",
    aboutImage: "/images/about-placeholder.svg",
    stats: [
      { value: "10", suffix: "年+", label: "行业经验" },
      { value: "300", suffix: "+", label: "服务客户" },
      { value: "500", suffix: "+", label: "项目案例" },
      { value: "98", suffix: "%", label: "客户满意度" }
    ] as Stat[]
  },

  // 是否显示模块：不需要某块时改为 false，即可隐藏对应首页模块。
  sections: {
    products: true,
    cases: true,
    testimonials: true,
    faq: true,
    process: true,
    advantages: true
  },

  // 新增服务项目：复制一项对象，修改 title / description / icon / image 即可。
  services: [
    { title: "空间规划", description: "根据户型、动线与收纳需求制定合理方案，让美观与实用保持平衡。", icon: "⌂", image: "/images/service-1.svg" },
    { title: "产品定制", description: "衣柜、橱柜、书柜、展示柜等多品类定制，适配不同预算与风格。", icon: "▣", image: "/images/service-2.svg" },
    { title: "材料甄选", description: "精选板材、五金与饰面，清晰呈现材质、工艺和环保标准。", icon: "✦", image: "/images/service-3.svg" },
    { title: "安装交付", description: "项目经理跟进现场安装与验收，减少沟通成本，保障最终效果。", icon: "✓", image: "/images/service-4.svg" }
  ],

  // 新增产品：复制一项对象，图片同样放到 public/images/ 后修改 image。
  products: [
    { title: "岩板餐边柜", category: "客餐厅", description: "兼顾展示、收纳与备餐功能，适合现代轻奢空间。", image: "/images/product-1.svg", tags: ["岩板", "收纳", "轻奢"] },
    { title: "一体式衣帽间", category: "卧室", description: "分区清晰，容量充足，让日常衣物管理更高效。", image: "/images/product-2.svg", tags: ["衣帽间", "灯带", "定制"] },
    { title: "多功能书房系统", category: "书房", description: "办公、阅读与展示结合，适合家庭与小型工作室。", image: "/images/product-3.svg", tags: ["书桌", "书柜", "办公"] }
  ],

  // 新增案例：复制一项对象，修改行业、成果和图片，适配不同客户故事。
  cases: [
    { title: "滨江私宅全屋定制", industry: "住宅空间", description: "围绕三代同堂的生活习惯重新规划收纳与动线，提升空间利用率。", image: "/images/case-1.svg", result: "交付周期缩短 15%，客户复购阳台柜项目" },
    { title: "精品咖啡门店展示柜", industry: "商业门店", description: "统一吧台、展示柜与墙面收纳风格，强化门店品牌识别。", image: "/images/case-2.svg", result: "开业前完成安装，门店陈列效率提升" },
    { title: "企业样板间软硬装柜体", industry: "办公展厅", description: "结合接待、展示与洽谈功能，打造更具可信度的品牌空间。", image: "/images/case-3.svg", result: "提升客户参观停留时间与咨询转化" }
  ],

  advantages: [
    { title: "品质可控", description: "从材料、工艺到安装节点全程把控，交付标准清晰。", icon: "品质" },
    { title: "经验成熟", description: "服务住宅、门店、办公等多类型项目，沟通更高效。", icon: "经验" },
    { title: "准时交付", description: "明确排期和负责人，减少等待与反复确认。", icon: "交付" },
    { title: "售后安心", description: "保留项目资料，后续维护、增补与改造更方便。", icon: "售后" }
  ],

  process: ["需求沟通", "方案确认", "设计制作", "修改优化", "上线交付"],

  testimonials: [
    { name: "陈女士", role: "私宅业主", content: "设计师能听懂我们的生活习惯，柜体尺寸和收纳细节都考虑得很周到。", avatar: "/images/avatar-1.svg" },
    { name: "刘先生", role: "门店负责人", content: "从方案到安装节点很清楚，开业前顺利交付，整体质感符合预期。", avatar: "/images/avatar-2.svg" },
    { name: "王经理", role: "企业行政", content: "沟通效率高，报价和材料说明透明，后续维护也有人负责。", avatar: "/images/avatar-3.svg" }
  ],

  faqs: [
    { question: "网站多久能做好？", answer: "常规企业官网在资料齐全后通常 3-7 个工作日完成首版，复杂产品或多语言项目会另行评估。" },
    { question: "是否支持手机端？", answer: "支持。模板采用响应式布局，手机、平板和电脑端都会自动适配。" },
    { question: "是否可以后续修改？", answer: "可以。内容集中在配置文件中，后续修改公司信息、服务、产品和案例都很方便。" },
    { question: "是否可以部署上线？", answer: "可以。项目可部署到 Vercel，也可以根据需求部署到其他云服务器。" },
    { question: "是否可以绑定域名？", answer: "可以。部署完成后在平台中添加域名并配置 DNS 解析即可。" }
  ],

  seo: {
    siteTitle: "木森家居定制有限公司｜高端全屋家具定制",
    siteDescription: "木森家居定制有限公司提供高端全屋家具定制、空间规划、产品定制与安装交付服务。",
    keywords: ["企业官网模板", "全屋定制", "产品展示网站", "门店展示", "品牌官网"],
    ogImage: "/images/og-placeholder.svg"
  }
} as const;

export type SiteConfig = typeof siteConfig;
