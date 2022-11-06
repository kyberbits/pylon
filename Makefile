.PHONY: full build test lint fix clean

SHELL=/bin/bash -o pipefail
$(shell git config core.hooksPath ops/git-hooks)

full: clean lint test build

## Build the project
build:

## Test the project
test:

## Lint the project
lint:

## Fix the project
fix:

## Clean the project
clean:
	git clean -Xdff --exclude="!.env*local"
