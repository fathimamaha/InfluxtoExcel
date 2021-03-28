/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || '<url>'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || '<token>'
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || '<organisation>'
/**InfluxDB bucket used in examples  */
const bucket = '<bucket name'
// ONLY onboarding example
/**InfluxDB user  */
const username = '<username>'
/**InfluxDB password  */
const password = '<password>'

module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password,
}
