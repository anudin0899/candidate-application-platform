import React, { useState } from 'react';
import './Filter.css';
import Select from "react-select";
import { Role, Employees, Experience, Remote, Salary } from '../../Assets/Data';

const Filter = ({ handleFilterData }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        roles: [],
        employees: [],
        experience: '',
        remote: [],
        salary: '',
        companyName: ''
    });

    const handleFilterChange = (filterName, selected) => {
        setSelectedFilters(prevState => ({
            ...prevState,
            [filterName]: selected
        }));
        handleFilterData(selectedFilters); // Call the callback function
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            minWidth: 100,
            border: state.isFocused ? '1px solid #ccc' : '1px solid #ccc',
            boxShadow: state.isFocused ? "0 0 0 0 #ccc" : null,
            '&:hover': {
                border: '1px solid #ccc',
            },
        }),
    };


    return (
        <section>
            <div className='container'>
                <div className='title'>
                    <h3>Search Job</h3>
                </div>
                <div className='fiter-wrap'>
                    <div className='filters'>
                        <Select
                            options={Role}
                            value={selectedFilters.roles}
                            placeholder="role"
                            onChange={(selected) => handleFilterChange('roles', selected)}
                            isMulti
                            styles={customStyles}
                        />

                        <Select
                            options={Employees}
                            value={selectedFilters.employees}
                            placeholder="no.of employees"
                            onChange={(selected) => handleFilterChange('employees', selected)}
                            isMulti
                            styles={customStyles}
                        />

                        <Select
                            options={Experience}
                            value={selectedFilters.experience}
                            placeholder="experience"
                            onChange={(selected) => handleFilterChange('experience', selected)}
                            styles={customStyles}
                        />

                        <Select
                            options={Remote}
                            value={selectedFilters.remote}
                            placeholder="remote"
                            onChange={(selected) => handleFilterChange('remote', selected)}
                            isMulti
                            styles={customStyles}
                        />

                        <Select
                            options={Salary}
                            value={selectedFilters.salary}
                            placeholder="minimum base pay salary"
                            onChange={(selected) => handleFilterChange('salary', selected)}
                            styles={customStyles}
                        />

                        <input
                            type="text"
                            placeholder='search company name'
                            value={selectedFilters.companyName}
                            onChange={(e) => handleFilterChange('companyName', e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Filter;
