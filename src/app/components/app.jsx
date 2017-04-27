import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  renderNavMenu() {
    return (
      <ul className="nav navbar-nav">
        <li><Link to="/" activeClassName="active">About</Link></li>
        <li><Link to="/components" activeClassName="active">Components</Link></li>
        <li><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
      </ul>
    );
  }

  render() {
    return (
      <div>
       <nav className="navbar navbar-default">
         <div className="container-fluid">
           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              {this.renderNavMenu()}
           </div>
         </div>
       </nav>

       <div className="container">
           {this.props.children}
       </div>
     </div>
    );
  }
}

export default App;
