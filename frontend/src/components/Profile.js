import React from 'react'

export const Profile = () => {
  return (
    <div classNameName="prof">
      <h1 className="title-pen"> Profile </h1>
      <div className="user-profile">
        <img className="avatar" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTF_erFD1SeUnxEpvFjzBCCDxLvf-wlh9ZuPMqi02qGnyyBtPWdE-3KoH3s" alt="Ash" />
          <div className="username">Will Smith</div>
        <div className="bio">
          Badges :
        </div>
          <div className="description">
            Better Tomorrow user
        </div>
        <ul className="data">
          <li>
            <span>⬆️ 37</span>
          </li>
          <li>
            <span>💸853</span>
          </li>
          {/* <li>
            <span className="entypo-user"> 311</span>
          </li> */}
        </ul>
      </div>
    </div>
  )
}