import React from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    slug: "hair",
    title: "Hair Styling",
    text: "Professional cuts, coloring, and treatments tailored to your hair type and style.",
    img: "/HairServices.jpg",
    alt: "Hairstylist creating a polished hairstyle for a client",
  },
  {
    slug: "makeup",
    title: "Makeup",
    text: "From soft everyday looks to bridal glam, designed to make you feel your best.",
    img: "/MakeupServices.jpg",
    alt: "Makeup artist applying eye makeup to a client",
  },
  {
    slug: "skincare",
    title: "Skincare",
    text: "Facials and treatments that cleanse, hydrate, and restore your natural radiance.",
    img: "/SkinCareServices.jpg",
    alt: "Client enjoying a relaxing facial treatment",
  },
  {
    slug: "nails",
    title: "Nails",
    text: "Manicures, pedicures, and nail art with long-lasting, flawless finishes.",
    img: "/NailsServices.jpg",
    alt: "Freshly manicured nails with polish",
  },
  {
    slug: "spa-massage",
    title: "Spa & Massage",
    text: "Unwind with relaxing massages and spa therapies that melt away tension.",
    img: "/SpaServices.jpg",
    alt: "Spa massage setting with candles and towels",
  },
  {
    slug: "hair-removal",
    title: "Hair Removal",
    text: "Gentle, precise waxing services for smooth skin that lasts.",
    img: "/HairremovalServices.jpg",
    alt: "Waxing treatment in a clean salon room",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FDF2F4] py-16 scroll-mt-20">
      <div className="px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[#4A1525]">
            Our Services
          </h2>
          <p className="font-body text-[#8C4A5D] mt-3 max-w-xl mx-auto">
            Tailored treatments designed to bring out your natural glow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((item) => (
            <Link
              key={item.slug}
              to={`/services/${item.slug}`}
              className="group block bg-white border border-rose-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* text */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#4A1525] mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[#8C4A5D] text-sm leading-relaxed">
                  {item.text}
                </p>
                <span className="inline-block mt-4 font-body text-sm font-semibold text-[#9E3656] group-hover:text-[#6A2238] transition-colors">
                  View services →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}