import React from "react";
import styles from './Paginator.module.css';


let Paginator = ({ currentPage, totalUsersCount, onPageChanged, pageSize }) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= 10; i++) {
    pages.push(i);
  }

  return <div>
    <div>
      {pages.map(p => {
        return <span className={currentPage === p && styles.selectedPage}
          onClick={(e) => { onPageChanged(p) }} >{p}</span>
      })}
    </div>
    
  </div>
}

export default Paginator;