import React, { useEffect, useState } from 'react';
import "./Home.css"
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../Actions/data.action';
import JobCard from '../../components/Card/Card';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import Filters from '../../components/Filters/Filters';

const Home = () => {
    const dispatch = useDispatch();
    const jobData = useSelector(state => state.jobdata.jobs);


    const [inactive, setInactive] = useState(false);
    const [limit, setLimit] = useState(10);

    const [Roles, setRoles] = useState([]);
    const [Employees, setEmployees] = useState([]);
    const [Experience, setExperience] = useState('');
    const [Remote, setRemote] = useState([]);
    const [Salary, setSalary] = useState('');
    const [CompanyName, setCompanyName] = useState('');

    const [filteredJobs, setFilteredJobs] = useState(jobData);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const fetchMoreData = () => {
        setLimit(limit + 10)
        dispatch(fetchJobs(limit));
    };

    const filteredJobData = jobData.filter(job => {
       
        const rolesArray = Array.isArray(Roles) ? Roles : [Roles];
        const employeesArray = Array.isArray(Employees) ? Employees : [Employees];
        const remoteArray = Array.isArray(Remote) ? Remote : [Remote];


        return (
            (rolesArray.length === 0 || rolesArray.includes(job.jobRole.toLowerCase())) &&
            (employeesArray.length === 0 || employeesArray.includes(job.employees.toLowerCase())) &&
            (remoteArray.length === 0 || remoteArray.includes(job.remote.toLowerCase())) &&
            (Experience === '' || (job.minExp <= parseInt(Experience))) &&
            (Salary === '' || (job.minJdSalary <= parseInt(Salary))) &&
            (CompanyName === '' || job.companyName.toLowerCase().includes(CompanyName.toLowerCase()))
        );
    });


    console.log(filteredJobData, "filter job data");

    return (
        <div className="page_wrapper">
            <div className="home">
                <Sidebar onCollapse={(inactive) => setInactive(inactive)} />
                <div className={`homeContainer ${inactive ? `Con_inactive` : ''}`}>
                    <Header />
                    <Filters
                        ByRole={setRoles}
                        ByEmployee={setEmployees}
                        ByExp={setExperience}
                        ByRemote={setRemote}
                        BySalary={setSalary}
                        ByCompany={setCompanyName}
                    />
                    <InfiniteScroll fetchMoreData={fetchMoreData}>
                        <div className='grid'>
                            {jobData.map((job, index) => (
                                <JobCard job={job} key={index} />
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default Home;