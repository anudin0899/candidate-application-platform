import React, { useState } from 'react';
import './Filters.css';
import Select from "react-select";
import { Role, Employees, Experience, Remote, Salary } from '../../Assets/Data';

const Filters = ({ ByRole, ByEmployee, ByExp, ByRemote, BySalary, ByCompany }) => {

    const [selectedRoles, setSelectedRoles] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedRemote, setSelectedRemote] = useState([]);
    const [selectedSalary, setSelectedSalary] = useState('');
    const [companyName, setCompanyName] = useState('');


    const handleRoleChange = (selected) => {
        setSelectedRoles(selected);
        ByRole({ ...ByRole, roles: selected.map(item => item.value) });
    };

    const handleEmployeesChange = (selected) => {
        setSelectedEmployees(selected);
        ByEmployee({ ...ByEmployee, employees: selected.map(item => item.value) });
    };

    const handleExperienceChange = (selected) => {
        setSelectedExperience(selected);
        ByExp({ ...ByExp, experience: selected.value });
    };

    const handleRemoteChange = (selected) => {
        setSelectedRemote(selected);
        ByRemote({ ...ByRemote, remote: selected.map(item => item.value) });
    };

    const handleSalaryChange = (selected) => {
        setSelectedSalary(selected);
        BySalary({ ...BySalary, salary: selected.value });
    };

    const handleCompanyNameChange = (e) => {
        const value = e.target.value;
        setCompanyName(value);
        ByCompany({ ...ByCompany, companyName: value });
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

        <div className='containers'>
            <div className='titles'>
                <h3>Search Job</h3>
            </div>
            <div className='filter_wraps'>
                <div className='filter'>
                    <Select
                        options={Role}
                        value={selectedRoles}
                        placeholder="role"
                        onChange={handleRoleChange}
                        isMulti
                        styles={customStyles}
                    />

                    <Select
                        options={Employees}
                        value={selectedEmployees}
                        placeholder="no.of employees"
                        onChange={handleEmployeesChange}
                        isMulti
                        styles={customStyles}
                    />

                    <Select
                        options={Experience}
                        value={selectedExperience}
                        placeholder="experience"
                        onChange={handleExperienceChange}
                        styles={customStyles}
                    />

                    <Select
                        options={Remote}
                        value={selectedRemote}
                        placeholder="remote"
                        onChange={handleRemoteChange}
                        isMulti
                        styles={customStyles}
                    />

                    <Select
                        options={Salary}
                        value={selectedSalary}
                        placeholder="minimum base pay salary"
                        onChange={handleSalaryChange}
                        styles={customStyles}
                    />

                    <input
                        type="text"
                        placeholder='search company name'
                        value={companyName}
                        onChange={handleCompanyNameChange}
                    />

                </div>
            </div>
        </div>

    );
}

export default Filters;
