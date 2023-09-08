all: site css

css:
	npx tailwindcss -i ./src/input.css -o ./public/assets/styles/screen.css

site:
	node site.js
