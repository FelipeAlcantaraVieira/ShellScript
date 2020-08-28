#!/bin/bash
read -p "digite o caminho do arquivo ou diretorio que deseja listar " FILEPATH
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
