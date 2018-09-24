import * as React from 'react';
import {Dropdown, Image, Menu as MenuUI, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class Footer extends React.Component {

  render() {
    const footerStyle = {
      marginTop:15,
      right: 0,
      bottom: 0,
      left: 0,
      padding: '1rem',
      backgroundColor: '#111',
      textAlign: 'center',
    }
    return (
      <div style={footerStyle}>

        <a class="ui circular icon button"
          data-tooltip="Find us on Facebook!"
          href="https://www.facebook.com/ECEUSC/">
          <i class="facebook f icon"></i>
        </a>
        <a class="ui circular icon button"
          data-tooltip="ECEUSC Github"
          href="https://github.com/ucsdeceusc">
          <i class="github icon"></i>
        </a>
        <a class="ui circular icon button"
          data-tooltip="Previous ECEUSC Websites!"
          href="/past-years/index.html">
          <i class="fast backward icon"></i>
        </a>
        
      </div>
    );
  }
}