#!/bin/bash
DATA=$(date +%F)
for FILE in `ls *.png`
do
    echo "your pngs now have the current date on their names"
    mv $FILE ${DATA}_${FILE}
done