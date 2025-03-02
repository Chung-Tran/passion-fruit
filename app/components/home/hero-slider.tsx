'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoPlay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        id: 1,
        image: 'https://ritajuice.vn/wp-content/uploads/2021/11/Chanh-d%C3%A2y-v%E1%BB%8F-t%C3%ADm-%C4%91%C6%B0%E1%BB%A3c-tr%E1%BB%93ng-ph%E1%BB%95-bi%E1%BA%BFn-%E1%BB%9F-n%C6%B0%E1%BB%9Bc-ta.jpg',
        title: 'Welcome to Our Website',
        description: 'Discover amazing things with us',
    },
    {
        id: 2,
        image: 'https://thanhlongsach.com/Uploads/images/SanPham/chanh-day-1.jpg',
        title: 'Professional Services',
        description: 'We provide the best solutions',
    },
    {
        id: 3,
        image: 'https://bvnguyentriphuong.com.vn/uploads/072022/images/chuy%C3%AAn%20m%C3%B4n/ck%20l%E1%BA%BB/Dinh%20d%C6%B0%E1%BB%A1ng%202/chanh-day.jpg',
        title: 'Creative Design',
        description: 'Innovative and modern approach',
    },
]

export default function HeroSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoPlay({ delay: 5000, stopOnInteraction: false }),
    ])

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

    const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
    const scrollNext = () => emblaApi && emblaApi.scrollNext()

    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setPrevBtnEnabled(emblaApi.canScrollPrev())
            setNextBtnEnabled(emblaApi.canScrollNext())
        }

        emblaApi.on('select', onSelect)
        onSelect()

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className="h-screen w-full relative overflow-hidden">
            <div className="absolute inset-0 z-10 pointer-events-none bg-black/20" /> {/* Overlay */}

            <div className="embla h-full" ref={emblaRef}>
                <div className="embla__container h-full">
                    {slides.map((slide) => (
                        <div key={slide.id} className="embla__slide relative h-full w-full flex-[0_0_100%]">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all
            ${prevBtnEnabled ? 'opacity-50 hover:bg-white/30' : 'opacity-50 cursor-not-allowed'}`}
                    onClick={scrollPrev}
                    disabled={!prevBtnEnabled}
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                    className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all
            ${nextBtnEnabled ? 'opacity-50 hover:bg-white/30' : 'opacity-70 cursor-not-allowed'}`}
                    onClick={scrollNext}
                    disabled={!nextBtnEnabled}
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>
            </div>
        </div>
    )
}