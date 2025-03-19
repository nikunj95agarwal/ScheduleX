import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CalendarCheck, Clock, Timer } from 'lucide-react'
import { Button } from '@/components/ui/button'

function ScheduledMeetingList({ meetingList }) {
    return (
        <div>
            {meetingList && meetingList.map((meeting, index) => {
                // Ensure the link is absolute
                const meetingUrl = meeting?.locationUrl?.startsWith('http')
                    ? meeting.locationUrl
                    : `https://${meeting.locationUrl}`;

                return (
                    <Accordion type="single" collapsible key={index}>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger>{meeting?.formatedDate}</AccordionTrigger>
                            <AccordionContent>
                                <div>
                                    <div className='mt-5 flex flex-col gap-4'>
                                        <h2 className='flex gap-2'><Clock />{meeting?.duration} Min </h2>
                                        <h2 className='flex gap-2'><CalendarCheck />{meeting.formatedDate}  </h2>
                                        <h2 className='flex gap-2'><Timer />{meeting.selectedTime}  </h2>

                                        {meeting?.locationUrl && (
                                            <a href={meetingUrl} target="_blank" rel="noopener noreferrer" className='text-primary'>
                                                {meetingUrl}
                                            </a>
                                        )}
                                    </div>

                                    {meeting?.locationUrl && (
                                        <a href={meetingUrl} target="_blank" rel="noopener noreferrer">
                                            <Button className="mt-5">Join Now</Button>
                                        </a>
                                    )}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                );
            })}
        </div>
    )
}

export default ScheduledMeetingList;
