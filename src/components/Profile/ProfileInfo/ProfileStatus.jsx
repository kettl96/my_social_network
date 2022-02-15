import React from 'react';
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivatedEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    }) 
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div className={s.status_bar}> 
            <span onClick={this.activatedEditMode}>-{this.props.status}-</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivatedEditMode} type="text"
              value={this.state.status} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;