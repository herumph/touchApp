#!/bin/sh

while true
do

    OUTPUT="$(bash monitor.sh)"
    echo "${OUTPUT}" > ../text/piStats.txt 
    sleep 5

done