include node_modules/make-node/main.mk

TESTS = test/*.test.js test/**/*.test.js

MOCHAFLAGS = --require ./test/bootstrap/node

BIN ?= ./node_modules/.bin

SASS ?= $(BIN)/node-sass

css:
	$(SASS) --include-path node_modules web/styles/main.scss www/assets/styles/all.css

pages:
	node site

deploy:
	gcloud app


# https://cloud.google.com/appengine/docs/standard/nodejs/writing-and-responding-to-pub-sub-messages
# gcloud beta pubsub topics create test-linkback
# gcloud beta pubsub subscriptions create test-sub-linkback \
#    --topic test-linkback \
#    --push-endpoint \
#    https://jaredhanson-me.appspot.com/pubsub/push?token=s3cr1t

# gcloud pubsub subscriptions create my-sub-linkback --topic test-linkback
