import React, { useState } from 'react';

const Create = () =>  {
  const [name, setName] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [minWeight, setMinWeight] = useState('');
  const [maxWeight, setMaxWeight] = useState('');
  const [lifeSpan, setLifeSpan] = useState('');
  const [temperament, setTemperament] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !name ||
      !minHeight ||
      !maxHeight ||
      !minWeight ||
      !maxWeight ||
      !lifeSpan ||
      !temperament
    ) {
      alert('All fields are required.');
      return;
    }

    if (
      parseInt(minHeight) >= parseInt(maxHeight) ||
      parseInt(minWeight) >= parseInt(maxWeight)
    ) {
      alert('Maximum value should be greater than the minimum value for height and weight.');
      return;
    }

    if (
      !Number.isInteger(parseInt(minHeight)) ||
      !Number.isInteger(parseInt(maxHeight)) ||
      !Number.isInteger(parseInt(minWeight)) ||
      !Number.isInteger(parseInt(maxWeight)) ||
      !Number.isInteger(parseInt(lifeSpan))
    ) {
      alert('Height, weight, and life span must be integers.');
      return;
    }

    try {
      // API call to your backend
      const response = await fetch('http://localhost:3001/dogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          height: `${parseInt(minHeight)} - ${parseInt(maxHeight)}`,
          weight: `${parseInt(minWeight)} - ${parseInt(maxWeight)}`,
          life_span: parseInt(lifeSpan),
          url: 'lolol',
          temperamentName: temperament,
        }),
      });

      if (response.ok) {
        alert('Dog breed created successfully!');
        // Reset form fields after successful submission if needed
        setName('');
        setMinHeight('');
        setMaxHeight('');
        setMinWeight('');
        setMaxWeight('');
        setLifeSpan('');
        setTemperament('');
      } else {
        alert('Failed to create dog breed.');
      }
    } catch (error) {
      console.error('Error creating dog breed:', error);
      alert('An error occurred while creating the dog breed.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={minHeight}
        onChange={(e) => setMinHeight(e.target.value)}
        placeholder="Min Height"
      />
      <input
        type="text"
        value={maxHeight}
        onChange={(e) => setMaxHeight(e.target.value)}
        placeholder="Max Height"
      />
      <input
        type="text"
        value={minWeight}
        onChange={(e) => setMinWeight(e.target.value)}
        placeholder="Min Weight"
      />
      <input
        type="text"
        value={maxWeight}
        onChange={(e) => setMaxWeight(e.target.value)}
        placeholder="Max Weight"
      />
      <input
        type="text"
        value={lifeSpan}
        onChange={(e) => setLifeSpan(e.target.value)}
        placeholder="Life Span"
      />
      <input
        type="text"
        value={temperament}
        onChange={(e) => setTemperament(e.target.value)}
        placeholder="Temperament"
      />
      <button type="submit">Create Dog Breed</button>
    </form>
  );
};

export default Create;
