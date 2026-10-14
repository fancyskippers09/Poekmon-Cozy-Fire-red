# Pokémon FireRed — Cozy Edition 🍃🔥

A charming, retro-inspired browser RPG crafted with pixel-perfect aesthetics, warm lo-fi ambience, and rich slice-of-life mechanics. 

---

## 🗺️ Regional Town Map (Character Pinpoint Beacon)
- **Instant Hotkey (`M` / Touch Button)**: Open the vintage parchment Kanto Town Map from anywhere in the overworld or options menu.
- **Real-Time GPS Beacon**: Displays a pulsing golden beacon with Red's character icon and a flashing `★ YOU ARE HERE ★` marker pinpointing your exact town or route, including interior maps (`Red's House`, `Daycare`, `Bill's Cottage`, `S.S. Anne`).
- **Interactive Landmark Directory**: Browse through towns, cities, mountain caves, ports, and gym landmarks with arrow keys or WASD to inspect detailed lore descriptions and exact grid coordinates `(x, y)`.

---

## 🌟 Cozy Expansion Features

### 1. 🐣 Route 5 Pokémon Daycare & Mystery Egg Hatching
- **Country Nursery**: Located south of Cerulean City.
- **Grandma**: Accepts Pokémon for safe deposit and passive EXP gains as you walk steps.
- **Grandpa & Meadow Eggs**: After walking steps, Grandpa discovers a warm Mystery Egg!
- **Egg Incubation**: Carry your egg while exploring. Party Fire Pokémon (cozy body heat) and hot Berry Tea double the incubation speed!
- **Egg Hatching Scene**: Features cracking animations, sparkling fanfare, and automatic nicknaming upon birth.

### 2. 🍓 Loamy Soil Gardening & Berry Cultivation
- **Fertile Loam Patches**: Plant wild Berry seeds in rich tilled soil patches across Pallet Town, Viridian City, Pewter City, and Cerulean City.
- **Real-Time Growth Cycles**: Watch your seeds sprout, flower into pink blossoms, and ripen into heavy fruit bushes.
- **Bountiful Harvests**: Yields 3–5 fresh Oran Berries for your Bag, cooking, or partner care.

### 3. 🎣 Interactive Fishing Reel Mini-Game & Good Rod
- **Fishing Waters**: Cast your line into rivers and ocean shores with the Old Rod or the new **Good Rod** (earned from Ned in Cerulean City after winning the Cascade Badge).
- **Reaction Bite Window**: Watch the bobber ripple with water waves. Hook immediately when `! BITE !` flashes to land high-level water Pokémon like Gyarados, Shellder, Staryu, and Poliwag!

### 4. 🏷️ Pokémon Nicknaming Screen
- **Name Rater & Catch Prompts**: Give unique names to newly captured wild Pokémon, freshly hatched baby eggs, or visit the Name Rater in Cerulean City.
- **Retro On-Screen Keyboard**: Full D-pad/WASD cursor navigation, space, backspace, and direct physical keyboard typing with 10-character limits.

### 5. 🪕 Campfire Move Relearner
- **Reminisce Forgotten Moves**: Gather around the campsite fire to relearn any moves your Pokémon has previously unlocked from its species leveling chart.

### 6. 📻 Cozy Gramophone Chiptune Jukebox
- **Spinning Vinyl Disc**: Play 8 handcrafted chiptune melodies and ambient soundscapes anytime at camp or in your room:
  - *Pallet Town (Gentle Breeze)*
  - *Route 1 (Green Trail)*
  - *Viridian Forest (Deep Woods)*
  - *Pewter City (Sturdy Stone)*
  - *Cerulean City (Water Ripples)*
  - *Trainer Battle (Cozy Clash)*
  - *Rainy Melancholy (Soft Droplets)*
  - *Campfire Embers (Warm Crackle)*

### 7. 🪪 Official Trainer Card & 5 Rosette Achievement Ribbons
- **Trainer Profile**: Displays your unique 5-digit Trainer IDNo, Red's seasonal portrait, real-time `HH:MM:SS` playtime clock, and money.
- **Gym Badges Case**: Showcases the Boulder Badge, Cascade Badge, and Thunder Badge.
- **5 Achievement Ribbons**:
  - 🍳 *Master Cook Ribbon* — Brewed herbal teas & simmered hearty stews.
  - 💖 *Gentle Soul Ribbon* — Pet, groomed, and fed berries to your partner.
  - 🎣 *Master Angler Ribbon* — Hooked wild water Pokémon on the line.
  - ⭐ *Starlight Ribbon* — Encountered rare shiny sparkles.
  - 🐣 *Egg Whisperer Ribbon* — Raised and hatched a baby Pokémon egg.

### 8. ⚔️ Signature Combat Move Animations & Particles
- Dynamic animated projectile streams for Fire, Water, Grass, Electric, and Psychic moves:
  - **Fire moves**: Arcing fireball barrages and flame trails.
  - **Water moves**: High-velocity azure water jet streams and bubble spray.
  - **Grass moves**: Emerald swirling leaf vortexes.
  - **Electric moves**: Jagged lightning bolt arcs with sparking flashes.
  - **Physical/Normal moves**: Kinetic claw slash impacts with gravity particles.

---

## 🎮 Controls

| Action | Keyboard | Touch Controls |
| :--- | :--- | :--- |
| **Move** | Arrow Keys / `W`, `A`, `S`, `D` | D-Pad Buttons |
| **Run** | Hold `X` or `B` + Direction | Touch D-Pad |
| **Interact / Confirm** | `Z` / `Enter` / `Space` | **A** Button |
| **Cancel / Back / Run** | `X` / `Escape` | **B** Button |
| **Start / Options Menu** | `P` | **OPT (P)** Button |
| **Regional Town Map** | `M` | **MAP (M)** Button |
| **Bicycle (Mount/Bell)** | `B` (Bell: `Space` while biking) | **BIKE (B)** Button |
| **PC Storage Box** | `C` | **PC (C)** Button |
| **Mute / Audio Toggle**| `U` | In Settings Menu |
| **Season Override** | `N` | **SEASON (N)** Button |
| **Photo Snap** | `F` | **PHOTO (F)** Button |

---

## 🚀 Running the Game
Simply open `index.html` in any modern web browser or serve locally with any static web server:
```bash
npx serve .
```

---

## 🧪 Testing & Verification
A complete automated unit testing suite verifies all mechanics headlessly with Node.js:
```bash
node scratch/test_cozy_features.js
```
*(All 16 test suites pass with 100% coverage, backwards compatibility, and integer sprite pixel clarity).*
