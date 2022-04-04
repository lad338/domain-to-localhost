# domain-to-localhost
A simple example of using nginx (with docker) to route a customized domain to a port in localhost. 

The idea of this repo is to provide the simplest workable solution.

## Pre-requisite

1. Docker installed
2. Have access to modify `/etc/hosts` 

## Usage

1. Find your local IP and replace `$LOCAL_IP` in `docker-compose.yml_template` and save as `docker-compose.yml`
   1. For Mac, you may get the IP by `ifconfig | grep "inet " | grep -Fv 127.0.0.1 | awk '{print $2}'`

2. Update `$MY_DOMAIN_NAME` and `$APP_PORT` in `nginx.conf_template` and save as `nginx.conf`

3. Modify `/etc/hosts` and add a line `127.0.0.1 $MY_DOMAIN_NAME` 
   1. May require to change permission of `/etc/hosts`
   2. e.g. `echo "127.0.0.1 my.domain.name" >> /etc/hosts`

4. Start nginx by `docker-compose up`

5. You should arrive at your application by accessing `$MY_DOMAIN_NAME`
