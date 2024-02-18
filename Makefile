## run lint
.PHONY: lint
lint:
	npx eslint ./src/

## Run the app
.PHONY: run
run:
	npm run dev

## npm build
.PHONY: build
build:
	npm run build
