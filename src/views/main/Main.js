import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import Timeline from '../../components/timeline/Timeline';
import ApiService from '../../util/api'

import "./Main.styles.scss"

function Main() {
    const { response, loading, error } = ApiService();
    const [data, setData] = useState([]);
    
       useEffect(() => {
         if (response !== null) {
           setData(response);
         }
       }, [response]);
    

    return (
        <div className="container">
            <Header />
            <Timeline data={data} loading={loading} error={error} />
        </div>
    );
}

export default Main;