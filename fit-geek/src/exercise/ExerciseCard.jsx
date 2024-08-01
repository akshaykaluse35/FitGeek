// import React, { useState } from 'react';
import {  Card, CardContent, Typography } from '@mui/material'; // Importing Card and Typography components from Material UI

const ExerciseCard = ({ result }) => {


  return (
    <>
      {result && Array.isArray(result) && (
        <>
          {result.map((exercise, index) => (
            <div key={exercise.id || index} className="exercise">
              <Card variant="outlined" style={{ marginBottom: "10px" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {exercise.bodyPart}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Workout Type: {exercise.bodyPart}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Instruction Set:
                    {exercise.instructions && Array.isArray(exercise.instructions) ? (
                      exercise.instructions.map((instruction, idx) => (
                        <Typography key={idx} variant="body2" component="div">
                          Step {idx + 1}: {instruction}
                        </Typography>
                      ))
                    ) : (
                      <Typography variant="body2" component="div">
                        No instructions available
                      </Typography>
                    )}
                  </Typography>
                  <Typography variant="body1" component="div">
                    Image: <img src={exercise.gifUrl} alt="" />
                  </Typography>
                  {/* Display other exercise details */}
                </CardContent>
              </Card>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default ExerciseCard;
