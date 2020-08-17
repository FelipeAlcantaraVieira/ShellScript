#!/bin/bash
#read -p "digite o caminho que quer ver" FILEPATH
#FILEPATH=$1
for FILEPATH in $*
do
if [ -d "$FILEPATH" ]
then
    echo "voce indicou um diretorio" 
elif [ -f "$FILEPATH" ]
then
    echo "voce indicou um arquivo comum " 
else
    echo "voce digitou um diferente tipo de arquivo " 
fi
ls -l $FILEPATH
done