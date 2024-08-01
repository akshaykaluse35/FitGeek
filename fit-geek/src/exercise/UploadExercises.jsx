import React from 'react';
import { useState } from 'react';
import axios from 'axios';
// import avatar from '../images/Egg.png';

const Uploadexercises = () => {

    const [exercise, setExercise] = useState({
        muscle: "bicep",
        sets: "fgd",
        explanation: "gdf",
        equipment: "gdf",
        intensity: "gdf",
        beginner_set: "fdg",
        intermediate_set: "gdf",
        advanced_set: "gfd",
        long_explanation: "gdf",
        workout_name: "fgd",
        video: "novideo"
    });
    
    const [image, setImage] = useState();

    const submitData = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        Object.keys(exercise).forEach(key => {
            formData.append(key, exercise[key]);
        });
    

        const response = await axios.post(
            "http://localhost:5000/upload",
            formData, {
                headers: {"Content-Type": "multipart/form-data"},
            }
        );
    }

    const updateFile = (e) => {
        console.log(e.target.files[0]);
        setImage(e.target.files[0]);
    }

    const updateExercise = async(e) => {
        let target = e.target.name;
        let value = e.target.value;

        setExercise({
            ...exercise,
            [target]: value,            
        });
    }

    




  return (
                <div>
                    <form onSubmit={submitData}>
                            <div>
                                <label htmlFor="muscle">muscle</label>
                                <input type="text" name="muscle" required placeholder="Enter your Muscle Type" autoComplete="off" value={exercise.muscle} onChange={updateExercise} ></input>
                            </div>
                            <div>
                                <label htmlFor="sets">sets</label>
                                <input type="text" name="sets" required placeholder="Enter your Sets reps" value={exercise.sets} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="explanation">explanation</label>
                                <input type="text" name="explanation" required placeholder="Enter your explanation" value={exercise.explanation} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="equipment">equipment</label>
                                <input type="text" name="equipment" required placeholder="Enter your equipment" value={exercise.equipment} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="inensity">inensity</label>
                                <input type="text" name="inensity" required placeholder="Enter your inensity" value={exercise.intensity} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="beginner_set">beginner_set</label>
                                <input type="text" name="beginner_set" required placeholder="Enter your beginner_set" value={exercise.beginner_set} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="intermediate_set">intermediate_set</label>
                                <input type="text" name="intermediate_set" required placeholder="Enter your intermediate_set" value={exercise.intermediate_set} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="advanced_set">advanced_set</label>
                                <input type="text" name="advanced_set" required placeholder="Enter your advanced_set" value={exercise.advanced_set} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="long_explanation">long_explanation</label>
                                <input type="text" name="long_explanation" required placeholder="Enter your long_explanation" value={exercise.long_explanation} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="workout_name">workout_name</label>
                                <input type="text" name="workout_name" required placeholder="Enter your workout_name" value={exercise.workout_name} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="video">video</label>
                                <input type="text" name="video" required placeholder="Enter your video" value={exercise.video} onChange={updateExercise}></input>
                            </div>
                            <div>
                                <label htmlFor="animation">animation</label>
                                <input type="file" accept=".gif" name="animation" onChange={updateFile} />

                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                    </form>
                </div>
  );
}

export default Uploadexercises;

