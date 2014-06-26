#! /usr/bin/env node

var fs=require('fs');
var Speaker=require('speaker');
var Lame=require('lame');
var audioFormate = {channels: 2, bitDepth: 16, sampleRate: 44100};
var speaker=new Speaker(audioFormate);
var decoder = new Lame.Decoder();
var path=process.argv[1]||"/home/sandeepchhapola/Desktop/01-Back2Love-RabJaane.mp3";
fs.createReadStream(path).pipe(decoder).pipe(speaker);
