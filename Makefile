install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

estart:
	npx babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npx eslint .
