export function convertTo12Hour(time: string): string {
    if(!time){
        return time;
    }
    // Split the time string into hours and minutes
    const [hours, minutes] = time.split(':').map(Number); // Convert strings to numbers

    // Format the hours in 12-hour time format
    const twelveHour = hours % 12 || 12; // Convert 0 to 12 for 12 AM
    const amOrPm = hours < 12 ? 'AM' : 'PM'; // Determine AM or PM

    // Return the formatted time string
    const str=(minutes!==0)?`${twelveHour}:${minutes} ${amOrPm}`:`${twelveHour} ${amOrPm}`
    return str;
}

// // Usage
// const time24 = "15:00"; // for example
// const time12 = convertTo12Hour(time24);
// console.log(time12); // Outputs: "3:0 PM"
