import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  renderNavMenu() {
    return (
      <ul className="nav navbar-nav">
        <li><Link to="/"><i className="fa fa-home"></i></Link></li>
        <li><Link to="/code" activeClassName="active">Code</Link></li>
        <li><Link to="/design" activeClassName="active">Design</Link></li>
        <li><Link to="/contact" activeClassName="active">Contact</Link></li>
      </ul>
    );
  }

  render() {
    return (
      <div>
       <nav className="navbar">
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
