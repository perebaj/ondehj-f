## run lint
.PHONY: lint
lint:
	npx eslint ./src/

## Install dependencies
.PHONY: install
install:
	npm install

## Run the app
.PHONY: run
run:
	npm run dev

## npm build
.PHONY: build
build:
	npm run build
