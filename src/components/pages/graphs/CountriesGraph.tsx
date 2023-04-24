import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {Header} from '../../header';
import {useQuery} from 'react-query';
// import DiseasesGraph from './DiseasesGraph';
// import CountriesGraph from './CountriesGraph';




const CountriesGraph = () => {

    document.title = "Graphs & Charts";  

    //Function to covid data api
    const CountriesAPIData = () =>{
        // Fetcher function
        const getFacts = async () => {
            const res = await fetch('https://disease.sh/v3/covid-19/countries');
            return res.json();
        };
        // Using the hook
        const {data,} = useQuery('randomFacts', getFacts);
        if(data) return data;

    }
    
    const countriesData = CountriesAPIData();
    
    console.log({countriesData})

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

export default CountriesGraph;
