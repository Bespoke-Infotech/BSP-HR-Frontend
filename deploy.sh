PROJECT_DIR=$PROJECT_DIR
SERVER_USER=$SERVER_USER
DEPLOY_SERVER=$DEPLOY_SERVER
pwd

# Building React output
npm --force install
npm run build

echo "Starting Deploying to ${DEPLOY_SERVER}"


echo "Removing old files from project dir"
ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${DEPLOY_SERVER} "pwd; rm -rf ${PROJECT_DIR}/*"
echo "Copying files to project dir"
#scp -p22 -r * ${SERVER_USER}@${DEPLOY_SERVER}:${PROJECT_DIR}
rsync -ar build/* ${SERVER_USER}@${DEPLOY_SERVER}:${PROJECT_DIR}
echo "Building and Starting App"
ssh -o StrictHostKeyChecking=no ${SERVER_USER}@${DEPLOY_SERVER} "cd ${PROJECT_DIR}; ls -la;"

#echo "App started successfully"



# Building React output
#npm install
#npm run build

#echo "Deploying to ${DEPLOY_SERVER}"
#scp -r build/* ubuntu@${DEPLOY_SERVER}:${PROJECT_DIR}

echo "Finished copying the build files to project dir"
