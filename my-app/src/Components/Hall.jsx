import React from "react";
import "./Hall.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";


const Hall =()=> {
    return (
        <div className="container">
            <div className="box1">
                <div className="image">
                    <img src="https://png.pngtree.com/png-vector/20240822/ourmid/pngtree-beach-logo-design-inspiration-sunset-coconut-trees-palms-on-the-vector-png-image_13564239.png"/>
                    <div className="kumta">Namma Kumata</div>
                    <div className="notification"><IoMdNotificationsOutline /></div>
                    <div className="user"><LuUserRound /></div>
                    <div className="internet"><AiOutlineGlobal /></div>
                </div>
            </div>
            <div className="box2">
                <div className="box4">
                    <div className="icon"><IoSearchOutline /></div>
                    <div className="search">Search here...</div>
                    <div className="mic"><IoMicOutline /></div>
                </div>
                <div className="boxes1"></div>
                <div className="boxes2"></div>
                <div className="boxes3"></div>
                <div className="boxes4"></div>
                <div className="boxes5"></div>
                <div className="boxes6"></div>
                <div className="boxes7"></div>
                <div className="boxes8"></div>
                <div className="boxes9"></div>
                <div className="boxes10"></div>
                <div className="boxes11"></div>
                <div className="boxes12"></div>
                <div className="boxes13"></div>
                <div className="boxes14"></div>
                <div className="boxes15"></div>
            </div>
            <div className="box3"></div>
          
        </div>
    );
};

export default Hall;