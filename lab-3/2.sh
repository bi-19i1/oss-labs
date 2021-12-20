#!/bin/bash
echo "Выберите действие: "
echo "[1] Создание отчёта об именах файлов, их инодов, правах, размерах и времени последнего доступа"
echo "[2] Открыть полные права для всех пользователей"
echo "[3] Создание жесткой ссылки на файл отчёта в домашнем каталоге пользователя и символьной на рабочем столе"
read act
if [ "$act" -eq 1 ]; then
 echo "Путь: "
 read way
 ls -li "$way" | sort -n | tee -a report
fi
if [ "$act" -eq 2 ]; then
 chmod ugo+rwx report
fi
if [ "$act" -eq 3 ]; then
 ln report $HOME/report-link
 ln -s report $HOME/Desktop/borisov-link
fi
