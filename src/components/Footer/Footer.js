import React from 'react';
import './Footer.css';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__social-media-list'>
        <li>
          <button aria-label='facebook link' className='social__media_link'>
            <Icon
              name='facebook'
              height='15'
              width='15'
              className='social__media-icon'
            />
          </button>
        </li>
        <li>
          <button aria-label='twitter link' className='social__media_link'>
            <Icon
              name='twitter'
              height='16'
              width='16'
              className='social__media-icon'
            />
          </button>
        </li>
        <li>
          <button aria-label='instagram link' className='social__media_link'>
            <Icon
              name='instagram'
              height='16'
              width='16'
              className='social__media-icon'
            />
          </button>
        </li>
      </ul>
      <p className='footer__copyright'>
        © Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
