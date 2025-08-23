export default [
  {
    //01
    name: "Course Outline",
    desc: "Create structured course outlines and curriculum for educational content",
    category: "education",
    icon: "/course.png",
    aiPrompt:
      "Generate a comprehensive course outline with modules, lessons based on the given course topic and target audience, give me to the point answer within 300 words",
    slug: "generate-course-outline",
    form: [
      {
        label: "Enter course topic/subject",
        field: "input",
        name: "courseTopic",
        required: true,
      },
      {
        label: "Enter target audience and course duration",
        field: "textarea",
        name: "courseDetails",
      },
    ],
  },
  {
    //02
    name: "Event Description",
    desc: "Generate engaging descriptions for events, webinars, and conferences",
    category: "events",
    icon: "/event.png",
    aiPrompt:
      "Generate an engaging event description including key highlights, agenda overview based on the event details and target audience, give me to the point answer within 300 words",
    slug: "generate-event-description",
    form: [
      {
        label: "Enter event name and type",
        field: "input",
        name: "eventName",
        required: true,
      },
      {
        label: "Enter event details, date, and agenda",
        field: "textarea",
        name: "eventDetails",
      },
    ],
  },
  {
    //03
    name: "Podcast Script",
    desc: "Create engaging podcast episode scripts and show notes",
    category: "media",
    icon: "/podcast.png",
    aiPrompt:
      "Generate a podcast script including introduction, main content segments, and outro based on the episode topic and key points. Make it conversational and engaging, give me to the point answer within 300 words",
    slug: "generate-podcast-script",
    form: [
      {
        label: "Enter episode topic/title",
        field: "input",
        name: "episodeTopic",
        required: true,
      },
      {
        label: "Enter key points and episode outline",
        field: "textarea",
        name: "episodeOutline",
      },
    ],
  },
  {
    //04
    name: "Grant Proposal",
    desc: "Generate professional grant proposals for funding applications",
    category: "funding",
    icon: "/proposal.png",
    aiPrompt:
      "Generate a professional grant proposal including project summary, objectives, methodology, and budget justification based on the project details and funding requirements, give me to the point answer within 300 words",
    slug: "generate-grant-proposal",
    form: [
      {
        label: "Enter project title and overview",
        field: "textarea",
        name: "projectOverview",
        required: true,
      },
      {
        label: "Enter funding amount and project goals",
        field: "textarea",
        name: "fundingDetails",
      },
    ],
  },
  {
    //05
    name: "CV Bullet Enhancer",
    desc: "Make your resume bullet points more impactful and professional",
    category: "career",
    icon: "/resume.png",
    aiPrompt:
      "Enhance the following resume bullet point to make it stronger, more professional, and impactful based on the given bulletPoint and outline. The points should be concise and attention-grabbing",
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
    //06
    name: "Tweet Generator",
    desc: "Generate attention-grabbing tweets based on your idea or link",
    category: "social",
    icon: "/twitter.png",
    aiPrompt:
      "Generate 3 concise and attention-grabbing tweet based on the provided idea, link, tweetContent and outline",
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
    //07
    name: "FAQ Generator",
    desc: "Create frequently asked questions and answers based on your product/service",
    category: "support",
    icon: "/faq.png",
    aiPrompt:
      "Generate a list of clear and important FAQs with concise answers for the given product, service, faqContent and outline in a concise way",
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
  {
    //08
    name: "Code Solution",
    desc: "Generate step-by-step solutions for coding problems and programming challenges",
    category: "programming",
    icon: "/coding.png",
    aiPrompt:
      "Generate a step-by-step solution for the given coding problem including explanation, code implementation give me to the point answer within 300 words",
    slug: "generate-coding-solution",
    form: [
      {
        label: "Enter coding problem statement",
        field: "textarea",
        name: "problemStatement",
        required: true,
      },
      {
        label: "Enter programming language preference",
        field: "input",
        name: "language",
      },
    ],
  },
  {
    //09
    name: "Blog Title",
    desc: "An Ai tool that generate blog title based on your blog information",
    category: "blog",
    icon: "/blogging.png",
    aiPrompt:
      "Generate 5 engaging and SEO-friendly blog titles based on the given blog title and outline. Keep them concise, clear, and attention-grabbing",
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
    //10
    name: "SEO Meta Description",
    desc: "An AI tool that generates optimized meta descriptions based on your webpage content",
    category: "seo",
    icon: "/seo.png",
    aiPrompt:
      "Generate 5 engaging and SEO-friendly meta description based on the given content and outline. Keep them concise, clear, and attention-grabbing",
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
    //11
    name: "YouTube Title & Tags",
    desc: "Generate catchy video titles and relevant tags for your YouTube content",
    category: "video",
    icon: "/play.png",
    aiPrompt:
      "Generate 3 catchy, SEO-friendly YouTube video title and 10–15 relevant tags based on the given video description and outline. The title should be concise and attention-grabbing",
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
    //12
    name: "Email Subject Line",
    desc: "Craft compelling subject lines for your marketing or personal emails",
    category: "email",
    icon: "/gmail.png",
    aiPrompt:
      "Generate 5 short, catchy, and high-converting email subject line based on the provided email content and outline. The subject should be concise and attention-grabbing",
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
    //13
    name: "Social Media Caption",
    desc: "Generate engaging captions for Instagram, Facebook, and other platforms",
    category: "social",
    icon: "/writing.png",
    aiPrompt:
      "Generate 5 engaging and platform-friendly social media caption based on the given post content and outline. The captions should be concise and attention-grabbing",
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
    //14
    name: "Product Description",
    desc: "Create detailed and persuasive descriptions for your eCommerce products",
    category: "ecommerce",
    icon: "/product.png",
    aiPrompt:
      "Generate 3 persuasive and detailed product description highlighting the product's key features and benefits  based on the given product name and product details. The description should be concise and attention-grabbing",
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
    //15
    name: "Ad Copy",
    desc: "Generate high-converting ad copy for social media and search engines",
    category: "ads",
    icon: "/ads.png",
    aiPrompt:
      "Generate 3 short, attention-grabbing ad copy that clearly promotes the given product or service based on the ad content and outline",
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
    //16
    name: "Newsletter Content",
    desc: "Generate personalized and engaging newsletter content quickly",
    category: "email",
    icon: "/news.png",
    aiPrompt:
      "Generate 3 engaging and personalized newsletter content based on the given topic and outline. The Content should be concise and attention-grabbing",
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
    //17
    name: "Code Documentation",
    desc: "Generate clear and comprehensive documentation for your code functions and APIs",
    category: "technical",
    icon: "/document.png",
    aiPrompt:
      "Generate clear, comprehensive documentation for the given code including description, parameters, return values, and usage examples. Make it developer-friendly and easy to understand, give me to the point answer within 300 words",
    slug: "generate-code-documentation",
    form: [
      {
        label: "Enter function/API name",
        field: "input",
        name: "functionName",
        required: true,
      },
      {
        label: "Enter code snippet or function details",
        field: "textarea",
        name: "codeDetails",
      },
    ],
  },
  {
    //18
    name: "Press Release",
    desc: "Create professional press releases for company announcements and news",
    category: "pr",
    icon: "/press.png",
    aiPrompt:
      "Generate a professional press release based on the given announcement and company details. Include headline, dateline, body, and boilerplate. Make it newsworthy and media-ready, give me to the point answer within 300 words",
    slug: "generate-press-release",
    form: [
      {
        label: "Enter announcement/news summary",
        field: "textarea",
        name: "announcement",
        required: true,
      },
      {
        label: "Enter company details and background",
        field: "textarea",
        name: "companyDetails",
      },
    ],
  },
  {
    //19
    name: "Interview Questions",
    desc: "Generate relevant interview questions for job positions and candidate evaluation",
    category: "hr",
    icon: "/interview.png",
    aiPrompt:
      "Generate 10-15 relevant interview questions based on the job position and required skills. Include both technical and behavioral questions appropriate for the role, give me to the point answer within 300 words",
    slug: "generate-interview-questions",
    form: [
      {
        label: "Enter job position/title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "Enter required skills and job description",
        field: "textarea",
        name: "jobDescription",
      },
    ],
  },
  {
    //20
    name: "Sales Pitch",
    desc: "Craft persuasive sales pitches that close deals and win customers",
    category: "sales",
    icon: "/sales.png",
    aiPrompt:
      "Generate a compelling sales pitch based on the product/service and target customer. Include problem identification, solution presentation, and clear call-to-action, give me to the point answer within 500 words",
    slug: "generate-sales-pitch",
    form: [
      {
        label: "Enter product/service description",
        field: "textarea",
        name: "productDescription",
        required: true,
      },
      {
        label: "Enter target customer and pain points",
        field: "textarea",
        name: "customerProfile",
      },
    ],
  },
  {
  //21
  name: "Slogan Generator",
  desc: "Create catchy and memorable slogans for brands, products, or campaigns",
  category: "branding",
  icon: "/slogan.png",
  aiPrompt:
    "Generate 5 creative, catchy, and memorable slogans based on the given brand or product description. Keep them short, unique, and impactful",
  slug: "generate-slogan",
  form: [
    {
      label: "Enter brand/product description",
      field: "textarea",
      name: "brandDescription",
      required: true,
    },
    {
      label: "Enter target audience or campaign theme",
      field: "textarea",
      name: "campaignTheme",
    },
  ],
},
{
  //22
  name: "Job Description",
  desc: "Generate professional job descriptions with roles and responsibilities",
  category: "hr",
  icon: "/job.png",
  aiPrompt:
    "Generate a professional job description including key responsibilities, required skills, qualifications, and benefits based on the given role and company details",
  slug: "generate-job-description",
  form: [
    {
      label: "Enter job title/position",
      field: "input",
      name: "jobTitle",
      required: true,
    },
    {
      label: "Enter company details and role requirements",
      field: "textarea",
      name: "roleDetails",
    },
  ],
},
{
  //23
  name: "Product Review",
  desc: "Generate authentic and persuasive product reviews for eCommerce",
  category: "ecommerce",
  icon: "/review.png",
  aiPrompt:
    "Generate 3 authentic-sounding product reviews that highlight key features, pros, and possible improvements based on the product details and audience",
  slug: "generate-product-review",
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
  //24
  name: "Cover Letter",
  desc: "Create professional and tailored cover letters for job applications",
  category: "career",
  icon: "/cover.png",
  aiPrompt:
    "Generate a tailored cover letter including introduction, skills, experiences, and closing statement based on the given job position and candidate details",
  slug: "generate-cover-letter",
  form: [
    {
      label: "Enter job position/title",
      field: "input",
      name: "jobTitle",
      required: true,
    },
    {
      label: "Enter your background, skills, and experience",
      field: "textarea",
      name: "candidateDetails",
    },
  ],
},

];
