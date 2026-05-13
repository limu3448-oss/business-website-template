# 可批量复用的企业官网模板系统

这是一个基于 **Next.js + TypeScript + Tailwind CSS + App Router** 搭建的企业官网模板母版。项目目标不是做一次性页面，而是沉淀一套可以反复复制、改内容、改行业、改颜色并快速交付给客户的官网模板系统。

当前示例行业为「高端家具定制公司」，示例公司为「木森家居定制有限公司」。代码结构保持通用，可改造成企业官网、门店展示网站、产品展示网站、个人品牌网站、招聘宣传页、活动落地页和小型公司宣传官网。

## 适合做什么网站

- 企业官网 / 公司宣传官网
- 门店展示 / 到店咨询网站
- 产品展示 / 案例展示网站
- 装修、家具、服装、机械设备、培训、摄影、宠物、餐饮等中小企业官网
- 招聘宣传页 / 活动落地页 / 个人品牌网站

## 技术栈

- Next.js App Router
- TypeScript
- Tailwind CSS
- 响应式布局
- 配置驱动内容
- 组件化开发

## 本地启动

```bash
npm install
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

构建生产版本：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

## 如何修改客户信息

所有客户信息集中在：

```text
config/site.config.ts
```

优先修改这些字段：

- `companyName`：公司全称
- `shortName`：导航和页脚中使用的简称
- `slogan`：品牌口号
- `description`：公司简介
- `industry`：行业类型
- `contact.phone`：联系电话
- `contact.email`：邮箱
- `contact.wechat`：微信号
- `contact.address`：公司地址
- `contact.businessHours`：营业时间
- `seo.siteTitle`：SEO 标题
- `seo.siteDescription`：SEO 描述
- `seo.keywords`：关键词

## 如何替换图片

图片统一放在：

```text
public/images/
```

替换步骤：

1. 把客户真实图片复制到 `public/images/`。
2. 在 `config/site.config.ts` 中修改对应图片路径。
3. 路径写法示例：`/images/customer-hero.jpg`。

常用图片字段：

- `logo`
- `favicon`
- `hero.heroImage`
- `about.aboutImage`
- `services[].image`
- `products[].image`
- `cases[].image`
- `testimonials[].avatar`
- `seo.ogImage`

> 建议使用尺寸统一、横向构图清晰的图片。模板中已使用固定比例展示，图片比例不同也不容易撑乱布局。

## 如何修改品牌颜色

在 `config/site.config.ts` 修改：

```ts
primaryColor: "#173B63",
secondaryColor: "#C89B62",
```

页面按钮、强调色、边框和部分背景会自动读取这两个颜色。你可以快速改成：

- 家具行业：棕色 / 米色
- 服装品牌：黑白灰
- 健身行业：橙色 / 黑色
- 科技公司：蓝色 / 青色
- 教育培训：蓝色 / 绿色

## 如何新增服务、产品、案例

### 新增服务

在 `services` 数组中复制一项：

```ts
{
  title: "服务标题",
  description: "服务说明",
  icon: "✓",
  image: "/images/service-new.jpg"
}
```

### 新增产品

在 `products` 数组中复制一项：

```ts
{
  title: "产品名称",
  category: "产品分类",
  description: "产品介绍",
  image: "/images/product-new.jpg",
  tags: ["标签一", "标签二"]
}
```

### 新增案例

在 `cases` 数组中复制一项：

```ts
{
  title: "案例名称",
  industry: "客户行业",
  description: "案例描述",
  image: "/images/case-new.jpg",
  result: "交付成果"
}
```

## 如何隐藏某些模块

在 `config/site.config.ts` 中修改 `sections`：

```ts
sections: {
  products: true,
  cases: true,
  testimonials: true,
  faq: true,
  process: true,
  advantages: true
}
```

把不需要的模块改成 `false` 即可。例如客户暂时没有案例：

```ts
cases: false
```

## 页面模块

首页位于：

```text
app/page.tsx
```

组件位于：

```text
components/
```

当前包含：

- Header 顶部导航
- Hero 首屏
- About 公司介绍
- Services 服务项目
- Products 产品展示
- Cases 案例展示
- Advantages 企业优势
- Process 服务流程
- Testimonials 客户评价
- FAQ 常见问题
- Contact 联系我们
- Footer 页脚

## 如何部署到 Vercel

1. 将项目推送到 GitHub。
2. 登录 Vercel。
3. 点击 `Add New Project`。
4. 选择当前 GitHub 仓库。
5. Framework Preset 选择 `Next.js`。
6. Build Command 使用 `npm run build`。
7. Output Directory 保持默认。
8. 点击部署。
9. 部署完成后，在 Vercel 项目设置中绑定客户域名。

## 如何复制成另一个客户项目

推荐流程：

1. 复制当前仓库或从模板创建新仓库。
2. 修改 `package.json` 中的项目名称。
3. 替换 `config/site.config.ts` 的客户信息。
4. 替换 `public/images/` 中的图片素材。
5. 根据客户实际情况开启或隐藏模块。
6. 本地运行 `npm run dev` 检查内容。
7. 运行 `npm run build` 做上线前检查。
8. 部署到 Vercel 并绑定域名。

## 常见问题

### 是否只能用于家具行业？

不是。家具只是示例内容。所有行业信息都来自 `config/site.config.ts`，可以改成服装、健身、装修、机械、教育培训、摄影、宠物店、餐饮门店等。

### 为什么不把内容直接写在组件里？

为了后续批量复用。组件只负责展示，客户内容集中在配置文件中，复制项目后改配置即可快速交付。

### 后续可以加多页面吗？

可以。可以继续新增 `/about`、`/products`、`/cases`、`/contact` 等独立页面，并复用当前配置与组件。

### 可以接入表单提交吗？

可以。下一步可接入飞书、企业微信、邮件服务、数据库或 Server Actions，把咨询表单转成线索。

### 可以做多套主题吗？

可以。当前已经支持主色和辅助色配置，后续可以扩展为 `theme` 配置，控制圆角、字体、卡片阴影、背景风格等。
