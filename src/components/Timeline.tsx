const jobs_name = [
    {
        name: "Stream I.T. Consulting Ltd., Bangkok Province.",
        jobdetail:
            "Installed and performed maintenance on domain controller, active directory," +
            "finger scan and Internet server by mail server SMTP, POP3 and CCTV." +
            "Installed and Designed LAN, WIFI network." +
            "Rolled out Desktop PCs and Laptop as needed." +
            "Responsible for determining software and hardware resolutions" +
            "Work as primary support analyst for company.",
        position: "Software Engineer",
        year: "2023 – Present",
    },
    {
        name: "Thai Rotary Engineering Public Company Limited, Rayong Province.",
        jobdetail:
            "Dedicated, reliable IT project leader with excellent interpersonal " +
            "skills who builds and maintain strong alliance to motivate teams and drive projects" +
            " to successful completion. Strong communication abilities with extensive experience " +
            "writing reports crucial to project safety and operations. Experience working with " +
            "a variety of technical equipment with the in-depth knowledge required to troubleshoot," +
            " problem-solve and maximize productivity. Reputation as a resourceful team player" +
            " working with integrity and professionalism to earn respect, inspire cooperation " +
            "and exceed business expectations.",
            position: "Network Engineer and Acting IT Manager ",
        year: "2015 – 2022",
    },
    {
        name: "GOLDEN CITY RAYONG HOTEL, Rayong Province.",
        jobdetail:
            "Installed and performed maintenance on domain controller, active directory," +
            "finger scan and Internet server by mail server SMTP, POP3 and CCTV." +
            "Installed and Designed LAN, WIFI network." +
            "Rolled out Desktop PCs and Laptop as needed." +
            "Responsible for determining software and hardware resolutions" +
            "Work as primary support analyst for company.",
            position: "IT Support",
        year: "2015",
    },
];

function Timeline() {
    return (
        <div>
            <div className="p-0">
                <ol className="relative border-l border-gray-200 dark:border-gray-700">
                    {jobs_name.map((job,index) =>(
                    <li key={index} className="mb-10 ml-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-xl font-semibold leading-none text-gray-100 dark:text-gray-500">
                            {job.year}
                        </time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {job.name}
                            <br/>
                            {job.position}
                        </h3>
                        <p className="mb-4 text-base font-normal text-gray-100 dark:text-gray-400">
                            {job.jobdetail}
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Learn more{" "}
                            <svg
                                className="w-3 h-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    ))}
                </ol>

            </div>
        </div>
    );
}

export default Timeline;
