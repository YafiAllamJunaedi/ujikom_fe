import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "./additional/Currency.js";
import { getAllShoes } from "./services/ShoesService.js";
import Countdown from "react-countdown";
import discount from "./data/discount.js";
// import collection from "./data/collection.js";
import Card from "./components/Card.jsx";
import model1 from "/assets/model1.jpg";
import model2 from "/assets/model2.jpg";
import model3 from "/assets/model3.jpg";
import Benefit from "./components/Benefit.jsx";
import { IoLogoInstagram, IoLogoTiktok } from "react-icons/io5";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { PiCaretDoubleUpBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaTruckArrowRight } from "react-icons/fa6";
import { VscVerifiedFilled } from "react-icons/vsc";

const App = () => {
  const [collection, setCollection] = useState();
  const [isActive, setIsActive] = useState(false);
  const [visibleItem, setVisibleItem] = useState(5);
  const discountTime = Date.now() + 10 * 24 * 60 * 60 * 1000;

  const fetchCollection = async () => {
    try {
      const data = await getAllShoes();
      setCollection(data);
    } catch (error) {
      console.error("Error fetching collection", error);
    }
  };
  useEffect(() => {
    fetchCollection();
    // console.log(collection)
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="navbar w-full h-20 flex items-center justify-between">
        <div className="w-1/2 h-full flex items-center px-12 gap-5">
          <div className="px-8 h-11 bg-black text-white flex items-center font-bold">
            SNEAKER RIOT
          </div>
          <ul className="flex gap-x-4">
            <li>
              <a className="text-sm font-semibold">SALE</a>
            </li>
            <li>
              <a className="text-sm font-semibold">COLLECTIONS</a>
            </li>
          </ul>
        </div>
        <div className="w-1/2 h-full flex items-center justify-end px-12">
          <div className="flex gap-x-10">
            <Link to="/account">
              <FaRegUserCircle className="size-8" />
            </Link>
          </div>
        </div>
      </div>
      <div className="main w-full h-2/6 p-12 flex">
        <div className="w-1/2 h-full flex flex-col justify-center gap-y-6 ml-13">
          <p className="font-[Shadows_Into_Light] text-7xl mt-9">
            Good Shoes <br /> Take you <br /> Good Places.
          </p>
          <p className="font-light">
            INTRODUCING OUR COLLECTIONS <br /> TO BRING EVERY JOURNEY IS
            MEMORABLE
          </p>
        </div>
        <div className="w-1/2 h-full flex flex-col items-center">
          <img src="/assets/sepatu_atas.png" className="w-[400px]" alt="" />
          <img src="/assets/sepatu_bawah.png" className="w-[400px]" alt="" />
        </div>
      </div>

      <div className="w-full h-2/8 px-12">
        <div className="ml-13">
          <p className="text-3xl font-bold">LIMITED OFFER</p>
          {/* ganti font, matiin bold */}
          <div className="w-32 px-2 mt-2 bg-slate-100 text-slate-600 rounded-lg py-1 text-xs flex">
            <p className="mr-1.5">ends in</p>
            <Countdown date={discountTime} />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-5">
            {discount.map((product) => (
              <Card
                id={product.id}
                key={product.id}
                image={product.image}
                title={product.name}
                price={formatCurrency(product.price)}
                // size={product.sizes.size}
                // stock={product.sizes.stock}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[760px] px-12 mt-32">
        <div className="ml-13 ">
          <p className="text-3xl font-bold">NEW ARRIVALS</p>
          <div className="grid grid-cols-3 gap-5 justify-center mt-6">
            <div>
              <img src={model1} alt="" />
              <p className="text-center mt-2">CONVERSE X GORETEX</p>
            </div>
            <div>
              <img src={model2} alt="" />
              <p className="text-center mt-2">NEW BALANCE</p>
            </div>
            <div>
              <img src={model3} alt="" />
              <p className="text-center mt-2">VANS SIPALING ANAK SKATE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto px-12">
        <div className="ml-13">
          <div className="w-full">
            <p className="text-3xl font-bold">OUR COLLECTIONS</p>
          </div>

          <div className="mt-5 grid grid-cols-5 gap-5">
            {collection?.length > 0 ? (
              collection.map((product, index) => {
                if (index < visibleItem) {
                  return (
                    <Card
                      id={product.id}
                      key={product.id}
                      image={product.image}
                      title={product.name}
                      price={formatCurrency(product.price)}
                    />
                  );
                }
              })
            ) : (
              <p>Error...</p>
            )}
          </div>
          <div className="w-full text-center mt-5 text-lg font-semibold underline">
            {
              <p
                className="w-full text-center text-lg font-semibold underline cursor-pointer"
                onClick={() => {
                  setVisibleItem(visibleItem + 5);
                  setIsActive(true);
                }}
              >
                {isActive ? "" : "see more"}
              </p>
            }
            {isActive &&
              (visibleItem === 15 ? (
                <div className="w-full justify-center items-center mt-7 flex gap-x-2">
                  <PiCaretDoubleUpBold
                    className="size-9 border-2 border-black rounded-full p-1 cursor-pointer"
                    onClick={() => setVisibleItem(5)}
                  />
                </div>
              ) : (
                <p
                  className="cursor-pointer"
                  onClick={() => setVisibleItem(visibleItem + 5)}
                >
                  see more
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] px-12 mt-20">
        <div className="ml-13">
          <p className="text-3xl font-bold mb-7">OUR COMMITMENT</p>
          <div className="grid grid-cols-3 gap-7">
            <Benefit
              icon={<VscVerifiedFilled className="size-7" />}
              title="Original Product"
              desc="Produk 100% original, langsung dari distributor resmi, terjamin kualitas dan keaslian setiap item"
            />
            <Benefit
              icon={<FaTruckArrowRight className="size-7" />}
              title="Fast Delivery"
              desc="Pengiriman cepat dan tepat waktu, sepatu Anda sampai dengan aman dan tanpa penundaan"
            />
            <Benefit
              icon={<RiCustomerService2Fill className="size-7" />}
              title="Satisfaction Guaranteed"
              desc="Kepuasan Anda prioritas kami, customer service siap membantu 24/7 dengan solusi cepat dan ramah"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-[600px] bg-black flex">
        <div className="w-2/5">
          <div className="h-5/5 ml-13 px-12">
            <p className="text-white text-3xl font-bold pt-20">Follow Us</p>
            <div className="h-8 flex mt-10 gap-x-2">
              <IoLogoInstagram className="text-white size-5 mt-1" />
              <p className="font-semibold text-white">@sneaker_riot</p>
            </div>
            <div className="h-8 flex gap-x-2">
              <IoLogoTiktok className="text-white size-5 mt-1" />
              <p className="font-semibold text-white">@sneaker_riot</p>
            </div>
            <p className="w-full h-10 text-white text-3xl font-bold mt-10">
              Contact Us
            </p>
            <div className="h-8 flex mt-5 gap-x-4">
              <IoIosCall className="text-white size-5 mt-1" />
              <p className="font-semibold text-white">021 - 1234567</p>
            </div>
            <div className="h-8 flex mt-1 gap-x-4">
              <IoIosMail className="text-white size-5 mt-1" />
              <p className="font-semibold text-white">sales@riotsneaker.com</p>
            </div>
          </div>
        </div>
        <div className="w-3/5 text-white pt-20 pl-13 flex flex-col">
          <p className="text-white text-4xl font-bold">
            PT Sneaker Riot Kecebadai
          </p>
          <p className="text-white text-base mt-10">
            1 Jalan Pesanggrahan No.32 RW.3/ RT.1, Meruya Utara, Kec. Kembangan,
            Daerah Khusus Ibukota Jakarta 11620
          </p>
          <div className="w-4/5">
            <iframe
              width="100%"
              height="350"
              src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=-6.195173416175358,%20106.75585193305432+(SNEAKER%20RIOT)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/"></a>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
