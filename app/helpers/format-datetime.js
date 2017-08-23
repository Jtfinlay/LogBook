import Ember from 'ember';

export function formatDatetime(params/*, hash*/) {
    let milliseconds = params[0];
    let format = params[1];

    let ms = milliseconds % 1000;
    let seconds = milliseconds / 1000;
    let h = Math.floor(seconds / (3600));
    seconds = seconds % 3600;
    let m = Math.floor(seconds / 60);
    let s = Math.floor(seconds % 60);

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
