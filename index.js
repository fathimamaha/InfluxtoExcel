var influxdb_client_1 = require("@influxdata/influxdb-client");
var env_1 = require("./env");
var express=require("express");
const app=express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('/download', function (req, res,next) {
  res.render('index');
}),

app.post('/success', function (req, res) {

  var queryApi = new influxdb_client_1.InfluxDB({ url: env_1.url, token: env_1.token }).getQueryApi(env_1.org);
  var fluxQuery = JSON.stringify(req.body.query);
  fluxQuery = fluxQuery.replace(/\\/g,'');
  fluxQuery = fluxQuery.substring(1, fluxQuery.length-1);

  const Excel = require('exceljs')
  let workbook = new Excel.Workbook()

  let worksheet = workbook.addWorksheet('sheet')

  let data=[];
  queryApi.queryRows(fluxQuery, {
    next(row, tableMeta) {
      const o = tableMeta.toObject(row)
      var keys = Object.keys(o);
      var values=Object.values(o);
      var i;
      var ite=0;
      var column=[];
      if(ite==0){
      for (i = 0; i < keys.length; i++) {

  column.push({ header: keys[i], key: i });
}
worksheet.columns=column;
worksheet.getRow(1).font = { bold: true };
worksheet.views = [
    { state: 'frozen', xSplit: 0, ySplit: 1, activeCell: 'B2' }
];
};
      ite=1;
      const obj={};
      for (i = 0; i < keys.length; i++) {
          obj[i]=values[i];
      }
      data.push(obj);
    },
    error(error) {
      console.error(error)
      console.log('\nFinished ERROR')
    },
    complete() {

      worksheet.addRows(data);
      res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=' + `Exceldownload.xlsx`
    );
    return workbook.xlsx.write(res).then(function (result) {
          console.log('excel downloaded successfully');
          res.status(200).end();
        });
    },
  })
})

app.listen(4000);
