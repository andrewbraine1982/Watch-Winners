const brands = [
  { name: "Rolex", src: "/Rolex.png" },
  { name: "Audemars Piguet", src: "/Audemars Piguet.png" },
  { name: "Patek Philippe", src: "/Patek.png" },
{ name: "Omega", src: "/Omega.svg" },
{ name: "Cartier", src: "/Cartier.svg" },
  { name: "Richard Mille", src: "/Richard mille.png" },
  { name: "Vacheron Constantin", src: "/Vacheron.png" },
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
