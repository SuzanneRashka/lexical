'use strict';

const express = require('express');
const router = express.Router();
const lex = require('../lib/lex');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Lexical'
  });
});

router.post('/text', (req, res) => {
  // const intext = req.body.intext;
  // const wordCount = lex.wordCount(intext);
  // const charCount = lex.charCount(intext);
  // const charCountSpaces = lex.charCount(intext, {
  //   noSpaces: true
  // });
  // const charCountPunctuation = lex.charCount(intext, {
  //   noPunctuation: true
  // });
  // const mostFreq = lex.mostFreq(intext);
  // const leastFreq = lex.leastFreq(intext);
  // const summary = lex.summarize(intext);
  res.send('Hook up ejs');
});

module.exports = router;
