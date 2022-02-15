import React from 'react';
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    })
  }
  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onClick={this.activatedEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input autoFocus onBlur={this.deactivatedEditMode} type="text" value={this.props.status} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;