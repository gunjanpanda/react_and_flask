#!/bin/bash

# Start Flask
cd /app/backend
python3 app.py &

# Start React
cd /app/frontend
npm start