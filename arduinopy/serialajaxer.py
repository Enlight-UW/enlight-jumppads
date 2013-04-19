import serial
import urllib
import urllib2
from time import sleep

# alex's first python program please work
# look ma, no curly braces

def ajaxit(valveset):
    url = "http://ACTUALADDRESSHERE/enlight-webfront/php/act.php"
    values = {'request': 'toggleValveState',
             'STATE': valveset }

    data = urllib.urlencode(values)
    req = urllib2.Request(url, data)
    response = urllib2.urlopen(req)
    print response.read()

ser = serial.Serial('COM3', 9600)
while 1:
    newvalves = ser.readline()
    print newvalves
    valveTrigger = 0
    if newvalves[:1] == '1':
        valveTrigger+=3
    if newvalves[1:2] == '1':
        valveTrigger+=12
    if newvalves[2:3] == '1':
        valveTrigger+=48
    if newvalves[3:4] == '1':
        valveTrigger+=192
    if newvalves[4:5] == '1':
        valveTrigger+=786432
    if newvalves[5:6] == '1':
        valveTrigger+=12288
    if newvalves[6:7] == '1':
        valveTrigger+=49152
    if newvalves[7:8] == '1':
        valveTrigger+=196608
    if valveTrigger != 0 :   
        ajaxit(valveTrigger);
    sleep(0.25);
