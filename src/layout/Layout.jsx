import React from 'react'
import { Header } from '../header/Header'

export function Layout(props) {
  let showNavMenu = props.showNavMenu;
  if (showNavMenu == null || showNavMenu == undefined) {
    showNavMenu = true;
  }

  return (
    <>
      <Header showNavMenu={props.showNavMenu}></Header>
      <div className="col-md-12">
        <div className="row">
          {showNavMenu &&
            <>
              <div className="col-lg-2"></div>
              <div className="col-lg-10">
                <div className="body-wrapper">
                  {props.component}
                </div>
              </div>
            </>}

          {!showNavMenu &&
            <div className="body-wrapper">
              {props.component}
            </div>}
        </div>
      </div>
    </>
  )
}