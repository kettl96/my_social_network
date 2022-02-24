import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({ currentPage, totalUsersCount, onPageChanged,
  pageSize, users, followingInProgress, unfollow, follow }) => {
  return <div>
    <Paginator currentPage={currentPage}
      onPageChanged={onPageChanged}
      totalUsersCount={totalUsersCount}
      pageSize={pageSize} />
    <div>
      {
        users.map(u => <User
          user={u}
          followingInProgress={followingInProgress}
          key={u.id}
          unfollow={unfollow}
          follow={follow} />)
      }
    </div>
  </div>
}

export default Users;