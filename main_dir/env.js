/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'https://us-east-1-1.aws.cloud2.influxdata.com'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || 'VLOnAImzwXz1PJbGTjObluBCowSdICubxeUmB8n0pJ9Ir2Olfokr4jzwoictIcaV1oMDM67OT3XRE6zJwN7V8w=='
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || 'fathima.nitt@gmail.com'
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


