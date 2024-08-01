import React from 'react';
import '../exercise/exercise.css';
import { useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';

const Exercises = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState('');

  const res = async() => {
    try {
      console.log("hello");
      const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${search}?limit=10&offset=0`,{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '05aa805bf4mshb3cfc1201643550p1cfa2ajsn6f06fc725d8c',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });

    if(response.ok){
      const data = await response.json();
      setResult(data);
      console.log(data);
    }else{
      console.log("error while ftechign data");
    }
    } catch (error) {
      console.error("This is error",error);
    }
  }


  return (
    
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={res}
        >
          Search
        </Button>
      </Box>

      <Box sx={{  flexWrap: 'wrap', display: 'flex' }}>
          <BodyPart/>
      </Box>


      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <ExerciseCard result={result} />
      </Box>
    </Stack>
    
  );
};

export default Exercises;
