from flask import Flask, render_template, jsonify, url_for, request
import serial
from sense_hat import SenseHat

app = Flask(__name__)
sense = SenseHat()

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/bash')
def executeBash():
    #opening text files that are outputs from bash because it's easier
    #and the output is nicer
    stats = {}

    #server
    file = url_for('static', filename='text/serverStats.txt')
    with open('./'+file,"r") as f:
        stdout = f.readlines()
    stdout = [x.strip("\n") for x in stdout]
    stats['serv_memory'] = stdout[0]
    stats['serv_disk'] = stdout[1]
    stats['serv_cpu'] = stdout[2]

    #pi
    file = url_for('static', filename='text/piStats.txt')
    with open('./'+file,"r") as f:
        stdout = f.readlines()
    stdout = [x.strip("\n") for x in stdout]
    stats['pi_memory'] = stdout[0]
    stats['pi_disk'] = stdout[1]
    stats['pi_cpu'] = stdout[2]

    return jsonify(stats)

#Turning lights on and off
@app.route('/turnLights')
def turnLights():
    #connecting to the arduino
    arduino = serial.Serial('/dev/ttyACM0',9600)

    #checking status of the lights
    arduino.write('2'.encode())
    pin = arduino.read()
    print(pin)

    #turning on
    if(pin.decode() == '\x00' or pin.decode() == '0'):
        arduino.write('1'.encode())
    #turning off
    else:
        arduino.write('0'.encode())

    return pin

@app.route('/colorLights', methods=['GET','POST'])
def colorLights():
    #getting variables from js
    value = request.args.get('val', 0, type=int)
    color = request.args.get('color', 0, type=str)
    
    arduino = serial.Serial('/dev/ttyACM0',9600)
    arduino.write((color+str(value)).encode())

    return value

@app.route('/room')
def roomStats():
    stats = {}

    #temp
    temp = sense.get_temperature()
    temp2 = sense.get_temperature_from_pressure()
    temp = (temp+temp2)/2.0
    
    #humidity and pressure
    hum = sense.get_humidity()
    press = sense.get_pressure()

    #writing out
    stats['temp'] = temp
    stats['hum'] = hum
    stats['press'] = press
    
    return jsonify(stats)
