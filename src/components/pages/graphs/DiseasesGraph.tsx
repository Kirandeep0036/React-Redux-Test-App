import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {Header} from '../../header';
import {useQuery} from 'react-query';
// import DiseasesGraph from './DiseasesGraph';
// import CountriesGraph from './CountriesGraph';




const DiseasesGraph = () => {

    document.title = "Graphs & Charts";  

    //Function to covid data api
    const DiseasesAPIData = () =>{
        // Fetcher function
        const getFacts = async () => {
            const res = await fetch('https://disease.sh/v3/covid-19/all');
            return res.json();
        };
        // Using the hook
        const {data,} = useQuery('randomFacts', getFacts);
        if(data) return data;

    }
    
    const diseasesData = DiseasesAPIData();
    
    console.log({diseasesData})

    return(
        <> 
            <Header/>
            <div className = "w-full min-h-screen">
                {/* <DiseasesGraph/> */}
                {/* <CountriesGraph/> */}
            </div> 
        </>
    )
}

export default DiseasesGraph;
