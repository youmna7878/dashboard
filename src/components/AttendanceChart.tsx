"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
const data = [
    {
        name: 'Sun',
        present: 60,
        absent: 40,

    },
    {
        name: 'Mon',
        present: 60,
        absent: 70,
    },
    {
        name: 'Tue',
        present: 90,
        absent: 75,
    },
    {
        name: 'Wed',
        present: 95,
        absent: 70,
    },
    {
        name: 'Thu',
        present: 65,
        absent: 55,
    },

];
export default function AttendanceChart() {
    return (
        <>
            <div className='bg-white rounded-xl w-full h-full p-4'>
                <div className='flex justify-between items-center'>

                    <h1 className='text-lg font-semibold'>Attendance</h1>
                    <Image src="/moreDark.png" alt="" width={20} height={20} />
                </div>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd' />
                        <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                        <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                        <Tooltip contentStyle={{borderRadius:"10px" , borderColor:"lightgray"}} />
                        <Legend verticalAlign='top' align='left' wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }} />
                        <Bar dataKey="present" fill="#FAE27C" legendType='circle' radius={[10 , 10 , 0, 0]} />
                        <Bar dataKey="absent" fill="#C3EBFA" legendType='circle'  radius={[10 , 10 , 0, 0]}  />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </>
    )
}
