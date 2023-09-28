//your JS code here. If required.
function updateDateTime() {
            const datetimeElement = document.getElementById("timer");
            const now = new Date();
            const formattedDateTime = now.toLocaleDateString() + ", " + now.toLocaleTimeString();

            // Display the formatted date and time in the "datetime" element
            datetimeElement.textContent = formattedDateTime;
        }

        // Update the date and time every second
        setInterval(updateDateTime, 1000);

        // Initial call to updateDateTime to display the current date and time immediately
        updateDateTime();