import React, { useContext } from 'react';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';
import { RechartsContext } from './Dashboard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AllComparePieChart = () => {
    const [recharts] = useContext(RechartsContext);

    return (
        <div className=' border text-center rounded-lg'>
            <h2 className='py-5'> Revenue % Chart</h2>
            <br />
            <PieChart className='mx-auto mb-10' width={500} height={500}>
                <Pie dataKey="revenue" isAnimationActive={false} data={recharts} cx="50%" cy="50%"  innerRadius={35}   outerRadius={80}
                    fill="#8884d8" label>
                    {recharts.map((rechart, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default AllComparePieChart;