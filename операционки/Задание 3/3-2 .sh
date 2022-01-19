#!/bin/bash
echo "Выберите действие"
echo "1 создание отчёта об именах файлов, их инодов, правах, размерах и времени последнего доступа"
echo "2 открыть полные права для всех пользователей"
echo "3 создание жесткой ссылки на файл отчёта в домашнем каталоге пользователя и символьной на рабочем столе"
read act
if [ "$act" -eq 1 ]; then
 echo "Выберите путь"
 read way
 ls -li "$way" | sort -n | tee -a otch2
fi
if [ "$act" -eq 2 ]; then
 chmod ugo+rwx otch2
fi
if [ "$act" -eq 3 ]; then
 ln -s otch2 simv
 ln otch2 Kanaev/jest
fi
