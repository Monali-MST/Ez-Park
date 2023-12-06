export default function getBookingHours(startTime, endTime) {
  // Convert start and end times to valid date strings
  const startDateString = `1970-01-01 ${startTime}`;
  const endDateString = `1970-01-01 ${endTime}`;

  // Create Date objects using the valid date strings
  const today = new Date();
  const optionsDate = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", optionsDate);
  const optionsTime = { hour: "numeric", minute: "numeric", hour12: true };
  const formattedTime = today.toLocaleTimeString("en-US", optionsTime);
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);

  // Calculate the difference in milliseconds
  const duration = endDate - startDate;

  // Convert the duration from milliseconds to desired units (e.g., hours, minutes)
  const hours = Math.floor(duration / (1000 * 60 * 60));
  const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((duration % (1000 * 60)) / 1000);

  // Calculate the total booking time in hours
  const totalBookingHours = hours + minutes / 60 + seconds / 3600;

  return totalBookingHours;
}
