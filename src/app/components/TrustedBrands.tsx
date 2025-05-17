export default function TrustedBrands() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-8">Trusted by Top Brands</h2>
        <div className="flex justify-center space-x-12">
          <img
            src="/static/images/brand1.webp"
            alt="Brand 1"
            className="h-12 object-contain"
          />
          <img
            src="/static/images/brand2.webp"
            alt="Brand 2"
            className="h-12 object-contain"
          />
          <img
            src="/static/images/brand3.webp"
            alt="Brand 3"
            className="h-12 object-contain"
          />
          <img
            src="/static/images/brand4.webp"
            alt="Brand 4"
            className="h-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
