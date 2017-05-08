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
      <div className="behance">
        {
          this.state.portfolioData.map((item, i) => {
            let itemStyle = {
              background: `url(${item.covers['original']}) top center no-repeat transparent`,
              backgroundSize: `cover`,
            }
            return (
              <div className={"item " + (i < 2 ? 'col-md-6' : 'col-md-4')} key={item.id} style={itemStyle}>
                <div className="item-info">
                  <h2>{item.name}</h2>
                  <div className="fields">
                    {
                      item.fields.map((field, i) => {
                        return (
                          <label key={field}>{field}</label>
                        )
                      })
                    }
                  </div>
                  <a href={item.url} target='_blank' className="action-button">More Info</a>
                </div>
                <div className="item-bg"></div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Behance;
