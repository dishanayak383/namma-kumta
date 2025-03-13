import React from "react";
import "./Hall.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { PiDotsThree } from "react-icons/pi";

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
                <div className="boxes1">
                    <div className="image1">
                        <img src="https://pics.craiyon.com/2024-09-06/QDWqBYpMTZ-vJVFdzuN7GA.webp"/> 
                        <div className="h1">Hospital</div>           
                    </div>
                </div>
                <div className="boxes2">
                    <div className="image2">
                        <img src="https://cbin.b-cdn.net/img/GO/Government-of-India01_9CFDJ_800x582.jpeg"/>
                    </div>
                    <div className="h2">Departments</div>
                </div>
                <div className="boxes3">
                    <div className="image3">
                        <img src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"/>
                    </div>
                    <div className="h3">Associations</div>
                </div>
                <div className="boxes4">
                    <div className="image4">
                        <img src="https://t4.ftcdn.net/jpg/00/61/06/27/360_F_61062796_NF87GPnWV0fQ2LhoYNlyjev0PocRwZj9.jpg"/>
                    </div>
                    <div className="h4">Banks</div>
                </div>
                <div className="boxes5">
                    <div className="image5">
                        <img src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                    </div>
                    <div className="h5">Tourism</div>
                </div>
                <div className="boxes6">
                    <div className="image6">
                        <img src="https://images.otstatic.com/prod/24065351/1/large.jpg"/>
                    </div>
                    <div className="h6">Hotels</div>
                </div>
                <div className="boxes7">
                    <div className="image7">
                        <img src="https://img.freepik.com/premium-photo/car-rental-k…-hand-rent-car-from-rental-agency_294383-9193.jpg"/>
                    </div>
                    <div className="h7">RentVehicles</div>
                </div>
                <div className="boxes8">
                    <div className="image8">
                        <img src="https://i.pinimg.com/236x/86/04/60/8604607fbce1a7515824ada352bdbd51.jpg"/>
                    </div>
                    <div className="h8">WeddingPlanning</div>
                </div>
                <div className="boxes9">
                    <div className="image9">
                        <img src="https://cdn.pixabay.com/photo/2020/11/20/17/15/local-store-5762254_640.png"/>
                    </div>
                    <div className="h9">Shops</div>
                </div>
                <div className="boxes10">
                    <div className="image10">
                        <img src="https://blog.renovationfind.com/wp-content/uploads/2023/12/Handyman-Services-800x450-2.jpg.avif"/>
                    </div>
                    <div className="h10">Servies</div>
                </div>
                <div className="boxes11">
                    <div className="image11">
                        <img src="https://media.istockphoto.com/id/498429644/vector/empty-red-box-with-in-case-of-emergency.jpg?s=612x612&w=0&k=20&c=MADP-BKUiwEHcm959qrO1et81GU9FwskpAk0ALniXxA=&quot"/>
                    </div>
                    <div className="h11">Emergency</div>
                </div>
                <div className="boxes12">
                    <div className="image12">
                        <img src="https://img.freepik.com/premium-photo/schoolboys-near-school-building-india_78361-13841.jpg"/>
                    </div>
                    <div className="h12">Schools & Colleges</div>
                </div>
                <div className="boxes13">
                    <div className="image13">
                        <img src="https://media.istockphoto.com/id/1648171369/photo/yakshagana-artist-showing-happiness.jpg?b=1&s=612x612&w=0&k=20&c=mh9VdX2Kc9mCLWLkCv5k16pgTcaJnsfVwP4QK9nS8Ek="/>
                    </div>
                    <div className="h13">CulturalPrograms</div>
                </div>
                <div className="boxes14">
                    <div className="image14">
                        <img src="https://media.istockphoto.com/id/2002620668/photo/female-runner-in-a-park-stock-photo.jpg?b=1&s=612x612&w=0&k=20&c=fKpqpuW7gGl0lZTyQknr-e9TDL2-M3rfOXsNu9hSowI="/>

                    </div>
                    
                    <div className="h14">Sports & Equipment</div>
                </div>
                <div className="boxes15">
                    <div className="boxes16">
                        <div className="dots"><PiDotsThree /></div>
                    </div>
                </div>
            
            </div>
            <div className="box3">
                <div className="home"></div>
            </div>
        </div>
    );
};



export default Hall;