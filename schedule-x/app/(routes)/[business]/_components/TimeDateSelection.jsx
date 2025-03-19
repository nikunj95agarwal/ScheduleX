import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

function TimeDateSelection({ date, handleDateChange, timeSlots, setSelectedTime, enableTimeSlot, selectedTime, prevBooking }) {

  /**
   * Checks whether the given time slot is already booked.
   * @param {string} time - The time slot to check.
   * @returns {boolean} - True if the time slot is booked, otherwise false.
   */
  const checkTimeSlot = (time) => {
    return prevBooking.some((item) => item.selectedTime === time);
  };

  return (
    <div className="md:col-span-2 flex px-4">
      {/* Date Selection */}
      <div className="flex flex-col">
        <h2 className="font-bold text-lg">Select Date & Time</h2>
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          className="rounded-md border mt-5"
          disabled={(day) => day <= new Date()} // Prevents selecting past dates
        />
      </div>

      {/* Time Slot Selection */}
      <div className="flex flex-col w-full overflow-auto gap-4 p-5" style={{ maxHeight: '400px' }}>
        {timeSlots?.map((time) => (
          <Button
            key={time} // Using time as a key since it's unique
            disabled={!enableTimeSlot || checkTimeSlot(time)}
            onClick={() => setSelectedTime(time)}
            className={`border-primary text-primary ${time === selectedTime ? 'bg-primary text-white' : ''}`}
            variant="outline"
          >
            {time}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default TimeDateSelection;
