import React from 'react';
import Card from './Card';

const About = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card TitleName="Image 1" src="/Images/B1.jpg" />
        <Card TitleName="Image 2" src="/Images/B2.jpg" />
        <Card TitleName="Image 3" src="/Images/B3.jpg" />
      </div>
    </>
  );
};

export default About;
