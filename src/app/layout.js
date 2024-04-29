import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohit Kumar Porfolio",
  description:
    "Welcome to Mohit Kumar's portfolio, showcasing a versatile Full Stack Developer with expertise in crafting seamless digital experiences. Explore a dynamic showcase of projects spanning front-end mastery with HTML, CSS, JavaScript, and React, coupled with robust back-end solutions using Node.js, Express, and MongoDB. With a passion for innovation and a keen eye for detail, Mohit delivers SEO-optimized websites and applications that captivate audiences and drive results. From concept to execution, each project reflects Mohit's dedication to excellence and commitment to staying at the forefront of modern web development trends. Elevate your digital presence with Mohit Kumar's expertise today.",
  keywords:
    "portfolio, Mohit Kumar, web development, Full Stack Developer, React Developer, Next.js Developer, Laravel Developer, PHP Developer, Node.js Developer, Backend Developer, Web Developer, Frontend and Backend Developer, JavaScript Developer, MERN Stack Developer, RESTful API Developer, Express.js Developer, MongoDB Developer, MySQL Developer, Server-side Development, Database Management, Application Architecture, Code Optimization,front and back end developer,php backend developer,backend developer,freelance backend developer, backend software engineer,backend engineer,backend development,backend web development,senior backend developer,node js backend,backend development services,freelance backend,back end programming,laravel backend,laravel backend developer,aws backend developer, php backend,senior backend engineer,front end back end developer,javascript backend developer,backend development company, remote backend developer,backend api development,best backend for flutter,front back end web developer,backend node developer,full stack backend developer",
  author: "Mohit Kumar",
  // robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon1.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"
        />
        <link
          rel="stylesheet"
          href='https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&amp;family=Poppins:wght@100;300;400;500;600;700;800;900&amp;family=Ubuntu:wght@300;400;500;700&amp;display=swap"rel="stylesheet'
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </head>
      <body className={inter.className}>
        {/* <div>common nav</div> */}
        {children}
      </body>
    </html>
  );
}
