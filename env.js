/** InfluxDB v2 URL */
const url = process.env['INFLUX_URL'] || 'http://localhost:8086'
/** InfluxDB authorization token */
const token = process.env['INFLUX_TOKEN'] || '4TxShWmjrtV4wjLwFP3Xp44h37DH6SEhqz5KUHijrsFVRAGZhv0UZK-mwiKHRYpRM_ss99LOez3OUER2bFDbhA=='
/** Organization within InfluxDB  */
const org = process.env['INFLUX_ORG'] || 'NIT Trichy'
/**InfluxDB bucket used in examples  */
const bucket = 'youtube'
// ONLY onboarding example
/**InfluxDB user  */
const username = 'fathimamaha'
/**InfluxDB password  */
const password = 'Iqbal0505959004'

module.exports = {
  url,
  token,
  org,
  bucket,
  username,
  password,
}
