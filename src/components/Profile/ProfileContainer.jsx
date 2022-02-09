import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserProfile } from './../../redux/profile-reducer';

const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
      <WrappedComponent
          {...props}
          params={params}
      />
  );
};

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.params.userId;
    if (!userId){
        userId=2;
    }
    this.props.getUserProfile(userId)
}

  render() {
    return (
      <div>
        <Profile {...this.props} profile = {this.props.profile} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);

