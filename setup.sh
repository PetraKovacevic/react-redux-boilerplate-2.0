#!/bin/bash
if [ ! -d "static" ]; then
	mkdir static
	echo 'static created'
else
	echo 'static exists'
fi
if [ ! -d "static/fonts" ]; then
	mkdir static/fonts
	echo 'static/fonts created'
else
	echo 'static/fonts exists'

fi

if [ ! -d "static/less" ]; then
	mkdir static/less
	echo 'static/less created'
else
	echo 'static/less exists'
fi
if [ ! -d "static/img" ]; then
	mkdir static/img
	echo 'static/img created'
else
	echo 'static/img exists'
fi

if [ ! -f "static/less/style.less" ]; then
	touch static/less/style.less
	echo 'empty static/less/style.less created'
else
	echo 'static/less/style.less exists'
fi

if ! find "static/img" -mindepth 1 -print -quit | grep -q .; then
	touch static/img/image.jpg
	echo 'place holder static/img/image.jpg created'
else
	echo 'images folder is not empty'

fi 