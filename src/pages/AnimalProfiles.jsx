import React from 'react';

const AnimalProfile = ({ name, description, imageUrl }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.name}>{name}</h2>
      <img src={imageUrl} alt={name} style={styles.image} />
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '400px',
    margin: '16px auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: '24px',
    color: '#333',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    margin: '16px 0',
  },
  description: {
    fontSize: '16px',
    color: '#555',
  },
};

export default AnimalProfile;
