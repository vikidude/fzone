export const checkDayDiff = (date) => {
    const dateGiven = new Date(date);
    const today = new Date((new Date().getMonth() + 1) + '/' + (new Date().getDate()) + '/' + (new Date().getFullYear()));
    const diffTime = Math.abs(today - dateGiven);
    const diffDays1 = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays1
}