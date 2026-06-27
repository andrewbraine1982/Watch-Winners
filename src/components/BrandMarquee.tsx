const brands = [
  { name: "Rolex", src: "/images/brands/Rolex.png" },
  { name: "Audemars Piguet", src: "/images/brands/Audemars Piguet.png" },
  { name: "Patek Philippe", src: "/images/brands/Patek.png" },
  { name: "Omega", src: "/images/brands/omega.png" },
  { name: "Cartier", src: "/images/brands/Cartier.png" },
  { name: "Richard Mille", src: "/images/brands/Richard mille.png" },
  { name: "Vacheron Constantin", src: "/images/brands/Vacheron.png" },
];

export default function BrandMarquee() {
  const repeatedBrands = [...brands, ...brands];

  return (
    <section className="brand-marquee-section">
      <p className="brand-marquee-label">
        Featured prizes may include watches from
      </p>

      <div className="brand-marquee">
        <div className="brand-marquee-track">
          {repeatedBrands.map((brand, index) => (
            <div className="brand-logo-item" key={`${brand.name}-${index}`}>
              <img src={brand.src} alt={`${brand.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
