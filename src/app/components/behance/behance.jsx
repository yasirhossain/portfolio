import React, { Component } from 'react';

import styles from './behance.scss';

class Behance extends Component {
  constructor(props) {
      super(props);
      this.state = {
        portfolioData: []
      };
  }

  componentDidMount() {
    this.getPortfolio();
  }

  getPortfolio = () => {
    const USER_ID = `ctrlaltdeceit`,
          PROJECT_ID = `52044123`,
          API_KEY = `orFEMtxpuHBWdS0ria7s5lHyhJWMzkYT`,
          BEHANCE_URL = `https://api.behance.net/v2/users/${USER_ID}/projects?client_id=${API_KEY}&callback=?`;

    $.ajax({
      url: BEHANCE_URL,
      type: "get",
      data: {projects: {}},
      dataType: "jsonp"
    }).done((response) => {
      this.setState({
        portfolioData: response['projects']
      });
    }).fail((error) => {
      console.log("Ajax request fails")
      console.log(error);
    });
  }

  render() {
    return (
      <div className="behance component-container box-shadow container-fluid">
        {
          this.state.portfolioData.map((item, i) => {
            return (
              <div className='item col-md-4' key={item.id}>
                <img className='cover' src={item.covers.original} alt={item.name} />
                <label>{item.name}</label>
                <a href={item.url} target='_blank'>Details</a>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Behance;
