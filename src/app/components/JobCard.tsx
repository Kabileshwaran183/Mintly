import { Briefcase, MapPin, Clock, Tag } from 'lucide-react'; // Icon library

export default function JobCard({logoUrl, jobTitle, jobLink, companyName, companyLink, postedAgo, categoryIcon, category, typeIcon, jobType, locationIcon, location, salaryIcon, salary}) {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <div className="flex items-start gap-4">
        {/* Logo */}
        <img
          src={logoUrl}
          alt="Company Logo"
          className="w-20 h-20 object-contain rounded-md border"
        />

        {/* Job Content */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-blue-800 leading-tight">
            {jobTitle}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            {jobType}
          </p>
          <p className="text-xs text-gray-400">{postedAgo}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 rounded-md">
              <Tag size={16} />
              {category}
            </span>
            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 rounded-md">
              <Clock size={16} />
              
            </span>
            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 rounded-md">
              <MapPin size={16} />
              {location}
            </span>
            <span className="flex items-center gap-1 text-sm px-3 py-1 bg-gray-100 rounded-md">
              <Briefcase size={16} />
              {salary}
            </span>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button className="flex items-center text-blue-600 bg-blue-100 hover:bg-blue-200 transition px-4 py-2 rounded-lg">
              View Details
              <svg
                className="ml-2"
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
