import React from "react";

const Services = () => {
  return (
    <>
      <div className="container p-0 servicesCont">
        <div className="row heading px-2 px-md-0">
          <h1 className="">OUR CATERING SERVICES</h1>
        </div>
        <div className=" row px-md-2 d-lg-flex justify-content-lg-end mt-lg-4 d-md-flex justify-content-md-center mt-md-5 rowTwo px-2 px-md-0">
          <div className="col-lg-5 col-md-6 mb-5 mb-md-0">
            <div className="singleBottomLine "></div>
            <h1 className=" mt-md-3 mt-4">Food</h1>
            <h6 className="mt-3">
              Exquisite culinary creations crafted with{" "}
              <br className="d-lg-block d-none d-md-block"></br>passion,{" "}
              <br className="d-block d-md-none" />
              using the finest ingredients to{" "}
              <br className="d-md-block d-lg-none d-none" /> delight{" "}
              <br className="d-lg-block d-none "></br> every guest.
            </h6>
          </div>
          <div className="col-lg-5 col-md-6  px-lg-5  mt-md-0 mt-5 ">
            <div className="singleBottomLine"></div>
            <h1 className=" mt-md-3 mt-4  ">Beverages</h1>
            <h6 className=" mt-3 ">
              A thoughtfully curated selection of refreshing{" "}
              <br className="d-lg-block d-md-none d-block" />
              drinks, from handcrafted cocktails to elegant{" "}
              <br className="d-lg-block d-md-none d-block" />
              non-alcoholic options.
            </h6>
          </div>
        </div>
        <div className="row px-md-2 d-lg-flex justify-content-lg-end d-md-flex justify-content-md-center rowTwo">
          <div className="col-lg-5 col-md-6 mb-5 mb-md-0 ">
            <div className="singleBottomLine"></div>
            <h1 className="mt-md-3 mt-4">Desserts</h1>
            <h6 className="mt-3">
              Indulgent sweet endings that add the{" "}
              <br className="d-lg-none d-none d-md-block" /> perfect
              <br className="d-lg-block d-md-none d-block " /> touch of romance,
              from delicate <br className="d-lg-none d-none d-md-block" />
              pastries to <br className="d-lg-block d-md-none d-block" />
              decadent cakes.
            </h6>
          </div>
          <div className="col-lg-5 col-md-6  px-lg-5 mb-5 mb-md-0 mt-5 mt-md-0 ">
            <div className="singleBottomLine"></div>
            <h1 className="mt-md-3 mt-4 ">Presentation</h1>
            <h6 className="mt-3">
              Every dish is a masterpiece, beautifully{" "}
              <br className="d-lg-none d-none d-md-block" /> plated{" "}
              <br className="d-lg-block d-none" /> with elegance and attention
              to detail, enhancing{" "}
              <br className="d-lg-block d-md-none d-block" /> the magic of your
              celebration.
            </h6>
          </div>
        </div>
        <div className="row mt-5 rowLast ">
          <img
            src="https://static.wixstatic.com/media/11062b_85f2fdac20e64903b2fc8ab8844482c6~mv2.jpg/v1/fill/w_1176,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_85f2fdac20e64903b2fc8ab8844482c6~mv2.jpg"
            alt="..."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
