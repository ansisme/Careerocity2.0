import React from 'react';
import { Card, Typography, Button } from '@material-ui/core';

function Predict(props) {
  const { jobs } = props;

  return (
    <div>
      <Typography className="text-gradient" variant="h2" align="center">
        Your Recommended Job
      </Typography>

      <Card style={{ margin: '30px', padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          {jobs.map((job, index) => (
            <div key={index}>
              <span>{job}</span>
              <br />
            </div>
          ))}
        </Typography>
      </Card>

      <Button  variant="contained" color="primary" onClick={() => window.location.reload()}>
        Go AGAIN
      </Button>
    </div>
  );
}

export default Predict;
