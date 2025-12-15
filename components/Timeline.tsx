import { motion } from 'framer-motion';

const Timeline = () => {
    const experiences = [
        { title: "PhD @ UQTR (started Sep 2025)", date: "Present", description: "Autonomous Vehicles / Robotics" },
        { title: "PhD student (previous) @ KU Leuven", date: "Oct 2024 – Aug 2025", description: "DRAMCO Research Group" },
        { title: "Robot Software Engineer", date: "Mar – Sep 2024", description: "Farming Revolution GmbH (Internship)" },
        { title: "MSc IFRoS", date: "2022 – 2024", description: "University of Girona & University of Zagreb" },
        { title: "Robot Localization Internship", date: "Jun – Jul 2023", description: "CIRS Lab, University of Girona" },
        { title: "Vocational Instructor", date: "2017 – 2018", description: "Vocational Training Center, Eritrea" },
        { title: "BSc Electrical Engineering", date: "2012 – 2017", description: "Eritrea Institute of Technology" },
    ];

    return (
        <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 space-y-8">
            {experiences.map((exp, index) => (
                <div key={index} className="mb-8 ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-accent rounded-full -left-3 ring-8 ring-white dark:ring-gray-900">
                        <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                        {index === 0 && <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">Latest</span>}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.date}</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
