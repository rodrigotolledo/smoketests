ifdef DOTENV
	DOTENV_TARGET=dotenv
else
	DOTENV_TARGET=.env
endif

######################
# Smoke Tests       #
######################

smokeTests: $(DOTENV_TARGET) cleanSmokeTests
	docker-compose run --rm smoke-test-runner npm install
	docker-compose run --rm smoke-test-runner npm run smoke-test

shellSmokeTests:
	docker-compose run --rm smoke-test-runner /bin/bash

cleanSmokeTests:
	# docker-compose down
	rm -fr results/*.xml
	rm -fr results/*.html
	rm -fr results/screenshots/*.png
	docker-compose build --force-rm smoke-test-runner
	