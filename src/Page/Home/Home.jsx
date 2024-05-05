import React, { useEffect, useState } from 'react'
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../Actions/data.action';
import JobCard from '../../components/Card/Card';



const Home = () => {
    const [inactive, setinactive] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});



    const dispatch = useDispatch();
    const jobData = useSelector(state => state.data);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    // Function to handle filter changes
    const handleFilterData = (filters) => {
        setSelectedFilters(filters);
    };
    console.log(jobData.jobs, "jobs");
    console.log(selectedFilters, "filter");

    return (
        <div className="page_wrapper">
            <div className="home">
                <Sidebar onCollapse={(inactive) => {
                    setinactive(inactive);
                }} />
                <div className={`homeContainer ${inactive ? `Con_inactive` : ''}`}>
                    <Header />
                    <Filter handleFilterData={handleFilterData} />
                    <div className='grid'>
                        {jobData?.jobs.map((job, index) => {
                            return (
                                <JobCard job={job} key={index} />
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home