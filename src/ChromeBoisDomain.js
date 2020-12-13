import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {

/* <<<----- This method should capture the x and y coordinates of the mouse from the event */
/* and use them to invoke the drawChromeBoiAtCoords function */

  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }


/* <<<<------ Invokes the provided `toggleCycling` function with no arguments. Click event should fire it! */
    handleClick = (ev) => {
      toggleCycling(ev)
    }


/* <<<<<-------- if the key pressed was 'a', then it should call `resize` with '+' */
/*<<<------- if the key pressed was 's', then it should call `resize` with '-' */
    handleKeyDown = (e)=> {
      if (e.key === 'a'){
        resize('+')
      } else if (e.key === 's') {
        resize('-')
      }

    }

  render() {
    return (
      <canvas
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0"
        onClick={this.handleClick}
        onKeyDown= {this.handleKeyDown}>
      </canvas>
    )
  }
}
