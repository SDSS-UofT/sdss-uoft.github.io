"use client";
import React, { useState } from 'react';

interface Event {
    id: number;
    name: string;
    date: string;
    "cover-image": string;
    "short-description": string;
    "long-description": string;
}

const EventCarousel = ({ eventData }: { eventData: Event[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3; // Number of items to show
    const lastItems = eventData.slice(-itemsToShow).reverse(); // Create a reversed copy without mutating
    const totalItems = lastItems.length; // Should be the length of reversed items

    const nextItem = () => {
        const newIndex = currentIndex + 1 >= totalItems ? 0 : currentIndex + 1;
        console.log("Next button clicked, current index:", newIndex);
        setCurrentIndex(newIndex);
    };

    const prevItem = () => {
        const newIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : totalItems - 1;
        console.log("Previous button clicked, current index:", newIndex);
        setCurrentIndex(newIndex);
    };

    return (
        <>
            <div className="carousel mt-20">
                {/* Mobile Version: Show one item at a time with navigation buttons */}
                <div className="carousel-item flex flex-row items-center lg:hidden">
                    <button onClick={prevItem} className="btn bg-transparent secondary-purple border-none">❮</button>

                    <div key={lastItems[currentIndex].id} className="flex justify-center items-center">
                        <div className="event-card p-5 lg:max-w-sm h-full">
                            <img
                                src={lastItems[currentIndex]["cover-image"]}
                                alt={lastItems[currentIndex].name}
                                className="w-full h-auto"
                            />
                            <div className="body-regular dark-purple uppercase whitespace-normal pt-3 pb-3">
                                {lastItems[currentIndex].name}
                            </div>
                            <div className="body-regular black">
                                {lastItems[currentIndex]["short-description"]}
                            </div>
                        </div>
                    </div>

                    <button onClick={nextItem} className="btn bg-transparent secondary-purple border-none">❯</button>
                </div>

                {/* Desktop Version: Show multiple items */}
                <div className="carousel-item hidden lg:flex flex-row items-center lg:space-x-2">
                    {totalItems > 0 ? (
                        lastItems.slice(currentIndex, currentIndex + itemsToShow).map((event) => (
                            <div key={event.id} className="flex justify-center items-center">
                                <div className="event-card p-5 lg:max-w-sm ml-10 mr-6 h-full">
                                    <img
                                        src={event["cover-image"]}
                                        alt={event.name}
                                        className="w-full h-auto"
                                    />
                                    <div className="body-regular dark-purple uppercase whitespace-normal pt-3 pb-3">
                                        {event.name}
                                    </div>
                                    <div className="body-regular black">
                                        {event["short-description"]}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default EventCarousel;
