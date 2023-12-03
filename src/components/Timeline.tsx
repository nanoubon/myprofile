
// import { Timeline } from 'flowbite-react';

const jobs_name = [
    {
        name: 'Stream I.T. Consulting Ltd., Bangkok Province.',
        jobdetail: 'Installed and performed maintenance on domain controller, active directory,' +
            'finger scan and Internet server by mail server SMTP, POP3 and CCTV.' +
            'Installed and Designed LAN, WIFI network.' +
            'Rolled out Desktop PCs and Laptop as needed.' +
            'Responsible for determining software and hardware resolutions' +
            'Work as primary support analyst for company.',
        posstion :'Software Engineer',
        year : '2023 – Present',
    },
    {
        name: 'Thai Rotary Engineering Public Company Limited, Rayong Province.',
        jobdetail: 'Dedicated, reliable IT project leader with excellent interpersonal ' +
            'skills who builds and maintain strong alliance to motivate teams and drive projects' +
            ' to successful completion. Strong communication abilities with extensive experience ' +
            'writing reports crucial to project safety and operations. Experience working with ' +
            'a variety of technical equipment with the in-depth knowledge required to troubleshoot,' +
            ' problem-solve and maximize productivity. Reputation as a resourceful team player' +
            ' working with integrity and professionalism to earn respect, inspire cooperation ' +
            'and exceed business expectations.',
        posstion :'Network Engineer and Acting IT Manager ',
        year : '2015 – 2022',
    },
    {
        name: 'GOLDEN CITY RAYONG HOTEL, Rayong Province.',
        jobdetail: 'Installed and performed maintenance on domain controller, active directory,' +
                    'finger scan and Internet server by mail server SMTP, POP3 and CCTV.' +
                    'Installed and Designed LAN, WIFI network.' +
                    'Rolled out Desktop PCs and Laptop as needed.' +
                    'Responsible for determining software and hardware resolutions' +
                    'Work as primary support analyst for company.',
        posstion :'IT Support',
        year : '2015',
    }
];

function TimeLine() {
    const timelineItems = [];

    for (let i = 0; i < jobs_name.length; i++) {
        const job = jobs_name[i];
        timelineItems.push(
            <Timeline.Item key={i}>
                <Timeline.Point />
                <Timeline.Content>
                    <Timeline.Time className={'text-amber-50'}>{job.year}</Timeline.Time>
                    <Timeline.Title>{job.name}</Timeline.Title>
                    <Timeline.Body className={'text-amber-50'}>{job.jobdetail}</Timeline.Body>
                </Timeline.Content>
            </Timeline.Item>
        );
    }

    return <Timeline>{timelineItems}</Timeline>;
}

export default TimeLine;
