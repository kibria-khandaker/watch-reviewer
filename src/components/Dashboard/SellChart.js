import React, { useContext } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsContext } from './Dashboard';

const SellChart = () => {
    // investment sell month revenue
    const [recharts] = useContext(RechartsContext)
    return (
        <div className=' border text-center rounded-lg'>
            <h2 className='py-5'>Monthly Selling Chart</h2>
            <br />
            <LineChart className='mx-auto mb-10' width={400} height={400} data={recharts} margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
            }}>
                <Line type="monotone" dataKey='sell' stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default SellChart;