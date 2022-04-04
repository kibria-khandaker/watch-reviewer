import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsContext } from './Dashboard';

const InvestmentChart = () => {
    // investment sell month revenue
    const [recharts] = useContext(RechartsContext)
    return (
        <div className=' border text-center rounded-lg'>
            <h2 className='py-5'> Compare Investment Vs Revenue</h2>
            <br />
            <AreaChart className='mx-auto mb-10'
                width={400}
                height={400}
                data={recharts}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}>
                <Area type="monotone" dataKey='revenue' stroke="#8884d8" />
                <Area type="monotone" dataKey='investment' stroke="#000" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="revenue" />
                <YAxis />
                <Tooltip />
            </AreaChart>
        </div>
    );
};

export default InvestmentChart;