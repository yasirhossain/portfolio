import React, { Component } from 'react';

class Github extends Component {
  constructor(props) {
      super(props);
      this.state = {
        repoData: []
      };
  }

  componentDidMount() {
    this.getRepos();
  }

  getRepoDetails = () => {
    const repoData = this.state.repoData,
          USER_ID = `yasirhossain`;

    repoData.map((item, i) => {
      let GITHUB_PROJECT_URL = `https://api.github.com/repos/${USER_ID}/${item.name}/commits?callback`;

      $.ajax({
        url: GITHUB_PROJECT_URL,
        type: "get",
        dataType: "jsonp"
      }).done((response) => {
        item.commit = response['data'][0];

      }).fail((error) => {
        console.log("Ajax request fails")
        console.log(error);
      });
    });

    this.setState({
      repoData: repoData
    });
  }

  getRepos = () => {
    const USER_ID = `yasirhossain`,
          GITHUB_URL = `https://api.github.com/users/${USER_ID}/repos?callback`;

    $.ajax({
      url: GITHUB_URL,
      type: "get",
      dataType: "jsonp"
    }).done((response) => {
      this.setState({
        repoData: response['data']
      });
      //this.getRepoDetails();
    }).fail((error) => {
      console.log("Ajax request fails")
      console.log(error);
    });
  }

  render() {
    return (
      <div className="github component-container box-shadow container-fluid">
        {
          this.state.repoData.map((item, i) => {
            return (
              <div className='item col-md-4' key={item.id}>
                <h2>{item.description}</h2>
                <a href={item.url} target='_blank'>Details</a>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Github;
