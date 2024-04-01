#!/bin/bash

NAME="server.js" # nodejs script's name here
RUN=`pgrep -f $NAME`

if [ "$RUN" == "" ]; then
  nodemon server.js
else
  echo "Script is running"
fi