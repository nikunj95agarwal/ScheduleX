"use client"; // 👈 Add this line

import { Input } from '@/components/ui/input'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import React from 'react'
import MeetingEventList from './_components/MeetingEventList'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

function MeetingType() {
  const db = getFirestore(); // No need to pass `app`, it's already initialized
  const { user } = useKindeBrowserClient(); // 👈 Ensure this runs on client

  const getEventList = async () => {
    const q = query(collection(db, "cities"), where("capital", "==", true));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div className='p-5'>
      <div className='flex flex-col gap-5'>
        <h2 className='font-bold text-3xl'>Meeting Event Type</h2>
        <Input placeholder="Search" className="max-w-xs" />
        <hr />
      </div>
      <MeetingEventList />
    </div>
  );
}

export default MeetingType;
