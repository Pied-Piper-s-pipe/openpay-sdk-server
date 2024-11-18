#!/bin/bash
git tag $1
git push --all
git push --tag
git push github
git push github --tag