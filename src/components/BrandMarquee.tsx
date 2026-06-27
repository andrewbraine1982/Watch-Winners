const brands = [
  { name: "Rolex", src: "/images/Rolex.png" },
  { name: "Audemars Piguet", src: "/images/Audemars%20Piguet.png" },
  { name: "Patek Philippe", src: "/images/Patek.png" },
  { name: "Omega", src: "/images/omega.png" },
  { name: "Cartier", src: "/images/Cartier.png" },
  { name: "Richard Mille", src: "/images/Richard%20mille.png" },
  { name: "Vacheron Constantin", src: "/images/Vacheron.png" },
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
