import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobLocation, setJobType } from "../../../features/filters/filtersSlice";

export default function FilterData() {
    const dispatch = useDispatch();
    const { jobType, jobLocation } = useSelector((state) => state.filters);

    const handleJobTypeChange = (event) => {
        dispatch(setJobType(event.target.value));
    };

    const handleJobLocationChange = (event) => {
        dispatch(setJobLocation(event.target.value));
        console.log("event.target.value location", event.target.value)
    };

    return (
        <div className='bg-white p-[24px] rounded-lg flex flex-col gap-4'>
            <div className='jobType flex flex-col gap-3'>
                <h2 className="text-neutral-textSecondary font-bold mb-4">Job Type</h2>
                {['all', 'full-time', 'part-time', 'contract', 'temporary'].map(type => (
                    <div key={type} className="flex flex-row-reverse justify-end gap-3">
                        <label
                            htmlFor={`${type}JobType`}
                            className={`text-[16px] text-neutral-textSecondary transition-all duration-300 hover:font-semibold ${jobType === type ? 'font-semibold' : ''}`}
                        >
                            {type.charAt(0).toUpperCase() + type.slice(1).replace('Time', ' Time')}
                        </label>
                        <input
                            id={`${type}JobType`}
                            type="radio"
                            value={type}
                            name='jobType'
                            checked={jobType === type}
                            onChange={handleJobTypeChange}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-[3px] checked:bg-primary checked:border-transparent focus:outline-none self-center "
                        />
                    </div>
                ))}
            </div>
            <div className="h-[1px] w-full bg-neutral-400"></div>
            <div className='jobLocation flex flex-col gap-3'>
                <h2 className="text-neutral-textSecondary font-bold mb-4">Job Location</h2>
                {['all', 'jenin', 'ramallah', 'tulkarm', 'bethlehem', 'hebron', 'nablus', 'tubas', 'jericho', 'qalqilya', 'salfit', 'jerusalem', 'gaza', 'rafah', 'deirAlBalah', 'khanyounis', 'northGaza', 'nazareth', 'haifa', 'jaffa', 'acre', 'safed', 'tiberias'].map(location => (
                    <div key={location} className="flex flex-row-reverse justify-end gap-3">
                        <label
                            htmlFor={`${location}JobLocation`}
                            className={`text-[16px] text-neutral-textSecondary transition-all duration-300 hover:font-semibold ${jobLocation === location ? 'font-semibold' : ''}`}
                        >
                            {location.charAt(0).toUpperCase() + location.slice(1).replace(/([A-Z])/g, ' $1')}
                        </label>
                        <input
                            id={`${location}JobLocation`}
                            type="radio"
                            value={location}
                            name='jobLocation'
                            checked={jobLocation === location}
                            onChange={handleJobLocationChange}
                            className="appearance-none w-4 h-4 border border-gray-300 rounded-[3px] checked:bg-primary checked:border-transparent focus:outline-none self-center"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
