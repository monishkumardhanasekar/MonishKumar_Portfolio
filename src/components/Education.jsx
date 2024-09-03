import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUniversity } from 'react-icons/fa';
import { EDUCATION_TIMELINE } from '/src/constants/index.js'; 

const EducationTimeline = () => {
    const lineColor = '#4b5563';
    return (
        <div className="border-b border-neutral-800 pb-4"> 
            <h2 className="my-20 text-center text-4xl text-neutral-600">
                Education 
            </h2>
            <div className="mt-20 flex flex-col items-center">
                <VerticalTimeline lineColor={lineColor}>
                    {EDUCATION_TIMELINE.map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--education text-black"
                            date={item.date}
                            iconStyle={item.iconStyle}
                            icon={<FaUniversity />}
                        >
                            <h3 className="vertical-timeline-element-title text-black text-xl font-bold">{item.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle text-secondary text-md font-semibold">{item.subtitle}</h4>
                            <ul className="mt-5 list-disc ml-5 space-y-2">
                                {item.details.map((detail, index) => (
                                    <li key={index} className="text-black text-sm pl-1">{detail}</li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default EducationTimeline;