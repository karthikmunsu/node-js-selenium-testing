require('geckodriver');
require('chromedriver');
var express = require('express');

var app = express();


app.get('/',function(req,res){
res.status(200).send('working fine..');
res.end();
})

app.get('/test',function(req,res){
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://demo.mahara.org');
driver.findElement(By.id('login_login_username')).sendKeys('student1');
driver.findElement(By.id('login_login_password')).sendKeys('Testing1');
driver.findElement(By.id('login_submit')).click();

driver.findElement(By.linkText('Settings')).then(function(element) {
  console.log('Yes, found the element');
res.status(200).send('yes, found the element');
}, function(error) {
  console.log('The element was not found, as expected');
res.status(200).send('The element was not found, as expected');
});
driver.quit();
})


app.listen(3000,function(){
console.log('localhost runing at 3000');
})


