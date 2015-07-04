cd /tmp

# try to remove the repo if it already exists
rm -rf https://github.com/tsyork/gcvdata_v5; true

git clone https://github.com/tsyork/gcvdata_v5

cd gcvdata_v5

npm install

gulp build

node .