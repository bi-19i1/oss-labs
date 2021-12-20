#!/bin/bash
echo "Выберите действие:"
echo "[1] Выяснить зарегистрирован ли пользователь"
echo "[2] Выяснить работает ли пользователь"
echo "[3] Вывести список зарегистрированных пользователей с именами их домашних катологов и чиcловыми идентификаторами"
read act

if [ "$act" -eq 1 ]; then
 echo "Введите пользователя:"
 read person
 getent passwd | grep "$person"
fi

if [ "$act" -eq 2 ]; then
 echo "Введите пользователя:"
 read person
 w | grep "$person"
fi

if [ "$act" -eq 3 ]; then
 getent passwd | grep '/home' | sort -rn
fi
