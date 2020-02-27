#!/bin/bash
API_DIR=/api

apt-get update
npm install pm2@latest -g

cd $API_DIR
chmod +x start.sh
npm install sequelize-cli
npm install
