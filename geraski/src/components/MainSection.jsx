import React from 'react';
import "../css/MainSection.css";
import MainBgd from '../images/main-bgd.png';
import line from '../images/line.png'
import SpecialBlock1 from "../images/main-1.png"
import SpecialBlock2 from "../images/main-2.png"
import SpecialBlock3 from "../images/main-3.png"
import SpecialBlock4 from "../images/main-4.png"
import Special from './Special';

function MainSection() {
    return (
        <div className='main-content'>
            <div className='group'>
                <Special MainText='Гуртові заняття' content1 = {SpecialBlock1} content2 = {SpecialBlock2} />
            </div>
            <div className='travel'>
                <Special MainText='Мандрівки' content1 = {SpecialBlock3} content2 = {SpecialBlock4} />
            </div>
        </div>
    )
}

export default MainSection