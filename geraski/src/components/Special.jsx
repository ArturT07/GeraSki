import React from 'react';
import "../css/Special.css";
import line from '../images/line.png'
import MainBtnImg from "../images/main-btn.png"

class Special extends React.Component {
  render() {
    const {MainText } = this.props;
    const { content1 } = this.props;
    const { content2 } = this.props;

    return (
      <div>
        <div className="content-block">
          <h1>{MainText}</h1>
          <img className='special-line' src={line} alt="------------" />
          <img src={content1} alt="content" />
          <img src={content2} alt="content" />
            <img className='main-btn' src={MainBtnImg} alt="Детальніше" />
        </div>
      </div>
    );
  }
}

export default Special;
