import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const JobCard = ({ job }) => {


    return (
        <Card style={{ minHeight: '300px' }}>
            <CardContent>
                <Typography variant="h5" component="h2">{job?.jobRole}</Typography>
                <Typography color="textSecondary">{job?.companyName}</Typography>
                <Typography color="textSecondary">{job?.location}</Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    Experience Required: {job?.minExp} years
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                    Estimated Salary: {job?.minJdSalary} {" "} {job?.salaryCurrencyCode}
                </Typography>
                <Typography variant="body2" component="p">
                    {job?.jobDetailsFromCompany}
                </Typography>
               
                <Button variant="contained" color="primary">
                    Apply
                </Button>
            </CardContent>
        </Card>
    );
};

export default JobCard;
