
export const assets = {
  logo : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765878170/shakeel_fkdjpw.png',
  slide1 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765626227/carousel_1_r1ssvr.jpg',
  slide2 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765626227/carousel_2_f1yagy.jpg',
  slide3 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765626227/carousel_3_wyfter.jpg',
  slide4 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765626227/carousel_4_jocrfa.jpg',
  aboutMain : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765775948/projects-v1-img4.bc96cd6f_ofx9y9.jpg',
  aboutSmall : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765775822/projects-v1-img2.256f10d6_qf44dn.jpg',
  expertImage : "https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765784143/expertImage_qisxfv.jpg",
  service1 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765793328/service1_gkkc0j.png',
  service2 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765793326/service2_ipeujl.png',
  service3 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765793326/service3_ahn9bp.png',
  productMain : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765794138/productMain_yejtcq.jpg',
  productSmall : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765794138/productSmall_kjjg7o.jpg',
  process1 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765794942/process1_bojveg.png',
  process2 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765794942/process2_xyir4p.png',
  process3 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765794942/process3_vyrfpp.png',
  process4 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765794941/process4_a4hm0z.png',
  project1 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765797227/project1_bqbwvk.jpg', 
  project2 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765797205/project2_xfklnl.jpg', 
  project3 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765797228/project3_mbbrzz.jpg', 
  project4 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765797205/project4_yfs0w2.jpg', 
  conatct_img : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765798989/conatct_img_vs50yr.jpg',
  blog1 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765861737/blog1_ldqpwm.jpg',
  blog2 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765861737/blog2_sxiv4u.jpg',
  blog3 : 'https://res.cloudinary.com/dy2ddzcoq/image/upload/v1765861737/blog3_jcmbba.jpg',
};


// Home Page 

export let navlinks = ["Home", "About", "Services", "Page", "Blog", "Contact"];

export let services = [
    {
      icon: assets.service1,
      title: "Carpet Removal",
      desc:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen tum nibh, ut fermentum",
    },
    {
      icon: assets.service2,
      title: "Kitchen Strip Outs",
      desc:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen tum nibh, ut fermentum",
    },
    {
      icon: assets.service3,
      title: "Timber Floor Removal",
      desc:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimen tum nibh, ut fermentum",
    },
  ];

export let steps = [
    {
      step: "01",
      title: "Color Board",
      icon: assets.process1,
      bg: "bg-[#FBF5E8]",
    },
    {
      step: "02",
      title: "Dimension",
      icon: assets.process2,
      bg: "bg-[#F9EEEE]",
    },
    {
      step: "03",
      title: "Installation",
      icon: assets.process3,
      bg: "bg-[#EEF6FA]",
    },
    {
      step: "04",
      title: "Finishing",
      icon: assets.process4,
      bg: "bg-[#F8F3EA]",
    },
  ];

export let projects = [
    {
        title: "Hardwood Flooring",
        category: "Hardwood",
        image: assets.project1,
    },
    {
        title: "Carpet Wood Care",
        category: "Carpet Care",
        image: assets.project2,
    },
    {
        title: "Wood Flooring",
        category: "Wood Care",
        image: assets.project3,
    },
    {
        title: "Tile Flooring",
        category: "Tile Care",
        image: assets.project4,
    },
];

export let testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet elite send do eiusmod tempor incididunt the labore na aliqua. Ut enim ad minim veniam, nostrud exercitation an.",
    name: "Mahfuz Rlad",
    position: "Senior Client",
    image: "https://alori-nextjs.vercel.app/_next/static/media/testimonial-v1-img1.774a6e0f.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet elite send do eiusmod tempor incididunt the labore na aliqua. Ut enim ad minim veniam, nostrud exercitation an.",
    name: "Tamim Anj",
    position: "Senior Client",
    image: "https://alori-nextjs.vercel.app/_next/static/media/testimonial-v1-img1.774a6e0f.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet elite send do eiusmod tempor incididunt the labore na aliqua. Ut enim ad minim veniam, nostrud exercitation an.",
    name: "Sara Huda",
    position: "Senior Client",
    image: "https://alori-nextjs.vercel.app/_next/static/media/testimonial-v1-img1.774a6e0f.png",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet elite send do eiusmod tempor incididunt the labore na aliqua. Ut enim ad minim veniam, nostrud exercitation an.",
    name: "Zain Malik",
    position: "Senior Client",
    image: "https://alori-nextjs.vercel.app/_next/static/media/testimonial-v1-img1.774a6e0f.png",
  },
];

export let articles = [
  {
    category: "Business",
    image: assets.blog1 ,
    title: "How to Remove Common Carpet Stains",
    date: "October 12, 2022",
    desc: "One of the most popular and timeless tile choices for kitchens and bathrooms",
  },
  {
    category: "Woodhard",
    image: assets.blog2 ,
    title: "Hardwood oak flooring at Simple Flooring",
    date: "October 12, 2022",
    desc: "One of the most popular and timeless tile choices for kitchens and bathrooms",
  },
  {
    category: "Flooring",
    image: assets.blog3 ,
    title: "Why choose vinyl plank over other flooring types?",
    date: "October 12, 2022",
    desc: "One of the most popular and timeless tile choices for kitchens and bathrooms",
  },
];