function openOrSenior(data) {
    let result = [];
    for (let nums of data) {
        if (nums[0] >= 55 && nums[1] > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }

    return result;
}
