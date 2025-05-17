import JobCard from "./JobCard";

const jobCardsData = [
  {
    logoUrl: "https://www.trymintly.com/_next/image?url=%2Fstatic%2Fimages%2Fmintly.webp&w=3840&q=75",
    jobTitle: "Senior Diamond Setter",
    jobLink: "https://www.trymintly.com/jobs/senior-diamond-setter",
    companyName: "Mintly Inc.",
    companyLink: "https://www.trymintly.com/companies/mintly-inc",
    postedAgo: "2 days ago",
    categoryIcon: "/static/images/sales.svg",
    category: "Sales",
    typeIcon: "/static/images/fulltime.svg",
    jobType: "Full-time",
    locationIcon: "/static/images/location.svg",
    location: "New York, NY",
    salaryIcon: "/static/images/salary.svg",
    salary: "$70k - $90k",
  },
  {
    logoUrl: "https://www.trymintly.com/_next/image?url=%2Fstatic%2Fimages%2Fmintly.webp&w=3840&q=75",
    jobTitle: "Jewelry Designer",
    jobLink: "https://www.trymintly.com/jobs/jewelry-designer",
    companyName: "Mintly Inc.",
    companyLink: "https://www.trymintly.com/companies/mintly-inc",
    postedAgo: "5 days ago",
    categoryIcon: "/static/images/operations.svg",
    category: "Operations",
    typeIcon: "/static/images/parttime.svg",
    jobType: "Part-time",
    locationIcon: "/static/images/location.svg",
    location: "Los Angeles, CA",
    salaryIcon: "/static/images/salary.svg",
    salary: "$50k - $70k",
  },
];

export default function CardsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left cards in a row */}
        <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 gap-6">
          {jobCardsData.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
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
                src="https://www.trymintly.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2F1628677044705_Limelight.png&w=3840&q=75"
                alt="Brand 1"
                className="w-full h-auto object-contain"
              />
              <img
                src="https://www.trymintly.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2F1732019499814_Bling-Better-Logo.png&w=3840&q=75"
                alt="Brand 2"
                className="w-full h-auto object-contain"
              />
              <img
                src="https://www.trymintly.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2F1628677044705_Limelight.png&w=3840&q=75"
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
