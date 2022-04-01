import './App.css';
import logo from '../../images/logo.svg';
import mainImage from '../../images/illustration-dashboard.png';
import fb from '../../images/facebook-icon.svg';
import tw from '../../images/twitter-icon.svg';
import inst from '../../images/instagram-icon.svg';

function App() {
  return (
    <>
      <main className='page'>
        <section className='hero'>
          <img src={logo} alt='logo' className='hero__logo' />
          <h1 className='hero__title'>
            We are launching <span className='hero__title_bold'>soon!</span>
          </h1>
          <h2 className='hero__subtitle'>Subscribe and get notified</h2>
          <form action='' className='hero__form'>
            <div className='hero__form-input-wrapper'>
              <input
                type='email'
                className='hero__form-input'
                placeholder='Your email address…'
              />
              <button className='hero__form-submit'>Notify Me</button>
              <p className='hero__form-input-error'>
                Please provide a valid email address
              </p>
            </div>
          </form>
          <img
            src={mainImage}
            alt='dashboard illustration'
            className='hero__form-image'
          />
        </section>
      </main>
      <footer className='footer'>
        <ul className='footer__social-media-list'>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img src={fb} alt='' />
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img src={tw} alt='' />
            </a>
          </li>
          <li>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              <img src={inst} alt='' />
            </a>
          </li>
        </ul>
        <p className='footer__copyright'>
          © Copyright Ping. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default App;
