@echo off
TASKLIST 
@echo "Enter the PID:"
set /p a=
taskkill /pid %a% /f
