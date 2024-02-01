import React from 'react'
import BlogCarousel from './BlogCarousel/BlogCarousel';
import { Button } from 'react-bootstrap'
import code from './code2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Blogs = () => {

    const slides = [
        {
            image1: 'code',
            title1: 'Card 1',
            description1: 'Description for Card 1',
            image2: 'code',
            title2: 'Card 2',
            description2: 'Description for Card 2',
        },
        {
            image1: 'code',
            title1: 'Card 3',
            description1: 'Description for Card 3',
            image2: 'code',
            title2: 'Card 4',
            description2: 'Description for Card 4',
        },
        // Add more slides as needed
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768, // Screen width less than 768px (sm)
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 992, // Screen width less than 992px (md)
                settings: {
                    slidesToShow: 1,
                },
            },
        ],


    };




    return (
        <div className='text-gray-300 bg-[#0a192f] py-10'>
            <div className='pb-8 w-full flex justify-center items-center flex-col py-5'>
                <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500">
                    Blog
                </p>
                <p className='py-6 text-2xl'>Check out some of my most recent work</p>
            </div>


            <div className=' w-2/4 m-auto '>
                <div className="mt-10 ">
                    <Slider {...settings}>
                        {slides.map((index) => (
                            <div className="rounded-xl bg-white">
                                <div className='h-50 w-50 border'>
                                    <img src={code} alt="blog img" className='w-50' />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <h4 className='text-xl font-semibold'>{index.title1}</h4>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sequi sed alias consectetur at, quos ut ipsum. Omnis magni laboriosam adipisci, eaque pariatur culpa, atque perferendis rerum, tenetur impedit earum.</p>
                                    <Button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md  rounded-ml bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' > Read More</Button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default Blogs;
