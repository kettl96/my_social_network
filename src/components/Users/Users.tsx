import React from "react";
import { UserType } from "../../types/types";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type PropsType = {
  currentPage: number
  totalUsersCount: number
  onPageChanged: (pageNumber: number) => void
  pageSize: number
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: () => void
  follow: () => void
}

let Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, onPageChanged,
  pageSize, users, followingInProgress, unfollow, follow }) => {
  return <div>
    <Paginator currentPage={currentPage}
      onPageChanged={onPageChanged}
      totalItemsCount={totalUsersCount}
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

export default Users