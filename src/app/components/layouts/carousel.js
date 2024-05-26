'use client'
import React from "react";

const cards = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "New York",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "Paris",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1614649024145-7f847b1c803f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "Indiana",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "London",
    },
    {
        id: 5,
        image: "https://images.unsplash.com/photo-1595599512948-b9831e5fc11c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "Tokyo",
    },
    {
        id: 6,
        image: "https://images.unsplash.com/photo-1543490791-db8323d8e5b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "Melbourne",
    },
    {
        id: 7,
        image: "https://images.unsplash.com/photo-1619292585355-ab0e3fd509fe?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "Washington",
    },
    {
        id: 8,
        image: "https://images.unsplash.com/photo-1604629761628-5640ee399e18?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        place: "Seoul",
    },
];



class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
        }
    }
    
    slideNext = () => {
        setCurrentSlide((prevIndex) => (prevIndex + 1) % cards.length);
        this.setState({currentSlide: setCurrentSlide})
    };

    slidePrev = () => {
        setCurrentSlide((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
        this.setState({currentSlide: setCurrentSlide})
    };
    
    changeImage = (e) => {
        const previewImage = document.getElementById("mainImage");
        previewImage.src = e.target.src;
    };

    render() {
        return (
            <>
                <section className="mt-60 flex">
                    <div className="hidden xl:block xl:w-[20%]"></div>
                    <div className="bg-slate-800 w-full h-96 items-center relative xl:rounded-lg xl:w-[60%] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1553444836-bc6c8d340ba7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        className="object-cover w-full  h-full absolute" id="mainImage" alt="" />
                    </div>
                    <div className="hidden xl:block xl:w-[20%]"></div>
                </section>

                <section className="mt-10 mb-20 flex">
                    <div className="hidden xl:block xl:w-[20%]"></div>
                    <div className="bg-slate-800 w-full h-96 content-center overflow-hidden xl:rounded-lg xl:w-[60%]">
                        <div className="h-[340px] items-center overflow-hidden flex mx-6 gap-x-5 relative" id="carouselInner">
                            {/* Carousel */}
                            {cards.slice(currentSlide, currentSlide + 1).map((card, e) => (
                                <div className="w-60 h-80 flex-none text-sm my-5 rounded-lg overflow-hidden relative hover:border-4 hover:border-purple-500 hover:scale-105 ease-in-out transition" 
                                id="imageSlide" key={e}>
                                    <img src={e.image} className="h-full object-cover absolute" alt="card" onMouseOver={this.changeImage} />
                                    <p className="bg-slate-600 w-28 py-1 bottom-0 -end-2 text-center rounded-t-lg absolute">{e.place}</p>
                                </div>
                            ))};

                            {/* Button */}
                            <button className="overflow-visible absolute w-10 h-10 start-0 hover:bg-slate-600 hover:ease-in-out duration-150 rounded-r-lg" onClick={this.slidePrev}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ps-2 stroke-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                                </svg>
                            </button>
                            <button className="overflow-visible absolute w-10 h-10 end-0 hover:bg-slate-600 hover:ease-in-out duration-150 rounded-l-lg" onClick={this.slideNext}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ps-2 stroke-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>

                    </div>
                    <div className="hidden xl:block xl:w-[20%]"></div>
                </section>
            </>

        );
    };
};

export default Carousel;