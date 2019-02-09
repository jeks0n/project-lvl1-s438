install:
	npm install

start:
	npx babel-node -- src/bin/brain-games.js

evenstart:
	npx babel-node -- src/bin/brain-even.js

calcstart:
	npx babel-node -- src/bin/brain-calc.js

gcdstart:
	npx babel-node -- src/bin/brain-gcd.js

publish:
	npm publish

lint:
	npx eslint .
