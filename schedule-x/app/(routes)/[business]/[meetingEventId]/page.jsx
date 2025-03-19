"use client"
import React, { useEffect, useState, use } from 'react'
import MeetingTimeDateSelection from '../_components/MeetingTimeDateSelection.jsx'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig';

function SharedMeetingEvent({ params }) {
    const db = getFirestore(app);
    const resolvedParams = use(params); // ✅ Unwrapping `params` with `React.use()`
    
    const [businessInfo, setBusinessInfo] = useState(null);
    const [eventInfo, setEventInfo] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("Params:", resolvedParams);
        if (resolvedParams?.business && resolvedParams?.meetingEventId) {
            getMeetingBusinessAndEventDetails(resolvedParams);
        }
    }, [resolvedParams]);

    const getMeetingBusinessAndEventDetails = async (resolvedParams) => {
        try {
            setLoading(true);

            // Fetch Business Info
            const q = query(collection(db, 'Business'), where('businessName', '==', resolvedParams.business));
            const querySnapshot = await getDocs(q);
            let businessData = null;
            querySnapshot.forEach((doc) => {
                businessData = doc.data();
            });

            // Fetch Meeting Event Info
            const docRef = doc(db, 'MeetingEvent', resolvedParams.meetingEventId);
            const result = await getDoc(docRef);
            const eventData = result.exists() ? result.data() : null;

            setBusinessInfo(businessData);
            setEventInfo(eventData);
        } catch (error) {
            console.error("Error fetching business/event details:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <MeetingTimeDateSelection 
                    eventInfo={eventInfo} 
                    businessInfo={businessInfo} 
                />
            )}
        </div>
    );
}

export default SharedMeetingEvent;
