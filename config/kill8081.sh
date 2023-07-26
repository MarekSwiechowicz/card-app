#!/bin/bash
bundlerPID=$(lsof -i:8081 -n -P | grep node | awk 'FNR == 1 {print $2}')
if [[ $bundlerPID ]]; then
  kill -9 $bundlerPID
fi
