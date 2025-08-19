export default [
  {
    name: "Blog Title",
    desc: "An Ai tool that generate blog title based on your blog information",
    category: "blog",
    icon: "/blogging.png",
    aiPrompt: "give me bloging idea with title and outline",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "SEO Meta Description",
    desc: "An AI tool that generates optimized meta descriptions based on your webpage content",
    category: "seo",
    icon: "/seo.png",
    aiPrompt:
      "Generate an SEO-friendly meta description for the following content",
    slug: "generate-seo-description",
    form: [
      {
        label: "Enter your webpage content",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Enter webpage outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "YouTube Title & Tags",
    desc: "Generate catchy video titles and relevant tags for your YouTube content",
    category: "video",
    icon: "/play.png",
    aiPrompt:
      "Generate a YouTube video title and relevant tags based on this description",
    slug: "youtube-title-tags",
    form: [
      {
        label: "Enter your video description",
        field: "textarea",
        name: "description",
        required: true,
      },
      {
        label: "Enter desc outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Email Subject Line",
    desc: "Craft compelling subject lines for your marketing or personal emails",
    category: "email",
    icon: "/gmail.png",
    aiPrompt: "Generate a catchy email subject line based on the content",
    slug: "generate-email-subject",
    form: [
      {
        label: "Enter your email content",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
      {
        label: "Enter email outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Social Media Caption",
    desc: "Generate engaging captions for Instagram, Facebook, and other platforms",
    category: "social",
    icon: "/writing.png",
    aiPrompt: "Write a social media caption for the following content",
    slug: "generate-caption",
    form: [
      {
        label: "Enter your post content or image description",
        field: "textarea",
        name: "postContent",
        required: true,
      },
      {
        label: "Enter post content outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Create detailed and persuasive descriptions for your eCommerce products",
    category: "ecommerce",
    icon: "/product.png",
    aiPrompt: "Write a product description for the following product",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter product details/features",
        field: "textarea",
        name: "productDetails",
      },
    ],
  },
  {
    name: "Ad Copy",
    desc: "Generate high-converting ad copy for social media and search engines",
    category: "ads",
    icon: "/ads.png",
    aiPrompt: "Write a short and persuasive ad copy for this product/service",
    slug: "generate-ad-copy",
    form: [
      {
        label: "Enter product/service description",
        field: "textarea",
        name: "adContent",
        required: true,
      },
      {
        label: "Enter product outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Newsletter Content",
    desc: "Generate personalized and engaging newsletter content quickly",
    category: "email",
    icon: "/news.png",
    aiPrompt: "Create newsletter content based on the following topic",
    slug: "generate-newsletter-content",
    form: [
      {
        label: "Enter newsletter topic or summary",
        field: "textarea",
        name: "newsletterTopic",
        required: true,
      },
      {
        label: "Enter newsletter outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Resume Bullet Enhancer",
    desc: "Make your resume bullet points more impactful and professional",
    category: "career",
    icon: "/resume.png",
    aiPrompt:
      "Enhance the following resume bullet point for clarity and impact",
    slug: "enhance-resume-bullets",
    form: [
      {
        label: "Enter your resume bullet point",
        field: "textarea",
        name: "bulletPoint",
        required: true,
      },
      {
        label: "Enter resume outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Tweet Generator",
    desc: "Generate attention-grabbing tweets based on your idea or link",
    category: "social",
    icon: "/twitter.png",
    aiPrompt: "Generate a tweet for the following content",
    slug: "generate-tweet",
    form: [
      {
        label: "Enter your idea or link",
        field: "textarea",
        name: "tweetContent",
        required: true,
      },
      {
        label: "Enter idea outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "FAQ Generator",
    desc: "Create frequently asked questions and answers based on your product/service",
    category: "support",
    icon: "/faq.png",
    aiPrompt: "Generate FAQs and answers for this product/service",
    slug: "generate-faq",
    form: [
      {
        label: "Enter product or service description",
        field: "textarea",
        name: "faqContent",
        required: true,
      },
      {
        label: "Enter service outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
