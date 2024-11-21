"use client"
import Image from "next/image"
import Link from "next/link"
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper/modules';
import { bannerList } from "@/lib/BannerData"
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} className="mySwiper">
                {
                    bannerList.map((banner, idx) =>
                        <SwiperSlide key={idx}>
                            <div className="pb-16 lg:pb-0 px-8 md:px-12 lg:px-24 w-full lg:pt-5"
                                style={{ background: `linear-gradient(45deg, rgba(126,104,90,1) 0%, rgba(238,226,220,1) 30%, rgba(231,113,125,1) 75%)` }}>

                                <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
                                    <Image src={banner.image} alt="image"
                                        className="h-[600px] w-[400px]" width={400} height={400} />
                                    <div className="lg:w-[55%] mx-auto">
                                        <h1 className="text-5xl lg:text-6xl font-bold font-sour text-[#AC3B61]">
                                            {banner.heading}
                                        </h1>
                                        <p className="py-8 lg:py-10 text-sm lg:text-base lg:w-4/5 leading-relaxed font-nun">
                                            {banner.para}
                                        </p>
                                        <Link href={'/'} className="relative px-6 py-3 font-bold text-black group ml-3">
                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#AC3B61] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                                            <span className="relative">Browse Now</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default Banner
