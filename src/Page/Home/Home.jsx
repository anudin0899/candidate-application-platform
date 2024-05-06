import React, { useEffect, useState } from 'react';
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../Actions/data.action';
import JobCard from '../../components/Card/Card';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import Filters from '../../components/Filters/Filters';
import LoadingSpin from 'react-loading-spin';

const Home = () => {
    const dispatch = useDispatch();
    const jobData = useSelector(state => state.jobdata.jobs);
    const { loading, error } = useSelector(state => state.jobdata);

    console.log(loading);


    const [inactive, setInactive] = useState(false);
    const [limit, setLimit] = useState(10);

    const [Roles, setRoles] = useState([]);
    const [Experience, setExperience] = useState('');
    const [Location, setLocation] = useState([]);
    const [Salary, setSalary] = useState('');
    const [CompanyName, setCompanyName] = useState('');


    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const fetchMoreData = () => {
        setLimit(limit + 10)
        dispatch(fetchJobs(limit));
    };

    const filteredJobData = jobData.filter(job => {

        const rolesArray = Array.isArray(Roles) ? Roles : [Roles];
        const locationArray = Array.isArray(Location) ? Location : [Location];

        return (
            (rolesArray.length === 0 || rolesArray[0]?.roles.includes(job?.jobRole.toLowerCase())) &&
            (locationArray.length === 0 || locationArray[0]?.location.includes(job?.location.toLowerCase())) &&
            (Experience === '' || (job?.minExp === parseInt(Experience?.experience))) &&
            (Salary === '' || (job?.minJdSalary === parseInt(Salary?.salary))) &&
            (CompanyName === '' || job?.companyName.toLowerCase().includes(CompanyName?.companyName.toLowerCase()))
        );
    });


    return (
        <div className="page_wrapper">
            <div className="home">
                <Sidebar onCollapse={(inactive) => setInactive(inactive)} />
                <div className={`homeContainer ${inactive ? `Con_inactive` : ''}`}>
                    <Header />
                    <Filters
                        ByRole={setRoles}
                        ByExp={setExperience}
                        ByLocation={setLocation}
                        BySalary={setSalary}
                        ByCompany={setCompanyName}
                    />
                    <InfiniteScroll fetchMoreData={fetchMoreData}>
                        <div className='grid'>
                            {filteredJobData.map((job, index) => (
                                <JobCard job={job} key={index} />
                            ))}
                        </div>
                        {loading && <div className='loading'>
                            <LoadingSpin />
                        </div>}
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default Home;