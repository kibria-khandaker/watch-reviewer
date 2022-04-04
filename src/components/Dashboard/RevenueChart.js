import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { RechartsContext } from './Dashboard';
const RevenueChart = () => {
    const [recharts] = useContext(RechartsContext)
    return (
        <div className=' border text-center rounded-lg'>
            <h2 className='py-5'> Monthly Investment And Revenue Chart</h2>
            <br />


            <BarChart  className='mx-auto mb-10'
                width={400}
                height={400}
                data={recharts}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue"  stackId="a" fill="#8884d8" />
                <Bar dataKey="investment"  stackId="a" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default RevenueChart;