import { NextPage } from 'next';
import React from 'react';
import HomePage from '@template/HomePage';
import Main from '@module/MainContainer/MainContainer';


const Dashboard: NextPage = (props) =>{
 
 return (
     <Main >
        <HomePage/>
    </Main>
     )
};
 
export default Dashboard;