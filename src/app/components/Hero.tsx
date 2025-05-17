export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Connecting Skilled Professionals with the Best Jobs
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover the top Hiring Marketplace and Job Placement resource for skilled professionals in the Gems, Jewellery, and Precious Metals Industry.
          </p>
          <a
            href="/signup/job-seeker"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800"
          >
            Get Started
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/static/images/hero-image.webp"
            alt="Hero Image"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
