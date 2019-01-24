const request = require('request')

module.exports = {
  sendLastWeekCompleteReport(emailTable) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'post',
        body: emailTable,
        json: true,
        url: process.env.ZAPIER_LAST_WEEK_REPORT_ENDPOINT
      }

      request(options, function(err, response, body) {
        console.log(options)
        if (err) { console.log(err); return reject(err); }
        return resolve(body)
      })
    })
  }
}
