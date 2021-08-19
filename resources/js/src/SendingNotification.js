import Axios from 'axios';
const schedule = require('node-schedule')

export default schedule.scheduleJob('0 0 0 * * 0-6', function () {
        console.log("sent notification")
        Axios.get(`/api/send-notification`)
});