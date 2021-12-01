import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">noname</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">dimych</NavLink>
        </div>

      </div>
      <div className={s.messages}>
        <div className={s.message}>hi</div>
        <div className={s.message}>hi woh ypure</div>
        <div className={s.message}>yo</div>

      </div>
    </div>
  );
}

export default Dialogs;