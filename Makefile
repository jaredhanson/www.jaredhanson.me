all: site css

css:
	npx tailwindcss -i ./src/input.css -o ./_site/assets/styles/screen.css

site:
	node site.js
