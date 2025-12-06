
"use client";
import Footer from "components/Footer";
import Title from "components/Title";


const Blogs = () => {
  return (
    <div>
      <Title imageSrcPath="/media/images/blog.jpg" name="BLOGS" />
      <div className="flex justify-center px-4 md:px-16 xl:px-32 py-10">
        <iframe
          src="https://www.instagram.com/p/DNR3RxiRorP/embed"
          width="400"
          height="600"
          frameBorder="0"
          scrolling="no"
          allowFullScreen={true}
          style={{ borderRadius: '12px', border: 'none' }}
          title="Instagram Post"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;