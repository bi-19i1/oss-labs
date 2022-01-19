#!/bin/bash
echo "Выберите действие"
echo "1 выяснить зарегистрирован ли такой пользователь"
echo "2 выяснить работает ли в текущий момент пользователь"
echo "3 вывести список зарегистрированных пользователей с именами их домашних катологов и чиcловыми идентификаторами"
read act
if [ "$act" -eq 1 ]; then
 echo "Введите пользователя"
 read person
 getent passwd | grep "$person"
fi
if [ "$act" -eq 2 ]; then
 echo "Введите пользователя"
 read person
 w | grep "$person"
fi
if [ "$act" -eq 3 ]; then
 getent passwd | grep '/home' | sort -rn
fi
