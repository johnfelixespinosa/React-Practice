import React, { Component } from 'react';
import axios from 'axios'

class ActivitiesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activities: []
    }
  }

  getActivities() {
    axios.get('/api/v1/activities')
    .then(response => {
      this.setState({activities: response.data})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getActivities()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="activityInput" type="text"
            placeholder="Add an activity" maxLength="50" />
        </div>
        <div className="listWrapper">
	        <ul className="activitiesList">
		        {this.state.activities.map((activity) => {
		          return(
		            <li className="activity" activity={activity} key={activity.id}>
			            <input className="activityCheckbox" type="checkbox" />              
			            <label className="activityLabel">{activity.title}</label>
			            <span className="deleteActivityBtn">x</span>
		            </li>
		          )       
		        })} 	    
	        </ul>
	      </div>
      </div>
    )
  }
}


export default ActivitiesContainer