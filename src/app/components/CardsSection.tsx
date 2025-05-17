export default function CardsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left cards in a row */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Card 1 Title</h3>
            <p className="text-gray-600">Description for card 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Card 2 Title</h3>
            <p className="text-gray-600">Description for card 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Card 3 Title</h3>
            <p className="text-gray-600">Description for card 3.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Card 4 Title</h3>
            <p className="text-gray-600">Description for card 4.</p>
          </div>
        </div>

        {/* Right filters and top brand cards */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Filter 1
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Filter 2
                </label>
                <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                  <option>Option A</option>
                  <option>Option B</option>
                  <option>Option C</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800"
              >
                Apply Filters
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-4">Top Brands</h3>
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/static/images/brand1.webp"
                alt="Brand 1"
                className="w-full h-auto object-contain"
              />
              <img
                src="/static/images/brand2.webp"
                alt="Brand 2"
                className="w-full h-auto object-contain"
              />
              <img
                src="/static/images/brand3.webp"
                alt="Brand 3"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
