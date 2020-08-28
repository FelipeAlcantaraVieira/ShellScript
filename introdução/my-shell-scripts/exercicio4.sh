#!/bin/bash
read -p "insira o caminho do arquivo " FILEPATH
if [ -e $FILEPATH ]
then
    echo "O caminho $FILEPATH está habilitado "
fi 
if [ -w $FILEPATH ]
then
    echo "Você tem permissão para editar $FILEPATH "
else
    echo "Você não tem permissão para editar $FILEPATH "
fi 