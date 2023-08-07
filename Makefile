env:
	cp .env.sample .env

h:
	npx husky install

b:
	npm run build

ts:
	npm run ts

a:
	npm run build && npm run js

or:
	open https://github.com/guimassoqueto/scrap-puppet-bestsellers