#!/bin/bash

while true
do

    OUTPUT="$(ssh bots "bash -s" < ./monitor.sh && exit)"
    echo "${OUTPUT}" > ../text/serverStats.txt
    sleep 5

done