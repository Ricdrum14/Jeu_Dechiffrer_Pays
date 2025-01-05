const express = require('express');
const router = express.Router();
const anagrammes = require('../data/anagrammes.json').anagrammes;

// Route pour récupérer un anagramme aléatoire
router.get('/anagrammes', (req, res) => {
  const randomIndex = Math.floor(Math.random() * anagrammes.length);
  res.json(anagrammes[randomIndex]);
});

// Route pour valider une réponse
router.post('/validate', (req, res) => {
    const { solution } = req.body;
  
    // Vérifie si la réponse est fournie
    if (!solution) {
      return res.status(400).json({ error: "La réponse est requise." });
    }
  
    // Recherche dans les anagrammes
    const correct = anagrammes.find(a => a.solution.toLowerCase() === solution.toLowerCase());
  
    if (correct) {
      res.json({ correct: true, solution: correct.solution });
    } else {
      res.json({ correct: false });
    }
  });
  

module.exports = router;
