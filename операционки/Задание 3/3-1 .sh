#!/bin/bash
echo "Выберите действие"
echo "1 создание отчёта о количестве доступных файловых систем, их свободном и занятом пространстве"
echo "2 вывод информации об имени и размере файла отчёта, правах не него"
read act
if [ "$act" -eq 1 ]; then
 df -h | tee -a otch
fi
if [ "$act" -eq 2 ]; then
 echo otch
 ls -g otch
fi
