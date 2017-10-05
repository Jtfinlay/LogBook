import Ember from 'ember';

export function formatDatetime(params/*, hash*/) {
    let milliseconds = params[0];
    let format = params[1];

    let date = new Date(milliseconds);

    let ms = date.getUTCMilliseconds();
    let s = date.getUTCSeconds();
    let m = date.getUTCMinutes();
    let h = date.getUTCHours();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    ms = ms < 10 ? "0" + ms : ms;
    ms = ms < 100 ? "0" + ms : ms;

    if (format === "MM:SS") {
        return m + ":" + s;
    } else if (format === "MM:SS.sss") {
        return m + ":" + s + "." + ms;
    } else if (format === "HH:MM:SS") {
        return h + ":" + m + ":" + s;
    } else if (format === "HH:MM:SS.sss") {
        return h + ":" + m + ":" + s + "." + ms;
    } 
}

export default Ember.Helper.helper(formatDatetime);
