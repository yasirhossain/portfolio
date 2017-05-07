import React, { Component } from 'react';

class Github extends Component {
  constructor(props) {
      super(props);
      this.state = {
        githubData: []
      };
  }

  componentDidMount() {
    this.getPortfolio();
  }

  getPortfolio = () => {
    const USER_ID = `yasirhossain`,
          GITHUB_URL = `https://api.github.com/users/${USER_ID}/repos`;

    $.ajax({
      url: GITHUB_URL,
      type: "get",
      dataType: "jsonp"
    }).done((response) => {
      console.log(response);
    }).fail((error) => {
      console.log("Ajax request fails")
      console.log(error);
    });
  }

  render() {
    return (
      <div className="behance component-container box-shadow container-fluid">
        {this.state.githubData}
      </div>
    );
  }
}

export default Github;
