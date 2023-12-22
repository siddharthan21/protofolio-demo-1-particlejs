import python from '../Style/python.png'
import ardu from '../Style/arduino.png'
import java from '../Style/java.png'
import jq from '../Style/jq.png'
import c from '../Style/c.png'
import mysql from '../Style/L4AAAAAElFTkSuQmCC.png'
import Html from '../Style/html.png'
import tail from '../Style/Tail.svg'
import css from '../Style/css.png'
import php from '../Style/php.png'
import js from '../Style/javascripticon.svg'
import react from '../Style/react.svg'
import express from '../Style/expressiconwhite.svg'
import figma from '../Style/figma.svg'
import mongo from '../Style/mongo.svg'
import node from '../Style/nodejsicon.svg'
import React from 'react'
import '../Style/skill.css'
const Skill = () => {
    const styles = {
    };
    return (
        <div className='skill-head'>
            <div className="skill-main">
                <div className="leftt">
                    <h3>FullStack</h3>
                    <div className='skill-left'>
                        <div className="img-dis img-1">
                            <img src={Html} alt="" />
                        </div>
                        <div className="img-dis img-2">
                            <img src={css} alt="" />
                        </div>
                        <div className="img-dis img-3">
                            <img src={js} alt="" />
                        </div>
                        <div className="img-dis img-4">
                            <img src={react} alt="" />
                        </div>
                        <div className="img-dis img-5">
                            <img src={express} alt="" />
                        </div>
                        <div className="img-dis img-6">
                            <img src={mongo} alt="" />
                        </div>
                        <div className="img-dis img-7">
                            <img src={node} alt="" />
                        </div>
                        <div className="img-dis img-8">
                            <img src={php} alt="" />
                        </div>
                        <div className="img-dis img-9">
                            <img src={figma} alt="" />
                        </div>
                        <div className="img-dis img-10">
                            <img src={tail} alt="" />
                        </div>
                        <div className="img-dis img-11">
                            <img src={mysql} alt="" />
                        </div>
                        <div className="img-dis img-11">
                            <img src={jq} alt="" />
                        </div>
                    </div>
                </div>
                <div className="skill-right">
                    <div className="right">
                        <h3>Programing Skill</h3>
                        <div className='skill-right-iner'>
                            <div className="right-kill c">
                                <img src={c} alt="" />
                                <div class="container con-c">
                                </div>
                            </div>
                            <div className="right-kill java">
                                <img src={java} alt="" />
                                <div class="container con-java">
                                </div>
                            </div>
                            <div className="right-kill python">
                                <img src={python} alt="" />
                                <div class="container con-py">
                                </div>
                            </div>
                            <div className="right-kill arud">
                                <img src={ardu} alt="" />
                                <div class="container con-ar">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill