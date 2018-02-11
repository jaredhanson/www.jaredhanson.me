include node_modules/make-node/main.mk

TESTS = test/*.test.js test/**/*.test.js

MOCHAFLAGS = --require ./test/bootstrap/node


pages:
	node site
