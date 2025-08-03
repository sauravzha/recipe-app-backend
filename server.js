// Simplified server.js for debugging

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Allow all connections for this test
app.use(cors());
app.use(express.json());

// The simplified recipe generation route
app.post('/generate-recipe', async (req, res) => {
  console.log("--- '/generate-recipe' endpoint was hit successfully! ---");

  try {
    // Immediately send back a hardcoded dummy recipe.
    // This completely bypasses the Google AI call.
    const dummyRecipe = {
      recipe: {
        title: "Test Recipe",
        description: "This is a test to confirm the server connection works.",
        prepTime: "5 mins",
        cookTime: "10 mins",
        servings: "2",
        ingredients: ["1 cup of success", "2 tbsp of debugging"],
        instructions: ["Step 1: Confirm this recipe appears.", "Step 2: The problem is with the Google API Key or setup."]
      },
      imageUrl: "https://placehold.co/600x400/f8b400/333333?text=Success!"
    };

    console.log("--- Sending dummy recipe back to the frontend. ---");
    res.json(dummyRecipe);

  } catch (error) {
    console.error('ERROR in simplified test route:', error);
    res.status(500).json({ error: "The simplified server test failed." });
  }
});

app.listen(PORT, () => {
  console.log(`Simplified backend server running on http://localhost:${PORT}`);
});
