import Announcements from '@/components/Announcements'
import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalender from '@/components/EventCalender'
import FinanceChart from '@/components/FinanceChart'
import UserCard from '@/components/UserCard'
import React from 'react'

export default function AdminPage() {
  return (
    <>
 <div className="p-4 flex gap-4 flex-col md:flex-row bg-[#F7F8FA]">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        <div className="flex gap-4  flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart/>
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcements/>
      </div>
    </div>    </>
  )
}
