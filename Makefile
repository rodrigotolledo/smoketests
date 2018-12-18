ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif

######################
# System Tests       #
######################

systemTests: $(DOTENV_TARGET) cleanSystemTests
	docker-compose run --rm system-test-runner npm install
	docker-compose run --rm system-test-runner npm run system-test

shellSystemTests:
	docker-compose run --rm system-test-runner /bin/bash

cleanSystemTests:
	# docker-compose down
	rm -fr results/*.xml
	rm -fr results/*.html
	rm -fr results/screenshots/*.png
	docker-compose build --force-rm system-test-runner
	