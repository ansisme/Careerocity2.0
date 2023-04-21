import { useState } from 'react';
import axios from 'axios';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const LinkedInSearch = () => {
  const [prompt, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/searchJobs', { prompt });
      console.log(response); // add this line to see the structure of the response
      if (Array.isArray(response.data) && response.data.length > 0) { // check if response data is an array and has jobs
        setJobs(response.data);
      } else {
        setJobs([]); // set jobs to an empty array if there are no jobs
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <form onSubmit={handleSearch}>
        <div className="flex items-center border-b border-blue-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for jobs"
            value={prompt}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-4">
        {jobs.map((job) => (
          <Disclosure key={job.id}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50">
                  <span>{job.title}</span>
                  <ChevronUpIcon
                    className={`${open ? 'transform rotate-180' : ''
                      } w-5 h-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  <p>Company: {job.company.name}</p>
                  <p>Location: {job.locations[0].name}</p>
                  <p>Posting date: {job.created_at.substring(0, 10)}</p>
                  <a href={job.apply_link} target="_blank" rel="noopener noreferrer">
                    Apply now
                  </a>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default LinkedInSearch;
