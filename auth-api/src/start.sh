#!/bin/bash

cd /api
pm2-runtime start ./bin/www --name auth-api --watch
