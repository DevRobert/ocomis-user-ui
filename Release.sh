docker login -u$DOCKER_USER -p$DOCKER_PASSWORD
( "./Build.sh" )
docker push blutner/ocomis-user-ui:latest
docker logout
