import React from 'react'
const images = [
    { src: '/HairResults.jpg', alt: 'Hair styling result' },
    { src: '/HairColorResults.jpg', alt: 'Hair coloring result' },
    { src: '/MakeupResults.jpg', alt: 'Makeup look result' },
    { src: '/SkincareResults.jpg', alt: 'Skincare result' },
    { src: '/NailsResults.jpg', alt: 'Nails result' },
    { src: '/Salon.jpg', alt: 'Salon interior' }
]
export default function Gallery() {
    return (
        <section id="gallary" className='bg-[#FDF2F4] py-16 scroll-mt-20'>
            <div className='max-w-6xl px-4 mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='font-display font-bold text-[#4A1525] text-3xl md:text-4xl'>Our Work</h2>
                    <p className='text-[#8C4A5D] mt-3 font-body'>
                        A glimpse into the transformations we create</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {images.map(img => (
                        <div key={img.src} className='group overflow-hidden rounded-xl'>
                            <img src={img.src} alt={img.alt} loading='lazy' className='object-cover w-full h-48 md:h-64 group-hover:scale-110 transition-transform duration-500' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}