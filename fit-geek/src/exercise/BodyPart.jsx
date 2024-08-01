import React, { useState, useEffect } from 'react';
import '../exercise/bodypart.css'

const BodyPart = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPartList`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '05aa805bf4mshb3cfc1201643550p1cfa2ajsn6f06fc725d8c',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
          }
        });

        if (response.ok) {
          const data = await response.json();
          setResult(data);
        } else {
          console.error('Error fetching data');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <div className='bodypart'>
        {result &&
            result.map((bodyPart, index) => (
              <div class="card-body-part">
                <h3 key={index}>{bodyPart}</h3>
              </div>
            ))}
        </div>
    </>
          

  );
};

export default BodyPart;
