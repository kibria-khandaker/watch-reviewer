import React, { createContext, useEffect, useState } from 'react';
import AllComparePieChart from './AllComparePieChart';
import InvestmentChart from './InvestmentChart';
import RevenueChart from './RevenueChart';
import SellChart from './SellChart';

export const RechartsContext = createContext();

const Dashboard = () => {

    const [recharts, setRecharts] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json`)
            .then(res => res.json())
            .then(data => setRecharts(data))
    }, [])

    return (
        <RechartsContext.Provider value={[recharts, setRecharts]}>
            <div className='w-full '>
                <div className='max-w-screen-xl mx-auto p-4 py-16 grid gap-10 grid-cols-1 lg:grid-cols-2'>
                    <SellChart/>
                    <InvestmentChart/>
                    <RevenueChart/>
                    <AllComparePieChart></AllComparePieChart>
                </div>
            </div>
        </RechartsContext.Provider>
    );
};

export default Dashboard;