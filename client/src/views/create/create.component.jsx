import React, { useState,useEffect } from 'react';
import "./create.styles.css"
import { Link } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [lifeSpan, setLifeSpan] = useState('');
  const [temperament, setTemperament] = useState('');
  const [url, setURL] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    lifeSpan: '',
    temperament: '',
  });
  const [formValid, setFormValid] = useState(false);
  const [alertError, setAlertError] = useState(false); 

  useEffect(() => {
    const validateForm = () => {
      const errorsCopy = {};
      errorsCopy.name = !name ? 'Name is required.' : '';
      errorsCopy.minHeight = !minHeight ? 'Min Height is required.' : '';
      errorsCopy.maxHeight = !maxHeight ? 'Max Height is required.' : '';
      errorsCopy.minWeight = !minWeight ? 'Min Weight is required.' : '';
      errorsCopy.maxWeight = !maxWeight ? 'Max Weight is required.' : '';

      if (isNaN(parseInt(minHeight))) {
        errorsCopy.minHeight = 'Min Height should be a number.';
      }

      if (isNaN(parseInt(maxHeight))) {
        errorsCopy.maxHeight = 'Max Height should be a number.';
      }

      if (isNaN(parseInt(minWeight))) {
        errorsCopy.minWeight = 'Min Weight should be a number.';
      }

      if (isNaN(parseInt(maxWeight))) {
        errorsCopy.maxWeight = 'Max Weight should be a number.';
      }


      setErrors(errorsCopy);


      const isNameValid = errorsCopy.name === '';
      const isMinHeightValid = errorsCopy.minHeight === '';
      const isMaxHeightValid = errorsCopy.maxHeight === '';
      const isMinWeightValid = errorsCopy.minWeight === '';
      const isMaxWeightValid = errorsCopy.maxWeight === '';

      const isValid =
        isNameValid &&
        isMinHeightValid &&
        isMaxHeightValid &&
        isMinWeightValid &&
        isMaxWeightValid;

      setFormValid(isValid);
    };

    validateForm();
  }, [name, minHeight, maxHeight, minWeight, maxWeight]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      parseInt(minHeight) >= parseInt(maxHeight) ||
      parseInt(minWeight) >= parseInt(maxWeight)
    ) {
      setAlertError(true); // Activate the alert error state
      return;
    }

    if (formValid) {
      setAlertError(false); // Reset the alert error state if validation passes
      try {
        // Your code for handling form submission
        const temperamentsArray = temperament.split(',').map(temp => temp.trim());
        const response = await fetch('http://localhost:3001/dogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            height: `${parseInt(minHeight)} - ${parseInt(maxHeight)}`,
            weight: `${parseInt(minWeight)} - ${parseInt(maxWeight)}`,
            life_span: parseInt(lifeSpan), //ACA
            url: url,
            // temperamentName: temperament,
            temperamentName: temperamentsArray,
          }),
        });

        if (response.ok) {
          alert('Dog breed created successfully!');
          // Reset all input fields
          setName('');
          setMinHeight('');
          setMaxHeight('');
          setMinWeight('');
          setMaxWeight('');
          setLifeSpan('');
          setTemperament('');
          setURL('');
        } else {
          try {
            const responseData = await response.json();
            if (
              responseData.error &&
              responseData.error.includes('llave duplicada viola restricción de unicidad')
            ) {
              alert('This name already exists. Please choose a different name.');
            } else {
              alert('Failed to create dog breed.');
            }
          } catch (error) {
            console.error('Error parsing response data:', error);
            alert('An error occurred while processing the response.');
          }
        }
      } catch (error) {
        console.error('Error creating dog breed:', error);
        alert('An error occurred while creating the dog breed.');
      }
    } else {
      alert('Please fill out the form correctly.');
    }
  };



  return (


    <div> 
      <h1>Crea tu perro</h1>
      <Link to="/home" className="go-back-link">
        <button className="go-back-button">Go Back</button>
      </Link>
<form className="form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      {errors.name && <span className="error">{errors.name}</span>}

      <input
        type="text"
        value={minHeight}
        onChange={(e) => setMinHeight(e.target.value)}
        placeholder="Min Height"
      />
      {errors.minHeight && <span className="error">{errors.minHeight}</span>}

      <input
        type="text"
        value={maxHeight}
        onChange={(e) => setMaxHeight(e.target.value)}
        placeholder="Max Height"
      />
      {errors.maxHeight && <span className="error">{errors.maxHeight}</span>}

      <input
        type="text"
        value={minWeight}
        onChange={(e) => setMinWeight(e.target.value)}
        placeholder="Min Weight"
      />
      {errors.minWeight && <span className="error">{errors.minWeight}</span>}

      <input
        type="text"
        value={maxWeight}
        onChange={(e) => setMaxWeight(e.target.value)}
        placeholder="Max Weight"
      />
      {errors.maxWeight && <span className="error">{errors.maxWeight}</span>}

      <input
        type="text"
        value={lifeSpan}
        onChange={(e) => setLifeSpan(e.target.value)}
        placeholder="Life Span"
      />
      {errors.lifeSpan && <span className="error">{errors.lifeSpan}</span>}

      <input
        type="text"
        value={url}
        onChange={(e) => setURL(e.target.value)}
        placeholder="URL"
      />

      <input
        type="text"
        value={temperament}
        onChange={(e) => setTemperament(e.target.value)}
        placeholder="Temperament"
      />
      {errors.temperament && <span className="error">{errors.temperament}</span>}

      {alertError && (
        <div className="error-summary">
          <p>Maximum value should be greater than the minimum value for height and weight. Modify the values</p>
        </div>
      )}

      <button type="submit" disabled={!formValid}>
        Create Dog Breed
      </button>

   

    </form>
    </div>
    
  );
};

export default Create;
