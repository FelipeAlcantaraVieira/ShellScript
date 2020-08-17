#!/bin/bash
DATA=$(date +%F)
for FILE in `ls -l *.png`
do
    echo "your png are now  ${DATA}_${FILE}"
    mv $FILE ${DATA}_${FILE}
done