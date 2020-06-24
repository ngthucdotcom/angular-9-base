APPNAME=angular-base
APPPORT=80
ARG=production
USER={user-name}
SERVER={server-address}
HUB_ADDR={hub-address}
ENV=dev
GROUP=tng

#Manual
#docker build -t {image-name} --build-arg environment=staging .
#docker push {image-name}
#docker rm -f $(docker ps -a | grep merchant-tools | awk '{print $1}')
#docker run -dt -p 80:80 {image-name}

image:
	docker build -t ${HUB_ADDR}/${APPNAME} --build-arg environment=${ARG} .
	docker push ${HUB_ADDR}/${APPNAME}
stop:
	ssh ${USER}@${SERVER} docker rm -f ${APPNAME}
deploy:
	ssh ${USER}@${SERVER} docker run --name=${APPNAME} -dt -p ${APPPORT}:80 ${HUB_ADDR}/${APPNAME}
