function to24hourtime(hour, minute, period) {
    let hour24 = hour;

    if (period === "pm" && hour !== 12) {
        hour24 += 12;
    } else if (period === "am" && hour === 12) {
        hour24 = 0;
    }

    const hourString = hour24 < 10 ? `0${hour24}` : hour24.toString();
    const minuteString = minute < 10 ? `0${minute}` : minute.toString();

    return `${hourString}${minuteString}`;
}
