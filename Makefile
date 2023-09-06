.PHONY: setup
setup:
ifeq (,$(wildcard .env))
	@cp .env.example .env
	@echo "using .env.example"
endif
	@echo "using .env"

prettier:
	npx prettier . --write

test:
	@make setup
	npx playwright test

test-ui:
	@make setup
	npx playwright test --ui