import React from "react";
import { PiLeafLight } from "react-icons/pi";
import { TbMilkOff } from "react-icons/tb";
import { GiBanana } from "react-icons/gi";
import { BiSolidLeaf } from "react-icons/bi";
import { IoFishOutline } from "react-icons/io5";
import { SiShell } from "react-icons/si";
import { GiPlantSeed } from "react-icons/gi";
import { GiPalmTree } from "react-icons/gi";

const Menus = () => {
  return (
    <>
      <div className="container p-0 menuCont ">
        <div className="row p-3 p-md-0">
          <h1>Menu</h1>
          <div className="mt-4">
            <div className="singleBottomLine"></div>
          </div>
        </div>
        <div className="row mt-4 p-3 p-md-0">
          <h1>Appetizers</h1>
          <p>These dishes are great for sharing</p>
          <div className="">
            <div className="singleBottomLine"></div>
          </div>
        </div>
        <div className="row mt-3  p-md-2 p-4">
          <div className="col-md-4 p-md-2 p-4 menuCard ">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_3fe4bfc795a0456b845ad58ae872c6d3~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_3fe4bfc795a0456b845ad58ae872c6d3~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Bread And Dips</h1>
              <p>
                Sourdough bread accompanied by hummus, beetroot & whipped feta
                dips
              </p>
              <div className="border rounded-5 text-center mb-3 categoryDiv">
                <PiLeafLight />
                <p className="d-inline m-1">Vegetarian</p>
              </div>
              <p>$4.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_c963eafd4d05404c8ef0434527633e3b~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_c963eafd4d05404c8ef0434527633e3b~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Green Salad</h1>
              <p>
                A garden-fresh salad with seasonal greens and roasted almonds
              </p>
              <div className="d-flex">
                <div className="border rounded-5 text-center mb-3 categoryDiv">
                  <TbMilkOff />
                  <p className="d-inline m-1">Dairy Free</p>
                </div>
                <div className="border rounded-5 text-center mb-3 mx-2 categoryDiv">
                  <GiBanana />
                  <p className="d-inline m-1">Mild</p>
                </div>
              </div>
              <p className=" mb-0">Small $3.50</p>
              <p>Medium $5.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              {" "}
              <img
                src="https://static.wixstatic.com/media/ec845c_ed32ae3532964072b9b332e0989bdbf5~mv2.jpg/v1/fill/w_393,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_ed32ae3532964072b9b332e0989bdbf5~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Tuna Shashmi</h1>
              <p>Seared fresh tuna, fresh herbs, and a touch of chili</p>
              <p>$4.50</p>
            </div>
          </div>
        </div>
        <div className="row mt-5 p-3 p-md-0">
          <div className="mb-3">
            <div className="singleBottomLine"></div>
          </div>
          <h1 style={{ fontSize: "25px", fontWeight: "100" }}>Mains</h1>
          <p style={{ fontSize: "16px" }}>
            A wide range of flavorful dishes, all sourced daily and locally.
          </p>
          <div className="mb-3">
            <div style={{ borderTop: "1px solid grey" }}></div>
          </div>
        </div>
        <div className="row p-4 p-md-0">
          <div className="col-md-4 p-md-2 p-4 menuCard mt-2 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_43666266cf914fc69b937cef5d9164d6~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_43666266cf914fc69b937cef5d9164d6~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Hand-made Ravioli</h1>
              <p>
                Artisanal hand-made ravioli, filled with a blend of cheeses in a
                basil pesto sauce
              </p>
              <p>$6.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_70984dcdfdea4c669ffd5536259a8a78~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_70984dcdfdea4c669ffd5536259a8a78~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Tofu Skewers</h1>
              <p>
                Grilled tofu skewers, marinated in a blend of soy and sesame
                with seasonal roast vegetables
              </p>
              <div className="d-flex">
                <div className="border rounded-5 text-center mb-3 categoryDiv">
                  <BiSolidLeaf />
                  <p className="d-inline m-1">Vegan</p>
                </div>
              </div>
              <p className=" mb-0">$7.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_f79ea896a522468a8f84c1e76d617ecc~mv2.jpg/v1/fill/w_393,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_f79ea896a522468a8f84c1e76d617ecc~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Fish of the Day</h1>
              <p>
                Fresh catch of the day paired with asparagus & a cream of sweet
                potato
              </p>
              <div className="d-flex">
                <div className="border rounded-5 text-center mb-3 categoryDiv">
                  <IoFishOutline />
                  <p className="d-inline m-1" style={{ fontSize: "14px" }}>
                    Fish
                  </p>
                </div>
                <div className="border rounded-5 text-center mb-3 mx-2 categoryDiv">
                  <SiShell />
                  <p className="d-inline m-1" style={{ fontSize: "14px" }}>
                    ShellFish
                  </p>
                </div>
              </div>
              <p>$8.00</p>
            </div>
          </div>
        </div>
        <div className="row mt-lg-5 p-4 p-md-0">
          <div className="col-md-4 p-md-2 p-4 menuCard mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_87c5a8f778de4e36a01ddab28b428485~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_87c5a8f778de4e36a01ddab28b428485~mv2.jpg"
                alt=""
              />
            </div>
            <div className="px-1">
              <h1 className="my-3">Peanut Crusted Steak</h1>
              <p>
                Juicy, tender steak cooked to your liking, served with <br></br>{" "}
                steamed vegetables
              </p>
              <div className="border rounded-5 text-center mb-3 categoryDiv">
                <GiPlantSeed />
                <p className="d-inline m-1">Peanuts</p>
              </div>
              <p>$8.00</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_e3be4aec9afe4edaa505e903d8e13344~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_e3be4aec9afe4edaa505e903d8e13344~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Classic Burger</h1>
              <p>
                Our classic burger with lettuce, pickles, heirloom tomatoes,
                served with a side of fries
              </p>

              <p className=" mb-0">Mushroom $7.50</p>
              <p className="mb-0">Chicken $7.50</p>
              <p>Beef $9.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_d6fde78f920f48748d383a4906f4c345~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_d6fde78f920f48748d383a4906f4c345~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Schnitzel</h1>
              <p>
                Crisp and golden on the outside, in a herb and parmesan crumb
              </p>

              <p>$4.00</p>
            </div>
          </div>
        </div>
        <div className="row mt-5 p-3 p-md-0">
          <div className="mb-3">
            <div className="singleBottomLine"></div>
          </div>
          <h1>Desserts</h1>
          <p>Our desserts are made in house by our pastry chef.</p>
          <div className="mb-3">
            <div className="singleBottomLine"></div>
          </div>
        </div>
        <div className="row p-4 p-md-0 ">
          <div className="col-md-4 p-md-2 p-4 menuCard  mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_ee7a6fde34d8470582ec419484f74dd9~mv2.jpg/v1/fill/w_393,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_ee7a6fde34d8470582ec419484f74dd9~mv2.jpg"
                alt=""
              />
            </div>
            <div className="px-1">
              <h1 className="my-3">Sticky Date & Ice Cream</h1>
              <p>
                Served with vanilla ice cream, toffee sauce & a peanut crumble
              </p>
              <div className="border rounded-5 text-center mb-3 categoryDiv">
                <PiLeafLight />
                <p className="d-inline m-1">Vegetarian</p>
              </div>
              <p>$7.00</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_812f7b1744e34a038f7e92148c029d71~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_812f7b1744e34a038f7e92148c029d71~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Classic Cheesecake</h1>
              <p>Topped with a layer of raspberry jam & sliced strawberries</p>
              <p className=" mb-0">$6.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_481f21c31b7d4524a97a9f234959d29e~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_481f21c31b7d4524a97a9f234959d29e~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Lemon Meringue Pie</h1>
              <p>
                Zesty lemon meringue, a pistachio crumble, served with a
                chantilly cream
              </p>
              <div className="border rounded-5 text-center mb-3 categoryDiv">
                <GiPalmTree />
                <p className="d-inline m-1">Tree Nuts</p>
              </div>
              <p>$5.50</p>
            </div>
          </div>
        </div>
        <div className="row mt-4 p-4 p-md-0">
          <div className="col-md-4 p-md-2 p-4 menuCard mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_608a71d964d6498fbc0d87961261139c~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_608a71d964d6498fbc0d87961261139c~mv2.jpg"
                alt=""
              />
            </div>
            <div className="px-1">
              <h1 className="my-3">Chocolate Mousse</h1>
              <p>Our delicate, yet rich signature chocolate mousse dessert</p>
              <p className="mb-0">Single serve $4.00</p>
              <p>Double serve $7.00</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_e33a19dd88b44d0da7d1d59358bb862a~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_e33a19dd88b44d0da7d1d59358bb862a~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Carrot Cake</h1>
              <p>
                Lightly spiced carrot cake layered with cream cheese frosting
              </p>
              <p className=" mb-0">$5.50</p>
            </div>
          </div>
          <div className="col-md-4 p-md-2 p-4 menuCard mt-5 mt-md-0">
            <div>
              <img
                src="https://static.wixstatic.com/media/ec845c_1c049acc5423477fb78ea2e93692a2cb~mv2.jpg/v1/fill/w_365,h_365,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec845c_1c049acc5423477fb78ea2e93692a2cb~mv2.jpg"
                alt=""
              />
            </div>
            <div>
              <h1 className="my-3">Brownie</h1>
              <p>
                Fresh out the oven brownie filled with dark chocolate chips &
                walnuts
              </p>
              <div className="border rounded-5 text-center mb-3 categoryDiv">
                <TbMilkOff />
                <p className="d-inline m-1">Dairy Free</p>
              </div>
              <p>$5.50</p>
            </div>
          </div>
        </div>
        <div className="row mt-5 p-3 p-md-0">
          <div className="mb-3">
            <div className="singleBottomLine"></div>
          </div>
          <h1 className="mb-3">Drinks</h1>
          <div className="mb-3">
            <div className="singleBottomLine"></div>
          </div>
        </div>
        <div className="row p-4 p-md-0">
          <div className="col-md-4 menuList mb-4 mb-md-0 p-md-4 p-lg-0">
            <h1 className="mt-3 mb-3">Healthy Smoothie</h1>
            <h5 className="mb-4">
              Nourish your body with our selection of healthy smoothies
            </h5>
            <p>$3.00</p>
          </div>
          <div className="col-md-4 menuList mb-4 mb-md-0 p-md-4 p-lg-0">
            <h1 className="mt-3 mb-3">Fresh Juice</h1>
            <h5 className="mb-4">
              A refreshing blend of freshly squeezed orange, watermelon, carrot,
              and ginger
            </h5>
            <p className="mb-0">Small $2.00</p>
            <p className="mb-0">Medium $3.00</p>
            <p>Large $4.00</p>
          </div>
          <div className="col-md-4 menuList mb-4 mb-md-0 p-md-4 p-lg-0">
            <h1 className="mt-3 mb-3">Wine</h1>
            <h5 className="mb-4">Choice of red, white, or rosé</h5>
            <p>$2.00</p>
          </div>
        </div>
        <div className="row mt-lg-5 p-4 py-0   p-md-0 rowLast">
          <div className="col-md-4 menuList mb-4 mb-md-0 p-md-4 p-lg-0">
            <h1 className="mt-3 mb-3">Soft Drink</h1>
            <h5 className="mb-4">A wide selection</h5>
            <p>$1.50</p>
          </div>
          <div className="col-md-4 menuList mb-4 mb-md-0 p-md-4 p-lg-0">
            <h1 className="mt-3 mb-3">Coffee</h1>
            <h5 className="mb-4">Locally roasted coffee, brewed in-house</h5>
            <p className="mb-4 mb-md-0">$2.50</p>
          </div>
          <div className="col-md-4 menuList mb-4 mb-md-0 p-md-4 p-lg-0">
            <h1 className="mt-3 mb-3">Cocktails</h1>
            <h5 className="mb-4">Aperol Spritz, Gin & Tonic, Mojito</h5>
            <p>$1.50</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
