# tag-docs-poc

A repo which has a dedicated app to test its exposed library (i.e. ng-select) will have multiple versions. To keep the docs as close to the repo as possible it would be very nice to host it on github pages. To be able to support multiple versions via github pages the app needs to be compiled for each version, and the static files have to be kept in the repo on the master branch. A skeleton to select a version has to be provided (load specific version in iframe).

# How to prove the idea

`yarn && yarn serve`

## Todo

- [ ] create cli to:
  - [ ] scaffold skeleton index.html and docs folder (create) **Must have**
  - [ ] add a version (add) **Must have**
  - [ ] remove a version (remove) _Nice to have_
- [ ] make styling more fancy
  - [ ] select
  - [ ] navbar
- [ ] check/improve browser support
- [ ] support for 'latest' version option
- [ ] support for mobile (don't use sticky?)

## Process for a repo owner

Once:

- install the cli tool as dev dependency
- scaffold docs page

For each release:

- compile testing app
- add testing/docs app output versions to docs via cli
- commit and push tag
- publish new release to npm
