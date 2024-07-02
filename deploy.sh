BUILD_DIR=$BUILD_DIR
AWS_SSH_USER=$AWS_SSH_USER
AWS_SSH_HOST=$AWS_SSH_HOST
pwd

# Building React output
npm --force install
npm run build

echo "Starting Deploying to ${AWS_SSH_HOST}"


echo "Removing old files from project dir"
ssh -o StrictHostKeyChecking=no ${AWS_SSH_USER}@${AWS_SSH_HOST} "pwd; rm -rf ${BUILD_DIR}/*"
echo "Copying files to project dir"
#scp -p22 -r * ${SERVER_USER}@${DEPLOY_SERVER}:${PROJECT_DIR}
rsync -ar build/* ${AWS_SSH_USER}@${AWS_SSH_HOST}:${BUILD_DIR}
echo "Building and Starting App"
ssh -o StrictHostKeyChecking=no ${AWS_SSH_USER}@${AWS_SSH_HOST} "cd ${BUILD_DIR}; ls -la;"

echo "App started successfully"



# Building React output
#npm install
#npm run build

#echo "Deploying to ${DEPLOY_SERVER}"
#scp -r build/* ubuntu@${DEPLOY_SERVER}:${PROJECT_DIR}

echo "Finished copying the build files to project dir"
