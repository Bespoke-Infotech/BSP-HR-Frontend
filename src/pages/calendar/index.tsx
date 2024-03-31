import React, { useState } from "react";
import AuthenticatedLayout from "../../../views/components/Layout/AuthenticatedLayout";
import Image from "next/image";
import LeftIcon from "../../../views/assets/images/left-icon.svg";
import RightIcon from "../../../views/assets/images/right-icon.svg";
import UserIcon from "../../../views/assets/images/user-circle-icon.svg";

const Calendar = () => {
  // Get current date
  const currentDate = new Date();

  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState(currentDate);

  // Function to handle date selection
  const handleDateClick = (day: any) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(day);
    setSelectedDate(newDate);
  };

  // Function to navigate to the previous day
  const prevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  // Function to navigate to the next day
  const nextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  // Render the days of the month
  const renderDays = () => {
    const days = [];
    const daysToShow = 10; // Number of days to show
    const daysBeforeSelected = Math.floor(daysToShow / 2);
    const daysAfterSelected = daysToShow - daysBeforeSelected - 1; // Subtract 1 for the selected date

    // Calculate the starting date
    const startingDate = new Date(selectedDate);
    startingDate.setDate(selectedDate.getDate() - daysBeforeSelected);

    // Render the days
    for (let i = 0; i < daysToShow; i++) {
      const currentDate = new Date(startingDate);
      currentDate.setDate(startingDate.getDate() + i);
      const dayNumber = currentDate.getDate();
      const dayName = currentDate.toLocaleString("default", {
        weekday: "short",
      });

      days.push(
        <div
          key={dayNumber}
          className={`py-[10px] w-full border-[0.5px] border-[#B9B9B9] flex flex-col items-center gap-1 cursor-pointer ${
            currentDate.getDate() === selectedDate.getDate()
              ? "bg-bespokeDeepPurple"
              : "bg-bespokeWhite"
          } `}
          onClick={() => handleDateClick(dayNumber)}
        >
          <p
            className={`text-[12px] leading-4 font-[400]  ${
              currentDate.getDate() === selectedDate.getDate()
                ? "text-bespokeWhite"
                : "text-bespokeBlack"
            } `}
          >
            {dayNumber}
          </p>
          <p
            className={`text-[12px] leading-[14px] font-[300] text-[#686868] ${
              currentDate.getDate() === selectedDate.getDate()
                ? "text-[#FDE0BD]"
                : "text-bespokeBlack"
            } `}
          >
            {dayName}
          </p>
        </div>
      );
    }

    return days;
  };

  console.log(selectedDate, "date");

  const formatSelectedDate = (dateFormat: boolean) => {
    const currentDate = selectedDate;
    const formattedDate = currentDate.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
    });
    const formattedMonthYear = currentDate.toLocaleString("en-US", {
      month: "long",
      year: "numeric",
    });
    // const year = currentDate.getFullYear();

    return dateFormat ? formattedDate : formattedMonthYear;
  };

  formatSelectedDate(true);
  formatSelectedDate(false);

  const userData = [
    {},
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
    {
      name: "Paul James",
      designation: "Director",
    },
  ];

  return (
    <AuthenticatedLayout>
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <p className="text-[18px] font-[500] text-bespokeBlack">Calender</p>
          <div className="flex items-center gap-6">
            <p className="text-[16px] font-[500] text-bespokeBlack">
              {formatSelectedDate(false)}
            </p>
            <div className="flex items-center gap-[10px]">
              <Image
                src={LeftIcon}
                alt="left-icon"
                className="cursor-pointer"
                onClick={prevDay}
              />
              <p className="text-[16px] font-[500] text-bespokeBlack">
                {formatSelectedDate(true)}
              </p>
              <Image
                src={RightIcon}
                alt="left-icon"
                className="cursor-pointer"
                onClick={nextDay}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-11">
          <div className="col-span-2 flex flex-col gap-7">
            {userData.map((user, index) =>
              user.name ? (
                <div className="flex items-center gap-4" key={index}>
                  <Image src={UserIcon} alt="user-circle-icon" />
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] font-[400] text-bespokeBlack leading-4 ">
                      {user.name}
                    </p>
                    <p className="text-[12px] font-[300] text-[#686868] leading-[14px]">
                      {user.designation}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-[34px]" key={index}></div>
              )
            )}
          </div>
          <div className="col-span-9 ">
            <div className="grid grid-cols-10 gap-[14px]">{renderDays()}</div>
            {/* <div className="grid grid-cols-10 gap-[14px]">{userData.map((user, index) => (

            ))}</div> */}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Calendar;
