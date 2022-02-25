#!/bin/bash
cd /home/ec2-user/inventory-ant/src
npm start
pm2 start npm --name "inventory-ant" -- start
pm2 startup
pm2 save
pm2 restart all