#!/bin/bash
echo "Enter the action:"
echo "[1] Create report"
echo "[2] Info about report"
read act
if [ "$act" -eq 1 ]; then
 df -h | tee -a report
fi
if [ "$act" -eq 2 ]; then
 echo report
 ls -g report 
fi
