import React from 'react';
import './Hero.css';
import logo from '../../images/logo.svg';
import mainImage from '../../images/illustration-dashboard.png';
import Form from '../Form/Form';

const Hero = () => {
  return (
    <section className='hero'>
      <img src={logo} alt='logo' className='hero__logo' />
      <h1 className='hero__title'>
        We are launching <span className='hero__title_bold'>soon!</span>
      </h1>
      <h2 className='hero__subtitle'>Subscribe and get notified</h2>
      <Form />
      <img
        src={mainImage}
        alt='dashboard illustration'
        className='hero__image'
      />
    </section>
  );
};

export default Hero;
