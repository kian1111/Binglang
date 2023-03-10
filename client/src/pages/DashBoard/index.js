import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StyledDashboard } from "./style"
import {DailyWords } from "../../components/features/dashboard/DailyWords"
import { AddWord } from "../../components/features/dashboard/AddWord";


export const DashBoard = () => {
         
    return (
        
        <StyledDashboard>
            <div>
                <header className="divhead"> 
                Date : placeholder <br/>
                Learning language : English
                </header>
            </div>
            <DailyWords></DailyWords>
            
        </StyledDashboard>
        

    );
}