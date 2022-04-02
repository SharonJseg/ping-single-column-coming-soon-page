import React from 'react';
import Facebook from './Facebook';
import Twitter from './Twitter';
import Instagram from './Instagram';

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case 'facebook':
      return <Facebook {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
