import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import './BlogPage.css'


const BlogInfo = [
  {
    title: "Give Hope to the People Need Most",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/image_1.jpg.webp",
  },
  {
    title: "Give Hope to the People Need Most",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/image_2.jpg.webp",
  },
  {
    title: "Give Hope to the People Need Most",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/image_3.jpg.webp",
  },
  {
    title: "Give Hope to the People Need Most",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-4.jpg.webp",
  },
  {
    title: "Give Hope to the People Need Most",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-5.jpg.webp",
  },
  {
    title: "Give Hope to the People Need Most",
    image:
      "https://preview.colorlib.com/theme/lovecare/images/cause-6.jpg.webp",
  }
].map((blog) => {
  return (
    <div className="col-md-6 col-lg-4 d-flex flex-column position-relative">
      <div
        className="Blog_bg rounded-top-3"
        style={{
          background: `url(${blog.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="rounded-bottom-3 bg-white">
        <div className="blog_stat d-flex flex-md-row gap-3 p-sm-1 rounded-3 d-flex flex-lg-row flex-md-row flex-sm-row justify-content-lg-around position-absolute align-items-md-center align-items-sm-start translate-middle-y  bg-light">
          <span className="d-flex flex-md-row justify-content-center align-items-center gap-0 flex-sm-row">
            <FaCalendarAlt className="title" /> <span>2024/04/15</span>
          </span>
          <span className="d-flex flex-md-row justify-content-center align-items-center gap-0 flex-sm-row gap-2">
            <FaComment className="title" />{" "}
            <span className="title">3comments</span>
          </span>
        </div>
        <div className="pt-5 p-4 d-flex flex-column justify-content-center align-items-center blog_detail">
          <h3 className="title2 h3 text-center py-2">{blog.title}</h3>
          <p className="text-center fs-5">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean
          </p>
          <button className="Join-Button-green rounded-5 px-3 p-2 d-flex justify-content-center align-items-center gap-2 text-center border">
            Read More
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
});

const BlogPage = () => {
  
  return (
    <section className="Blog_section py-5">
       <section className="About_page_section">
        <div className="About_page_section2 d-flex flex-column justify-content-center align-items-center mh-100">
          <div className="text-center d-flex justify-content-center align-items-center gap-2">
            <a className="text-decoration-none" href="/">
              HOME <FaGreaterThan />
            </a>{" "}BLOG
            <FaGreaterThan />
          </div>
          <h1 className="text-center title2">Our Blog</h1>
        </div>
      </section>
      <div className=" container-xl p-5">
        <p className="text-center title">OUR BLOG</p>
        <h1 className="text-center title2 pb-5">Recent From Blog</h1>
        <div className="row row-gap-3 pt-5 d-flex align-items-center justify-content-center">
          {BlogInfo}
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center text-center w-50 pb-5">
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center"><FaLessThan/></div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">1</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center ">2</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">3</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">4</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center">5</div>
            <div className="col-1 btn-brown p-2 rounded-1 text-center d-flex justify-content-center"><FaGreaterThan /></div>
          </div>
        </div>
    </section>
  )
}

export default BlogPage
