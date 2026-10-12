// =============================================================================
// 1. SPRITE ASSET PRELOADER (GEN 3) WITH BROCK'S TEAM
// =============================================================================
const SPRITE_BASE = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/";
const SPRITE_URLS = {
  // Charmander line
  charmander_front: SPRITE_BASE + "4.png",
  charmander_back: SPRITE_BASE + "back/4.png",
  charmeleon_front: SPRITE_BASE + "5.png",
  charmeleon_back: SPRITE_BASE + "back/5.png",
  charizard_front: SPRITE_BASE + "6.png",
  charizard_back: SPRITE_BASE + "back/6.png",

  // Bulbasaur line
  bulbasaur_front: SPRITE_BASE + "1.png",
  bulbasaur_back: SPRITE_BASE + "back/1.png",
  ivysaur_front: SPRITE_BASE + "2.png",
  ivysaur_back: SPRITE_BASE + "back/2.png",
  venusaur_front: SPRITE_BASE + "3.png",
  venusaur_back: SPRITE_BASE + "back/3.png",

  // Squirtle line
  squirtle_front: SPRITE_BASE + "7.png",
  squirtle_back: SPRITE_BASE + "back/7.png",
  wartortle_front: SPRITE_BASE + "8.png",
  wartortle_back: SPRITE_BASE + "back/8.png",
  blastoise_front: SPRITE_BASE + "9.png",
  blastoise_back: SPRITE_BASE + "back/9.png",

  // Pidgey line
  pidgey_front: SPRITE_BASE + "16.png",
  pidgey_back: SPRITE_BASE + "back/16.png",
  pidgeotto_front: SPRITE_BASE + "17.png",
  pidgeotto_back: SPRITE_BASE + "back/17.png",
  pidgeot_front: SPRITE_BASE + "18.png",
  pidgeot_back: SPRITE_BASE + "back/18.png",

  // Rattata line
  rattata_front: SPRITE_BASE + "19.png",
  rattata_back: SPRITE_BASE + "back/19.png",
  raticate_front: SPRITE_BASE + "20.png",
  raticate_back: SPRITE_BASE + "back/20.png",

  // Pikachu line
  pikachu_front: SPRITE_BASE + "25.png",
  pikachu_back: SPRITE_BASE + "back/25.png",
  raichu_front: SPRITE_BASE + "26.png",
  raichu_back: SPRITE_BASE + "back/26.png",

  // Caterpie line
  caterpie_front: SPRITE_BASE + "10.png",
  caterpie_back: SPRITE_BASE + "back/10.png",
  metapod_front: SPRITE_BASE + "11.png",
  metapod_back: SPRITE_BASE + "back/11.png",
  butterfree_front: SPRITE_BASE + "12.png",
  butterfree_back: SPRITE_BASE + "back/12.png",

  // Oddish line
  oddish_front: SPRITE_BASE + "43.png",
  oddish_back: SPRITE_BASE + "back/43.png",
  gloom_front: SPRITE_BASE + "44.png",
  gloom_back: SPRITE_BASE + "back/44.png",
  vileplume_front: SPRITE_BASE + "45.png",
  vileplume_back: SPRITE_BASE + "back/45.png",

  // Brock's Rock Pokémon
  spearow_front: SPRITE_BASE + "21.png",
  spearow_back: SPRITE_BASE + "back/21.png",
  clefairy_front: SPRITE_BASE + "35.png",
  clefairy_back: SPRITE_BASE + "back/35.png",
  zubat_front: SPRITE_BASE + "41.png",
  zubat_back: SPRITE_BASE + "back/41.png",
  golbat_front: SPRITE_BASE + "42.png",
  golbat_back: SPRITE_BASE + "back/42.png",
  geodude_front: SPRITE_BASE + "74.png",
  geodude_back: SPRITE_BASE + "back/74.png",
  onix_front: SPRITE_BASE + "95.png",
  onix_back: SPRITE_BASE + "back/95.png",

  // Cerulean & Evolution expansions
  clefable_front: SPRITE_BASE + "36.png",
  clefable_back: SPRITE_BASE + "back/36.png",
  staryu_front: SPRITE_BASE + "120.png",
  staryu_back: SPRITE_BASE + "back/120.png",
  starmie_front: SPRITE_BASE + "121.png",
  starmie_back: SPRITE_BASE + "back/121.png",

  // Expansion Pokémon: Fishing, Vermilion, Eeveelutions
  poliwag_front: SPRITE_BASE + "60.png",
  poliwag_back: SPRITE_BASE + "back/60.png",
  shellder_front: SPRITE_BASE + "90.png",
  shellder_back: SPRITE_BASE + "back/90.png",
  voltorb_front: SPRITE_BASE + "100.png",
  voltorb_back: SPRITE_BASE + "back/100.png",
  magikarp_front: SPRITE_BASE + "129.png",
  magikarp_back: SPRITE_BASE + "back/129.png",
  gyarados_front: SPRITE_BASE + "130.png",
  gyarados_back: SPRITE_BASE + "back/130.png",
  eevee_front: SPRITE_BASE + "133.png",
  eevee_back: SPRITE_BASE + "back/133.png",
  vaporeon_front: SPRITE_BASE + "134.png",
  vaporeon_back: SPRITE_BASE + "back/134.png",
  jolteon_front: SPRITE_BASE + "135.png",
  jolteon_back: SPRITE_BASE + "back/135.png",
  flareon_front: SPRITE_BASE + "136.png",
  flareon_back: SPRITE_BASE + "back/136.png"
};

const loadedSprites = {};
for (let key in SPRITE_URLS) {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = SPRITE_URLS[key];
  img.onload = () => { loadedSprites[key] = img; };
}

// =============================================================================
// 2. COMPLETE SPECIES DATABASE & EVOLUTIONARY LINES
// =============================================================================
const SPECIES_DB = {
  1: { id: 1, name: "BULBASAUR", type: "GRASS", baseHp: 22, attack: 13, defense: 12, speed: 10, evoLevel: 16, evoTargetId: 2, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "VINE WHIP", power: 13, kind: "special" }] },
  2: { id: 2, name: "IVYSAUR", type: "GRASS", baseHp: 32, attack: 18, defense: 17, speed: 14, evoLevel: 32, evoTargetId: 3, moves: [{ name: "VINE WHIP", power: 14, kind: "special" }, { name: "RAZOR LEAF", power: 19, kind: "special" }] },
  3: { id: 3, name: "VENUSAUR", type: "GRASS", baseHp: 44, attack: 25, defense: 24, speed: 20, evoLevel: null, evoTargetId: null, moves: [{ name: "SOLAR BEAM", power: 26, kind: "special" }, { name: "RAZOR LEAF", power: 20, kind: "special" }] },

  4: { id: 4, name: "CHARMANDER", type: "FIRE", baseHp: 24, attack: 14, defense: 11, speed: 13, evoLevel: 16, evoTargetId: 5, moves: [{ name: "SCRATCH", power: 8, kind: "physical" }, { name: "EMBER", power: 14, kind: "special" }] },
  5: { id: 5, name: "CHARMELEON", type: "FIRE", baseHp: 33, attack: 19, defense: 15, speed: 18, evoLevel: 36, evoTargetId: 6, moves: [{ name: "EMBER", power: 15, kind: "special" }, { name: "FLAMETHROWER", power: 21, kind: "special" }] },
  6: { id: 6, name: "CHARIZARD", type: "FIRE", baseHp: 46, attack: 26, defense: 21, speed: 25, evoLevel: null, evoTargetId: null, moves: [{ name: "FLAMETHROWER", power: 24, kind: "special" }, { name: "FIRE BLAST", power: 28, kind: "special" }] },

  7: { id: 7, name: "SQUIRTLE", type: "WATER", baseHp: 26, attack: 12, defense: 14, speed: 11, evoLevel: 16, evoTargetId: 8, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "WATER GUN", power: 14, kind: "special" }] },
  8: { id: 8, name: "WARTORTLE", type: "WATER", baseHp: 34, attack: 17, defense: 18, speed: 15, evoLevel: 36, evoTargetId: 9, moves: [{ name: "WATER GUN", power: 15, kind: "special" }, { name: "BUBBLEBEAM", power: 20, kind: "special" }] },
  9: { id: 9, name: "BLASTOISE", type: "WATER", baseHp: 46, attack: 23, defense: 25, speed: 19, evoLevel: null, evoTargetId: null, moves: [{ name: "BUBBLEBEAM", power: 21, kind: "special" }, { name: "HYDRO PUMP", power: 28, kind: "special" }] },

  10: { id: 10, name: "CATERPIE", type: "BUG", baseHp: 15, attack: 9, defense: 8, speed: 11, evoLevel: 7, evoTargetId: 11, moves: [{ name: "TACKLE", power: 6, kind: "physical" }, { name: "BUG BITE", power: 10, kind: "physical" }] },
  11: { id: 11, name: "METAPOD", type: "BUG", baseHp: 25, attack: 11, defense: 20, speed: 8, evoLevel: 10, evoTargetId: 12, moves: [{ name: "HARDEN", power: 8, kind: "physical" }, { name: "TACKLE", power: 7, kind: "physical" }] },
  12: { id: 12, name: "BUTTERFREE", type: "BUG", baseHp: 35, attack: 18, defense: 16, speed: 20, evoLevel: null, evoTargetId: null, moves: [{ name: "GUST", power: 15, kind: "special" }, { name: "PSYBEAM", power: 20, kind: "special" }] },

  16: { id: 16, name: "PIDGEY", type: "NORMAL", baseHp: 18, attack: 11, defense: 9, speed: 12, evoLevel: 18, evoTargetId: 17, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "GUST", power: 10, kind: "special" }] },
  17: { id: 17, name: "PIDGEOTTO", type: "NORMAL", baseHp: 28, attack: 16, defense: 14, speed: 18, evoLevel: 36, evoTargetId: 18, moves: [{ name: "GUST", power: 12, kind: "special" }, { name: "WING ATTACK", power: 17, kind: "physical" }] },
  18: { id: 18, name: "PIDGEOT", type: "NORMAL", baseHp: 42, attack: 24, defense: 20, speed: 26, evoLevel: null, evoTargetId: null, moves: [{ name: "WING ATTACK", power: 18, kind: "physical" }, { name: "AERIAL ACE", power: 24, kind: "physical" }] },

  19: { id: 19, name: "RATTATA", type: "NORMAL", baseHp: 16, attack: 12, defense: 8, speed: 14, evoLevel: 20, evoTargetId: 20, moves: [{ name: "TACKLE", power: 6, kind: "physical" }, { name: "BITE", power: 11, kind: "physical" }] },
  20: { id: 20, name: "RATICATE", type: "NORMAL", baseHp: 32, attack: 22, defense: 17, speed: 24, evoLevel: null, evoTargetId: null, moves: [{ name: "HYPER FANG", power: 19, kind: "physical" }, { name: "CRUNCH", power: 22, kind: "physical" }] },

  25: { id: 25, name: "PIKACHU", type: "ELECTRIC", baseHp: 20, attack: 14, defense: 9, speed: 18, evoLevel: null, evoTargetId: null, moves: [{ name: "QUICK ATTACK", power: 8, kind: "physical" }, { name: "THUNDERSHOCK", power: 13, kind: "special" }] },
  26: { id: 26, name: "RAICHU", type: "ELECTRIC", baseHp: 36, attack: 23, defense: 18, speed: 27, evoLevel: null, evoTargetId: null, moves: [{ name: "THUNDERBOLT", power: 22, kind: "special" }, { name: "THUNDER", power: 28, kind: "special" }] },

  43: { id: 43, name: "ODDISH", type: "GRASS", baseHp: 17, attack: 12, defense: 10, speed: 8, evoLevel: 21, evoTargetId: 44, moves: [{ name: "ABSORB", power: 9, kind: "special" }, { name: "ACID", power: 11, kind: "special" }] },
  44: { id: 44, name: "GLOOM", type: "GRASS", baseHp: 29, attack: 17, defense: 16, speed: 12, evoLevel: 32, evoTargetId: 45, moves: [{ name: "ACID", power: 14, kind: "special" }, { name: "MEGA DRAIN", power: 18, kind: "special" }] },
  45: { id: 45, name: "VILEPLUME", type: "GRASS", baseHp: 42, attack: 24, defense: 22, speed: 16, evoLevel: null, evoTargetId: null, moves: [{ name: "PETAL DANCE", power: 24, kind: "special" }, { name: "SOLAR BEAM", power: 27, kind: "special" }] },

  21: { id: 21, name: "SPEAROW", type: "NORMAL", baseHp: 18, attack: 14, defense: 8, speed: 17, evoLevel: null, evoTargetId: null, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "PECK", power: 11, kind: "physical" }] },
  35: { id: 35, name: "CLEFAIRY", type: "NORMAL", baseHp: 26, attack: 11, defense: 14, speed: 9, evoLevel: null, evoTargetId: null, moves: [{ name: "POUND", power: 8, kind: "physical" }, { name: "DOUBLESLAP", power: 13, kind: "physical" }] },
  36: { id: 36, name: "CLEFABLE", type: "NORMAL", baseHp: 44, attack: 20, defense: 22, speed: 18, evoLevel: null, evoTargetId: null, moves: [{ name: "DOUBLESLAP", power: 14, kind: "physical" }, { name: "METRONOME", power: 22, kind: "special" }] },
  41: { id: 41, name: "ZUBAT", type: "POISON", baseHp: 19, attack: 12, defense: 9, speed: 16, evoLevel: 22, evoTargetId: 42, moves: [{ name: "LEECH LIFE", power: 9, kind: "physical" }, { name: "WING ATTACK", power: 12, kind: "physical" }] },
  42: { id: 42, name: "GOLBAT", type: "POISON", baseHp: 38, attack: 21, defense: 18, speed: 24, evoLevel: null, evoTargetId: null, moves: [{ name: "BITE", power: 14, kind: "physical" }, { name: "WING ATTACK", power: 19, kind: "physical" }] },
  74: { id: 74, name: "GEODUDE", type: "ROCK", baseHp: 28, attack: 15, defense: 22, speed: 9, evoLevel: 25, evoTargetId: null, moves: [{ name: "TACKLE", power: 8, kind: "physical" }, { name: "ROCK THROW", power: 13, kind: "physical" }] },
  95: { id: 95, name: "ONIX", type: "ROCK", baseHp: 42, attack: 19, defense: 28, speed: 14, evoLevel: null, evoTargetId: null, moves: [{ name: "BIND", power: 10, kind: "physical" }, { name: "ROCK TOMB", power: 17, kind: "physical" }] },

  120: { id: 120, name: "STARYU", type: "WATER", baseHp: 22, attack: 15, defense: 18, speed: 22, evoLevel: null, evoTargetId: null, moves: [{ name: "TACKLE", power: 8, kind: "physical" }, { name: "WATER GUN", power: 15, kind: "special" }, { name: "BUBBLEBEAM", power: 20, kind: "special" }] },
  121: { id: 121, name: "STARMIE", type: "WATER", baseHp: 40, attack: 22, defense: 24, speed: 30, evoLevel: null, evoTargetId: null, moves: [{ name: "WATER GUN", power: 15, kind: "special" }, { name: "BUBBLEBEAM", power: 22, kind: "special" }, { name: "CONFUSION", power: 20, kind: "special" }, { name: "HYDRO PUMP", power: 30, kind: "special" }] },

  // Water & Fishing Expansions
  60: { id: 60, name: "POLIWAG", type: "WATER", baseHp: 20, attack: 13, defense: 11, speed: 18, evoLevel: null, evoTargetId: null, moves: [{ name: "BUBBLE", power: 10, kind: "special" }, { name: "WATER GUN", power: 14, kind: "special" }] },
  90: { id: 90, name: "SHELLDER", type: "WATER", baseHp: 22, attack: 15, defense: 26, speed: 10, evoLevel: null, evoTargetId: null, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "BUBBLEBEAM", power: 18, kind: "special" }] },
  129: { id: 129, name: "MAGIKARP", type: "WATER", baseHp: 16, attack: 6, defense: 14, speed: 20, evoLevel: 20, evoTargetId: 130, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "SPLASH", power: 0, kind: "physical" }] },
  130: { id: 130, name: "GYARADOS", type: "WATER", baseHp: 48, attack: 28, defense: 22, speed: 23, evoLevel: null, evoTargetId: null, moves: [{ name: "BITE", power: 18, kind: "physical" }, { name: "HYDRO PUMP", power: 28, kind: "special" }, { name: "DRAGON RAGE", power: 22, kind: "special" }] },

  // Vermilion City Electric Line
  100: { id: 100, name: "VOLTORB", type: "ELECTRIC", baseHp: 21, attack: 14, defense: 15, speed: 26, evoLevel: null, evoTargetId: null, moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "SPARK", power: 16, kind: "special" }, { name: "THUNDERBOLT", power: 22, kind: "special" }] },

  // Eevee & Evolution Stones
  133: { id: 133, name: "EEVEE", type: "NORMAL", baseHp: 24, attack: 14, defense: 13, speed: 14, evoLevel: null, evoTargetId: null, moves: [{ name: "TACKLE", power: 8, kind: "physical" }, { name: "QUICK ATTACK", power: 11, kind: "physical" }, { name: "BITE", power: 15, kind: "physical" }] },
  134: { id: 134, name: "VAPOREON", type: "WATER", baseHp: 48, attack: 22, defense: 20, speed: 19, evoLevel: null, evoTargetId: null, moves: [{ name: "WATER GUN", power: 16, kind: "special" }, { name: "BUBBLEBEAM", power: 22, kind: "special" }, { name: "HYDRO PUMP", power: 28, kind: "special" }] },
  135: { id: 135, name: "JOLTEON", type: "ELECTRIC", baseHp: 36, attack: 24, defense: 18, speed: 32, evoLevel: null, evoTargetId: null, moves: [{ name: "THUNDERSHOCK", power: 14, kind: "special" }, { name: "PIN MISSILE", power: 16, kind: "physical" }, { name: "THUNDERBOLT", power: 25, kind: "special" }] },
  136: { id: 136, name: "FLAREON", type: "FIRE", baseHp: 38, attack: 28, defense: 19, speed: 20, evoLevel: null, evoTargetId: null, moves: [{ name: "EMBER", power: 15, kind: "special" }, { name: "BITE", power: 16, kind: "physical" }, { name: "FLAMETHROWER", power: 25, kind: "special" }] }
};

// =============================================================================
// 3. CRY & AUDIO SFX
// =============================================================================
const CRY_BASE_URL = "https://raw.githubusercontent.com/PokeAPI/cries/ef687b18f0ce17169b4b4c09175819f7ade92f0f/cries/pokemon/latest/";
const cryAudio = {
  cache: {},
  play(pokemonId, playbackRate = 1.0, volume = 0.45) {
    if (!pokemonId) return;
    try {
      if (!this.cache[pokemonId]) {
        const audio = new Audio(`${CRY_BASE_URL}${pokemonId}.ogg`);
        audio.preload = "auto";
        this.cache[pokemonId] = audio;
      }
      const sound = this.cache[pokemonId].cloneNode();
      const sfxVol = (typeof settings !== "undefined" && typeof settings.sfx === "number") ? settings.sfx : 1;
      sound.volume = (typeof music !== "undefined" && music.muted) ? 0 : Math.max(0, Math.min(1, volume * sfxVol));
      sound.playbackRate = playbackRate;
      sound.play().catch(e => console.warn(e));
    } catch (e) {
      console.warn("cry audio error:", e);
    }
  }
};

class SoundFX {
  constructor() { this.ctx = null; }
  init() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === "suspended") this.ctx.resume();
  }
  playTone(freq, type, duration, endFreq = null, vol = 0.08) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(endFreq, 1), this.ctx.currentTime + duration);
    gain.gain.setValueAtTime(vol * settings.sfx, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    osc.connect(gain); gain.connect(this.ctx.destination);
    osc.start(); osc.stop(this.ctx.currentTime + duration);
  }
  playNoise(duration, vol = 0.12) {
    if (!this.ctx) return;
    const size = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, size, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < size; i++) data[i] = Math.random() * 2 - 1;
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(vol * settings.sfx, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
    noise.connect(gain); gain.connect(this.ctx.destination);
    noise.start();
  }
  textBlip() { this.playTone(420, "sine", 0.04, 380, 0.03); }
  hit() { this.playNoise(0.16, 0.22); this.playTone(160, "triangle", 0.14, 50, 0.12); }
  ember() { this.playNoise(0.3, 0.18); this.playTone(520, "triangle", 0.28, 140, 0.1); }
  encounter() {
    this.playTone(280, "triangle", 0.12, 600, 0.12);
    setTimeout(() => this.playTone(500, "sine", 0.18, 900, 0.15), 100);
  }
  faint() { this.playTone(240, "sawtooth", 0.45, 40, 0.16); }
  victory() {
    [440, 554, 659, 880].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "sine", 0.2, null, 0.1), idx * 150);
    });
  }
  badgeFanfare() {
    [392, 523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "triangle", 0.28, null, 0.14), idx * 160);
    });
  }
  expTick() { this.playTone(800, "sine", 0.04, 900, 0.03); }
  levelUp() {
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "sine", 0.22, null, 0.14), idx * 110);
    });
  }
  evoTheme() {
    [400, 500, 600, 700, 800, 950].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "triangle", 0.16, null, 0.12), idx * 140);
    });
  }
  throwBall() { this.playTone(360, "triangle", 0.14, 680, 0.1); }
  ballBounce() { this.playTone(210, "triangle", 0.08, 130, 0.14); }
  ballWobble() { this.playTone(300, "sine", 0.07, 260, 0.11); }
  catchSuccess() {
    [523.25, 659.25, 783.99, 1046.5, 1318.51].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "sine", 0.22, null, 0.12), idx * 120);
    });
  }
  switchMon() { this.playTone(320, "sine", 0.14, 580, 0.14); }
  doorSound() { this.playTone(240, "triangle", 0.12, 160, 0.1); }
  potionUse() {
    [350, 440, 520, 660].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "sine", 0.12, null, 0.1), idx * 80);
    });
  }
  bikeBell() {
    this.playTone(987.77, "sine", 0.08, null, 0.15);
    setTimeout(() => this.playTone(1318.51, "sine", 0.12, null, 0.15), 90);
  }
  fishingBite() {
    this.playTone(720, "sine", 0.08, 960, 0.18);
    setTimeout(() => this.playTone(880, "sine", 0.1, 1140, 0.18), 90);
  }
  shinyFanfare() {
    [1046.5, 1318.51, 1567.98, 2093.0].forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "sine", 0.16, null, 0.16), idx * 80);
    });
  }
  campCook() {
    this.playNoise(0.08, 0.08);
    this.playTone(520, "triangle", 0.08, 300, 0.1);
  }
  flyWing() {
    this.playNoise(0.18, 0.14);
    this.playTone(320, "sine", 0.22, 680, 0.12);
  }
  ambientCricket() {
    if (Math.random() < 0.35) this.playTone(4200, "sine", 0.02, 4500, 0.015);
  }
  ambientWave() {
    this.playNoise(0.6, 0.035);
  }
}
const sfx = new SoundFX();
const SETTINGS_KEY = "pokemon_cozy_settings_v1";
const settings = { music: 0.4, sfx: 1, text: 1, weather: 0, season: -1 }; // text 0-2, weather 0 AUTO 1 CLEAR 2 RAIN 3 FOG
try { Object.assign(settings, JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}")); } catch (e) {}
function saveSettings() { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings)); } catch (e) {} }

// =============================================================================
// 4. PALLET TOWN LOFI BGM
// =============================================================================
const PALLET_TOWN_BGM = "pallet_town_lofi.mp3"; // optional: used for Pallet Town if the file exists

// Each town gets its own theme (synthesized with WebAudio, so no extra files needed).
// Notes are "C4:2" = note : length in eighth-notes, "-" = rest. "k"/"h" = kick/hat (drums).
const arp = (a, b, c) => `${a}:2 ${b}:2 ${c}:2 ${b}:2`;
const stomp = (lo, hi) => `${lo}:2 ${hi}:2 ${lo}:2 ${hi}:2`;
const TOWN_THEMES = {
  PALLET_TOWN: { // calm, hopeful, C major
    bpm: 96, leadWave: "triangle", leadVol: 0.20, bassWave: "sine", bassVol: 0.22,
    lead: "E4:2 G4:2 C5:4  B4:2 G4:2 E4:4  F4:2 A4:2 C5:4  B4:2 A4:2 G4:4  " +
          "E4:2 G4:2 C5:2 E5:2  D5:3 C5:1 B4:4  A4:2 B4:2 C5:2 A4:2  G4:6 -:2",
    bass: [arp("C3","G3","E3"), arp("C3","G3","E3"), arp("F3","C4","A3"), arp("G3","D4","B3"),
           arp("C3","G3","E3"), arp("G3","D4","B3"), arp("A2","E3","A3"), arp("G3","D4","G3")].join("  ")
  },
  VIRIDIAN_CITY: { // lively, a bit mysterious, A minor
    bpm: 112, leadWave: "square", leadVol: 0.10, bassWave: "triangle", bassVol: 0.24,
    lead: "A4:1 C5:1 E5:2 D5:2 C5:2  B4:2 D5:2 G4:4  C5:1 E5:1 A5:2 G5:2 E5:2  F5:2 E5:2 D5:4  " +
          "A4:1 C5:1 E5:2 D5:2 C5:2  D5:2 F5:2 A5:4  G5:2 E5:2 C5:2 E5:2  A4:6 -:2",
    bass: [arp("A2","E3","A3"), arp("G2","D3","G3"), arp("A2","E3","A3"), arp("D3","A3","D4"),
           arp("A2","E3","A3"), arp("D3","A3","D4"), arp("C3","G3","C4"), arp("E3","B3","E3")].join("  ")
  },
  PEWTER_CITY: { // solid, marching, rocky, D minor
    bpm: 116, leadWave: "square", leadVol: 0.10, bassWave: "sawtooth", bassVol: 0.10, drums: true,
    lead: "D4:2 D4:1 F4:1 A4:4  G4:2 G4:1 A4:1 Bb4:4  A4:2 F4:2 D4:2 F4:2  E4:4 D4:2 -:2  " +
          "D4:2 D4:1 F4:1 A4:2 D5:2  C5:2 Bb4:2 A4:4  G4:2 A4:2 Bb4:2 G4:2  A4:6 -:2",
    bass: [stomp("D2","D3"), stomp("G2","G3"), stomp("D2","D3"), stomp("A2","A3"),
           stomp("D2","D3"), stomp("Bb2","Bb3"), stomp("G2","G3"), stomp("A2","A3")].join("  "),
    drum: Array(8).fill("k:2 h:2 k:2 h:2").join("  ")
  }
};

// Battle themes (8-bit synth). Every voice is 64 eighth-notes so loops stay aligned.
const pulse = (a, b) => Array(4).fill(`${a}:1 ${b}:1`).join(" ");
const dr = Array(8).fill("k:2 h:1 h:1 k:2 h:1 h:1").join("  ");
TOWN_THEMES.WILD_BATTLE = { // energetic, E minor
  bpm: 152, leadWave: "square", leadVol: 0.10, bassWave: "sawtooth", bassVol: 0.09, drums: true,
  lead: "E4:1 E4:1 G4:1 B4:1 E5:2 D5:2  C5:1 C5:1 E5:1 G5:1 B4:4  A4:1 A4:1 C5:1 E5:1 A5:2 G5:2  B4:2 A4:2 G4:2 F#4:2  " +
        "E4:1 E4:1 G4:1 B4:1 E5:2 G5:2  A5:2 G5:2 E5:2 D5:2  C5:2 D5:2 E5:2 G4:2  B4:6 -:2",
  bass: [pulse("E2","E3"), pulse("E2","E3"), pulse("A2","A3"), pulse("B2","B3"),
         pulse("E2","E3"), pulse("G2","G3"), pulse("A2","A3"), pulse("B2","B3")].join("  "),
  drum: dr
};
TOWN_THEMES.TRAINER_BATTLE = { // tense, driving, A minor
  bpm: 140, leadWave: "square", leadVol: 0.11, bassWave: "sawtooth", bassVol: 0.10, drums: true,
  lead: "A4:2 A4:1 C5:1 E5:4  F5:2 E5:1 D5:1 C5:4  D5:2 D5:1 F5:1 A5:4  G#4:2 B4:2 E5:4  " +
        "A4:2 A4:1 C5:1 E5:2 A5:2  G5:2 F5:2 E5:2 D5:2  C5:2 E5:2 G5:2 E5:2  E5:6 -:2",
  bass: [pulse("A2","A3"), pulse("F2","F3"), pulse("D2","D3"), pulse("E2","E3"),
         pulse("A2","A3"), pulse("F2","F3"), pulse("C3","C4"), pulse("E2","E3")].join("  "),
  drum: dr
};

TOWN_THEMES.VIRIDIAN_FOREST = { // mossy, mysterious, D minor
  bpm: 84, leadWave: "triangle", leadVol: 0.18, bassWave: "sine", bassVol: 0.22,
  lead: "D4:2 F4:2 A4:4  G4:2 F4:2 E4:4  D4:2 F4:2 A4:2 C5:2  Bb4:4 A4:4  G4:2 A4:2 Bb4:2 A4:2  F4:4 E4:4  D4:2 E4:2 F4:2 G4:2  D4:6 -:2",
  bass: [arp("D3","A3","F3"), arp("D3","A3","E3"), arp("D3","A3","F3"), arp("Bb2","F3","D3"),
         arp("G2","D3","Bb2"), arp("F3","C4","A3"), arp("D3","A3","F3"), arp("A2","E3","A3")].join("  ")
};

TOWN_THEMES.ROUTE_3 = { bpm: 124, leadWave: "triangle", leadVol: 0.18, bassWave: "sine", bassVol: 0.22,
  lead: "G4:2 B4:2 D5:4  C5:2 B4:2 A4:4  G4:2 A4:2 B4:2 D5:2  E5:4 D5:4",
  bass: [arp("G2","D3","B2"), arp("C3","G3","E3"), arp("D3","A3","F#3"), arp("G2","D3","B2")].join("  ") };
TOWN_THEMES.MT_MOON = { bpm: 72, leadWave: "sine", leadVol: 0.2, bassWave: "triangle", bassVol: 0.2,
  lead: "E4:4 G4:2 B4:2  A4:4 F#4:4  E4:4 D4:2 E4:2  G4:8",
  bass: [arp("E3","B3","G3"), arp("A2","E3","C4"), arp("D3","A3","F#3"), arp("E3","B3","E4")].join("  ") };
TOWN_THEMES.CERULEAN_CITY = {
  bpm: 120, leadWave: "triangle", leadVol: 0.18, bassWave: "sine", bassVol: 0.20,
  lead: "F4:2 A4:2 C5:4  Bb4:2 A4:2 G4:4  A4:2 C5:2 F5:2 E5:2  D5:4 C5:4  " +
        "D5:2 F5:2 Bb4:2 D5:2  C5:2 Bb4:2 A4:4  G4:2 A4:2 Bb4:2 G4:2  F4:6 -:2",
  bass: [arp("F2","C3","A2"), arp("C3","G3","E3"), arp("F2","C3","A2"), arp("A2","E3","C3"),
         arp("Bb2","F3","D3"), arp("F2","C3","A2"), arp("G2","D3","Bb2"), arp("C3","G3","E3")].join("  ")
};
TOWN_THEMES.VERMILION_CITY = {
  bpm: 112, leadWave: "triangle", leadVol: 0.18, bassWave: "sine", bassVol: 0.20,
  lead: "D4:2 G4:2 B4:4  A4:2 G4:2 F#4:4  G4:2 B4:2 D5:2 C5:2  B4:4 A4:4  " +
        "B4:2 D5:2 C5:2 B4:2  A4:2 B4:2 C5:4  B4:2 G4:2 A4:2 F#4:2  G4:6 -:2",
  bass: [arp("G2","D3","B2"), arp("D3","A3","F#3"), arp("G2","D3","B2"), arp("D3","A3","F#3"),
         arp("G2","D3","B2"), arp("C3","G3","E3"), arp("D3","A3","F#3"), arp("G2","D3","B2")].join("  ")
};
TOWN_THEMES.SS_ANNE = TOWN_THEMES.VERMILION_CITY;
const NOTE_SEMI = { C:0, D:2, E:4, F:5, G:7, A:9, B:11 };
function noteFreq(name) {
  const m = /^([A-G])([b#]?)(\d)$/.exec(name);
  if (!m) return null;
  const semi = NOTE_SEMI[m[1]] + (m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0) + (parseInt(m[3], 10) + 1) * 12;
  return 440 * Math.pow(2, (semi - 69) / 12);
}
function parseVoice(str) {
  return str.trim().split(/\s+/).map(tok => {
    const [n, len] = tok.split(":");
    return { n, len: parseInt(len, 10) || 1 };
  });
}

const music = {
  audio: null,      // optional mp3 for Pallet Town
  mp3Failed: false,
  unlocked: false,
  muted: false,
  vol: settings.music,
  currentKey: null,
  session: null,    // active synth session
  timer: null,

  _ctx() {
    sfx.init();
    return sfx.ctx;
  },
  _key() {
    if (typeof gameState !== "undefined" && gameState === STATE.BATTLE) return battle.isTrainerBattle ? "TRAINER_BATTLE" : "WILD_BATTLE";
    return (typeof currentMapKey !== "undefined" && TOWN_THEMES[currentMapKey]) ? currentMapKey : "PALLET_TOWN";
  },

  // ---- synth engine ----
  _tone(ctx, dest, freq, t, dur, type, vol) {
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = type; osc.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(dur, 0.05));
    osc.connect(g); g.connect(dest);
    osc.start(t); osc.stop(t + dur + 0.05);
  },
  _drum(ctx, dest, kind, t) {
    if (kind === "k") {
      const osc = ctx.createOscillator(), g = ctx.createGain();
      osc.frequency.setValueAtTime(150, t);
      osc.frequency.exponentialRampToValueAtTime(40, t + 0.12);
      g.gain.setValueAtTime(0.35, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
      osc.connect(g); g.connect(dest); osc.start(t); osc.stop(t + 0.16);
    } else {
      const len = Math.floor(ctx.sampleRate * 0.05);
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      const src = ctx.createBufferSource(), g = ctx.createGain(), hp = ctx.createBiquadFilter();
      hp.type = "highpass"; hp.frequency.value = 6000;
      src.buffer = buf;
      g.gain.setValueAtTime(0.10, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);
      src.connect(hp); hp.connect(g); g.connect(dest); src.start(t);
    }
  },
  _startSynth(key) {
    const ctx = this._ctx();
    if (!ctx) return;
    const th = TOWN_THEMES[key];
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, ctx.currentTime);
    master.gain.linearRampToValueAtTime(this.muted ? 0 : this.vol, ctx.currentTime + 0.4);
    master.connect(ctx.destination);
    const eighth = 60 / th.bpm / 2;
    const mk = (str, kind) => ({ notes: parseVoice(str), i: 0, t: ctx.currentTime + 0.08, kind });
    const voices = [mk(th.lead, "lead"), mk(th.bass, "bass")];
    if (th.drum) voices.push(mk(th.drum, "drum"));
    this.session = { key, master, voices, eighth, th };
    this.timer = setInterval(() => this._tick(), 50);
    this._tick();
  },
  _tick() {
    const s = this.session; if (!s) return;
    const ctx = sfx.ctx;
    while (true) {
      let any = false;
      for (const v of s.voices) {
        if (v.t > ctx.currentTime + 0.3) continue;
        any = true;
        const nt = v.notes[v.i % v.notes.length];
        const dur = nt.len * s.eighth;
        if (nt.n !== "-") {
          if (v.kind === "drum") this._drum(ctx, s.master, nt.n, v.t);
          else {
            const f = noteFreq(nt.n);
            if (f) {
              if (v.kind === "lead") this._tone(ctx, s.master, f, v.t, dur * 0.95, s.th.leadWave, s.th.leadVol);
              else this._tone(ctx, s.master, f, v.t, dur * 0.9, s.th.bassWave, s.th.bassVol);
            }
          }
        }
        v.t += dur; v.i++;
      }
      if (!any) break;
    }
  },
  _stopSynth() {
    if (this.timer) { clearInterval(this.timer); this.timer = null; }
    const s = this.session; this.session = null;
    if (s && sfx.ctx) {
      const now = sfx.ctx.currentTime;
      s.master.gain.cancelScheduledValues(now);
      s.master.gain.setValueAtTime(Math.max(s.master.gain.value, 0.0001), now);
      s.master.gain.linearRampToValueAtTime(0.0001, now + 0.25);
      setTimeout(() => { try { s.master.disconnect(); } catch (e) {} }, 400);
    }
  },
  _stopMp3() { if (this.audio) { this.audio.pause(); this.audio.currentTime = 0; } },

  // ---- public API ----
  play() {
    if (!this.unlocked) return;
    const key = this._key();
    if (this.currentKey === key && (this.session || (this.audio && !this.audio.paused))) return;
    this._stopSynth(); this._stopMp3();
    this.currentKey = key;
    if (key === "PALLET_TOWN" && !this.mp3Failed) {
      if (!this.audio) {
        this.audio = new Audio(PALLET_TOWN_BGM);
        this.audio.loop = true;
        this.audio.preload = "auto";
        this.audio.addEventListener("error", () => {
          this.mp3Failed = true;
          if (this.currentKey === "PALLET_TOWN") { this.currentKey = null; this.play(); }
        });
      }
      this.audio.volume = this.muted ? 0 : this.vol;
      this.audio.play().catch(() => {
        this.mp3Failed = true;
        if (this.currentKey === "PALLET_TOWN") { this.currentKey = null; this.play(); }
      });
    } else {
      this._startSynth(key);
    }
  },
  pause() {
    this._stopSynth(); this._stopMp3();
    this.currentKey = null;
  },
  unlock() {
    if (this.unlocked) return;
    if (typeof gameState !== "undefined" && gameState === STATE.TITLE) return; // wait for START
    this.unlocked = true;
    this.play();
  },
  toggle() {
    this.muted = !this.muted;
    if (this.audio) this.audio.volume = this.muted ? 0 : this.vol;
    if (this.session && sfx.ctx) {
      const g = this.session.master.gain, now = sfx.ctx.currentTime;
      g.cancelScheduledValues(now);
      g.setValueAtTime(g.value, now);
      g.linearRampToValueAtTime(this.muted ? 0 : this.vol, now + 0.1);
    }
  }
};


// =============================================================================
// 4b. TYPE EFFECTIVENESS SYSTEM
// =============================================================================
// TYPE_CHART[attackingType][defendingType] = multiplier (missing = 1x)
const TYPE_CHART = {
  NORMAL:   { ROCK: 0.5 },
  FIRE:     { FIRE: 0.5, WATER: 0.5, GRASS: 2, BUG: 2, ROCK: 0.5 },
  WATER:    { FIRE: 2, WATER: 0.5, GRASS: 0.5, ROCK: 2, GROUND: 2 },
  GRASS:    { FIRE: 0.5, WATER: 2, GRASS: 0.5, POISON: 0.5, GROUND: 2, FLYING: 0.5, BUG: 0.5, ROCK: 2 },
  ELECTRIC: { WATER: 2, GRASS: 0.5, ELECTRIC: 0.5, GROUND: 0, FLYING: 2 },
  BUG:      { FIRE: 0.5, GRASS: 2, POISON: 0.5, FLYING: 0.5, PSYCHIC: 2 },
  ROCK:     { FIRE: 2, BUG: 2, FLYING: 2, GROUND: 0.5 },
  FLYING:   { GRASS: 2, BUG: 2, ELECTRIC: 0.5, ROCK: 0.5 },
  POISON:   { GRASS: 2, POISON: 0.5, GROUND: 0.5, ROCK: 0.5 },
  GROUND:   { FIRE: 2, ELECTRIC: 2, GRASS: 0.5, POISON: 2, BUG: 0.5, ROCK: 2, FLYING: 0 },
  PSYCHIC:  { PSYCHIC: 0.5, POISON: 2 }
};

// Full (dual) typing of every species, by Pokédex id
const SPECIES_TYPES = {
  1: ["GRASS", "POISON"], 2: ["GRASS", "POISON"], 3: ["GRASS", "POISON"],
  4: ["FIRE"], 5: ["FIRE"], 6: ["FIRE", "FLYING"],
  10: ["BUG"], 11: ["BUG"], 12: ["BUG", "FLYING"],
  16: ["NORMAL", "FLYING"], 17: ["NORMAL", "FLYING"], 18: ["NORMAL", "FLYING"],
  19: ["NORMAL"], 20: ["NORMAL"],
  25: ["ELECTRIC"], 26: ["ELECTRIC"],
  43: ["GRASS", "POISON"], 44: ["GRASS", "POISON"], 45: ["GRASS", "POISON"],
  21: ["NORMAL", "FLYING"], 35: ["NORMAL"], 36: ["NORMAL"], 41: ["POISON", "FLYING"], 42: ["POISON", "FLYING"],
  74: ["ROCK", "GROUND"], 95: ["ROCK", "GROUND"],
  120: ["WATER"], 121: ["WATER", "PSYCHIC"],
  60: ["WATER"], 90: ["WATER"], 100: ["ELECTRIC"],
  129: ["WATER"], 130: ["WATER", "FLYING"],
  133: ["NORMAL"], 134: ["WATER"], 135: ["ELECTRIC"], 136: ["FIRE"]
};

// Type of each move (unlisted moves use the attacker's own type)
const MOVE_TYPES = {
  "ABSORB": "GRASS", "MEGA DRAIN": "GRASS", "VINE WHIP": "GRASS", "RAZOR LEAF": "GRASS", "PETAL DANCE": "GRASS", "SOLAR BEAM": "GRASS", "LEECH SEED": "GRASS",
  "ACID": "POISON", "SLUDGE BOMB": "POISON", "POISON STING": "POISON",
  "WATER GUN": "WATER", "BUBBLEBEAM": "WATER", "HYDRO PUMP": "WATER", "SURF": "WATER", "AQUA JET": "WATER", "BUBBLE": "WATER", "WATER PULSE": "WATER",
  "AERIAL ACE": "FLYING", "WING ATTACK": "FLYING", "GUST": "FLYING", "PECK": "FLYING", "AIR CUTTER": "FLYING",
  "BUG BITE": "BUG", "LEECH LIFE": "BUG", "TWINEEDLE": "BUG",
  "EMBER": "FIRE", "FLAMETHROWER": "FIRE", "FIRE BLAST": "FIRE", "FIRE SPIN": "FIRE",
  "THUNDERSHOCK": "ELECTRIC", "THUNDERBOLT": "ELECTRIC", "THUNDER": "ELECTRIC", "SPARK": "ELECTRIC",
  "ROCK THROW": "ROCK", "ROCK TOMB": "ROCK", "DIG": "GROUND", "EARTHQUAKE": "GROUND",
  "PSYBEAM": "PSYCHIC", "PSYCHIC": "PSYCHIC", "CONFUSION": "PSYCHIC",
  "TACKLE": "NORMAL", "SCRATCH": "NORMAL", "QUICK ATTACK": "NORMAL", "BITE": "NORMAL", "CRUNCH": "NORMAL",
  "HYPER FANG": "NORMAL", "POUND": "NORMAL", "DOUBLESLAP": "NORMAL", "BIND": "NORMAL", "HARDEN": "NORMAL",
  "ATTACK": "NORMAL", "SLASH": "NORMAL", "BODY SLAM": "NORMAL", "HEADBUTT": "NORMAL", "SPLASH": "NORMAL",
  "DRAGON RAGE": "FLYING", "PIN MISSILE": "BUG"
};

const LEVEL_UP_MOVES = {
  // BULBASAUR LINE
  1: [
    { level: 7, move: { name: "LEECH SEED", power: 10, kind: "special" } },
    { level: 10, move: { name: "RAZOR LEAF", power: 17, kind: "special" } },
    { level: 14, move: { name: "BODY SLAM", power: 18, kind: "physical" } },
    { level: 20, move: { name: "SOLAR BEAM", power: 26, kind: "special" } }
  ],
  2: [
    { level: 18, move: { name: "BODY SLAM", power: 18, kind: "physical" } },
    { level: 22, move: { name: "PETAL DANCE", power: 22, kind: "special" } },
    { level: 28, move: { name: "SOLAR BEAM", power: 26, kind: "special" } }
  ],
  3: [
    { level: 34, move: { name: "PETAL DANCE", power: 24, kind: "special" } },
    { level: 40, move: { name: "SOLAR BEAM", power: 28, kind: "special" } }
  ],

  // CHARMANDER LINE
  4: [
    { level: 7, move: { name: "BITE", power: 11, kind: "physical" } },
    { level: 10, move: { name: "FIRE SPIN", power: 15, kind: "special" } },
    { level: 14, move: { name: "SLASH", power: 18, kind: "physical" } },
    { level: 20, move: { name: "FLAMETHROWER", power: 22, kind: "special" } }
  ],
  5: [
    { level: 18, move: { name: "SLASH", power: 19, kind: "physical" } },
    { level: 24, move: { name: "FLAMETHROWER", power: 23, kind: "special" } },
    { level: 32, move: { name: "FIRE BLAST", power: 28, kind: "special" } }
  ],
  6: [
    { level: 36, move: { name: "WING ATTACK", power: 20, kind: "physical" } },
    { level: 42, move: { name: "FIRE BLAST", power: 28, kind: "special" } }
  ],

  // SQUIRTLE LINE
  7: [
    { level: 7, move: { name: "BITE", power: 11, kind: "physical" } },
    { level: 10, move: { name: "BUBBLEBEAM", power: 16, kind: "special" } },
    { level: 14, move: { name: "HEADBUTT", power: 17, kind: "physical" } },
    { level: 20, move: { name: "SURF", power: 22, kind: "special" } }
  ],
  8: [
    { level: 18, move: { name: "HEADBUTT", power: 18, kind: "physical" } },
    { level: 24, move: { name: "SURF", power: 23, kind: "special" } },
    { level: 32, move: { name: "HYDRO PUMP", power: 28, kind: "special" } }
  ],
  9: [
    { level: 36, move: { name: "SURF", power: 24, kind: "special" } },
    { level: 42, move: { name: "HYDRO PUMP", power: 29, kind: "special" } }
  ],

  // PIDGEY LINE
  16: [
    { level: 7, move: { name: "QUICK ATTACK", power: 10, kind: "physical" } },
    { level: 12, move: { name: "WING ATTACK", power: 16, kind: "physical" } },
    { level: 17, move: { name: "AERIAL ACE", power: 21, kind: "physical" } }
  ],
  17: [
    { level: 20, move: { name: "AERIAL ACE", power: 22, kind: "physical" } },
    { level: 28, move: { name: "SLASH", power: 20, kind: "physical" } }
  ],
  18: [
    { level: 38, move: { name: "AERIAL ACE", power: 24, kind: "physical" } }
  ],

  // RATTATA LINE
  19: [
    { level: 7, move: { name: "QUICK ATTACK", power: 9, kind: "physical" } },
    { level: 11, move: { name: "HYPER FANG", power: 18, kind: "physical" } },
    { level: 16, move: { name: "CRUNCH", power: 21, kind: "physical" } }
  ],
  20: [
    { level: 22, move: { name: "CRUNCH", power: 22, kind: "physical" } }
  ],

  // SPEAROW
  21: [
    { level: 8, move: { name: "PECK", power: 12, kind: "physical" } },
    { level: 13, move: { name: "AERIAL ACE", power: 20, kind: "physical" } },
    { level: 18, move: { name: "WING ATTACK", power: 18, kind: "physical" } }
  ],

  // PIKACHU LINE
  25: [
    { level: 7, move: { name: "SPARK", power: 14, kind: "special" } },
    { level: 12, move: { name: "QUICK ATTACK", power: 11, kind: "physical" } },
    { level: 18, move: { name: "THUNDERBOLT", power: 22, kind: "special" } },
    { level: 26, move: { name: "THUNDER", power: 28, kind: "special" } }
  ],
  26: [
    { level: 24, move: { name: "THUNDERBOLT", power: 23, kind: "special" } },
    { level: 32, move: { name: "THUNDER", power: 28, kind: "special" } }
  ],

  // CATERPIE / METAPOD / BUTTERFREE
  10: [
    { level: 6, move: { name: "BUG BITE", power: 11, kind: "physical" } }
  ],
  11: [
    { level: 8, move: { name: "HARDEN", power: 9, kind: "physical" } }
  ],
  12: [
    { level: 11, move: { name: "CONFUSION", power: 14, kind: "special" } },
    { level: 14, move: { name: "GUST", power: 16, kind: "special" } },
    { level: 18, move: { name: "PSYBEAM", power: 21, kind: "special" } }
  ],

  // CLEFAIRY
  35: [
    { level: 8, move: { name: "DOUBLESLAP", power: 13, kind: "physical" } },
    { level: 13, move: { name: "PSYBEAM", power: 18, kind: "special" } },
    { level: 18, move: { name: "BODY SLAM", power: 21, kind: "physical" } }
  ],

  // ZUBAT / GOLBAT
  41: [
    { level: 7, move: { name: "BITE", power: 11, kind: "physical" } },
    { level: 12, move: { name: "WING ATTACK", power: 16, kind: "physical" } },
    { level: 17, move: { name: "AIR CUTTER", power: 18, kind: "special" } }
  ],
  42: [
    { level: 24, move: { name: "WING ATTACK", power: 19, kind: "physical" } },
    { level: 30, move: { name: "CRUNCH", power: 22, kind: "physical" } }
  ],

  // ODDISH LINE
  43: [
    { level: 7, move: { name: "ACID", power: 12, kind: "special" } },
    { level: 13, move: { name: "MEGA DRAIN", power: 17, kind: "special" } },
    { level: 18, move: { name: "PETAL DANCE", power: 22, kind: "special" } }
  ],
  44: [
    { level: 23, move: { name: "MEGA DRAIN", power: 18, kind: "special" } },
    { level: 28, move: { name: "PETAL DANCE", power: 23, kind: "special" } }
  ],
  45: [
    { level: 34, move: { name: "PETAL DANCE", power: 24, kind: "special" } },
    { level: 40, move: { name: "SOLAR BEAM", power: 28, kind: "special" } }
  ],

  // GEODUDE / ONIX
  74: [
    { level: 8, move: { name: "ROCK THROW", power: 13, kind: "physical" } },
    { level: 13, move: { name: "ROCK TOMB", power: 17, kind: "physical" } },
    { level: 19, move: { name: "EARTHQUAKE", power: 24, kind: "physical" } }
  ],
  95: [
    { level: 8, move: { name: "ROCK THROW", power: 14, kind: "physical" } },
    { level: 14, move: { name: "ROCK TOMB", power: 18, kind: "physical" } },
    { level: 20, move: { name: "EARTHQUAKE", power: 24, kind: "physical" } }
  ],

  // CLEFABLE
  36: [
    { level: 16, move: { name: "METRONOME", power: 22, kind: "special" } },
    { level: 24, move: { name: "BODY SLAM", power: 23, kind: "physical" } },
    { level: 32, move: { name: "PSYBEAM", power: 24, kind: "special" } }
  ],

  // STARYU
  120: [
    { level: 12, move: { name: "WATER GUN", power: 15, kind: "special" } },
    { level: 17, move: { name: "BUBBLEBEAM", power: 20, kind: "special" } },
    { level: 23, move: { name: "SWIFT", power: 18, kind: "special" } },
    { level: 28, move: { name: "SURF", power: 24, kind: "special" } }
  ],

  // STARMIE
  121: [
    { level: 22, move: { name: "CONFUSION", power: 20, kind: "special" } },
    { level: 27, move: { name: "BUBBLEBEAM", power: 22, kind: "special" } },
    { level: 33, move: { name: "PSYCHIC", power: 26, kind: "special" } },
    { level: 40, move: { name: "HYDRO PUMP", power: 30, kind: "special" } }
  ]
};

function checkLevelUpMoves(mon) {
  if (!mon || !mon.moves) return [];
  const pool = LEVEL_UP_MOVES[mon.id];
  if (!pool) return [];
  const learned = [];
  for (const entry of pool) {
    if (mon.level >= entry.level) {
      const alreadyHas = mon.moves.some(m => m.name === entry.move.name);
      if (!alreadyHas) {
        const newMv = JSON.parse(JSON.stringify(entry.move));
        if (mon.moves.length < 4) {
          mon.moves.push(newMv);
        } else {
          let minIdx = 0;
          for (let i = 1; i < mon.moves.length; i++) {
            if (mon.moves[i].power < mon.moves[minIdx].power) minIdx = i;
          }
          mon.moves[minIdx] = newMv;
        }
        if (typeof ensurePP === "function") ensurePP(mon);
        learned.push(newMv.name);
      }
    }
  }
  return learned;
}

function getMonTypes(mon) {
  return SPECIES_TYPES[mon.id] || [mon.type || "NORMAL"];
}
function getMoveType(move, attacker) {
  return MOVE_TYPES[move.name] || attacker.type || "NORMAL";
}
function getEffectiveness(move, attacker, defender) {
  const mt = getMoveType(move, attacker);
  let mult = 1;
  for (const dt of getMonTypes(defender)) {
    const row = TYPE_CHART[mt];
    if (row && row[dt] !== undefined) mult *= row[dt];
  }
  return mult;
}
// Returns { dmg, mult, text } for a move used by attacker against defender
function calcDamage(move, attacker, defender) {
  const mult = getEffectiveness(move, attacker, defender);
  if (move.name !== "STRUGGLE" && Math.random() < 0.05) return { dmg: 0, mult: 1, text: "But it missed!", miss: true };
  let dmg = Math.round(move.power * mult);
  if ((attacker.happy || 0) >= 70 && attacker === battle.playerMon) dmg = Math.round(dmg * 1.1);
  if (attacker.status === "BRN") dmg = Math.round(dmg * 0.7);
  const crit = mult > 0 && Math.random() < 0.0625; if (crit) dmg = Math.round(dmg * 1.5);
  if (mult > 0) dmg = Math.max(1, dmg);
  let text = "";
  if (mult === 0) text = `It doesn't affect ${defender.name}...`;
  else if (mult > 1) text = "It's super effective!";
  else if (mult < 1) text = "It's not very effective...";
  const st = rollStatus(move, defender, dmg); if (st) text = st;
  if (crit) text = "A critical hit!" + (text ? " " + text : "");
  return { dmg, mult, text, crit };
}

window.addEventListener("pointerdown", () => {
  if (typeof sfx !== "undefined" && sfx.init) sfx.init();
  if (typeof music !== "undefined" && music.unlock) music.unlock();
  if (typeof gameState !== "undefined") {
    if (gameState === STATE.BATTLE && typeof battle !== "undefined" && battle && battle.expState) {
      handleExpSkip();
    } else if (gameState === STATE.BADGE_AWARD && typeof dismissBadgeAward === "function") {
      dismissBadgeAward();
    } else if (gameState === STATE.GAME_COMPLETE && typeof dismissGameComplete === "function") {
      dismissGameComplete();
    } else if (gameState === STATE.DIALOGUE && typeof advanceDialogue === "function") {
      advanceDialogue();
    }
  }
});

// =============================================================================
// 5. MAPS & DATA (PALLET TOWN, VIRIDIAN CITY & PEWTER CITY)
// =============================================================================
// Tiles:
// 0: Dirt, 1: Tree, 2: Grass, 3: Water, 4: Cottage, 5: PokeCenter, 6: Flowers, 7: Stone Path, 8: Pewter Gym
const MAPS = {
  REDS_HOUSE: {
    name: "RED'S HOUSE",
    cols: 15,
    rows: 10,
    tiles: [
      [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
      [11, 11, 14, 11, 15, 11, 17, 17, 11, 20, 20, 11, 19, 11, 11],
      [11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11],
      [11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 11],
      [11, 12, 12, 12, 13, 16, 16, 13, 13, 13, 12, 12, 12, 12, 11],
      [11, 12, 12, 12, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 11],
      [11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11],
      [11, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 11],
      [11, 11, 11, 11, 11, 11, 11, 18, 11, 11, 11, 11, 11, 11, 11],
      [11, 11, 11, 11, 11, 11, 11, 18, 11, 11, 11, 11, 11, 11, 11]
    ],
    npcs: [
      {
        name: "MOM",
        x: 4,
        y: 4,
        palette: { body: "#f0c7a5", hair: "#b86a4a" },
        dialogue: [],
        getDialogue: () => {
          if (player.team.length === 0) {
            return [
              "Mom: Good morning, Red! Did you have a good sleep?",
              "Mom: Professor Oak was looking for you earlier. He said he has a Pokémon for you!",
              "Mom: Don't go wandering into the tall grass outside without one—wild Pokémon might jump out!"
            ];
          } else {
            return [
              `Mom: Welcome home, Red! What a wonderful ${player.team[0].name}!`,
              "Mom: All boys leave home someday... It said so on television.",
              "Mom: You and your Pokémon should take a quick rest here at home!"
            ];
          }
        },
        onInteract: () => {
          if (player.team.length > 0) {
            player.team.forEach(p => {
              p.hp = p.maxHp;
              p.status = null;
              (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; });
            });
            sfx.potionUse && sfx.potionUse();
          }
        }
      }
    ],
    warps: [
      { fromX: 7, fromY: 9, targetMap: "PALLET_TOWN", targetX: 2, targetY: 3 }
    ]
  },
  PALLET_TOWN: {
    name: "PALLET TOWN",
    cols: 15,
    rows: 10,
    tiles: [
      [1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1],
      [1, 4, 4, 4, 1, 0, 0, 0, 1, 4, 4, 4, 1, 1, 1],
      [1, 4, 4, 4, 1, 0, 0, 0, 1, 4, 4, 4, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [1, 2, 2, 0, 0, 2, 2, 2, 0, 0, 3, 3, 3, 3, 1],
      [1, 2, 2, 0, 0, 2, 2, 2, 0, 0, 3, 3, 3, 3, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 1],
      [1, 2, 2, 2, 0, 0, 2, 2, 2, 0, 3, 3, 3, 3, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ],
    npcs: [
      {
        name: "LASS",
        x: 5,
        y: 7,
        palette: { body: "#78a870", hair: "#d48252" },
        dialogue: [],
        getDialogue: () => {
          if (player.team.length === 0) {
            return [
              "Lass: Pallet Town is so peaceful and cozy!",
              "Lass: But watch out—wild Pokémon lurk in the tall grass just outside of town!",
              "Lass: Make sure you talk to Professor Oak first to get your partner Pokémon!"
            ];
          } else {
            return [
              "Lass: Wow, you have your very own Pokémon now!",
              "Lass: If your Pokémon ever gets hurt, you can rest up back home with your Mom."
            ];
          }
        }
      },
      {
        name: "PROF. OAK",
        x: 7,
        y: 3,
        palette: { body: "#ab5945", hair: "#ebdcd0" },
        dialogue: [],
        getDialogue: () => {
          if (player.team.length === 0) {
            return [
              "Oak: Ah, Red! Welcome! Every great trainer starts right here.",
              "Oak: Pallet Town is surrounded by wild Pokémon hiding in the tall grass.",
              "Oak: You must have a Pokémon of your own before setting foot out there!",
              "Oak: Come, I have three fine choices waiting for you!"
            ];
          } else {
            return [
              `Oak: How is ${player.team[0].name} doing? It looks very strong and healthy!`,
              "Oak: The road north to Viridian City is now open for you.",
              "Oak: Keep training, explore the tall grass, and your journey will unfold!"
            ];
          }
        },
        onInteract: () => {
          if (player.team.length === 0) {
            triggerOakStarterChoice();
            return;
          }
          player.rareCandies = 99;
          dialogue.speaker = "PROF. OAK";
          dialogue.queue = [
            `Oak: ${player.team[0].name} is a fantastic partner!`,
            "Oak: The road north to Viridian City is ready for you.",
            "Oak: Keep training and your bond will grow stronger!"
          ];
          dialogue.activeCallback = null;
          setDialogueText(dialogue.queue[0]);
          gameState = STATE.DIALOGUE;
          sfx.levelUp && sfx.levelUp();
        }
      },
      {
        name: "BLUE",
        x: 3,
        y: 4,
        palette: { body: "#415582", hair: "#b87635" },
        dialogue: [],
        getDialogue: () => {
          if (player.team.length === 0) {
            return [
              "Blue: Yo, Red! Gramps (Prof. Oak) is waiting for you in the middle of town!",
              "Blue: Don't even think about going into the tall grass without a Pokémon.",
              "Blue: Wild Pokémon will jump out and you won't be able to fight back!"
            ];
          } else {
            return [
              `Blue: Hmph, so Gramps gave you a ${player.team[0].name}? Not bad!`,
              "Blue: Heading north past Viridian will lead you straight to Pewter City!",
              "Blue: Gym Leader Brock awaits there with rock-hard Pokémon!"
            ];
          }
        }
      }
    ],
    encounters: [
      {
        id: 16, name: "PIDGEY", type: "NORMAL", hp: 18, maxHp: 18, attack: 11, defense: 9, speed: 12,
        level: 3, baseExp: 22, catchRate: 0.75,
        spriteKey: "pidgey_front", backSpriteKey: "pidgey_back",
        moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "GUST", power: 10, kind: "special" }]
      },
      {
        id: 19, name: "RATTATA", type: "NORMAL", hp: 16, maxHp: 16, attack: 12, defense: 8, speed: 14,
        level: 2, baseExp: 18, catchRate: 0.8,
        spriteKey: "rattata_front", backSpriteKey: "rattata_back",
        moves: [{ name: "TACKLE", power: 6, kind: "physical" }, { name: "BITE", power: 11, kind: "physical" }]
      },
      {
        id: 25, name: "PIKACHU", type: "ELECTRIC", hp: 20, maxHp: 20, attack: 14, defense: 9, speed: 18,
        level: 4, baseExp: 35, catchRate: 0.5,
        spriteKey: "pikachu_front", backSpriteKey: "pikachu_back",
        moves: [{ name: "QUICK ATTACK", power: 8, kind: "physical" }, { name: "THUNDERSHOCK", power: 13, kind: "special" }]
      }
    ],
    warps: [
      { fromX: 2, fromY: 2, targetMap: "REDS_HOUSE", targetX: 7, targetY: 8 },
      { fromX: 6, fromY: 0, targetMap: "VIRIDIAN_CITY", targetX: 6, targetY: 8 },
      { fromX: 7, fromY: 0, targetMap: "VIRIDIAN_CITY", targetX: 7, targetY: 8 }
    ]
  },
  VIRIDIAN_CITY: {
    name: "VIRIDIAN CITY",
    cols: 15,
    rows: 10,
    tiles: [
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 5, 5, 5, 1, 7, 7, 7, 1, 4, 4, 4, 1, 1, 1],
      [1, 5, 5, 5, 1, 7, 7, 7, 1, 4, 4, 4, 1, 1, 1],
      [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 1, 1],
      [1, 6, 6, 7, 0, 0, 0, 0, 7, 7, 6, 6, 0, 1, 1],
      [1, 2, 2, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0, 1, 1],
      [1, 2, 2, 0, 0, 1, 1, 0, 0, 2, 2, 2, 0, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    ],
    npcs: [
      {
        name: "NURSE JOY",
        x: 2,
        y: 3,
        palette: { body: "#d87a92", hair: "#f5bfcc" },
        dialogue: [
          "Nurse Joy: Welcome to the Pokémon Center!",
          "Your Pokémon have been fully healed to tip-top shape!"
        ],
        onInteract: () => {
          player.team.forEach(p => { p.hp = p.maxHp; p.status = null; (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; }); });
          sfx.potionUse();
        }
      },
      {
        name: "TRAINER RED",
        x: 10,
        y: 4,
        palette: { body: "#b53a3a", hair: "#4d382f" },
        dialogue: [
          "Red: The road north leads to Pewter City!",
          "Be prepared before challenging Gym Leader Brock!"
        ]
      }
    ],
    encounters: [
      {
        id: 1, name: "BULBASAUR", type: "GRASS", hp: 22, maxHp: 22, attack: 13, defense: 12, speed: 10,
        level: 4, baseExp: 38, catchRate: 0.55,
        spriteKey: "bulbasaur_front", backSpriteKey: "bulbasaur_back",
        moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "VINE WHIP", power: 13, kind: "special" }]
      },
      {
        id: 43, name: "ODDISH", type: "GRASS", hp: 17, maxHp: 17, attack: 12, defense: 10, speed: 8,
        level: 3, baseExp: 24, catchRate: 0.75,
        spriteKey: "oddish_front", backSpriteKey: "oddish_back",
        moves: [{ name: "ABSORB", power: 9, kind: "special" }, { name: "ACID", power: 11, kind: "special" }]
      },
      {
        id: 10, name: "CATERPIE", type: "BUG", hp: 15, maxHp: 15, attack: 9, defense: 8, speed: 11,
        level: 3, baseExp: 16, catchRate: 0.85,
        spriteKey: "caterpie_front", backSpriteKey: "caterpie_back",
        moves: [{ name: "TACKLE", power: 6, kind: "physical" }, { name: "BUG BITE", power: 10, kind: "physical" }]
      }
    ],
    warps: [
      { fromX: 6, fromY: 9, targetMap: "PALLET_TOWN", targetX: 6, targetY: 1 },
      { fromX: 7, fromY: 9, targetMap: "PALLET_TOWN", targetX: 7, targetY: 1 },
      { fromX: 6, fromY: 0, targetMap: "VIRIDIAN_FOREST", targetX: 6, targetY: 8 },
      { fromX: 7, fromY: 0, targetMap: "VIRIDIAN_FOREST", targetX: 7, targetY: 8 }
    ]
  },
  PEWTER_CITY: {
    name: "PEWTER CITY",
    cols: 15,
    rows: 10,
    tiles: [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 8, 8, 8, 1, 7, 7, 7, 1, 5, 5, 5, 1, 1, 1],
      [1, 8, 8, 8, 1, 7, 7, 7, 1, 5, 5, 5, 1, 1, 1],
      [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 0, 1, 1],
      [1, 7, 0, 0, 0, 7, 7, 7, 0, 0, 0, 7, 0, 1, 1],
      [1, 2, 2, 0, 0, 7, 7, 7, 0, 0, 2, 2, 0, 1, 1],
      [1, 2, 2, 0, 0, 7, 7, 7, 0, 0, 2, 2, 0, 1, 1],
      [1, 0, 0, 0, 0, 7, 7, 7, 0, 0, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1]
    ],
    npcs: [
      {
        name: "BROCK",
        x: 2,
        y: 3,
        palette: { body: "#a8713b", hair: "#332720" },
        dialogue: [],
        getDialogue: () => {
          if (player.hasBoulderBadge) {
            return [
              "Brock: That BOULDER BADGE looks great on you!",
              "It proves you triumphed over the Pewter City Gym!"
            ];
          }
          return [
            "Brock: I'm Brock, the Pewter City Gym Leader!",
            "My rock-hard willpower is evident even in my Pokémon!",
            "Show me what your team is made of!"
          ];
        },
        onInteract: () => {
          if (!player.hasBoulderBadge) {
            startGymLeaderBattle();
          }
        }
      },
      {
        name: "GYM GUIDE",
        x: 2,
        y: 4,
        palette: { body: "#3865a3", hair: "#c7b5a5" },
        dialogue: [
          "Guide: Yo! Champ in the making!",
          "Brock uses rock-type Pokémon! Water and Grass moves deal major damage!"
        ]
      },
      {
        name: "NURSE JOY",
        x: 10,
        y: 3,
        palette: { body: "#d87a92", hair: "#f5bfcc" },
        dialogue: [
          "Nurse Joy: Welcome to the Pewter City Pokémon Center!",
          "Your Pokémon are healed and energized!"
        ],
        onInteract: () => {
          player.team.forEach(p => { p.hp = p.maxHp; p.status = null; (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; }); });
          sfx.potionUse();
        }
      }
    ],
    encounters: [
      {
        id: 74, name: "GEODUDE", type: "ROCK", hp: 26, maxHp: 26, attack: 14, defense: 20, speed: 9,
        level: 6, baseExp: 38, catchRate: 0.6,
        spriteKey: "geodude_front", backSpriteKey: "geodude_back",
        moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "ROCK THROW", power: 12, kind: "physical" }]
      },
      {
        id: 16, name: "PIDGEY", type: "NORMAL", hp: 20, maxHp: 20, attack: 12, defense: 10, speed: 13,
        level: 5, baseExp: 26, catchRate: 0.7,
        spriteKey: "pidgey_front", backSpriteKey: "pidgey_back",
        moves: [{ name: "TACKLE", power: 7, kind: "physical" }, { name: "GUST", power: 11, kind: "special" }]
      }
    ],
    warps: [
      { fromX: 6, fromY: 9, targetMap: "VIRIDIAN_FOREST", targetX: 6, targetY: 1 },
      { fromX: 7, fromY: 9, targetMap: "VIRIDIAN_FOREST", targetX: 7, targetY: 1 }
    ]
  }
};

function mkEnemy(id, level, hp) {
  const e = JSON.parse(JSON.stringify(SPECIES_DB[id])), n = e.name.toLowerCase();
  e.level = level; e.hp = e.maxHp = hp; e.spriteKey = n + "_front"; e.backSpriteKey = n + "_back";
  checkLevelUpMoves(e);
  ensurePP(e);
  return e;
}
function wild(id, lv, exp, rate) { const e = mkEnemy(id, lv, SPECIES_DB[id].baseHp + lv); e.baseExp = exp; e.catchRate = rate; return e; }
function startTrainerBattle(name, team, onWin) {
  music.pause(); sfx.encounter();
  team.forEach(mon => {
    mon.hp = mon.maxHp;
    mon.status = null;
    delete mon.sleepTurns;
    ensurePP(mon);
  });
  Object.assign(battle, { isTrainerBattle: true, isGym: false, trainerName: name, trainerTeam: team, trainerTeamIndex: 0, onWin });
  gameState = STATE.BATTLE_TRANSITION; transition.radius = 0; transition.active = true;
}

MAPS.VIRIDIAN_FOREST = {
  name: "VIRIDIAN FOREST", cols: 15, rows: 10,
  tiles: [
    [1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,2,2,1,2,2,0,0,2,2,1,2,2,2,1],
    [1,2,2,2,2,1,0,0,2,1,1,2,2,2,1],
    [1,1,2,2,0,0,0,0,0,2,2,2,1,1,1],
    [1,2,2,1,0,2,2,2,0,0,1,2,2,2,1],
    [1,2,2,2,0,2,1,2,2,0,2,2,2,1,1],
    [1,1,1,2,0,0,0,2,2,0,2,1,2,2,1],
    [1,2,2,2,2,2,0,0,0,0,2,2,2,2,1],
    [1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,1,1,1,1,1,1,1]
  ],
  npcs: [
    { name: "BUG CATCHER", x: 6, y: 3, palette: { body: "#6f9a3c", hair: "#e0c060" }, id: "bug_catcher", facing: "DOWN", sight: 3, isTrainer: true,
      getDialogue: () => player.beatBugCatcher
        ? ["Bug Catcher: Wow, you're strong! Bugs are the best, though!"]
        : ["Bug Catcher: Hey! You walked into my forest!", "My bug Pokémon are my pride and joy. Let's battle!"],
      dialogue: [],
      onInteract: () => {
        if (player.beatBugCatcher) return;
        startTrainerBattle("BUG CATCHER", [mkEnemy(10, 8, 26), mkEnemy(11, 9, 32)], () => { player.beatBugCatcher = true; player.pokeBalls += 5; });
      } },
    { name: "CAMPER", x: 8, y: 7, palette: { body: "#c47a3a", hair: "#4a3328" },
      dialogue: ["Camper: The forest is so peaceful. Fireflies come out at night!", "Your partner Pokémon follows you - press Z on it to say hi!"] }
  ],
  encounters: [wild(10, 4, 16, 0.85), wild(11, 5, 20, 0.8), wild(43, 4, 24, 0.75), wild(25, 5, 35, 0.4)],
  warps: [
    { fromX: 6, fromY: 9, targetMap: "VIRIDIAN_CITY", targetX: 6, targetY: 1 },
    { fromX: 7, fromY: 9, targetMap: "VIRIDIAN_CITY", targetX: 7, targetY: 1 },
    { fromX: 6, fromY: 0, targetMap: "PEWTER_CITY", targetX: 6, targetY: 8 },
    { fromX: 7, fromY: 0, targetMap: "PEWTER_CITY", targetX: 7, targetY: 8 }
  ]
};

MAPS.PEWTER_CITY.tiles[3][13] = 0; MAPS.PEWTER_CITY.tiles[3][14] = 0;
MAPS.PEWTER_CITY.warps.push({ fromX: 14, fromY: 3, targetMap: "ROUTE_3", targetX: 1, targetY: 3 });
MAPS.PEWTER_CITY.npcs.push({ name: "HIKER", x: 12, y: 5, palette: { body: "#8a6a3a", hair: "#5a4a3a" },
  dialogue: ["Hiker: Route 3 runs east of town, and it leads to Mt. Moon!", "Zubats and Clefairy live in the cave. Bring Potions!"] });
const trainer3 = (id, name, x, y, pal, intro, mk, facing = "DOWN", sight = 3) => ({
  id, name, x, y, palette: pal, dialogue: [], facing, sight, isTrainer: true,
  getDialogue: () => player.beat[id] ? [name + ": Great battle! You're really strong."] : intro,
  onInteract: () => { if (player.beat[id]) return; startTrainerBattle(name, mk(), () => { player.beat[id] = true; player.pokeBalls += 3; }); }
});
MAPS.ROUTE_3 = { name: "ROUTE 3", cols: 15, rows: 10,
  tiles: [[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,2,2,2,1,2,2,2,2,1,2,2,2,2,1],[1,2,2,1,0,0,2,2,0,0,0,1,2,2,1],
    [0,0,0,0,0,2,2,0,0,2,2,0,0,0,1],[1,2,2,0,2,2,1,0,2,2,1,0,2,2,1],[1,2,2,0,0,0,0,0,0,0,0,0,0,2,1],
    [1,1,2,2,1,2,2,1,2,2,2,1,0,0,0],[1,2,2,2,2,2,1,2,2,1,2,2,2,2,1],[1,2,2,1,2,2,2,2,1,2,2,2,2,2,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
  npcs: [
    trainer3("r3a", "YOUNGSTER", 8, 5, { body: "#3a8a5a", hair: "#3a2a20" }, ["Youngster: Hey! My Spearow and I train every day. Battle me!"], () => [mkEnemy(21, 9, 28), mkEnemy(19, 10, 28)], "LEFT", 3),
    trainer3("r3b", "LASS", 11, 3, { body: "#c85a8a", hair: "#7a3a2a" }, ["Lass: The wind is lovely here. Want to battle?"], () => [mkEnemy(16, 10, 30), mkEnemy(35, 11, 36)], "DOWN", 3)
  ],
  encounters: [wild(21, 7, 30, 0.7), wild(19, 6, 20, 0.8), wild(16, 7, 28, 0.75), wild(74, 8, 36, 0.55)],
  warps: [{ fromX: 0, fromY: 3, targetMap: "PEWTER_CITY", targetX: 13, targetY: 3 }, { fromX: 14, fromY: 6, targetMap: "MT_MOON", targetX: 1, targetY: 6 }],
  hidden: [hid("r1", 9, 3, "pokeBalls", 4), hid("r2", 2, 7, "money", 400)], picnic: { x: 8, y: 7 } };
MAPS.MT_MOON = { name: "MT. MOON", cols: 15, rows: 10,
  tiles: [[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9],[9,10,10,9,10,10,10,9,7,7,10,10,10,10,9],[9,10,9,9,10,9,10,10,7,9,9,10,9,10,9],
    [9,10,10,10,10,9,10,9,7,7,10,10,9,10,9],[9,9,10,9,9,9,7,7,7,9,10,10,10,10,9],[9,10,10,10,7,7,7,9,9,9,10,9,9,10,9],
    [0,7,7,7,7,9,10,10,10,7,7,7,10,10,0],[9,10,9,9,7,9,9,9,10,9,9,7,9,10,9],[9,10,10,10,7,7,7,7,7,7,10,10,10,10,9],[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]],
  npcs: [
    trainer3("mm1", "SUPER NERD", 7, 6, { body: "#6a6aa0", hair: "#d8d8d8" }, ["Super Nerd: Fossils and moon rocks fascinate me! Fight me!"], () => [mkEnemy(74, 11, 34), mkEnemy(41, 12, 31)], "UP", 3),
    { name: "GEOLOGIST", x: 12, y: 8, palette: { body: "#a08a5a", hair: "#4a3a2a" },
      dialogue: ["Geologist: They say Clefairy dance here under the full moon.", "Follow the tunnel east to reach CERULEAN CITY and Gym Leader Misty!"] }
  ],
  encounters: [wild(41, 8, 30, 0.7), wild(35, 9, 45, 0.45), wild(74, 8, 38, 0.6), wild(41, 10, 34, 0.65)],
  warps: [
    { fromX: 0, fromY: 6, targetMap: "ROUTE_3", targetX: 13, targetY: 6 },
    { fromX: 14, fromY: 6, targetMap: "CERULEAN_CITY", targetX: 1, targetY: 5 }
  ],
  hidden: [hid("m1", 1, 1, "rareCandies", 3), hid("m2", 13, 1, "fullHeals", 2), hid("m3", 10, 8, "money", 600)] };

MAPS.CERULEAN_CITY = {
  name: "CERULEAN CITY", cols: 15, rows: 10,
  tiles: [
    [1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,4,4,1,1,0,0,1,8,8,8,1,1,1],
    [1,1,4,4,1,0,0,0,0,8,8,8,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,3,3,3,3,3,7,7,3,3,3,3,0,1],
    [0,0,3,3,3,3,3,7,7,3,3,3,3,0,1],
    [1,0,3,3,3,3,3,7,7,3,3,3,3,0,1],
    [1,0,0,0,0,0,0,0,0,0,4,4,0,0,1],
    [1,2,2,2,12,2,2,0,0,2,4,4,2,2,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1]
  ],
  npcs: [
    {
      name: "LEADER MISTY",
      x: 10,
      y: 3,
      palette: { body: "#e89a20", hair: "#d45828" },
      dialogue: [],
      getDialogue: () => {
        if (player.hasCascadeBadge) {
          return [
            "Misty: You're an incredible trainer, Red!",
            "The Cascade Badge looks wonderful in your badge case!"
          ];
        }
        return [
          "Misty: Hi! I'm Misty, the Cerulean City Gym Leader!",
          "My policy is an all-out offensive with Water-type Pokémon! Let's battle!"
        ];
      },
      onInteract: () => {
        if (!player.hasCascadeBadge) {
          startGymLeaderBattleMisty();
        }
      }
    },
    {
      name: "NURSE JOY",
      x: 3,
      y: 3,
      palette: { body: "#d87a92", hair: "#f5bfcc" },
      dialogue: [
        "Nurse Joy: Welcome to Cerulean Pokémon Center!",
        "Your Pokémon have been healed and energized to full health!"
      ],
      onInteract: () => {
        player.team.forEach(p => {
          p.hp = p.maxHp;
          p.status = null;
          (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; });
        });
        sfx.potionUse && sfx.potionUse();
      }
    },
    trainer3("cer1", "SWIMMER LUIS", 6, 5, { body: "#2a80b9", hair: "#333333" },
      ["Swimmer: Water Pokémon are swift and graceful!", "Feel the splash of Cerulean City!"],
      () => [mkEnemy(120, 16, 42), mkEnemy(11, 15, 34)], "RIGHT", 3),
    {
      name: "BIKE FAN",
      x: 3,
      y: 7,
      palette: { body: "#c44d2d", hair: "#4d392e" },
      getDialogue: () => {
        if (!player.hasBicycle) {
          return [
            "Bike Fan: Whoa! You walked all the way across Mt. Moon? You need wheels, kid!",
            "Take this BICYCLE! Press B anytime outdoors to ride at 3x speed!"
          ];
        }
        return [
          "Bike Fan: How does the wind feel in your hair?",
          "Press B anytime outdoors to mount or dismount your bike!"
        ];
      },
      onInteract: () => {
        if (!player.hasBicycle) {
          player.hasBicycle = true;
          sfx.bikeBell && sfx.bikeBell();
        }
      }
    },
    {
      name: "FISHERMAN NED",
      x: 12,
      y: 5,
      palette: { body: "#3865a3", hair: "#c8b298" },
      getDialogue: () => {
        if (player.hasOldRod) {
          return [
            "Fisherman Ned: How are the fish biting today?",
            "Remember: stand facing any water and press Z to cast your line!"
          ];
        }
        return [
          "Fisherman Ned: Ah, the tranquil waters of Cerulean City! Do you like to fish?",
          "Take this OLD ROD! Stand facing any water and press Z to cast your line!"
        ];
      },
      onInteract: () => {
        if (!player.hasOldRod) {
          player.hasOldRod = true;
          sfx.levelUp && sfx.levelUp();
        }
      }
    }
  ],
  encounters: [wild(120, 14, 42, 0.65), wild(43, 13, 38, 0.6), wild(121, 18, 65, 0.3), wild(19, 13, 30, 0.5)],
  warps: [
    { fromX: 0, fromY: 5, targetMap: "MT_MOON", targetX: 13, targetY: 6 },
    { fromX: 6, fromY: 0, targetMap: "ROUTE_24", targetX: 7, targetY: 11 },
    { fromX: 7, fromY: 0, targetMap: "ROUTE_24", targetX: 7, targetY: 11 },
    { fromX: 7, fromY: 9, targetMap: "VERMILION_CITY", targetX: 7, targetY: 1 },
    { fromX: 8, fromY: 9, targetMap: "VERMILION_CITY", targetX: 7, targetY: 1 }
  ],
  hidden: [hid("cer1", 13, 3, "moonStones", 1), hid("cer2", 13, 7, "money", 800)],
  picnic: { x: 7, y: 3 }
};

// ROUTE 24 (NUGGET BRIDGE)
MAPS.ROUTE_24 = {
  name: "ROUTE 24", cols: 15, rows: 12,
  tiles: [
    [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [1,3,3,3,3,3,0,0,0,0,0,0,0,0,0],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,0,0],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,1,1,1,1,1,7,7,7,1,1,1,1,1,1]
  ],
  npcs: [
    trainer3("r24_1", "BUG CATCHER CALE", 7, 10, { body: "#6f9a3c", hair: "#e0c060" },
      ["Bug Catcher: I'm trainer #1 on Nugget Bridge! Battle me!"],
      () => [mkEnemy(10, 14, 38), mkEnemy(12, 16, 52)], "DOWN", 2),
    trainer3("r24_2", "LASS ALI", 7, 8, { body: "#c85a8a", hair: "#7a3a2a" },
      ["Lass: I'm trainer #2! You won't slip past me!"],
      () => [mkEnemy(16, 14, 40), mkEnemy(43, 14, 42)], "DOWN", 2),
    trainer3("r24_3", "YOUNGSTER TIMMY", 7, 6, { body: "#3a8a5a", hair: "#3a2a20" },
      ["Youngster: Trainer #3 here! My Pokémon are quick!"],
      () => [mkEnemy(19, 14, 38), mkEnemy(21, 15, 44)], "DOWN", 2),
    trainer3("r24_4", "CAMPER ETHAN", 7, 4, { body: "#c47a3a", hair: "#4a3328" },
      ["Camper: Trainer #4! We hike every mountain in Kanto!"],
      () => [mkEnemy(74, 15, 48), mkEnemy(41, 15, 44)], "DOWN", 2),
    trainer3("r24_5", "PICNICKER SHANE", 6, 3, { body: "#e88ba8", hair: "#4a2a1a" },
      ["Picnicker: Trainer #5! I'm the last bridge challenger!"],
      () => [mkEnemy(35, 16, 54), mkEnemy(17, 16, 52)], "RIGHT", 2),
    {
      name: "ROCKET GRUNT",
      x: 7,
      y: 1,
      palette: { body: "#2a2228", hair: "#b83030" },
      dialogue: [],
      getDialogue: () => {
        if (player.beat["r24_grunt"]) {
          return ["Rocket Grunt: Grr! You'd have made a great Team Rocket grunt..."];
        }
        return [
          "Rocket Grunt: By defeating 5 trainers, you won a fabulous prize!",
          "Player received the fabulous NUGGET! (Worth $5,000 at Marts!)",
          "How about joining TEAM ROCKET? No? Then prepare for defeat!"
        ];
      },
      onInteract: () => {
        if (!player.beat["r24_grunt"]) {
          player.nuggets = (player.nuggets || 0) + 1;
          player.money += 2000;
          startTrainerBattle("ROCKET GRUNT", [mkEnemy(20, 16, 56), mkEnemy(41, 17, 50)], () => {
            player.beat["r24_grunt"] = true;
          });
        }
      }
    }
  ],
  encounters: [wild(43, 14, 40, 0.6), wild(16, 14, 38, 0.6), wild(25, 14, 45, 0.35), wild(10, 12, 28, 0.7)],
  warps: [
    { fromX: 7, fromY: 11, targetMap: "CERULEAN_CITY", targetX: 6, targetY: 1 },
    { fromX: 14, fromY: 0, targetMap: "BILLS_COTTAGE", targetX: 2, targetY: 6 },
    { fromX: 14, fromY: 1, targetMap: "BILLS_COTTAGE", targetX: 2, targetY: 6 }
  ],
  hidden: [hid("r24_1", 13, 4, "rareCandies", 2)]
};

// BILL'S SEA COTTAGE
MAPS.BILLS_COTTAGE = {
  name: "BILL'S COTTAGE", cols: 15, rows: 10,
  tiles: [
    [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [11,11,15,11,17,17,11,14,11,20,20,11,11,11,11],
    [11,12,12,12,12,12,12,12,12,12,12,12,12,12,11],
    [11,12,12,13,13,13,13,13,13,13,12,12,12,12,11],
    [11,12,12,13,16,16,13,13,13,13,12,12,12,12,11],
    [11,12,12,13,13,13,13,13,13,13,12,12,12,12,11],
    [11,12,12,12,12,12,12,12,12,12,12,12,12,12,11],
    [11,12,12,12,12,12,12,12,12,12,12,12,12,12,11],
    [11,11,11,11,11,11,11,18,11,11,11,11,11,11,11],
    [11,11,11,11,11,11,11,18,11,11,11,11,11,11,11]
  ],
  npcs: [
    {
      name: "RESEARCHER BILL",
      x: 7,
      y: 4,
      palette: { body: "#3a8a5a", hair: "#d47a3a" },
      dialogue: [],
      getDialogue: () => {
        if (player.gotEevee) {
          return [
            "Bill: Eevee is a marvel of evolutionary potential!",
            "You can use a Thunder Stone, Water Stone, or Moon Stone to evolve it into unique forms!"
          ];
        }
        return [
          "Bill: Yeehah! I'm Bill, a true-blue Pokémon researcher!",
          "Thanks for visiting my cottage by the sea! Here, take this rare Pokémon I've been raising!",
          "Player received the rare Pokémon EEVEE (Lv 15)!"
        ];
      },
      onInteract: () => {
        if (!player.gotEevee) {
          const eevee = JSON.parse(JSON.stringify(SPECIES_DB[133]));
          eevee.level = 15; eevee.hp = eevee.maxHp = 44;
          eevee.spriteKey = "eevee_front"; eevee.backSpriteKey = "eevee_back";
          ensurePP(eevee);
          if (player.team.length < 6) player.team.push(eevee);
          else player.pc.push(eevee);
          player.gotEevee = true;
          sfx.catchSuccess && sfx.catchSuccess();
          cryAudio.play(133);
        }
      }
    }
  ],
  warps: [
    { fromX: 7, fromY: 9, targetMap: "ROUTE_24", targetX: 13, targetY: 1 }
  ]
};

// VERMILION CITY
MAPS.VERMILION_CITY = {
  name: "VERMILION CITY", cols: 15, rows: 10,
  tiles: [
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
    [1,1,4,4,1,1,7,7,7,1,8,8,8,1,1],
    [1,1,4,4,1,1,7,7,7,1,8,8,8,1,1],
    [1,0,0,0,0,0,7,7,7,0,0,0,0,0,1],
    [1,0,5,5,0,0,7,7,7,0,0,4,4,0,1],
    [1,0,5,5,0,0,7,7,7,0,0,4,4,0,1],
    [1,0,0,0,0,0,7,7,7,0,0,0,0,0,1],
    [1,2,2,2,0,0,7,7,7,0,0,2,2,2,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1],
    [1,3,3,3,3,3,7,7,7,3,3,3,3,3,1]
  ],
  npcs: [
    {
      name: "LEADER LT. SURGE",
      x: 10,
      y: 3,
      palette: { body: "#3d542a", hair: "#e0c040" },
      dialogue: [],
      getDialogue: () => {
        if (player.hasThunderBadge) {
          return [
            "Lt. Surge: Ten-hut! Your electric battling spirit is top notch, Red!",
            "Wear that THUNDER BADGE with pride!"
          ];
        }
        return [
          "Lt. Surge: Hey, kid! What do you think you're doing here?",
          "I'm Lt. Surge, the Lightning American! Electric Pokémon saved me in war!",
          "Zapping foes is my specialty! Let's rumble!"
        ];
      },
      onInteract: () => {
        if (!player.hasThunderBadge) {
          startGymLeaderBattleSurge();
        }
      }
    },
    {
      name: "NURSE JOY",
      x: 3,
      y: 5,
      palette: { body: "#d87a92", hair: "#f5bfcc" },
      dialogue: [
        "Nurse Joy: Welcome to Vermilion Pokémon Center!",
        "Your Pokémon have been rested and restored to full vigor!"
      ],
      onInteract: () => {
        player.team.forEach(p => {
          p.hp = p.maxHp; p.status = null;
          (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; });
        });
        sfx.potionUse && sfx.potionUse();
      }
    },
    {
      name: "SAILOR DWAYNE",
      x: 5,
      y: 7,
      palette: { body: "#284a7a", hair: "#202028" },
      dialogue: [
        "Sailor Dwayne: Welcome to Vermilion Port! The grand cruise ship S.S. ANNE is docked south on the pier!",
        "Step down onto the gangway to explore the ship!"
      ]
    }
  ],
  encounters: [wild(100, 16, 50, 0.6), wild(25, 16, 48, 0.4), wild(19, 15, 34, 0.6), wild(60, 15, 45, 0.5)],
  warps: [
    { fromX: 7, fromY: 0, targetMap: "CERULEAN_CITY", targetX: 7, targetY: 8 },
    { fromX: 8, fromY: 0, targetMap: "CERULEAN_CITY", targetX: 7, targetY: 8 },
    { fromX: 7, fromY: 9, targetMap: "SS_ANNE", targetX: 7, targetY: 1 },
    { fromX: 8, fromY: 9, targetMap: "SS_ANNE", targetX: 7, targetY: 1 }
  ],
  hidden: [hid("ver1", 13, 2, "rareCandies", 2), hid("ver2", 2, 7, "money", 1000)],
  picnic: { x: 7, y: 6 }
};

// S.S. ANNE (LUXURY OCEAN LINER)
MAPS.SS_ANNE = {
  name: "S.S. ANNE", cols: 15, rows: 10,
  tiles: [
    [11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],
    [11,12,12,12,12,12,12,12,12,12,12,12,12,12,11],
    [11,12,13,13,13,13,13,13,13,13,13,13,13,12,11],
    [11,12,13,16,16,13,13,13,13,13,16,16,13,12,11],
    [11,12,13,13,13,13,13,13,13,13,13,13,13,12,11],
    [11,12,12,12,12,12,12,12,12,12,12,12,12,12,11],
    [11,12,13,13,13,13,13,13,13,13,13,13,13,12,11],
    [11,12,13,16,16,13,20,20,20,13,16,16,13,12,11],
    [11,12,12,12,12,12,12,18,12,12,12,12,12,12,11],
    [11,11,11,11,11,11,11,18,11,11,11,11,11,11,11]
  ],
  npcs: [
    trainer3("ss1", "GENTLEMAN ARTHUR", 4, 3, { body: "#3a2a40", hair: "#dcd6ce" },
      ["Gentleman: Bonjour! A cruise across the high seas is simply divine!"],
      () => [mkEnemy(16, 17, 44), mkEnemy(133, 18, 52)], "DOWN", 2),
    trainer3("ss2", "SAILOR BOB", 10, 3, { body: "#284a7a", hair: "#302820" },
      ["Sailor: Ahoy! Working the S.S. Anne keeps my Pokémon in fighting trim!"],
      () => [mkEnemy(60, 18, 48), mkEnemy(90, 18, 48)], "DOWN", 2),
    {
      name: "CAPTAIN",
      x: 7,
      y: 6,
      palette: { body: "#1a2c4a", hair: "#e8e0d5" },
      dialogue: [],
      getDialogue: () => {
        if (player.beat["ss_captain"]) {
          return ["Captain: Ah, much better! Smooth sailing ahead, young voyager!"];
        }
        return [
          "Captain: Urrp... seasickness gets the best of even old captains!",
          "Thank you for stopping by my cabin to check on me, Red!",
          "Take this generous gift for your kindness! EXP. SHARE, +$3,000 & 5 RARE CANDIES!"
        ];
      },
      onInteract: () => {
        if (!player.beat["ss_captain"]) {
          player.beat["ss_captain"] = true;
          player.hasExpShare = true;
          player.expShareActive = true;
          player.money += 3000;
          player.rareCandies += 5;
          sfx.levelUp && sfx.levelUp();
        }
      }
    }
  ],
  warps: [
    { fromX: 7, fromY: 0, targetMap: "VERMILION_CITY", targetX: 7, targetY: 8 },
    { fromX: 7, fromY: 9, targetMap: "VERMILION_CITY", targetX: 7, targetY: 8 }
  ]
};

const STARTER_OPTIONS = {
  1: {
    id: 4,
    name: "CHARMANDER",
    type: "FIRE",
    hp: 24,
    maxHp: 24,
    attack: 14,
    defense: 11,
    speed: 13,
    level: 5,
    exp: 0,
    maxExp: 40,
    spriteKey: "charmander_front",
    backSpriteKey: "charmander_back",
    moves: [
      { name: "SCRATCH", power: 8, kind: "physical" },
      { name: "EMBER", power: 14, kind: "special" }
    ]
  },
  2: {
    id: 1,
    name: "BULBASAUR",
    type: "GRASS",
    hp: 22,
    maxHp: 22,
    attack: 13,
    defense: 12,
    speed: 10,
    level: 5,
    exp: 0,
    maxExp: 40,
    spriteKey: "bulbasaur_front",
    backSpriteKey: "bulbasaur_back",
    moves: [
      { name: "TACKLE", power: 7, kind: "physical" },
      { name: "VINE WHIP", power: 13, kind: "special" }
    ]
  },
  3: {
    id: 7,
    name: "SQUIRTLE",
    type: "WATER",
    hp: 26,
    maxHp: 26,
    attack: 12,
    defense: 14,
    speed: 11,
    level: 5,
    exp: 0,
    maxExp: 40,
    spriteKey: "squirtle_front",
    backSpriteKey: "squirtle_back",
    moves: [
      { name: "TACKLE", power: 7, kind: "physical" },
      { name: "WATER GUN", power: 14, kind: "special" }
    ]
  }
};

const STARTER_CONFIG = STARTER_OPTIONS[1];

function makeStarterPokemon(choiceId) {
  const starter = STARTER_OPTIONS[choiceId];
  if (!starter) return null;
  return JSON.parse(JSON.stringify(starter));
}

const TILE_SIZE = 48;

// =============================================================================
// 6. ENGINE STATE & VARIABLES
// =============================================================================
const canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

const STATE = {
  OVERWORLD: "OVERWORLD",
  DIALOGUE: "DIALOGUE",
  BATTLE_TRANSITION: "BATTLE_TRANSITION",
  BATTLE: "BATTLE",
  OPTIONS_MENU: "OPTIONS_MENU",
  PARTY_MENU: "PARTY_MENU",
  STATS_VIEW: "STATS_VIEW",
  POKEDEX_VIEW: "POKEDEX_VIEW",
  BAG_MENU: "BAG_MENU",
  BAG_SELECT_TARGET: "BAG_SELECT_TARGET",
  EVOLUTION_SCENE: "EVOLUTION_SCENE",
  BADGE_AWARD: "BADGE_AWARD",
  TRAINER_CARD: "TRAINER_CARD",
  GAME_OVER: "GAME_OVER",
  TITLE: "TITLE",
  SHOP: "SHOP",
  SETTINGS: "SETTINGS",
  PC_BOX: "PC_BOX",
  STARTER_SELECT: "STARTER_SELECT",
  FISHING: "FISHING",
  TOWN_MAP: "TOWN_MAP",
  CAMPING: "CAMPING",
  LEVEL_UP_MODAL: "LEVEL_UP_MODAL",
  GAME_COMPLETE: "GAME_COMPLETE"
};

let gameState = STATE.TITLE; // landing page first
let currentMapKey = "REDS_HOUSE";
let currentMap = MAPS[currentMapKey];

const player = {
  gridX: 2,
  gridY: 2,
  x: 2 * TILE_SIZE,
  y: 2 * TILE_SIZE,
  facing: "DOWN",
  isMoving: false,
  moveProgress: 0,
  team: [],
  pokeBalls: 20,
  potions: 5,
  rareCandies: 99,
  hasBoulderBadge: false,
  hasCascadeBadge: false,
  hasThunderBadge: false,
  hasBicycle: false,
  isBiking: false,
  hasOldRod: false,
  hasTownMap: true,
  hasExpShare: true,
  expShareActive: true,
  nuggets: 0,
  visitedCities: { PALLET_TOWN: true, VIRIDIAN_CITY: true, PEWTER_CITY: true, CERULEAN_CITY: true, VERMILION_CITY: false },
  thunderStones: 1,
  moonStones: 1,
  money: 500,
  fullHeals: 1,
  found: {},
  berries: 3,
  steps: 0,
  pc: [],
  beat: {},
  storyFlags: { started: false, starterChosen: false }
};

let showTouchControls = true;
let optionsMenu = { index: 0, returnState: STATE.OVERWORLD, savedNotice: 0 };
let partyMenu = { selectedIndex: 0, returnState: STATE.OVERWORLD };
let statsViewingMon = null;
let starterSelect = { index: 0, starters: [1, 2, 3] };
let awardedBadge = "BOULDER";
const trainerAlert = { active: false, npc: null, timer: 0, dist: 0, stepProgress: 0 };

const POKEDEX_KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21, 25, 26, 35, 36, 41, 42, 43, 44, 45, 60, 74, 90, 95, 100, 120, 121, 129, 130, 133, 134, 135, 136];
let pokedexMenu = { index: 0, returnState: STATE.OVERWORLD };

// Bag State
let bagMenu = { index: 0, selectedItem: null, returnState: STATE.OVERWORLD };
let bagTargetIndex = 0;

// Evolution Animation State
let evoAnim = {
  active: false,
  targetMon: null,
  newSpecies: null,
  timer: 0,
  returnState: STATE.OVERWORLD
};

// Player Throwing Ball Animation (Battle)
let playerThrowAnim = {
  active: false,
  progress: 0,
  ballX: 0,
  ballY: 0,
  popped: false,
  targetIndex: 0
};

let dialogue = {
  queue: [], speaker: "", renderedText: "", fullText: "", charTimer: 0, activeCallback: null
};

let battle = {
  enemy: null, playerMon: null, activeTeamIndex: 0,
  enemyDispHP: 0, playerDispHP: 0, playerDispExp: 0,
  menuIndex: 0, menuState: "MAIN", pokemonMenuIndex: 0,
  forcedSwitch: false, message: "", turnLock: false, animShake: 0,
  playerOffset: { x: 0, y: 0 }, enemyOffset: { x: 0, y: 0 },
  slideIn: 0, particles: [], enemyFlicker: false, playerFlicker: false,
  pdx: 0, pdy: 0, edx: 0, edy: 0,
  eFaint: 0, pFaint: 0, eFaintOn: false, pFaintOn: false, flash: 0,
  enemyCaptured: false, enemyScale: 1,
  isTrainerBattle: false,
  trainerName: "",
  trainerTeam: [],
  trainerTeamIndex: 0
};

let pokeballAnim = {
  active: false, x: 0, y: 0,
  startX: 170, startY: 320, targetX: 530, targetY: 150, groundY: 200,
  progress: 0, rotation: 0, state: "THROW", wobbleCount: 0, maxWobbles: 3, wobbleAngle: 0, timer: 0
};

let transition = { radius: 0, maxRadius: 450, active: false };
let banner = { text: "RED'S HOUSE", alpha: 0 };
const keys = {};
let T = 0;
const fx = [];
const floaters = [];
const OPP = { UP: "DOWN", DOWN: "UP", LEFT: "RIGHT", RIGHT: "LEFT" };

function showMapBanner(name) {
  banner.text = name;
  banner.alpha = 2.5;
}
showMapBanner(currentMap.name);

// =============================================================================
// 7. TOUCH / MOBILE CONTROLS
// =============================================================================
function setJoystickVisibility(visible) {
  showTouchControls = visible;
  const container = document.getElementById("mobile-controls");
  if (visible) container.classList.remove("hidden");
  else container.classList.add("hidden");
}

document.querySelectorAll(".touch-btn").forEach(el => {
  const code = el.getAttribute("data-key");
  const handleDown = (e) => {
    e.preventDefault();
    sfx.init(); music.unlock();
    el.classList.add("active");
    window.dispatchEvent(new KeyboardEvent("keydown", { key: code, bubbles: true }));
  };
  const handleUp = (e) => {
    e.preventDefault();
    el.classList.remove("active");
    window.dispatchEvent(new KeyboardEvent("keyup", { key: code, bubbles: true }));
  };
  el.addEventListener("pointerdown", handleDown);
  el.addEventListener("pointerup", handleUp);
  el.addEventListener("pointercancel", handleUp);
});

// =============================================================================
// 8. INPUT CONTROLLER & MENUS
// =============================================================================
window.addEventListener("keydown", (e) => {
  sfx.init();
  music.unlock();
  if (e.key === "m" || e.key === "M") music.toggle();
  if ((e.key === "n" || e.key === "N") && gameState === STATE.OVERWORLD) {
    seasonOverride = seasonOverride >= 3 ? -1 : seasonOverride + 1;
    settings.season = seasonOverride; saveSettings();
    showMapBanner(seasonOverride < 0 ? "SEASON: AUTO" : SEASON_NAMES[seasonOverride].slice(2)); sfx.textBlip();
  }
  if ((e.key === "f" || e.key === "F") && gameState === STATE.OVERWORLD) {
    photoMode = !photoMode; if (photoMode) { showMapBanner("PHOTO: Z=SNAP F=EXIT"); banner.alpha = 0.9; } sfx.textBlip();
  }
  if (photoMode && gameState === STATE.OVERWORLD && (e.key === "z" || e.key === "Z" || e.key === "Enter")) { takePhoto(); }
  keys[e.key] = true;

  // BICYCLE (B key) & CYCLING BELL (Space key) (Recommendation 2)
  if ((e.key === "b" || e.key === "B") && gameState === STATE.OVERWORLD) {
    if (player.hasBicycle) {
      if (currentMapKey === "REDS_HOUSE" || currentMapKey === "BILLS_COTTAGE" || currentMapKey === "SS_ANNE") {
        dialogue.speaker = "PROF. OAK";
        dialogue.queue = ["Oak's words echoed... There's a time and place for everything, but not now!"];
        dialogue.activeCallback = null;
        setDialogueText(dialogue.queue[0]);
        gameState = STATE.DIALOGUE;
        dialogue.anim = 0;
        sfx.faint && sfx.faint();
        return;
      }
      player.isBiking = !player.isBiking;
      if (player.isBiking) {
        sfx.bikeBell();
        showMapBanner("MOUNTED BICYCLE (3× SPEED)!");
      } else {
        sfx.textBlip();
        showMapBanner("DISMOUNTED BICYCLE.");
      }
      return;
    }
  }
  if ((e.key === " " || e.code === "Space") && gameState === STATE.OVERWORLD && player.isBiking) {
    sfx.bikeBell();
    showMapBanner("RING! RING! 🔔");
    return;
  }

function startFishing() {
  if (!player.hasOldRod) {
    dialogue.speaker = "FISHING";
    dialogue.queue = ["A fishing rod would let you hook wild water Pokémon here!"];
    setDialogueText(dialogue.queue[0]);
    gameState = STATE.DIALOGUE;
    dialogue.anim = 0;
    sfx.textBlip();
    return;
  }
  sfx.fishingBite();
  showMapBanner("OH! A BITE!");
  setTimeout(() => {
    const waterMons = [
      { id: 129, name: "MAGIKARP", level: 5 + Math.floor(Math.random() * 5), hp: 20, maxHp: 20, moves: [{ name: "SPLASH", power: 0, maxPp: 40, pp: 40 }] },
      { id: 60, name: "POLIWAG", level: 8 + Math.floor(Math.random() * 5), hp: 25, maxHp: 25, moves: [{ name: "BUBBLE", power: 40, maxPp: 30, pp: 30 }] },
      { id: 90, name: "SHELLDER", level: 9 + Math.floor(Math.random() * 5), hp: 26, maxHp: 26, moves: [{ name: "TACKLE", power: 40, maxPp: 35, pp: 35 }] }
    ];
    const picked = waterMons[Math.floor(Math.random() * waterMons.length)];
    const chosen = SPECIES_DB[picked.id] ? JSON.parse(JSON.stringify(SPECIES_DB[picked.id])) : picked;
    chosen.level = picked.level;
    chosen.maxHp = picked.maxHp;
    chosen.hp = picked.hp;
    chosen.moves = picked.moves;
    battle.enemy = chosen;
    startBattleTransition();
  }, 400);
}

function handleFishingInput(key) {}
function handleTownMapInput(key) {}
function handleCampingInput(key) {}
function closeLevelUpModal() { gameState = STATE.OVERWORLD; }
function openTownMap(returnState) { showMapBanner("TOWN MAP: PALLET • VIRIDIAN • PEWTER • CERULEAN • VERMILION"); sfx.textBlip(); }
function openCampsite(returnState) { showMapBanner("COZY CAMP: FULL PARTY RESTORED!"); sfx.potionUse(); (player.team || []).forEach(p => { p.hp = p.maxHp; p.status = null; }); }

  // EXPANSION STATES INPUT ROUTING
  if (gameState === STATE.FISHING) {
    handleFishingInput(e.key);
    return;
  }
  if (gameState === STATE.TOWN_MAP) {
    handleTownMapInput(e.key);
    return;
  }
  if (gameState === STATE.CAMPING) {
    handleCampingInput(e.key);
    return;
  }
  if (gameState === STATE.LEVEL_UP_MODAL) {
    if (e.key === "z" || e.key === "Z" || e.key === "Enter" || e.key === " ") {
      closeLevelUpModal();
    }
    return;
  }

  // LANDING PAGE: Enter / Space = start
  if (gameState === STATE.TITLE) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hasSave()) continueGame();
      else startGame();
    }
    return;
  }

  // GAME OVER: Enter / Z = play again
  if (gameState === STATE.GAME_OVER) {
    if (e.key === "Enter" || e.key === "z" || e.key === "Z") { e.preventDefault(); restartGame(); }
    return;
  }

  // STARTER SELECT SCREEN
  if (gameState === STATE.STARTER_SELECT) {
    if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
      starterSelect.index = (starterSelect.index + 2) % 3;
      sfx.textBlip();
    } else if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
      starterSelect.index = (starterSelect.index + 1) % 3;
      sfx.textBlip();
    } else if (e.key === "z" || e.key === "Z" || e.key === "Enter" || e.key === " ") {
      confirmStarterChoice();
    }
    return;
  }

  // 'P' KEY: OPTIONS MODAL
  if (e.key === "p" || e.key === "P") {
    if (gameState === STATE.OPTIONS_MENU) {
      gameState = optionsMenu.returnState;
      sfx.textBlip();
      return;
    } else if (gameState === STATE.OVERWORLD || gameState === STATE.BATTLE) {
      optionsMenu.index = 0;
      optionsMenu.returnState = gameState;
      gameState = STATE.OPTIONS_MENU;
      sfx.doorSound();
      return;
    }
  }

  if (gameState === STATE.SETTINGS) {
    const k = e.key, i = settingsMenu.index;
    if (k === "ArrowUp" || k === "w") { settingsMenu.index = (i + 6) % 7; settingsMenu.armed = false; sfx.textBlip(); }
    else if (k === "ArrowDown" || k === "s") { settingsMenu.index = (i + 1) % 7; settingsMenu.armed = false; sfx.textBlip(); }
    else if (k === "ArrowLeft" || k === "a") adjustSetting(-1);
    else if (k === "ArrowRight" || k === "d") adjustSetting(1);
    else if (k === "z" || k === "Enter") {
      if (i === 5) {
        if (!settingsMenu.armed) { settingsMenu.armed = true; settingsMenu.msg = "Press Z again to restart!"; sfx.faint(); }
        else { settingsMenu.armed = false; restartGame(); }
      } else if (i === 6) { gameState = STATE.OPTIONS_MENU; sfx.textBlip(); }
    } else if (k === "x" || k === "Escape") { gameState = STATE.OPTIONS_MENU; sfx.textBlip(); }
    return;
  }

  if (gameState === STATE.SHOP) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "a" || e.key === "d") { shop.tab = 1 - shop.tab; shop.msg = shop.tab ? "What would you like to sell?" : "Welcome! How may I help you?"; sfx.textBlip(); }
    else if (e.key === "ArrowUp" || e.key === "w") { shop.index = (shop.index + SHOP_ITEMS.length - 1) % SHOP_ITEMS.length; sfx.textBlip(); }
    else if (e.key === "ArrowDown" || e.key === "s") { shop.index = (shop.index + 1) % SHOP_ITEMS.length; sfx.textBlip(); }
    else if (e.key === "z" || e.key === "Enter") {
      const it = SHOP_ITEMS[shop.index];
      if (shop.tab === 1) {
        if (player[it.k] > 0) { player[it.k]--; player.money += Math.floor(it.p / 2); shop.msg = `Sold ${it.n} for $${Math.floor(it.p / 2)}.`; sfx.potionUse(); }
        else { shop.msg = "You have none to sell."; sfx.faint(); }
      } else if (player.money < it.p) { shop.msg = "You don't have enough money."; sfx.faint(); }
      else { player.money -= it.p; player[it.k]++; shop.msg = `Here you go! ${it.n} x1. Thank you!`; sfx.potionUse(); }
    } else if (e.key === "x" || e.key === "Escape") { gameState = STATE.OVERWORLD; sfx.textBlip(); }
    return;
  }

  // BADGE AWARD SCREEN
  if (gameState === STATE.BADGE_AWARD) {
    if (e.key === "z" || e.key === "Enter" || e.key === "x" || e.key === "Escape" || e.key === " ") {
      dismissBadgeAward();
    }
    return;
  }

  // GAME COMPLETE ENDING SCREEN
  if (gameState === STATE.GAME_COMPLETE) {
    if (e.key === "z" || e.key === "Enter" || e.key === "x" || e.key === "Escape" || e.key === " ") {
      dismissGameComplete();
    }
    return;
  }

  // TRAINER CARD SCREEN
  if (gameState === STATE.TRAINER_CARD) {
    if (e.key === "x" || e.key === "Escape" || e.key === "z" || e.key === "Enter") {
      gameState = STATE.OPTIONS_MENU;
      sfx.textBlip();
    }
    return;
  }

  // OPTIONS MENU (8 Options matching renderOptionsMenu)
  if (gameState === STATE.OPTIONS_MENU) {
    const totalOptions = 8;
    if (e.key === "ArrowUp" || e.key === "w") {
      optionsMenu.index = (optionsMenu.index - 1 + totalOptions) % totalOptions;
      sfx.textBlip();
    } else if (e.key === "ArrowDown" || e.key === "s") {
      optionsMenu.index = (optionsMenu.index + 1) % totalOptions;
      sfx.textBlip();
    } else if (e.key === "z" || e.key === "Enter") {
      if (optionsMenu.index === 0) {
        pokedexMenu.index = 0;
        pokedexMenu.returnState = STATE.OPTIONS_MENU;
        gameState = STATE.POKEDEX_VIEW;
        sfx.doorSound();
        cryAudio.play(SPECIES_DB[POKEDEX_KEYS[0]].id);
      } else if (optionsMenu.index === 1) {
        partyMenu.selectedIndex = 0;
        partyMenu.returnState = STATE.OPTIONS_MENU;
        gameState = STATE.PARTY_MENU;
        sfx.doorSound();
      } else if (optionsMenu.index === 2) {
        bagMenu.index = 0;
        bagMenu.returnState = STATE.OPTIONS_MENU;
        gameState = STATE.BAG_MENU;
        sfx.doorSound();
      } else if (optionsMenu.index === 3) {
        // TRAINER CARD & BADGES
        gameState = STATE.TRAINER_CARD;
        sfx.doorSound();
      } else if (optionsMenu.index === 4) {
        // SAVE GAME (MANUAL)
        saveGameManual();
        optionsMenu.savedNotice = 90;
        sfx.levelUp && sfx.levelUp();
      } else if (optionsMenu.index === 5) {
        setJoystickVisibility(!showTouchControls);
        sfx.ballWobble();
      } else if (optionsMenu.index === 6) {
        settingsMenu.index = 0;
        settingsMenu.armed = false;
        settingsMenu.msg = "";
        gameState = STATE.SETTINGS;
        sfx.doorSound();
      } else if (optionsMenu.index === 7) {
        gameState = optionsMenu.returnState;
        sfx.textBlip();
      }
    } else if (e.key === "x" || e.key === "Escape") {
      gameState = optionsMenu.returnState;
      sfx.textBlip();
    }
    return;
  }

  // POKEDEX VIEW
  if (gameState === STATE.POKEDEX_VIEW) {
    if (e.key === "ArrowUp" || e.key === "w") {
      pokedexMenu.index = (pokedexMenu.index - 1 + POKEDEX_KEYS.length) % POKEDEX_KEYS.length;
      sfx.textBlip();
      cryAudio.play(SPECIES_DB[POKEDEX_KEYS[pokedexMenu.index]].id);
    } else if (e.key === "ArrowDown" || e.key === "s") {
      pokedexMenu.index = (pokedexMenu.index + 1) % POKEDEX_KEYS.length;
      sfx.textBlip();
      cryAudio.play(SPECIES_DB[POKEDEX_KEYS[pokedexMenu.index]].id);
    } else if (e.key === "z" || e.key === "Enter") {
      cryAudio.play(SPECIES_DB[POKEDEX_KEYS[pokedexMenu.index]].id);
    } else if (e.key === "x" || e.key === "Escape") {
      gameState = pokedexMenu.returnState;
      sfx.textBlip();
    }
    return;
  }

  // BAG MENU (POTION, RARE CANDY, POKEBALL, FULL HEAL, BERRY, THUNDER STONE, MOON STONE)
  if (gameState === STATE.BAG_MENU) {
    const totalItems = 7;
    if (e.key === "ArrowUp" || e.key === "w") {
      bagMenu.index = (bagMenu.index - 1 + totalItems) % totalItems;
      sfx.textBlip();
    } else if (e.key === "ArrowDown" || e.key === "s") {
      bagMenu.index = (bagMenu.index + 1) % totalItems;
      sfx.textBlip();
    } else if (e.key === "z" || e.key === "Enter") {
      if (player.team.length === 0 && (bagMenu.index === 0 || bagMenu.index === 1 || bagMenu.index === 3 || bagMenu.index === 4 || bagMenu.index === 5 || bagMenu.index === 6)) {
        sfx.ballWobble();
        showMapBanner("NO POKéMON IN YOUR PARTY!");
        return;
      }
      if (bagMenu.index === 0) {
        if (player.potions > 0) {
          bagTargetIndex = 0;
          bagMenu.selectedItem = "POTION";
          gameState = STATE.BAG_SELECT_TARGET;
          sfx.textBlip();
        } else sfx.ballWobble();
      } else if (bagMenu.index === 1) {
        if (player.rareCandies > 0) {
          bagTargetIndex = 0;
          bagMenu.selectedItem = "RARE_CANDY";
          gameState = STATE.BAG_SELECT_TARGET;
          sfx.textBlip();
        } else sfx.ballWobble();
      } else if (bagMenu.index === 2) {
        sfx.ballWobble();
        showMapBanner("POKé BALLS CAN ONLY BE USED IN WILD BATTLE!");
      } else if (bagMenu.index === 3) {
        if (player.fullHeals > 0) {
          bagTargetIndex = 0;
          bagMenu.selectedItem = "FULL_HEAL";
          gameState = STATE.BAG_SELECT_TARGET;
          sfx.textBlip();
        } else sfx.ballWobble();
      } else if (bagMenu.index === 4) {
        if (player.berries > 0) {
          bagTargetIndex = 0;
          bagMenu.selectedItem = "BERRY";
          gameState = STATE.BAG_SELECT_TARGET;
          sfx.textBlip();
        } else sfx.ballWobble();
      } else if (bagMenu.index === 5) {
        if (player.thunderStones > 0) {
          bagTargetIndex = 0;
          bagMenu.selectedItem = "THUNDER_STONE";
          gameState = STATE.BAG_SELECT_TARGET;
          sfx.textBlip();
        } else sfx.ballWobble();
      } else if (bagMenu.index === 6) {
        if (player.moonStones > 0) {
          bagTargetIndex = 0;
          bagMenu.selectedItem = "MOON_STONE";
          gameState = STATE.BAG_SELECT_TARGET;
          sfx.textBlip();
        } else sfx.ballWobble();
      }
    } else if (e.key === "x" || e.key === "Escape") {
      gameState = bagMenu.returnState;
      sfx.textBlip();
    }
    return;
  }

  // BAG TARGET SELECTION
  if (gameState === STATE.BAG_SELECT_TARGET) {
    if (e.key === "ArrowUp" || e.key === "w") {
      bagTargetIndex = Math.max(0, bagTargetIndex - 1);
      sfx.textBlip();
    } else if (e.key === "ArrowDown" || e.key === "s") {
      bagTargetIndex = Math.min(player.team.length - 1, bagTargetIndex + 1);
      sfx.textBlip();
    } else if (e.key === "z" || e.key === "Enter") {
      const mon = player.team[bagTargetIndex];

      if (bagMenu.selectedItem === "POTION") {
        if (mon.hp < mon.maxHp) {
          player.potions--;
          mon.hp = Math.min(mon.maxHp, mon.hp + 20);
          sfx.potionUse();
          gameState = STATE.BAG_MENU;
        } else sfx.ballWobble();
      } else if (bagMenu.selectedItem === "BERRY") {
        if (player.berries > 0) {
          player.berries--;
          mon.happy = Math.min(100, (mon.happy || 0) + 15);
          mon.hp = Math.min(mon.maxHp, mon.hp + 10);
          follower.happy = 90;
          sfx.potionUse();
          cryAudio.play(mon.id);
          gameState = STATE.BAG_MENU;
        } else sfx.ballWobble();
      } else if (bagMenu.selectedItem === "FULL_HEAL") {
        if (mon.status && player.fullHeals > 0) {
          player.fullHeals--;
          mon.status = null;
          sfx.potionUse();
          gameState = STATE.BAG_MENU;
        } else sfx.ballWobble();
      } else if (bagMenu.selectedItem === "RARE_CANDY") {
        if (player.rareCandies > 0 && mon.level < 100) {
          player.rareCandies--;
          applyRareCandy(mon);
        } else sfx.ballWobble();
      } else if (bagMenu.selectedItem === "THUNDER_STONE") {
        if (mon.id === 25 && player.thunderStones > 0) {
          player.thunderStones--;
          startEvolution(mon, 26, STATE.BAG_MENU);
        } else {
          sfx.faint();
        }
      } else if (bagMenu.selectedItem === "MOON_STONE") {
        if (mon.id === 35 && player.moonStones > 0) {
          player.moonStones--;
          startEvolution(mon, 36, STATE.BAG_MENU);
        } else {
          sfx.faint();
        }
      }
    } else if (e.key === "x" || e.key === "Escape") {
      gameState = STATE.BAG_MENU;
      sfx.textBlip();
    }
    return;
  }

  if (gameState === STATE.PARTY_MENU && (e.key === "c" || e.key === "C")) {
    pcBox.col = 0; pcBox.pi = 0; pcBox.bi = 0; pcBox.msg = ""; gameState = STATE.PC_BOX; sfx.doorSound(); return;
  }
  if (gameState === STATE.PC_BOX) {
    const k = e.key, t = player.team, b = player.pc;
    if (k === "ArrowLeft" || k === "a") pcBox.col = 0;
    else if (k === "ArrowRight" || k === "d") pcBox.col = 1;
    else if (k === "ArrowUp" || k === "w") { if (pcBox.col === 0) pcBox.pi = Math.max(0, pcBox.pi - 1); else pcBox.bi = Math.max(0, pcBox.bi - 1); }
    else if (k === "ArrowDown" || k === "s") { if (pcBox.col === 0) pcBox.pi = Math.min(t.length - 1, pcBox.pi + 1); else pcBox.bi = Math.min(Math.max(0, b.length - 1), pcBox.bi + 1); }
    else if (k === "z" || k === "Enter") {
      if (pcBox.col === 0) {
        if (t.length > 1) { b.push(t.splice(pcBox.pi, 1)[0]); pcBox.pi = Math.min(pcBox.pi, t.length - 1); pcBox.msg = "Moved to the PC box."; }
        else pcBox.msg = "You need at least one POKéMON!";
      } else if (b.length) {
        if (t.length < 6) { t.push(b.splice(pcBox.bi, 1)[0]); pcBox.bi = Math.min(pcBox.bi, Math.max(0, b.length - 1)); pcBox.msg = "Added to your party!"; }
        else { const tmp = t[pcBox.pi]; t[pcBox.pi] = b[pcBox.bi]; b[pcBox.bi] = tmp; pcBox.msg = "Swapped!"; }
      }
      sfx.switchMon(); saveGame();
    } else if (k === "x" || k === "Escape") { gameState = STATE.PARTY_MENU; sfx.textBlip(); }
    return;
  }

  // PARTY SUMMARY VIEW
  if (gameState === STATE.PARTY_MENU) {
    if (e.key === "ArrowUp" || e.key === "w") {
      partyMenu.selectedIndex = Math.max(0, partyMenu.selectedIndex - 1);
      sfx.textBlip();
    } else if (e.key === "ArrowDown" || e.key === "s") {
      partyMenu.selectedIndex = Math.min(player.team.length - 1, partyMenu.selectedIndex + 1);
      sfx.textBlip();
    } else if (e.key === "z" || e.key === "Enter") {
      statsViewingMon = player.team[partyMenu.selectedIndex];
      gameState = STATE.STATS_VIEW;
      sfx.levelUp();
      cryAudio.play(statsViewingMon.id);
    } else if (e.key === "x" || e.key === "Escape") {
      gameState = partyMenu.returnState;
      sfx.textBlip();
    }
    return;
  }

  // DETAILED STATS VIEW
  if (gameState === STATE.STATS_VIEW) {
    if (e.key === "ArrowLeft" || e.key === "a") {
      partyMenu.selectedIndex = (partyMenu.selectedIndex - 1 + player.team.length) % player.team.length;
      statsViewingMon = player.team[partyMenu.selectedIndex];
      sfx.textBlip();
      cryAudio.play(statsViewingMon.id);
    } else if (e.key === "ArrowRight" || e.key === "d") {
      partyMenu.selectedIndex = (partyMenu.selectedIndex + 1) % player.team.length;
      statsViewingMon = player.team[partyMenu.selectedIndex];
      sfx.textBlip();
      cryAudio.play(statsViewingMon.id);
    } else if (e.key === "x" || e.key === "Escape" || e.key === "z" || e.key === "Enter") {
      gameState = STATE.PARTY_MENU;
      sfx.textBlip();
    }
    return;
  }

  // DIALOGUE
  if (gameState === STATE.DIALOGUE) {
    if (e.key === "z" || e.key === "Enter" || e.key === " ") {
      advanceDialogue();
    }
  } else if (gameState === STATE.BATTLE) {
    handleBattleInput(e.key);
  }
});

window.addEventListener("keyup", (e) => { keys[e.key] = false; });

function advanceDialogue() {
  if (gameState !== STATE.DIALOGUE) return;
  if (dialogue.renderedText.length < dialogue.fullText.length) {
    dialogue.renderedText = dialogue.fullText;
  } else {
    dialogue.queue.shift();
    if (dialogue.queue.length === 0) {
      const cb = dialogue.activeCallback;
      dialogue.activeCallback = null;
      if (cb) {
        cb();
      }
      if (gameState === STATE.DIALOGUE) {
        gameState = STATE.OVERWORLD;
      }
    } else {
      setDialogueText(dialogue.queue[0]);
    }
  }
}

function setDialogueText(text) {
  dialogue.fullText = text || "";
  dialogue.renderedText = "";
  dialogue.charTimer = 0;
}

// =============================================================================
// 9. COZY ATMOSPHERIC FX
// =============================================================================
function spawnFx(kind, x, y, n = 1) {
  for (let i = 0; i < n; i++) {
    const dust = kind === "dust";
    const sparkle = kind === "sparkle";
    const life = dust ? 26 : (sparkle ? 36 : 38);
    fx.push({ 
      kind, x: x + (Math.random() - 0.5) * 16, y, ph: Math.random() * 6,
      vx: (Math.random() - 0.5) * (dust ? 1.2 : sparkle ? 1.6 : 2.5), 
      vy: dust ? -Math.random() * 0.6 : (sparkle ? -Math.random() * 1.6 - 0.6 : -Math.random() * 2.2 - 0.8),
      life, max: life, s: dust ? 4 : (sparkle ? 5 : 3) 
    });
  }
}

function cozySpawn() {
  updateClock(); updateWeather(); ambientTick();
  if (fx.length >= 70) return;
  if (currentMapKey !== "MT_MOON" && fx.length < 45) { const sn = curSeason(), rate = [0.035, 0.012, 0.07, 0.14][sn];
    if (Math.random() < rate * (sn === 3 ? 1 : 1 - nightD) * (sn === 3 ? 1 : 1 - weather.rain)) {
      const cols = [["#ffb9c8", "#ffd6e0"], ["#f6ef9a"], ["#e0752b", "#c9482a", "#e8b030"], ["#ffffff", "#e6f0ff"]][sn];
      fx.push({ kind: "petal", x: Math.random() * 720, y: -6, ph: Math.random() * 6, vx: sn === 3 ? 0.15 : 0.4, vy: sn === 3 ? 0.9 : 0.55, life: 300, max: 300, s: sn === 3 ? 4 : 5, col: cols[Math.floor(Math.random() * cols.length)] }); } }
  if (T % 50 === 0) {
    const row = currentMap.tiles[1];
    for (let c = 0; c < row.length - 1; c++)
      if (row[c] === 4 && row[c + 1] !== 4) fx.push({ kind: "smoke", x: c * 48 + 34, y: 56, ph: Math.random() * 6, vx: 0.15, vy: -0.4, life: 100, max: 100, s: 6 });
  }
}
function updateFx() {
  cozySpawn();
  if (fx.length < 50 && Math.random() < 0.01 + nightD * 0.1) {
    fx.push({ 
      kind: "firefly", x: Math.random() * 720, y: Math.random() * 480, 
      ph: Math.random() * 6.2, vx: 0, vy: 0, life: 300, max: 300, s: 2.8 
    });
  }
  for (let i = fx.length - 1; i >= 0; i--) {
    const p = fx[i];
    if (p.kind === "firefly") { 
      p.x += Math.sin(T * 0.025 + p.ph) * 0.6; 
      p.y += Math.cos(T * 0.035 + p.ph) * 0.45 - 0.15; 
    } else { 
      p.x += p.vx; 
      p.y += p.vy; 
      if (p.kind === "leaf") p.vy += 0.14;
      if (p.kind === "petal") p.x += Math.sin(T * 0.05 + p.ph) * 0.6; 
      if (p.kind === "sparkle") { p.vy -= 0.03; p.x += Math.sin(T * 0.1 + p.ph) * 0.4; }
    }
    if (--p.life <= 0) fx.splice(i, 1);
  }
}

function drawFx() {
  for (const p of fx) {
    const a = p.life / p.max;
    if (p.kind === "firefly") {
      const glow = (0.55 + 0.45 * Math.sin(T * 0.12 + p.ph));
      ctx.globalAlpha = Math.min(a, 1 - a) * 2 * glow;
      ctx.fillStyle = "#ffe277";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2); ctx.fill();

      ctx.globalAlpha = Math.min(a, 1 - a) * 0.5 * glow;
      ctx.fillStyle = "#ffbf4d";
      ctx.beginPath(); ctx.arc(p.x, p.y, p.s * 2.6, 0, Math.PI * 2); ctx.fill();
    } else if (p.kind === "sparkle") {
      ctx.globalAlpha = a * 0.95;
      ctx.fillStyle = "#ffd700";
      const s = p.s || 5;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y - s);
      ctx.lineTo(p.x + s * 0.35, p.y - s * 0.35);
      ctx.lineTo(p.x + s, p.y);
      ctx.lineTo(p.x + s * 0.35, p.y + s * 0.35);
      ctx.lineTo(p.x, p.y + s);
      ctx.lineTo(p.x - s * 0.35, p.y + s * 0.35);
      ctx.lineTo(p.x - s, p.y);
      ctx.lineTo(p.x - s * 0.35, p.y - s * 0.35);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "#ffffff";
      ctx.beginPath(); ctx.arc(p.x, p.y, s * 0.28, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.globalAlpha = a * (p.kind === "smoke" ? 0.28 : 0.85);
      ctx.fillStyle = p.col ? p.col : p.kind === "dust" ? "#edd8aa" : p.kind === "petal" ? "#ffb9c8" : p.kind === "smoke" ? "#efe4d8" : "#4e8538";
      const s = p.kind === "dust" ? p.s + (1 - a) * 5 : p.kind === "smoke" ? 6 + (1 - a) * 14 : p.s;
      ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
    }
  }
  ctx.globalAlpha = 1;
}

// =============================================================================
// 10. OVERWORLD LOGIC
// =============================================================================
function blockGrassEntry() {
  for (const k in keys) keys[k] = false;
  player.isMoving = false;
  player.moveProgress = 0;
  sfx.faint && sfx.faint();
  showMapBanner("DANGER: WILD POKÉMON!");
  dialogue.speaker = "PROF. OAK";
  dialogue.queue = [
    "Oak: Hey! Wait! Don't go out into the tall grass!",
    "Oak: Wild Pokémon live in tall grass and can jump out at any moment!",
    "Oak: It's dangerous without a Pokémon of your own for protection.",
    "Oak: Come talk to me first so I can give you a Pokémon!"
  ];
  setDialogueText(dialogue.queue[0]);
  dialogue.activeCallback = null;
  gameState = STATE.DIALOGUE;
}

function isBlocked(gx, gy) {
  if (gx < 0 || gx >= currentMap.cols || gy < 0 || gy >= currentMap.rows) return true;
  const tile = currentMap.tiles[gy][gx];
  if (tile === 1 || tile === 3 || tile === 4 || tile === 5 || tile === 8 || tile === 9 ||
      tile === 11 || tile === 14 || tile === 15 || tile === 16 || tile === 17 || tile === 19 || tile === 20) return true;
  if (player.team.length === 0 && (tile === 2 || tile === 10)) return true;
  for (const n of currentMap.npcs) {
    if (n.x === gx && n.y === gy) return true;
  }
  if (currentMap.picnic && currentMap.picnic.x === gx && currentMap.picnic.y === gy) return true;
  return false;
}

function checkWarp(gx, gy) {
  if (!currentMap.warps) return false;
  for (const w of currentMap.warps) {
    if (w.fromX === gx && w.fromY === gy) {
      sfx.doorSound(); photoMode = false;
      currentMapKey = w.targetMap;
      currentMap = MAPS[currentMapKey];
      player.gridX = w.targetX;
      player.gridY = w.targetY;
      player.x = w.targetX * TILE_SIZE;
      player.y = w.targetY * TILE_SIZE;
      if (w.targetMap === "REDS_HOUSE") player.facing = "UP";
      else if (w.targetMap === "PALLET_TOWN") player.facing = "DOWN";
      if (player.visitedCities && player.visitedCities[w.targetMap] !== undefined) {
        player.visitedCities[w.targetMap] = true;
      }
      if (w.targetMap === "REDS_HOUSE" || w.targetMap === "BILLS_COTTAGE" || w.targetMap === "SS_ANNE") {
        if (player.isBiking) player.isBiking = false;
      }
      resetFollower();
      player.isMoving = false;
      player.moveProgress = 0;
      showMapBanner(currentMap.name);
      music.play(); // switch to this town's theme
      return true;
    }
  }
  return false;
}

function checkTrainerSightLines() {
  if (trainerAlert.active || gameState !== STATE.OVERWORLD || player.team.length === 0 || !currentMap.npcs) return false;
  for (const n of currentMap.npcs) {
    if (!n.isTrainer) continue;
    if (n.id && player.beat && player.beat[n.id]) continue;
    if (n.id === "bug_catcher" && player.beatBugCatcher) continue;

    const facing = n.facing || "DOWN";
    const maxSight = n.sight || 3;
    let hit = false;
    let distFound = 0;

    for (let d = 1; d <= maxSight; d++) {
      let tx = n.x, ty = n.y;
      if (facing === "UP") ty -= d;
      else if (facing === "DOWN") ty += d;
      else if (facing === "LEFT") tx -= d;
      else if (facing === "RIGHT") tx += d;

      if (isBlocked(tx, ty)) break;

      if (player.gridX === tx && player.gridY === ty) {
        hit = true;
        distFound = d;
        break;
      }
    }

    if (hit) {
      player.isMoving = false;
      player.moveProgress = 0;
      if (facing === "UP") player.facing = "DOWN";
      else if (facing === "DOWN") player.facing = "UP";
      else if (facing === "LEFT") player.facing = "RIGHT";
      else if (facing === "RIGHT") player.facing = "LEFT";

      trainerAlert.active = true;
      trainerAlert.npc = n;
      trainerAlert.timer = 30;
      trainerAlert.dist = distFound - 1;
      trainerAlert.stepProgress = 0;
      sfx.encounter && sfx.encounter();
      return true;
    }
  }
  return false;
}

function updateOverworld() {
  if (trainerAlert.active) {
    if (trainerAlert.timer > 0) {
      trainerAlert.timer--;
    } else if (trainerAlert.dist > 0) {
      trainerAlert.stepProgress += 4;
      if (trainerAlert.stepProgress >= TILE_SIZE) {
        trainerAlert.stepProgress = 0;
        trainerAlert.dist--;
        if (trainerAlert.npc.facing === "UP") trainerAlert.npc.y--;
        else if (trainerAlert.npc.facing === "DOWN") trainerAlert.npc.y++;
        else if (trainerAlert.npc.facing === "LEFT") trainerAlert.npc.x--;
        else if (trainerAlert.npc.facing === "RIGHT") trainerAlert.npc.x++;
      }
    } else {
      const n = trainerAlert.npc;
      trainerAlert.active = false;
      trainerAlert.npc = null;
      dialogue.speaker = n.name;
      dialogue.queue = n.getDialogue ? [...n.getDialogue()] : [...n.dialogue];
      dialogue.activeCallback = n.onInteract || null;
      setDialogueText(dialogue.queue[0]);
      gameState = STATE.DIALOGUE;
      dialogue.anim = 0;
    }
    return;
  }

  const isRunning = (keys["Shift"] || keys["x"] || keys["X"]) && !photoMode;
  const spd = player.isBiking ? 12 : (isRunning ? 8 : 4);

  // Shiny follower overworld sparkle
  const lead = leadMon();
  if (lead && lead.isShiny && T % 45 === 0) {
    spawnFx("sparkle", follower.x + 24, follower.y + 20, 2);
  }

  if (player.isMoving) {
    player.moveProgress += spd;
    const tx = player.gridX * TILE_SIZE;
    const ty = player.gridY * TILE_SIZE;

    if (player.x < tx) player.x = Math.min(player.x + spd, tx);
    if (player.x > tx) player.x = Math.max(player.x - spd, tx);
    if (player.y < ty) player.y = Math.min(player.y + spd, ty);
    if (player.y > ty) player.y = Math.max(player.y - spd, ty);

    if ((player.isBiking || isRunning) && Math.random() < 0.45) {
      spawnFx("dust", player.x + 24 + (Math.random() * 8 - 4), player.y + 40, player.isBiking ? 3 : 2);
    }

    if (player.moveProgress >= TILE_SIZE) {
      player.isMoving = false;
      player.moveProgress = 0;
      player.x = tx;
      player.y = ty;

      if (checkWarp(player.gridX, player.gridY)) return;
      if (checkHidden()) return;
      if (checkTrainerSightLines()) return;

      if (player.team.length > 0 && (currentMap.tiles[player.gridY][player.gridX] === 2 || currentMap.tiles[player.gridY][player.gridX] === 10) && Math.random() < 0.22) {
        startBattleTransition();
      }
    }
    return;
  }

  let dx = 0, dy = 0;
  if (keys["ArrowUp"] || keys["w"]) { dy = -1; player.facing = "UP"; }
  else if (keys["ArrowDown"] || keys["s"]) { dy = 1; player.facing = "DOWN"; }
  else if (keys["ArrowLeft"] || keys["a"]) { dx = -1; player.facing = "LEFT"; }
  else if (keys["ArrowRight"] || keys["d"]) { dx = 1; player.facing = "RIGHT"; }

  if (dx !== 0 || dy !== 0) {
    const targetX = player.gridX + dx;
    const targetY = player.gridY + dy;

    const targetTile = (currentMap.tiles[targetY] !== undefined) ? currentMap.tiles[targetY][targetX] : -1;
    if (player.team.length === 0 && (targetTile === 2 || targetTile === 10)) {
      blockGrassEntry();
      return;
    }

    if (checkWarp(targetX, targetY)) return;

    if (!isBlocked(targetX, targetY)) {
      spawnFx("dust", player.x + 24, player.y + 42, player.isBiking ? 6 : (isRunning ? 5 : 3));
      follower.tx = player.gridX; follower.ty = player.gridY;
      stepSound(currentMap.tiles[targetY][targetX]);
      player.gridX = targetX;
      player.gridY = targetY;
      if (currentMap.tiles[player.gridY][player.gridX] === 2) {
        spawnFx("leaf", player.gridX * TILE_SIZE + 24, player.gridY * TILE_SIZE + 26, isRunning ? 8 : 6);
      }
      player.isMoving = true;
      player.moveProgress = 0;
    }
  }

  if (photoMode && (keys["z"] || keys["Enter"])) { keys["z"] = false; keys["Enter"] = false; }
  else if (keys["z"] || keys["Enter"]) {
    keys["z"] = false;
    keys["Enter"] = false;
    checkNPCInteract();
  }
}

function checkNPCInteract() {
  let tx = player.gridX;
  let ty = player.gridY;
  if (player.facing === "UP") ty--;
  if (player.facing === "DOWN") ty++;
  if (player.facing === "LEFT") tx--;
  if (player.facing === "RIGHT") tx++;

  // Water interaction (Fishing - Recommendation 1)
  if (currentMap.tiles[ty] && currentMap.tiles[ty][tx] === 3) {
    if (player.hasOldRod) {
      startFishing();
      return;
    } else {
      dialogue.speaker = "WATER";
      dialogue.queue = [
        "The water is shimmering and calm.",
        "A fishing rod would let you hook wild water Pokémon here!"
      ];
      setDialogueText(dialogue.queue[0]);
      gameState = STATE.DIALOGUE;
      dialogue.anim = 0;
      sfx.textBlip();
      return;
    }
  }

  // Outdoor picnic spots open campsite (Recommendation 6)
  if (currentMap.picnic && currentMap.picnic.x === tx && currentMap.picnic.y === ty) { openCampsite(STATE.OVERWORLD); return; }
  if (follower.tx === tx && follower.ty === ty && Math.abs(follower.x - tx * TILE_SIZE) < 2 && Math.abs(follower.y - ty * TILE_SIZE) < 2) {
    follower.happy = 70; const m = leadMon(); if (m) { m.happy = Math.min(100, (m.happy || 0) + 2); cryAudio.play(m.id); sfx.levelUp(); } return;
  }
  for (const n of currentMap.npcs) {
    if (n.x === tx && n.y === ty) {
      dialogue.speaker = n.name;
      dialogue.queue = n.getDialogue ? [...n.getDialogue()] : [...n.dialogue];
      dialogue.activeCallback = n.onInteract || null;
      setDialogueText(dialogue.queue[0]);
      gameState = STATE.DIALOGUE; 
      dialogue.anim = 0;
      return;
    }
  }

  // Interacting with furniture in Red's House
  if (currentMapKey === "REDS_HOUSE" && currentMap.tiles[ty] && currentMap.tiles[ty][tx] !== undefined) {
    const ft = currentMap.tiles[ty][tx];
    if (ft === 14) { // Bed
      dialogue.speaker = "RED'S BED";
      dialogue.queue = [
        "A wonderfully soft and cozy bed.",
        "Red took a rest and feels completely refreshed!"
      ];
      if (player.team.length > 0) {
        player.team.forEach(p => { p.hp = p.maxHp; p.status = null; (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; }); });
      }
      setDialogueText(dialogue.queue[0]); gameState = STATE.DIALOGUE; dialogue.anim = 0; sfx.potionUse && sfx.potionUse(); return;
    } else if (ft === 15) { // TV
      dialogue.speaker = "TV";
      dialogue.queue = [
        "There's a movie on TV!",
        "Four boys are walking down a railroad track together.",
        "...Time to head out on an adventure of your own!"
      ];
      setDialogueText(dialogue.queue[0]); gameState = STATE.DIALOGUE; dialogue.anim = 0; sfx.textBlip(); return;
    } else if (ft === 17) { // Bookshelf
      dialogue.speaker = "BOOKSHELF";
      dialogue.queue = [
        "It's crammed full of Pokémon books!",
        "'My Pokémon and Me' by Prof. Oak.",
        "'A Trainer's Guide to the Kanto Region'."
      ];
      setDialogueText(dialogue.queue[0]); gameState = STATE.DIALOGUE; dialogue.anim = 0; sfx.textBlip(); return;
    } else if (ft === 19) { // Stairs
      dialogue.speaker = "STAIRS";
      dialogue.queue = [
        "The stairs lead up to Red's bedroom upstairs.",
        "Everything is packed and ready for the journey!"
      ];
      setDialogueText(dialogue.queue[0]); gameState = STATE.DIALOGUE; dialogue.anim = 0; sfx.textBlip(); return;
    } else if (ft === 20) { // Kitchen
      dialogue.speaker = "KITCHEN";
      dialogue.queue = [
        "Mom's kitchen is tidy and warm.",
        "A fragrant pot of Berry tea is whistling softly on the stove."
      ];
      setDialogueText(dialogue.queue[0]); gameState = STATE.DIALOGUE; dialogue.anim = 0; sfx.textBlip(); return;
    }
  }
}

// =============================================================================
// 11. BATTLE PIPELINE & BROCK'S GYM BATTLE
// =============================================================================
function startBattleTransition() {
  photoMode = false;
  battle.isTrainerBattle = false;
  battle.isGym = false;
  battle.trainerName = "";
  battle.trainerTeam = [];
  battle.trainerTeamIndex = 0;
  battle.onWin = null;
  gameState = STATE.BATTLE_TRANSITION;
  transition.radius = 0;
  transition.active = true;
  music.pause();
  sfx.encounter();
}

function startGymLeaderBattle() {
  music.pause();
  sfx.encounter();

  const geodude = JSON.parse(JSON.stringify(SPECIES_DB[74]));
  geodude.level = 12;
  geodude.hp = geodude.maxHp = 34;
  geodude.spriteKey = "geodude_front";
  geodude.backSpriteKey = "geodude_back";
  ensurePP(geodude);

  const onix = JSON.parse(JSON.stringify(SPECIES_DB[95]));
  onix.level = 14;
  onix.hp = onix.maxHp = 48;
  onix.spriteKey = "onix_front";
  onix.backSpriteKey = "onix_back";
  ensurePP(onix);

  battle.isTrainerBattle = true;
  battle.isGym = true;
  battle.gymLeader = "BROCK";
  battle.onWin = null;
  battle.trainerName = "LEADER BROCK";
  battle.trainerTeam = [geodude, onix];
  battle.trainerTeamIndex = 0;

  gameState = STATE.BATTLE_TRANSITION;
  transition.radius = 0;
  transition.active = true;
}

function startGymLeaderBattleMisty() {
  music.pause();
  sfx.encounter();

  const staryu = JSON.parse(JSON.stringify(SPECIES_DB[120]));
  staryu.level = 18;
  staryu.hp = staryu.maxHp = 48;
  staryu.spriteKey = "staryu_front";
  staryu.backSpriteKey = "staryu_back";
  ensurePP(staryu);

  const starmie = JSON.parse(JSON.stringify(SPECIES_DB[121]));
  starmie.level = 21;
  starmie.hp = starmie.maxHp = 64;
  starmie.spriteKey = "starmie_front";
  starmie.backSpriteKey = "starmie_back";
  ensurePP(starmie);

  battle.isTrainerBattle = true;
  battle.isGym = true;
  battle.gymLeader = "MISTY";
  battle.onWin = null;
  battle.trainerName = "LEADER MISTY";
  battle.trainerTeam = [staryu, starmie];
  battle.trainerTeamIndex = 0;

  gameState = STATE.BATTLE_TRANSITION;
  transition.radius = 0;
  transition.active = true;
}

function startGymLeaderBattleSurge() {
  music.pause();
  sfx.encounter();

  const voltorb = JSON.parse(JSON.stringify(SPECIES_DB[100]));
  voltorb.level = 21; voltorb.hp = voltorb.maxHp = 52;
  voltorb.spriteKey = "voltorb_front"; voltorb.backSpriteKey = "voltorb_back";
  ensurePP(voltorb);

  const pikachu = JSON.parse(JSON.stringify(SPECIES_DB[25]));
  pikachu.level = 18; pikachu.hp = pikachu.maxHp = 44;
  pikachu.spriteKey = "pikachu_front"; pikachu.backSpriteKey = "pikachu_back";
  ensurePP(pikachu);

  const raichu = JSON.parse(JSON.stringify(SPECIES_DB[26]));
  raichu.level = 24; raichu.hp = raichu.maxHp = 70;
  raichu.spriteKey = "raichu_front"; raichu.backSpriteKey = "raichu_back";
  ensurePP(raichu);

  battle.isTrainerBattle = true;
  battle.isGym = true;
  battle.gymLeader = "SURGE";
  battle.onWin = null;
  battle.trainerName = "LT. SURGE";
  battle.trainerTeam = [voltorb, pikachu, raichu];
  battle.trainerTeamIndex = 0;

  gameState = STATE.BATTLE_TRANSITION;
  transition.radius = 0;
  transition.active = true;
}

function triggerPlayerThrowAnimation(targetIndex, onComplete) {
  playerThrowAnim.active = true;
  playerThrowAnim.progress = 0;
  playerThrowAnim.popped = false;
  playerThrowAnim.targetIndex = targetIndex;
  sfx.throwBall();

  const interval = setInterval(() => {
    playerThrowAnim.progress += 0.05;
    const p = playerThrowAnim.progress;
    playerThrowAnim.ballX = 40 + (190 - 40) * p;
    playerThrowAnim.ballY = 320 - Math.sin(p * Math.PI) * 110;

    if (p >= 1 && !playerThrowAnim.popped) {
      playerThrowAnim.popped = true;
      sfx.ballBounce();
      spawnParticles("EMBER", 190, 270);
      clearInterval(interval);
      setTimeout(() => {
        playerThrowAnim.active = false;
        if (onComplete) onComplete();
      }, 350);
    }
  }, 16);
}

function initBattle() {
  if (battle.isTrainerBattle && battle.trainerTeam && battle.trainerTeam.length > 0 && battle.trainerTeam[battle.trainerTeamIndex] && battle.trainerTeam[battle.trainerTeamIndex].hp > 0) {
    battle.enemy = battle.trainerTeam[battle.trainerTeamIndex];
  } else {
    battle.isGym = false;
    battle.isTrainerBattle = false;
    battle.trainerTeam = [];
    battle.trainerTeamIndex = 0;
    battle.onWin = null;
    const encList = currentMap.encounters || MAPS.PALLET_TOWN.encounters;
    const chosen = encList[Math.floor(Math.random() * encList.length)];
    battle.enemy = JSON.parse(JSON.stringify(chosen));
    if (!battle.enemy.hp || battle.enemy.hp <= 0) battle.enemy.hp = battle.enemy.maxHp;
    // 1-in-256 Shiny Encounter roll (Recommendation 8)
    const isShiny = Math.random() < (1 / 256);
    if (isShiny) {
      battle.enemy.isShiny = true;
      if (!battle.enemy.name.startsWith("★ ")) battle.enemy.name = "★ " + battle.enemy.name;
    }
  }
  
  (battle.isTrainerBattle ? battle.trainerTeam : [battle.enemy]).forEach(e => { e.status = null; delete e.sleepTurns; });
  let firstIdx = player.team.findIndex(p => p.hp > 0);
  if (firstIdx === -1) {
    player.team.forEach(p => { p.hp = p.maxHp; p.status = null; (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; }); });
    firstIdx = 0;
  }
  battle.activeTeamIndex = firstIdx;
  battle.playerMon = player.team[firstIdx];
  player.team.forEach(ensurePP);

  battle.enemyDispHP = battle.enemy.hp;
  battle.playerDispHP = battle.playerMon.hp;
  battle.playerDispExp = battle.playerMon.exp;
  battle.menuIndex = 0;
  battle.menuState = "MAIN";
  battle.pokemonMenuIndex = 0;
  battle.forcedSwitch = false;
  battle.turnLock = true;
  battle.particles = [];
  battle.eFaint = battle.pFaint = 0; 
  battle.eFaintOn = battle.pFaintOn = false;
  battle.pdx = battle.pdy = battle.edx = battle.edy = 0;
  battle.enemyCaptured = false;
  battle.enemyScale = 1;
  pokeballAnim.active = false;
  floaters.length = 0;
  photoMode = false; battle.slideIn = 300; battle.pendingMove = null; battle.enemyWent = false;
  
  battle.message = battle.isTrainerBattle 
    ? `${battle.trainerName} sent out ${battle.enemy.name}!` 
    : `Wild ${battle.enemy.name} appeared!`;
  gameState = STATE.BATTLE;
  music.play(); // battle theme

  // Shiny sparkles & fanfare (Recommendation 8)
  if (battle.enemy.isShiny) {
    sfx.shinyFanfare();
    for (let i = 0; i < 22; i++) {
      battle.particles.push({
        x: 530 + (Math.random() - 0.5) * 50, y: 150 + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8 - 1,
        life: 40, size: 6, color: "#ffd700"
      });
    }
  }

  setTimeout(() => { 
    try { cryAudio.play(battle.enemy.id); } catch (e) { console.warn(e); }
    setTimeout(() => {
      battle.message = `Go! ${battle.playerMon.name}!`;
      triggerPlayerThrowAnimation(firstIdx, () => {
        try { cryAudio.play(battle.playerMon.id); } catch (e) { console.warn(e); }
        if (battle.playerMon.isShiny) {
          try { sfx.shinyFanfare(); } catch (e) {}
          for (let i = 0; i < 22; i++) {
            battle.particles.push({
              x: 190 + (Math.random() - 0.5) * 50, y: 280 + (Math.random() - 0.5) * 50,
              vx: (Math.random() - 0.5) * 8, vy: (Math.random() - 0.5) * 8 - 1,
              life: 40, size: 6, color: "#ffd700"
            });
          }
        }
        battle.turnLock = false;
        battle.message = `What will ${battle.playerMon.name} do?`;
      });
    }, 1200);
  }, 450);
}

function handleBattleInput(key) {
  if (battle.expState && (key === "z" || key === "Z" || key === "Enter" || key === " " || key === "x" || key === "X")) {
    if (handleExpSkip()) return;
  }
  if (battle.turnLock || battle.slideIn > 0 || playerThrowAnim.active) return;

  if (battle.menuState === "MAIN") {
    if (key === "ArrowUp" || key === "w") battle.menuIndex = Math.max(0, battle.menuIndex - 2);
    if (key === "ArrowDown" || key === "s") battle.menuIndex = Math.min(3, battle.menuIndex + 2);
    if (key === "ArrowLeft" || key === "a") battle.menuIndex = Math.max(0, battle.menuIndex - 1);
    if (key === "ArrowRight" || key === "d") battle.menuIndex = Math.min(3, battle.menuIndex + 1);

    if (key === "z" || key === "Enter") {
      if (battle.menuIndex === 0) {
        battle.menuState = "MOVES";
        battle.menuIndex = 0;
      } else if (battle.menuIndex === 1) {
        battle.menuState = "BAG";
        battle.menuIndex = 0;
      } else if (battle.menuIndex === 2) {
        battle.menuState = "POKEMON";
        battle.pokemonMenuIndex = 0;
      } else if (battle.menuIndex === 3) {
        if (battle.isTrainerBattle) {
          battle.message = "No! There's no running from a TRAINER battle!";
          sfx.textBlip();
        } else {
          battle.message = "Got away safely!";
          battle.turnLock = true;
          setTimeout(() => { 
            battle.isTrainerBattle = false;
            battle.isGym = false;
            battle.trainerTeam = [];
            battle.trainerTeamIndex = 0;
            battle.onWin = null;
            gameState = STATE.OVERWORLD; 
            music.play();
          }, 1000);
        }
      }
    }
  } else if (battle.menuState === "MOVES") {
    if (key === "ArrowUp" || key === "w") battle.menuIndex = Math.max(0, battle.menuIndex - 1);
    if (key === "ArrowDown" || key === "s") battle.menuIndex = Math.min(battle.playerMon.moves.length - 1, battle.menuIndex + 1);

    if (key === "x" || key === "Escape") {
      battle.menuState = "MAIN";
      battle.menuIndex = 0;
      return;
    }

    if (key === "z" || key === "Enter") {
      const move = battle.playerMon.moves[battle.menuIndex];
      executePlayerMove(move);
    }
  } else if (battle.menuState === "BAG") {
    if (key === "x" || key === "Escape") {
      battle.menuState = "MAIN";
      battle.menuIndex = 1;
      return;
    }

    if (key === "ArrowUp" || key === "w") battle.menuIndex = Math.max(0, battle.menuIndex - 1);
    if (key === "ArrowDown" || key === "s") battle.menuIndex = Math.min(3, battle.menuIndex + 1);
    if (key === "z" || key === "Enter") useBattleItem(battle.menuIndex);
  } else if (battle.menuState === "POKEMON") {
    if (key === "ArrowUp" || key === "w") {
      battle.pokemonMenuIndex = Math.max(0, battle.pokemonMenuIndex - 1);
    }
    if (key === "ArrowDown" || key === "s") {
      battle.pokemonMenuIndex = Math.min(player.team.length - 1, battle.pokemonMenuIndex + 1);
    }

    if ((key === "x" || key === "Escape") && !battle.forcedSwitch) {
      battle.menuState = "MAIN";
      battle.menuIndex = 2;
      return;
    }

    if (key === "z" || key === "Enter") {
      handlePokemonSwitchSelect(battle.pokemonMenuIndex);
    }
  }
}

function useBattleItem(i) {
  const pm = battle.playerMon; let ok = false, msg = "";
  if (i === 0) {
    if (battle.isTrainerBattle) battle.message = "The Trainer blocked the Ball! Don't be a thief!";
    else if (player.pokeBalls > 0) throwPokeball();
    else battle.message = "You have no POKé BALLS left!";
    return;
  }
  if (i === 1) {
    if (player.potions <= 0) msg = "No POTIONs left!";
    else if (pm.hp >= pm.maxHp) msg = `${pm.name} is already at full HP!`;
    else { player.potions--; pm.hp = Math.min(pm.maxHp, pm.hp + 20); ok = true; msg = `${pm.name} recovered 20 HP!`; }
  } else if (i === 2) {
    if (player.fullHeals <= 0) msg = "No FULL HEALs left!";
    else if (!pm.status) msg = `${pm.name} has no status problem!`;
    else { player.fullHeals--; pm.status = null; ok = true; msg = `${pm.name} was cured!`; }
  } else {
    if (player.berries <= 0) msg = "No BERRIES left!";
    else { player.berries--; pm.hp = Math.min(pm.maxHp, pm.hp + 10); pm.happy = Math.min(100, (pm.happy || 0) + 15); ok = true; msg = `${pm.name} enjoyed the BERRY!`; }
  }
  battle.message = msg;
  if (!ok) { sfx.ballWobble(); return; }
  sfx.potionUse(); battle.turnLock = true; battle.menuState = "MAIN"; battle.menuIndex = 0;
  setTimeout(executeEnemyTurn, 1200);
}

function handlePokemonSwitchSelect(index) {
  const chosen = player.team[index];
  if (index === battle.activeTeamIndex) {
    battle.message = `${chosen.name} is already in battle!`;
    return;
  }
  if (chosen.hp <= 0) {
    battle.message = `${chosen.name} has no energy left to fight!`;
    return;
  }

  battle.turnLock = true;
  battle.menuState = "MAIN";
  sfx.switchMon();
  battle.message = `Come back, ${battle.playerMon.name}!`;

  battle.playerFlicker = true;
  setTimeout(() => {
    battle.playerFlicker = false;
    battle.activeTeamIndex = index;
    battle.playerMon = chosen;
    battle.playerDispHP = chosen.hp;
    battle.playerDispExp = chosen.exp;
    battle.pFaint = 0;
    battle.pFaintOn = false;

    battle.message = `Go! ${chosen.name}!`;
    triggerPlayerThrowAnimation(index, () => {
      cryAudio.play(chosen.id);
      setTimeout(() => {
        if (battle.forcedSwitch) {
          battle.forcedSwitch = false;
          battle.turnLock = false;
          battle.message = `What will ${battle.playerMon.name} do?`;
        } else {
          executeEnemyTurn();
        }
      }, 800);
    });
  }, 700);
}

function throwPokeball() {
  battle.turnLock = true;
  battle.menuState = "MAIN";
  player.pokeBalls--;
  battle.message = `Player used one POKé BALL!`;
  sfx.throwBall();

  pokeballAnim.active = true;
  pokeballAnim.progress = 0;
  pokeballAnim.x = pokeballAnim.startX;
  pokeballAnim.y = pokeballAnim.startY;
  pokeballAnim.rotation = 0;
  pokeballAnim.state = "THROW";
  pokeballAnim.wobbleCount = 0;
  pokeballAnim.wobbleAngle = 0;
  pokeballAnim.timer = 0;

  const hpFactor = (battle.enemy.maxHp * 3 - battle.enemy.hp * 2) / (battle.enemy.maxHp * 3);
  const catchChance = Math.min(0.95, (battle.enemy.catchRate || 0.6) * hpFactor + 0.15);
  pokeballAnim.isCaught = Math.random() < catchChance;
  pokeballAnim.maxWobbles = pokeballAnim.isCaught ? 3 : Math.floor(Math.random() * 3);
}

function updatePokeballAnimation() {
  if (!pokeballAnim.active) return;

  if (pokeballAnim.state === "THROW") {
    pokeballAnim.progress += 0.024;
    pokeballAnim.rotation += 0.35;

    const p = pokeballAnim.progress;
    pokeballAnim.x = pokeballAnim.startX + (pokeballAnim.targetX - pokeballAnim.startX) * p;
    const arcHeight = -160 * Math.sin(p * Math.PI);
    pokeballAnim.y = pokeballAnim.startY + (pokeballAnim.targetY - pokeballAnim.startY) * p + arcHeight;

    if (pokeballAnim.progress >= 1) {
      pokeballAnim.state = "ABSORB";
      pokeballAnim.progress = 0;
      pokeballAnim.x = pokeballAnim.targetX;
      pokeballAnim.y = pokeballAnim.targetY;
      sfx.hit();
      spawnParticles("HIT", pokeballAnim.x, pokeballAnim.y);
    }
  } else if (pokeballAnim.state === "ABSORB") {
    battle.enemyScale = Math.max(0, battle.enemyScale - 0.05);
    battle.enemyFlicker = true;

    if (battle.enemyScale <= 0) {
      battle.enemyFlicker = false;
      battle.enemyCaptured = true;
      pokeballAnim.state = "DROP";
      pokeballAnim.progress = 0;
    }
  } else if (pokeballAnim.state === "DROP") {
    pokeballAnim.progress += 0.05;
    pokeballAnim.y = pokeballAnim.targetY + (pokeballAnim.groundY - pokeballAnim.targetY) * pokeballAnim.progress;

    if (pokeballAnim.progress >= 1) {
      pokeballAnim.y = pokeballAnim.groundY;
      sfx.ballBounce();
      pokeballAnim.state = "WOBBLE";
      pokeballAnim.timer = 25;
    }
  } else if (pokeballAnim.state === "WOBBLE") {
    if (pokeballAnim.timer > 0) {
      pokeballAnim.timer--;
      return;
    }

    if (pokeballAnim.wobbleCount < pokeballAnim.maxWobbles) {
      pokeballAnim.wobbleAngle = Math.sin(T * 0.4) * 0.35;
      if (Math.abs(pokeballAnim.wobbleAngle) > 0.3) {
        if (!pokeballAnim.ticked) {
          sfx.ballWobble();
          pokeballAnim.ticked = true;
        }
      } else {
        pokeballAnim.ticked = false;
      }

      pokeballAnim.progress += 0.03;
      if (pokeballAnim.progress >= 1) {
        pokeballAnim.progress = 0;
        pokeballAnim.wobbleCount++;
        pokeballAnim.wobbleAngle = 0;
        pokeballAnim.timer = 30;
      }
    } else {
      if (pokeballAnim.isCaught) {
        pokeballAnim.state = "CAUGHT";
        sfx.catchSuccess();
        battle.message = `All right! ${battle.enemy.name} was caught!`;
        spawnParticles("EMBER", pokeballAnim.x, pokeballAnim.y);
        floaters.push({ x: pokeballAnim.x, y: pokeballAnim.y - 30, text: "CAUGHT!", life: 80 });

        const caughtMon = JSON.parse(JSON.stringify(battle.enemy));
        caughtMon.exp = 0;
        caughtMon.maxExp = 35 + caughtMon.level * 8;
        caughtMon.spriteKey = caughtMon.spriteKey || (caughtMon.name.toLowerCase() + "_front");
        caughtMon.backSpriteKey = caughtMon.backSpriteKey || (caughtMon.name.toLowerCase() + "_back");
        caughtMon.attack = caughtMon.attack || 12;
        caughtMon.defense = caughtMon.defense || 10;
        caughtMon.speed = caughtMon.speed || 11;
        if (player.team.length < 6) player.team.push(caughtMon);
        else { player.pc.push(caughtMon); battle.message = `${caughtMon.name} was caught and sent to the PC box!`; }

        setTimeout(() => {
          gameState = STATE.OVERWORLD;
          music.play();
        }, 3600);
      } else {
        pokeballAnim.state = "ESCAPED";
        sfx.faint();
        battle.message = `Oh no! The wild ${battle.enemy.name} broke free!`;
        battle.enemyCaptured = false;
        battle.enemyScale = 1;
        spawnParticles("HIT", pokeballAnim.x, pokeballAnim.y);
        pokeballAnim.active = false;
        cryAudio.play(battle.enemy.id);

        setTimeout(executeEnemyTurn, 1400);
      }
    }
  }
}

function finishGymBattle() {
  if (battle.expState) {
    if (battle.expState.interval) clearInterval(battle.expState.interval);
    if (battle.expState.timer) clearTimeout(battle.expState.timer);
    battle.expState = null;
  }
  const isGym = battle.isGym;
  const leader = battle.gymLeader;
  battle.isTrainerBattle = false;
  battle.isGym = false;
  battle.trainerTeam = [];
  battle.trainerTeamIndex = 0;
  battle.onWin = null;
  battle.turnLock = false;

  if (isGym) {
    if (leader === "SURGE" && !player.hasThunderBadge) {
      player.hasThunderBadge = true;
      player.money += 2800;
      awardedBadge = "THUNDER";
      gameState = STATE.BADGE_AWARD;
      sfx.badgeFanfare && sfx.badgeFanfare();
      return true;
    } else if (leader === "MISTY" && !player.hasCascadeBadge) {
      player.hasCascadeBadge = true;
      player.money += 2200;
      awardedBadge = "CASCADE";
      gameState = STATE.BADGE_AWARD;
      sfx.badgeFanfare && sfx.badgeFanfare();
      return true;
    } else if (!player.hasBoulderBadge) {
      player.hasBoulderBadge = true;
      player.money += 1500;
      awardedBadge = "BOULDER";
      gameState = STATE.BADGE_AWARD;
      sfx.badgeFanfare && sfx.badgeFanfare();
      return true;
    }
  }
  gameState = STATE.OVERWORLD;
  music.play();
  return false;
}

function getMoveFxType(move, mon) {
  const mName = ((move && move.name) || "").toUpperCase();
  const mType = (move && move.type) || (MOVE_TYPES[mName]) || (mon && mon.type) || "NORMAL";
  if (mName.includes("EMBER") || mName.includes("FIRE") || mName.includes("FLAME") || mType === "FIRE") return "EMBER";
  if (mName.includes("WATER") || mName.includes("BUBBLE") || mName.includes("SURF") || mName.includes("HYDRO") || mType === "WATER") return "WATER";
  if (mName.includes("VINE") || mName.includes("LEAF") || mName.includes("GRASS") || mName.includes("DRAIN") || mType === "GRASS") return "LEAF";
  if (mName.includes("THUNDER") || mName.includes("SPARK") || mName.includes("SHOCK") || mType === "ELECTRIC") return "THUNDER";
  if (mName.includes("PSYCHIC") || mName.includes("CONFUSION") || mName.includes("TELEPORT") || mType === "PSYCHIC") return "PSYCHIC";
  if (mName.includes("ROCK") || mName.includes("TOMB") || mType === "ROCK" || mType === "GROUND") return "ROCK";
  if (mName.includes("POISON") || mName.includes("SLUDGE") || mType === "POISON") return "POISON";
  return "HIT";
}

function playMoveSfx(type) {
  if (type === "EMBER") sfx.fire && sfx.fire();
  else if (type === "THUNDER") sfx.playTone && sfx.playTone(880, "sawtooth", 0.14, 220, 0.16);
  else if (type === "WATER") sfx.playTone && sfx.playTone(320, "sine", 0.16, 560, 0.14);
  else if (type === "LEAF") sfx.playTone && sfx.playTone(540, "triangle", 0.14, 380, 0.12);
  else if (type === "PSYCHIC") sfx.playTone && sfx.playTone(660, "sine", 0.22, 880, 0.12);
  else sfx.hit && sfx.hit();
}

function spawnParticles(type, cx, cy) {
  let count = 18;
  if (type === "EMBER") count = 26;
  else if (type === "THUNDER") count = 22;
  else if (type === "LEAF") count = 20;
  else if (type === "WATER") count = 24;
  else if (type === "PSYCHIC") count = 20;

  for (let i = 0; i < count; i++) {
    let p = { x: cx, y: cy, life: 24, size: Math.random() * 6 + 4, color: "#fff", vx: 0, vy: 0, grav: 0 };
    if (type === "EMBER") {
      const colors = ["#ff4500", "#ff9800", "#ffca28", "#fff3e0"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      p.vx = (Math.random() - 0.5) * 7;
      p.vy = -Math.random() * 6 - 2;
      p.grav = 0.12;
      p.size = Math.random() * 7 + 4;
    } else if (type === "WATER") {
      const colors = ["#0288d1", "#29b6f6", "#81d4fa", "#e1f5fe"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      const ang = Math.random() * Math.PI * 2;
      const spd = Math.random() * 6 + 2;
      p.vx = Math.cos(ang) * spd;
      p.vy = Math.sin(ang) * spd - 2;
      p.grav = 0.22;
      p.size = Math.random() * 6 + 3;
    } else if (type === "LEAF") {
      const colors = ["#2e7d32", "#4caf50", "#81c784", "#c8e6c9"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      const ang = Math.random() * Math.PI * 2;
      p.vx = Math.cos(ang) * (Math.random() * 5 + 2);
      p.vy = Math.sin(ang) * (Math.random() * 5 + 2);
      p.life = 28;
      p.size = Math.random() * 5 + 3;
    } else if (type === "THUNDER") {
      const colors = ["#ffeb3b", "#fff59d", "#ffd600", "#ffffff"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      p.vx = (Math.random() - 0.5) * 12;
      p.vy = (Math.random() - 0.5) * 12;
      p.life = 16;
      p.size = Math.random() * 6 + 3;
    } else if (type === "PSYCHIC") {
      const colors = ["#ba68c8", "#ab47bc", "#ce93d8", "#f3e5f5"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      const ang = (i / count) * Math.PI * 2;
      p.vx = Math.cos(ang) * (Math.random() * 4 + 2);
      p.vy = Math.sin(ang) * (Math.random() * 4 + 2);
      p.life = 26;
      p.size = Math.random() * 7 + 4;
    } else if (type === "ROCK") {
      const colors = ["#6d4c41", "#8d6e63", "#a1887f", "#d7ccc8"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      p.vx = (Math.random() - 0.5) * 8;
      p.vy = -Math.random() * 5 - 1;
      p.grav = 0.3;
      p.size = Math.random() * 7 + 4;
    } else if (type === "POISON") {
      const colors = ["#8e24aa", "#ab47bc", "#7b1fa2", "#e1bee7"];
      p.color = colors[Math.floor(Math.random() * colors.length)];
      p.vx = (Math.random() - 0.5) * 6;
      p.vy = -Math.random() * 4 - 1;
      p.grav = 0.1;
      p.size = Math.random() * 6 + 3;
    } else {
      p.color = Math.random() > 0.4 ? "#e85d43" : "#ffca28";
      p.vx = (Math.random() - 0.5) * 9;
      p.vy = (Math.random() - 0.5) * 9;
      p.life = 18;
      p.size = Math.random() * 6 + 3;
    }
    battle.particles.push(p);
  }
}

function _executePlayerMove(move) {
  battle.turnLock = true;
  battle.menuState = "MAIN";
  battle.message = `${battle.playerMon.name} used ${move.name}!`;

  battle.playerOffset.x = 28;
  battle.playerOffset.y = -20;

  setTimeout(() => {
    battle.playerOffset.x = 0;
    battle.playerOffset.y = 0;

    const fxType = getMoveFxType(move, battle.playerMon);
    playMoveSfx(fxType);
    spawnParticles(fxType, 530, 150);

    battle.animShake = 12;
    battle.enemyFlicker = true;
    setTimeout(() => battle.enemyFlicker = false, 450);

    const hit = calcDamage(move, battle.playerMon, battle.enemy);
    battle.enemy.hp = Math.max(0, battle.enemy.hp - hit.dmg);
    floaters.push({ x: 530, y: 130, text: hit.miss ? "MISS" : `-${hit.dmg}${hit.mult > 1 || hit.crit ? "!" : ""}`, life: 50 });
    if (hit.text) battle.message = hit.text;
    if (hit.mult > 1 || hit.crit) battle.animShake = 22;
    battle.flash = 1;

    setTimeout(() => {
      if (battle.enemy.hp <= 0) {
        battle.message = `${battle.enemy.name} fainted!`; 
        battle.eFaintOn = true; battle.enemyWent = false;
        sfx.faint();
        cryAudio.play(battle.enemy.id, 0.75, 0.35);

        setTimeout(handleEnemyFaint, 1200);
      } else {
        if (battle.enemyWent) { battle.enemyWent = false; battle.turnLock = false; battle.message = `What will ${battle.playerMon.name} do?`; } else setTimeout(executeEnemyTurn, 1000);
      }
    }, 800);
  }, 320);
}

function handleEnemyFaint() {
  if (battle.isTrainerBattle && battle.trainerTeamIndex < battle.trainerTeam.length - 1) {
    battle.trainerTeamIndex++;
    const nextEnemy = battle.trainerTeam[battle.trainerTeamIndex];
    nextEnemy.hp = nextEnemy.maxHp;
    nextEnemy.status = null;
    delete nextEnemy.sleepTurns;
    ensurePP(nextEnemy);
    battle.enemy = nextEnemy;
    battle.enemyDispHP = nextEnemy.hp;
    battle.eFaint = 0;
    battle.eFaintOn = false;
    battle.message = `${battle.trainerName} sent out ${nextEnemy.name}!`;
    cryAudio.play(nextEnemy.id);
    setTimeout(() => {
      battle.turnLock = false;
      battle.message = `What will ${battle.playerMon.name} do?`;
    }, 1500);
  } else {
    handleVictoryAndExp();
  }
}

function handleExpSkip() {
  if (!battle || !battle.expState) return false;
  if (typeof battle.expState.skip === "function") {
    battle.expState.skip();
    return true;
  }
  return false;
}

function handleVictoryAndExp() {
  sfx.victory();
  if (battle.isTrainerBattle && battle.onWin) { battle.onWin(); battle.onWin = null; }
  const earnedExp = Math.round((battle.enemy.baseExp || 40) * (battle.enemy.level / 2.5));
  const prize = battle.isGym ? 1400 : battle.isTrainerBattle ? 350 : 10 + battle.enemy.level * 5;
  player.money += prize;
  battle.message = `${battle.playerMon.name} gained ${earnedExp} EXP! +$${prize}`;

  if (!battle.playerMon || earnedExp <= 0) {
    setTimeout(finishGymBattle, 400);
    return;
  }

  const startTimer = setTimeout(() => {
    animateBattleExp(earnedExp);
  }, 350);

  battle.expState = {
    type: "WAIT_START",
    timer: startTimer,
    skip: () => {
      clearTimeout(startTimer);
      animateBattleExp(earnedExp);
    }
  };
}

function animateBattleExp(totalExp) {
  let remainingExp = totalExp;

  function runNextChunk() {
    if (!battle.playerMon || remainingExp <= 0) {
      const finishTimer = setTimeout(() => {
        finishGymBattle();
      }, 450);

      battle.expState = {
        type: "FINISH_WAIT",
        timer: finishTimer,
        skip: () => {
          clearTimeout(finishTimer);
          finishGymBattle();
        }
      };
      return;
    }

    const needed = Math.max(0, battle.playerMon.maxExp - battle.playerMon.exp);
    if (needed === 0) {
      handleLevelUp(remainingExp);
      return;
    }

    let chunkToAdd = Math.min(remainingExp, needed);
    // Smooth, snappy animation: complete chunk in ~14-18 ticks (~280-360ms) regardless of total exp amount
    const step = Math.max(1, Math.ceil(chunkToAdd / 15));
    let tickCounter = 0;
    let intervalId = null;

    function finishChunk(isLevelUp) {
      if (intervalId) { clearInterval(intervalId); intervalId = null; }
      if (isLevelUp) {
        battle.playerMon.exp = battle.playerMon.maxExp;
        battle.playerDispExp = battle.playerMon.maxExp;
        const transitionTimer = setTimeout(() => {
          handleLevelUp(remainingExp);
        }, 220);

        battle.expState = {
          type: "LEVEL_UP_TRANSITION",
          timer: transitionTimer,
          skip: () => {
            clearTimeout(transitionTimer);
            handleLevelUp(remainingExp);
          }
        };
      } else {
        const finishTimer = setTimeout(() => {
          finishGymBattle();
        }, 450);

        battle.expState = {
          type: "FINISH_WAIT",
          timer: finishTimer,
          skip: () => {
            clearTimeout(finishTimer);
            finishGymBattle();
          }
        };
      }
    }

    intervalId = setInterval(() => {
      const delta = Math.min(step, chunkToAdd);
      battle.playerMon.exp += delta;
      chunkToAdd -= delta;
      remainingExp -= delta;
      tickCounter++;

      if (tickCounter % 2 === 0 || delta === 1) {
        sfx.expTick();
      }

      if (battle.playerMon.exp >= battle.playerMon.maxExp) {
        finishChunk(true);
        return;
      }

      if (chunkToAdd <= 0 || remainingExp <= 0) {
        finishChunk(false);
        return;
      }
    }, 20);

    battle.expState = {
      type: "FILLING",
      interval: intervalId,
      skip: () => {
        if (intervalId) { clearInterval(intervalId); intervalId = null; }
        const delta = Math.min(chunkToAdd, Math.max(0, battle.playerMon.maxExp - battle.playerMon.exp));
        battle.playerMon.exp += delta;
        remainingExp -= delta;
        chunkToAdd = 0;
        battle.playerDispExp = battle.playerMon.exp;
        sfx.expTick();
        if (battle.playerMon.exp >= battle.playerMon.maxExp) {
          finishChunk(true);
        } else {
          finishChunk(false);
        }
      }
    };
  }

  runNextChunk();
}

// LEVEL UP & CHECK FOR EVOLUTION IN BATTLE
function handleLevelUp(remainingExp) {
  battle.playerMon.level++;
  battle.playerMon.exp = 0;
  battle.playerDispExp = 0;
  battle.playerMon.maxExp = Math.round(battle.playerMon.maxExp * 1.45);
  
  const hpIncrease = Math.floor(Math.random() * 3) + 3;
  battle.playerMon.maxHp += hpIncrease;
  battle.playerMon.hp = battle.playerMon.maxHp;
  battle.playerMon.attack = (battle.playerMon.attack || 12) + 2;
  battle.playerMon.defense = (battle.playerMon.defense || 10) + 2;
  battle.playerMon.speed = (battle.playerMon.speed || 11) + 2;
  battle.playerMon.moves.forEach(m => m.power += 2);

  const newlyLearned = checkLevelUpMoves(battle.playerMon);
  let learnMsg = "";
  if (newlyLearned.length > 0) {
    learnMsg = ` Learned ${newlyLearned.join(" & ")}!`;
    newlyLearned.forEach((mvName, i) => {
      floaters.push({ x: 230, y: 270 + i * 24, text: `LEARNED ${mvName}!`, life: 85 });
    });
  }

  sfx.levelUp();
  cryAudio.play(battle.playerMon.id, 1.1, 0.4);

  const statSummary = `+${hpIncrease} HP, +2 ATK, +2 DEF, +2 SPD`;
  battle.message = `LEVEL UP! ${battle.playerMon.name} grew to Lv. ${battle.playerMon.level}! ${statSummary}${learnMsg}`;
  floaters.push({ x: 230, y: 220, text: `LV UP! +${hpIncrease} HP`, life: 75 });
  floaters.push({ x: 230, y: 246, text: `ATK +2  DEF +2  SPD +2`, life: 75 });
  spawnParticles("EMBER", 200, 290);

  function proceedAfterLevelUp() {
    const curSpecies = SPECIES_DB[battle.playerMon.id];
    if (curSpecies && curSpecies.evoLevel && battle.playerMon.level >= curSpecies.evoLevel && curSpecies.evoTargetId) {
      if (battle.expState) {
        if (battle.expState.interval) clearInterval(battle.expState.interval);
        if (battle.expState.timer) clearTimeout(battle.expState.timer);
        battle.expState = null;
      }
      const wasGym = battle.isGym;
      const leader = battle.gymLeader;
      battle.isTrainerBattle = false;
      battle.isGym = false;
      battle.trainerTeam = [];
      battle.trainerTeamIndex = 0;
      battle.onWin = null;
      battle.turnLock = false;
      startEvolution(battle.playerMon, curSpecies.evoTargetId, STATE.OVERWORLD);
      if (wasGym) {
        evoAnim.pendingGymLeader = leader;
      }
      return;
    }

    if (remainingExp > 0) {
      animateBattleExp(remainingExp);
    } else {
      const finishTimer = setTimeout(() => {
        finishGymBattle();
      }, 450);

      battle.expState = {
        type: "FINISH_WAIT",
        timer: finishTimer,
        skip: () => {
          clearTimeout(finishTimer);
          finishGymBattle();
        }
      };
    }
  }

  const levelUpTimer = setTimeout(proceedAfterLevelUp, 1200);

  battle.expState = {
    type: "LEVEL_UP",
    timer: levelUpTimer,
    skip: () => {
      clearTimeout(levelUpTimer);
      proceedAfterLevelUp();
    }
  };
}

// APPLY RARE CANDY LEVEL UP DIRECTLY FROM BAG
function applyRareCandy(mon) {
  mon.level++;
  mon.exp = 0;
  mon.maxExp = Math.round((mon.maxExp || 35) * 1.4);
  const hpIncrease = Math.floor(Math.random() * 3) + 3;
  mon.maxHp += hpIncrease;
  mon.hp = mon.maxHp;
  mon.attack = (mon.attack || 12) + 2;
  mon.defense = (mon.defense || 10) + 2;
  mon.speed = (mon.speed || 11) + 2;
  mon.moves.forEach(m => m.power += 2);

  const newlyLearned = checkLevelUpMoves(mon);
  if (newlyLearned.length > 0) {
    newlyLearned.forEach((mvName, i) => {
      floaters.push({ x: 250, y: 250 + i * 24, text: `LEARNED ${mvName}!`, life: 90 });
    });
  }

  sfx.levelUp();
  cryAudio.play(mon.id);
  floaters.push({ x: 250, y: 200, text: `LV UP! +${hpIncrease} HP`, life: 90 });
  floaters.push({ x: 250, y: 226, text: `ATK +2  DEF +2  SPD +2`, life: 90 });

  const curSpecies = SPECIES_DB[mon.id];
  if (curSpecies && curSpecies.evoLevel && mon.level >= curSpecies.evoLevel && curSpecies.evoTargetId) {
    setTimeout(() => {
      startEvolution(mon, curSpecies.evoTargetId, STATE.BAG_MENU);
    }, 450);
  } else {
    gameState = STATE.BAG_MENU;
  }
}

// START DEDICATED EVOLUTION CUTSCENE
function startEvolution(targetMon, nextSpeciesId, returnState = STATE.OVERWORLD) {
  const nextSpecies = SPECIES_DB[nextSpeciesId];
  evoAnim.active = true;
  evoAnim.targetMon = targetMon;
  evoAnim.newSpecies = nextSpecies;
  evoAnim.timer = 0;
  evoAnim.returnState = returnState;
  gameState = STATE.EVOLUTION_SCENE;
  music.pause();
  sfx.evoTheme();
}

function _executeEnemyTurn() {
  const chosenMove = (battle.enemy.moves && battle.enemy.moves.length > 0) 
    ? battle.enemy.moves[Math.floor(Math.random() * battle.enemy.moves.length)] 
    : { name: "ATTACK", power: battle.enemy.attack };

  battle.message = `${battle.enemy.name} used ${chosenMove.name}!`;
  battle.enemyOffset.x = -28;
  battle.enemyOffset.y = 20;

  setTimeout(() => {
    battle.enemyOffset.x = 0;
    battle.enemyOffset.y = 0;
    const fxType = getMoveFxType(chosenMove, battle.enemy);
    playMoveSfx(fxType);
    spawnParticles(fxType, 190, 290);
    battle.animShake = 12;
    battle.playerFlicker = true;
    setTimeout(() => battle.playerFlicker = false, 450);

    const hit = calcDamage(chosenMove, battle.enemy, battle.playerMon);
    battle.playerMon.hp = Math.max(0, battle.playerMon.hp - hit.dmg);
    floaters.push({ x: 190, y: 270, text: hit.miss ? "MISS" : `-${hit.dmg}${hit.mult > 1 || hit.crit ? "!" : ""}`, life: 50 });
    if (hit.text) battle.message = hit.text;
    if (hit.mult > 1 || hit.crit) battle.animShake = 22;
    battle.flash = 1;

    setTimeout(() => {
      if (battle.playerMon.hp <= 0) {
        battle.message = `${battle.playerMon.name} fainted!`; 
        battle.pFaintOn = true; battle.pendingMove = null; battle.enemyWent = false;
        sfx.faint();
        cryAudio.play(battle.playerMon.id, 0.75, 0.35);

        setTimeout(() => {
          const hasAlive = player.team.some(p => p.hp > 0);
          if (hasAlive) {
            battle.forcedSwitch = true;
            battle.menuState = "POKEMON";
            battle.pokemonMenuIndex = 0;
            battle.turnLock = false;
            battle.message = `Choose another POKéMON!`;
          } else {
            battle.message = `You have no POKéMON left to battle!`;
            setTimeout(showGameOver, 2200);
          }
        }, 1500);
      } else {
        afterEnemy();
      }
    }, 800);
  }, 320);
}


// =============================================================================
// 12b. GAME OVER & RESTART
// =============================================================================
function showGameOver() {
  gameState = STATE.GAME_OVER;
  music.pause();
  sfx.faint();
  const ov = document.getElementById("gameover-overlay");
  ov.classList.add("show");
  const btn = document.getElementById("playagain-btn");
  if (btn) btn.focus();
}

function restartGame() {
  document.getElementById("gameover-overlay").classList.remove("show");

  // Player: brand-new save inside Red's house
  player.gridX = 2; player.gridY = 2;
  player.x = player.gridX * TILE_SIZE; player.y = player.gridY * TILE_SIZE;
  player.facing = "DOWN"; player.isMoving = false; player.moveProgress = 0; resetFollower();
  player.team = [];
  player.storyFlags = { started: false, starterChosen: false };
  player.pokeBalls = 20; player.potions = 5; player.rareCandies = 99;
  player.hasBoulderBadge = false; player.hasCascadeBadge = false; player.hasThunderBadge = false; player.thunderStones = 1; player.moonStones = 1;
  player.beatBugCatcher = false; player.money = 500; player.fullHeals = 1; player.found = {}; player.berries = 3; player.steps = 0; player.pc = []; player.beat = {}; battle.isGym = false; battle.onWin = null;

  // Battle / animation leftovers
  Object.assign(battle, {
    enemy: null, playerMon: null, activeTeamIndex: 0, menuIndex: 0, menuState: "MAIN",
    pokemonMenuIndex: 0, forcedSwitch: false, message: "", turnLock: false, animShake: 0,
    playerOffset: { x: 0, y: 0 }, enemyOffset: { x: 0, y: 0 }, particles: [],
    enemyFlicker: false, playerFlicker: false, eFaint: 0, pFaint: 0, eFaintOn: false, pFaintOn: false,
    flash: 0, enemyCaptured: false, enemyScale: 1, isTrainerBattle: false, trainerName: "",
    trainerTeam: [], trainerTeamIndex: 0, expState: null
  });
  transition.active = false; transition.radius = 0;
  evoAnim.active = false; pokeballAnim.active = false; playerThrowAnim.active = false;
  dialogue.queue = []; dialogue.activeCallback = null;
  floaters.length = 0; fx.length = 0;
  bagMenu.index = 0; bagMenu.selectedItem = null; bagTargetIndex = 0;
  partyMenu.selectedIndex = 0; pokedexMenu.index = 0;
  for (const k in keys) keys[k] = false;

  // World: start inside Red's House
  currentMapKey = "REDS_HOUSE";
  currentMap = MAPS[currentMapKey];
  showMapBanner(currentMap.name);
  gameState = STATE.OVERWORLD;
  music.currentKey = null;
  music.play();
  beginOpeningStory();
}

document.getElementById("playagain-btn").addEventListener("click", restartGame);

function beginOpeningStory() {
  if (player.storyFlags && player.storyFlags.started) return;
  player.storyFlags = { started: true, starterChosen: false };
  dialogue.speaker = "MOM";
  dialogue.queue = [
    "Mom: Good morning, Red! Did you have a good sleep?",
    "Mom: Professor Oak outside in Pallet Town was looking for you. He has a Pokémon for you!",
    "Mom: Remember: it's dangerous to step into the tall grass outside without one—wild Pokémon live there!",
    "Mom: Head out the door and speak with Professor Oak first."
  ];
  dialogue.activeCallback = null;
  setDialogueText(dialogue.queue[0]);
  gameState = STATE.DIALOGUE;
}

function triggerOakStarterChoice() {
  if (player.team.length > 0) {
    dialogue.speaker = "PROF. OAK";
    dialogue.queue = [
      `Oak: How is ${player.team[0].name} doing? It looks great!`,
      "Oak: With your Pokémon by your side, you can now safely walk through the tall grass.",
      "Oak: Head north toward Viridian City and begin your adventure!"
    ];
    dialogue.activeCallback = null;
    setDialogueText(dialogue.queue[0]);
    gameState = STATE.DIALOGUE;
    return;
  }

  starterSelect.index = 0;
  gameState = STATE.STARTER_SELECT;
  sfx.doorSound && sfx.doorSound();
}

function confirmStarterChoice() {
  const choiceId = starterSelect.starters[starterSelect.index];
  const starter = makeStarterPokemon(choiceId);
  if (!starter) return;

  ensurePP(starter);
  player.team = [starter];
  player.storyFlags = { started: true, starterChosen: true };
  showMapBanner(`STARTER: ${starter.name}`);
  resetFollower();
  saveGame();

  cryAudio.play(starter.id);
  sfx.levelUp && sfx.levelUp();

  dialogue.speaker = "PROF. OAK";
  dialogue.queue = [
    `Oak: Excellent choice! ${starter.name} is a fantastic partner for your journey!`,
    `Oak: ${starter.name} is level 5 and ready to explore by your side.`,
    "Oak: You can now safely pass through the tall grass without fear of wild Pokémon!",
    "Oak: Head north toward Viridian City, and don't forget you can rest at home with your Mom anytime."
  ];
  dialogue.activeCallback = null;
  setDialogueText(dialogue.queue[0]);
  gameState = STATE.DIALOGUE;
}

function renderStarterSelect() {
  // Rich cozy laboratory background
  const bg = ctx.createLinearGradient(0, 0, 0, 480);
  bg.addColorStop(0, "#2a1b24");
  bg.addColorStop(0.5, "#1c121e");
  bg.addColorStop(1, "#120c15");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 720, 480);

  // Subtle background pattern
  ctx.strokeStyle = "rgba(255, 230, 190, 0.04)";
  ctx.lineWidth = 1;
  for (let x = 0; x < 720; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 480); ctx.stroke(); }
  for (let y = 0; y < 480; y += 40) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(720, y); ctx.stroke(); }

  // Header Box
  ctx.fillStyle = "rgba(32, 20, 32, 0.94)";
  ctx.fillRect(35, 14, 650, 68);
  ctx.strokeStyle = "#e8b868";
  ctx.lineWidth = 3;
  ctx.strokeRect(35, 14, 650, 68);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 20px 'Courier New'";
  ctx.textAlign = "center";
  ctx.fillText("★ PROFESSOR OAK'S LAB ★", 360, 40);

  ctx.fillStyle = "#f5ebd8";
  ctx.font = "13px 'Courier New'";
  ctx.fillText("Choose your first partner Pokémon! [◄ / ►] Select   [Z / A] Choose", 360, 64);
  ctx.textAlign = "left";

  const cards = [
    { id: 1, name: "CHARMANDER", type: "FIRE", typeCol: "#e85038", desc: "Lizard Pokémon • Brave", sprite: "charmander_front", bg1: "#481c15", bg2: "#240f11", border: "#f06850", hp: 24, atk: 14, def: 11, spd: 13, moves: "SCRATCH, EMBER" },
    { id: 2, name: "BULBASAUR", type: "GRASS", typeCol: "#5ca842", desc: "Seed Pokémon • Calm", sprite: "bulbasaur_front", bg1: "#1b3a1e", bg2: "#102213", border: "#6cc44e", hp: 22, atk: 13, def: 12, spd: 10, moves: "TACKLE, VINE WHIP" },
    { id: 3, name: "SQUIRTLE", type: "WATER", typeCol: "#428cd8", desc: "Turtle Pokémon • Sturdy", sprite: "squirtle_front", bg1: "#173152", bg2: "#0d1b30", border: "#56a0f0", hp: 26, atk: 12, def: 14, spd: 11, moves: "TACKLE, WATER GUN" }
  ];

  const cardW = 196, cardH = 345, baseY = 98;
  const startX = 46, gap = 28;

  for (let i = 0; i < cards.length; i++) {
    const c = cards[i];
    const isSel = (starterSelect.index === i);
    const cx = startX + i * (cardW + gap);
    const cy = isSel ? baseY - 8 + Math.sin(T * 0.1) * 3 : baseY;

    // Card Glow / Shadow
    if (isSel) {
      ctx.shadowColor = c.typeCol;
      ctx.shadowBlur = 18;
    }
    const cgrad = ctx.createLinearGradient(cx, cy, cx, cy + cardH);
    cgrad.addColorStop(0, c.bg1);
    cgrad.addColorStop(1, c.bg2);
    ctx.fillStyle = cgrad;
    ctx.fillRect(cx, cy, cardW, cardH);
    ctx.shadowBlur = 0;

    // Card Border
    ctx.strokeStyle = isSel ? "#ffcb78" : "#4a3544";
    ctx.lineWidth = isSel ? 3.5 : 2;
    ctx.strokeRect(cx, cy, cardW, cardH);

    // Header strip inside card
    ctx.fillStyle = "rgba(0, 0, 0, 0.35)";
    ctx.fillRect(cx + 2, cy + 2, cardW - 4, 38);

    // Name
    ctx.fillStyle = isSel ? "#fff8e8" : "#e6ded2";
    ctx.font = "bold 15px 'Courier New'";
    ctx.fillText(c.name, cx + 10, cy + 26);

    // Type Tag
    ctx.fillStyle = c.typeCol;
    ctx.fillRect(cx + cardW - 62, cy + 10, 52, 20);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px 'Courier New'";
    ctx.textAlign = "center";
    ctx.fillText(c.type, cx + cardW - 36, cy + 24);
    ctx.textAlign = "left";

    // Sprite Pedestal
    const pedX = cx + cardW / 2, pedY = cy + 120;
    const pGrad = ctx.createRadialGradient(pedX, pedY, 10, pedX, pedY, 52);
    pGrad.addColorStop(0, "rgba(255, 230, 180, 0.25)");
    pGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(pedX, pedY, 50, 0, Math.PI * 2);
    ctx.fill();

    // Sprite
    const sprSize = 88;
    const sprY = cy + 66 + (isSel ? Math.sin(T * 0.15) * 4 : 0);
    drawGenSprite(c.sprite, cx + (cardW - sprSize) / 2, sprY, sprSize, sprSize);

    // Level tag
    ctx.fillStyle = "#e0c896";
    ctx.font = "bold 12px 'Courier New'";
    ctx.textAlign = "center";
    ctx.fillText("Lv. 5 • " + c.desc, cx + cardW / 2, cy + 172);

    // Stats Box
    ctx.fillStyle = "rgba(10, 6, 12, 0.55)";
    ctx.fillRect(cx + 10, cy + 185, cardW - 20, 60);
    ctx.strokeStyle = "rgba(255, 220, 160, 0.2)";
    ctx.lineWidth = 1;
    ctx.strokeRect(cx + 10, cy + 185, cardW - 20, 60);

    ctx.fillStyle = "#f5eedc";
    ctx.font = "11px 'Courier New'";
    ctx.textAlign = "left";
    ctx.fillText(`HP:  ${c.hp}   ATK: ${c.atk}`, cx + 20, cy + 206);
    ctx.fillText(`DEF: ${c.def}   SPD: ${c.spd}`, cx + 20, cy + 228);

    // Moves Box
    ctx.fillStyle = "rgba(10, 6, 12, 0.4)";
    ctx.fillRect(cx + 10, cy + 252, cardW - 20, 34);
    ctx.fillStyle = "#cbbab4";
    ctx.font = "10px 'Courier New'";
    ctx.fillText("MOVES:", cx + 16, cy + 266);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 10px 'Courier New'";
    ctx.fillText(c.moves, cx + 16, cy + 279);

    // Choose Button
    const btnY = cy + 296;
    if (isSel) {
      const bGrad = ctx.createLinearGradient(cx + 12, btnY, cx + cardW - 12, btnY + 36);
      bGrad.addColorStop(0, "#e8523c");
      bGrad.addColorStop(1, "#c23624");
      ctx.fillStyle = bGrad;
      ctx.fillRect(cx + 12, btnY, cardW - 24, 36);
      ctx.strokeStyle = "#fff4d0";
      ctx.lineWidth = 2;
      ctx.strokeRect(cx + 12, btnY, cardW - 24, 36);

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 14px 'Courier New'";
      ctx.textAlign = "center";
      ctx.fillText("★ CHOOSE (Z) ★", cx + cardW / 2, btnY + 23);
    } else {
      ctx.fillStyle = "rgba(45, 30, 42, 0.7)";
      ctx.fillRect(cx + 20, btnY + 4, cardW - 40, 28);
      ctx.strokeStyle = "#5a4352";
      ctx.lineWidth = 1;
      ctx.strokeRect(cx + 20, btnY + 4, cardW - 40, 28);

      ctx.fillStyle = "#8d7986";
      ctx.font = "12px 'Courier New'";
      ctx.textAlign = "center";
      ctx.fillText("Tap to select", cx + cardW / 2, btnY + 22);
    }
    ctx.textAlign = "left";
  }

  // Pointer click on canvas to select starter
  if (!renderStarterSelect._listenerAttached) {
    renderStarterSelect._listenerAttached = true;
    canvas.addEventListener("pointerdown", (e) => {
      if (gameState !== STATE.STARTER_SELECT) return;
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      const mx = (e.clientX - rect.left) * scaleX;
      const my = (e.clientY - rect.top) * scaleY;
      for (let i = 0; i < 3; i++) {
        const cx = startX + i * (cardW + gap);
        if (mx >= cx && mx <= cx + cardW && my >= baseY - 12 && my <= baseY + cardH) {
          if (starterSelect.index === i || my >= baseY + 280) {
            confirmStarterChoice();
          } else {
            starterSelect.index = i;
            sfx.textBlip();
          }
          break;
        }
      }
    });
  }
}

function startGame() {
  if (gameState !== STATE.TITLE) return;
  document.getElementById("landing").classList.add("hide");
  gameState = STATE.OVERWORLD;
  sfx.init();
  music.unlock();
  music.play();
  showMapBanner(currentMap.name);
  if (!player.storyFlags || !player.storyFlags.started) beginOpeningStory();
  sfx.levelUp && sfx.levelUp();
}

function continueGame() {
  if (gameState !== STATE.TITLE) return;
  if (loadGame()) {
    document.getElementById("landing").classList.add("hide");
    gameState = STATE.OVERWORLD;
    sfx.init();
    music.unlock();
    music.play();
    showMapBanner(currentMap.name);
    sfx.levelUp && sfx.levelUp();
  } else {
    startGame();
  }
}

const startBtnEl = document.getElementById("start-btn");
const continueBtnEl = document.getElementById("continue-btn");
if (startBtnEl) startBtnEl.addEventListener("click", startGame);
if (continueBtnEl) {
  continueBtnEl.addEventListener("click", continueGame);
  if (hasSave()) {
    continueBtnEl.style.display = "inline-block";
    startBtnEl.textContent = "NEW GAME";
  }
}
if (continueBtnEl && hasSave()) {
  continueBtnEl.focus();
} else if (startBtnEl) {
  startBtnEl.focus();
}

// =============================================================================
// 12. DRAWING HELPERS
// =============================================================================
function drawGenSprite(key, dx, dy, dw, dh, filterSilhouette = false) {
  if (loadedSprites[key]) {
    ctx.imageSmoothingEnabled = false;
    if (filterSilhouette) {
      ctx.save();
      ctx.filter = "brightness(500%) contrast(200%)";
      ctx.drawImage(loadedSprites[key], dx, dy, dw, dh);
      ctx.restore();
    } else {
      ctx.drawImage(loadedSprites[key], dx, dy, dw, dh);
    }
  } else {
    ctx.fillStyle = "#d27344";
    ctx.fillRect(dx, dy, dw, dh);
  }
}

function drawPokeball(x, y, radius, rotation) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);

  ctx.fillStyle = "#d85848";
  ctx.beginPath();
  ctx.arc(0, 0, radius, Math.PI, 0);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#faf3e8";
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "#403138";
  ctx.lineWidth = 2.4;
  ctx.beginPath(); ctx.arc(0, 0, radius, 0, Math.PI * 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(-radius, 0); ctx.lineTo(radius, 0); ctx.stroke();

  ctx.fillStyle = "#403138";
  ctx.beginPath(); ctx.arc(0, 0, radius * 0.35, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#ffffff";
  ctx.beginPath(); ctx.arc(0, 0, radius * 0.18, 0, Math.PI * 2); ctx.fill();

  ctx.restore();
}

function drawRareCandyIcon(x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#499edc";
  ctx.beginPath();
  ctx.moveTo(0, -12); ctx.lineTo(12, 0); ctx.lineTo(0, 12); ctx.lineTo(-12, 0);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = "#a8d6ff";
  ctx.beginPath();
  ctx.moveTo(0, -9); ctx.lineTo(9, 0); ctx.lineTo(0, 9); ctx.lineTo(-9, 0);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = "#fff";
  ctx.fillRect(-3, -3, 6, 6);
  ctx.restore();
}

function drawBoulderBadgeIcon(x, y, size = 30) {
  ctx.save();
  ctx.translate(x, y);
  // Octagonal Grey Stone Badge
  const r = size / 2;
  ctx.fillStyle = "#8e9196";
  ctx.strokeStyle = "#dedfe0";
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 + Math.PI / 8;
    const px = Math.cos(a) * r;
    const py = Math.sin(a) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Inner beveled stone facet
  ctx.fillStyle = "#b4b7bb";
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 + Math.PI / 8;
    const px = Math.cos(a) * (r * 0.6);
    const py = Math.sin(a) * (r * 0.6);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawCascadeBadgeIcon(x, y, size = 30) {
  ctx.save();
  ctx.translate(x, y);
  const s = size / 48;
  ctx.beginPath();
  ctx.moveTo(0, -22 * s);
  ctx.bezierCurveTo(18 * s, -4 * s, 18 * s, 18 * s, 0, 24 * s);
  ctx.bezierCurveTo(-18 * s, 18 * s, -18 * s, -4 * s, 0, -22 * s);
  ctx.closePath();
  ctx.fillStyle = "#29b6f6";
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3 * s;
  ctx.stroke();

  // Inner shimmer / crystal facet
  ctx.beginPath();
  ctx.moveTo(0, -14 * s);
  ctx.bezierCurveTo(10 * s, -2 * s, 10 * s, 11 * s, 0, 16 * s);
  ctx.bezierCurveTo(-10 * s, 11 * s, -10 * s, -2 * s, 0, -14 * s);
  ctx.closePath();
  ctx.fillStyle = "#81d4fa";
  ctx.fill();

  // Specular white highlight
  ctx.beginPath();
  ctx.arc(-4 * s, -4 * s, 4 * s, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.fill();
  ctx.restore();
}

function drawThunderBadgeIcon(x, y, size = 30) {
  ctx.save();
  ctx.translate(x, y);
  const s = size / 48;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const r1 = 22 * s;
    const r2 = 13 * s;
    const nextAngle = angle + Math.PI / 8;
    if (i === 0) ctx.moveTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
    else ctx.lineTo(Math.cos(angle) * r1, Math.sin(angle) * r1);
    ctx.lineTo(Math.cos(nextAngle) * r2, Math.sin(nextAngle) * r2);
  }
  ctx.closePath();
  ctx.fillStyle = "#ffb300";
  ctx.fill();
  ctx.strokeStyle = "#fff8e1";
  ctx.lineWidth = 2.5 * s;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, 9 * s, 0, Math.PI * 2);
  ctx.fillStyle = "#fb8c00";
  ctx.fill();
  ctx.strokeStyle = "#ffe082";
  ctx.lineWidth = 2 * s;
  ctx.stroke();
  ctx.restore();
}

function drawThunderStoneIcon(x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#fbc02d";
  ctx.beginPath();
  ctx.ellipse(0, 0, 14, 11, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#fff59d";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.moveTo(1, -7);
  ctx.lineTo(-4, 0);
  ctx.lineTo(0, 0);
  ctx.lineTo(-2, 7);
  ctx.lineTo(5, -1);
  ctx.lineTo(1, -1);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawMoonStoneIcon(x, y) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#37474f";
  ctx.beginPath();
  ctx.ellipse(0, 0, 14, 11, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#b0bec5";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#fff9c4";
  ctx.beginPath();
  ctx.arc(0, 0, 6, 0.4, 4.8);
  ctx.bezierCurveTo(-1, 2, -1, -2, 0, 0);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function getTypeColor(type) {
  switch (type) {
    case "FIRE": return "#e06341";
    case "GRASS": return "#6ca352";
    case "WATER": return "#4d89b8";
    case "ELECTRIC": return "#e0a643";
    case "BUG": return "#8ca338";
    case "ROCK": return "#a38c21";
    case "POISON": return "#9a5cb8";
    case "FLYING": return "#7f9bd8";
    case "GROUND": return "#b8955a";
    case "PSYCHIC": return "#e0638a";
    default: return "#948a90";
  }
}

// COTTAGE & GYM RENDERER
function drawCozyCottage(px, py, col, row, isPokeCenter = false) {
  const isTop = (row === 1);
  const isLeft = (col === 1 || col === 9);
  const isCenter = (col === 2 || col === 10);
  const isRight = (col === 3 || col === 11);

  if (isTop) {
    const roofGrad = ctx.createLinearGradient(px, py, px, py + TILE_SIZE);
    if (!isPokeCenter) {
      roofGrad.addColorStop(0, "#8a3628");
      roofGrad.addColorStop(0.6, "#a84534");
      roofGrad.addColorStop(1, "#c05340");
    } else {
      roofGrad.addColorStop(0, "#2c486e");
      roofGrad.addColorStop(0.6, "#3c6496");
      roofGrad.addColorStop(1, "#5284be");
    }
    ctx.fillStyle = roofGrad;
    ctx.fillRect(px, py + 8, TILE_SIZE, TILE_SIZE - 8);

    ctx.fillStyle = !isPokeCenter ? "#69261c" : "#223550";
    ctx.fillRect(px, py + 6, TILE_SIZE, 5);

    if (isCenter && isPokeCenter) {
      ctx.fillStyle = "#fff8e8";
      ctx.fillRect(px + 18, py + 18, 12, 14);
      ctx.fillStyle = "#d84e42";
      ctx.fillRect(px + 22, py + 20, 4, 10);
      ctx.fillRect(px + 19, py + 23, 10, 4);
    }
  } else {
    ctx.fillStyle = !isPokeCenter ? "#dfcead" : "#e6ded1";
    ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);

    ctx.fillStyle = "#5c4033";
    if (isLeft) ctx.fillRect(px, py, 6, TILE_SIZE);
    if (isRight) ctx.fillRect(px + TILE_SIZE - 6, py, 6, TILE_SIZE);
    ctx.fillRect(px, py, TILE_SIZE, 5);

    if (isCenter) {
      const dx = px + 12;
      const dy = py + 6;
      ctx.fillStyle = "#3d271d";
      ctx.fillRect(dx - 2, dy - 2, 28, 38);
      ctx.fillStyle = "#6e442f";
      ctx.fillRect(dx, dy, 24, 34);
    }
  }
}

// PEWTER GYM (STONE ARCHITECTURE)
function drawPewterGym(px, py, col, row) {
  const isTop = (row === 1);
  const isLeft = (col === 1);
  const isCenter = (col === 2);
  const isRight = (col === 3);

  if (isTop) {
    ctx.fillStyle = "#4a4a52";
    ctx.fillRect(px, py + 6, TILE_SIZE, TILE_SIZE - 6);
    ctx.fillStyle = "#6e7078";
    ctx.fillRect(px, py + 2, TILE_SIZE, 6);

    if (isCenter) {
      ctx.fillStyle = "#e0a643";
      ctx.fillRect(px + 12, py + 18, 24, 16);
      ctx.fillStyle = "#2c222e";
      ctx.font = "bold 11px 'Courier New'";
      ctx.fillText("GYM", px + 14, py + 30);
    }
  } else {
    ctx.fillStyle = "#9a9aa2";
    ctx.fillRect(px, py, TILE_SIZE, TILE_SIZE);

    // Stone Pillars
    ctx.fillStyle = "#66666e";
    if (isLeft) ctx.fillRect(px + 8, py, 12, TILE_SIZE);
    if (isRight) ctx.fillRect(px + 28, py, 12, TILE_SIZE);

    if (isCenter) {
      ctx.fillStyle = "#2b2326";
      ctx.fillRect(px + 8, py + 4, 32, 44);
      ctx.fillStyle = "#ffcb78";
      ctx.fillRect(px + 14, py + 12, 20, 8);
    }
  }
}

// INDOOR RENDERERS (RED'S HOUSE)
function drawIndoorWall(px, py, col, row) {
  const S = TILE_SIZE;
  // Cozy wooden paneling
  ctx.fillStyle = "#462e24";
  ctx.fillRect(px, py, S, S);
  // Slats
  ctx.fillStyle = "#5a3c2e";
  for (let x = 0; x < S; x += 12) ctx.fillRect(px + x, py, 2, S);
  // Crown molding at top
  ctx.fillStyle = "#321d15";
  ctx.fillRect(px, py, S, 6);
  // Wainscoting baseboard at bottom
  ctx.fillStyle = "#29160f";
  ctx.fillRect(px, py + S - 8, S, 8);
  ctx.fillStyle = "#694635";
  ctx.fillRect(px, py + S - 9, S, 1);

  // Decorative features on specific row 1 wall tiles
  if (row === 1) {
    if (col === 9) {
      // Window with soft curtains and sunshine
      ctx.fillStyle = "#7caed4";
      ctx.fillRect(px + 8, py + 10, 32, 26);
      ctx.fillStyle = "#f5f0dc";
      ctx.fillRect(px + 10, py + 12, 28, 22);
      ctx.fillStyle = "#5c4033";
      ctx.fillRect(px + 23, py + 12, 2, 22);
      ctx.fillRect(px + 10, py + 22, 28, 2);
      ctx.fillStyle = "#d86b62"; // Red curtains
      ctx.fillRect(px + 6, py + 8, 6, 28);
      ctx.fillRect(px + 36, py + 8, 6, 28);
    } else if (col === 13) {
      // Hanging Wall Clock
      ctx.fillStyle = "#8a582b";
      ctx.fillRect(px + 16, py + 12, 16, 22);
      ctx.fillStyle = "#fff8e8";
      ctx.beginPath(); ctx.arc(px + 24, py + 20, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = "#26191f";
      ctx.fillRect(px + 23, py + 17, 2, 4);
    }
  }
}

function drawIndoorFloor(px, py, col, row) {
  const S = TILE_SIZE;
  ctx.fillStyle = "#c29668";
  ctx.fillRect(px, py, S, S);
  // Alternating polished oak planks
  ctx.fillStyle = ((col + row) % 2 === 0) ? "#cd9f70" : "#b88b5e";
  ctx.fillRect(px, py, S, S);
  // Plank seam lines
  ctx.fillStyle = "#8e653d";
  ctx.fillRect(px, py + 15, S, 1);
  ctx.fillRect(px, py + 31, S, 1);
  ctx.fillRect(px, py + 47, S, 1);
  const vOffset = (row * 16) % 24;
  ctx.fillRect(px + 12 + vOffset, py, 1, 15);
  ctx.fillRect(px + 36 - vOffset, py + 16, 1, 15);
  ctx.fillRect(px + 20 + vOffset, py + 32, 1, 15);
}

function drawIndoorRug(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // Rich cozy burgundy rug
  ctx.fillStyle = "#9c2f2d";
  ctx.fillRect(px + 1, py + 1, S - 2, S - 2);
  // Gold braided trim
  ctx.strokeStyle = "#e5b967";
  ctx.lineWidth = 2;
  ctx.strokeRect(px + 4, py + 4, S - 8, S - 8);
  // Subtle inner woven pattern
  ctx.fillStyle = "rgba(120, 24, 24, 0.4)";
  ctx.fillRect(px + 10, py + 10, S - 20, S - 20);
}

function drawIndoorBed(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // Wooden bedframe
  ctx.fillStyle = "#4a2818";
  ctx.fillRect(px + 4, py + 4, S - 8, S - 6);
  // Pillow
  ctx.fillStyle = "#f8f5ee";
  ctx.fillRect(px + 8, py + 8, S - 16, 12);
  ctx.fillStyle = "#ded6c8";
  ctx.fillRect(px + 10, py + 16, S - 20, 3);
  // Red quilt
  ctx.fillStyle = "#ba372d";
  ctx.fillRect(px + 6, py + 22, S - 12, S - 24);
  // Folded sheet top
  ctx.fillStyle = "#fff4e6";
  ctx.fillRect(px + 6, py + 20, S - 12, 4);
}

function drawIndoorTV(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // CRT TV cabinet
  ctx.fillStyle = "#3f2719";
  ctx.fillRect(px + 6, py + 6, S - 12, 28);
  // Screen
  ctx.fillStyle = "#1e2936";
  ctx.fillRect(px + 10, py + 9, S - 24, 20);
  // Screen reflection
  ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
  ctx.fillRect(px + 12, py + 11, 8, 8);
  // Super NES Console on floor
  ctx.fillStyle = "#b8b8c4";
  ctx.fillRect(px + 12, py + 36, 24, 10);
  ctx.fillStyle = "#70707c";
  ctx.fillRect(px + 16, py + 38, 16, 3);
  ctx.fillStyle = "#e03426"; // Power LED
  ctx.fillRect(px + 30, py + 42, 2, 2);
}

function drawIndoorTable(px, py, col, row) {
  drawIndoorRug(px, py, col, row);
  const S = TILE_SIZE;
  // Mahogany dining table
  ctx.fillStyle = "#5c331f";
  ctx.fillRect(px + 2, py + 6, S - 4, S - 12);
  ctx.fillStyle = "#774328";
  ctx.fillRect(px + 4, py + 8, S - 8, S - 16);
  // Table runner
  ctx.fillStyle = "#f5eed8";
  ctx.fillRect(px + 14, py + 8, 20, S - 16);
  // Cozy teacup
  ctx.fillStyle = "#ffffff";
  ctx.beginPath(); ctx.arc(px + 24, py + 24, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#b86428";
  ctx.beginPath(); ctx.arc(px + 24, py + 24, 3, 0, Math.PI * 2); ctx.fill();
}

function drawIndoorBookshelf(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // Cedar bookshelf frame
  ctx.fillStyle = "#4a2c1b";
  ctx.fillRect(px + 4, py + 4, S - 8, S - 6);
  ctx.fillStyle = "#321d11";
  ctx.fillRect(px + 6, py + 6, S - 12, S - 10);
  // Shelves
  ctx.fillStyle = "#5c3822";
  ctx.fillRect(px + 6, py + 20, S - 12, 3);
  ctx.fillRect(px + 6, py + 34, S - 12, 3);
  // Colorful books
  const bCols = ["#b03a2e", "#2e6bb0", "#388a44", "#d4a034", "#7a389e", "#c25e2b"];
  for (let i = 0; i < 5; i++) {
    ctx.fillStyle = bCols[(col * 3 + i) % bCols.length];
    ctx.fillRect(px + 8 + i * 6, py + 9, 5, 11);
    ctx.fillStyle = bCols[(col * 4 + i + 2) % bCols.length];
    ctx.fillRect(px + 8 + i * 6, py + 23, 5, 11);
  }
}

function drawIndoorMat(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // Woven Welcome Doormat
  ctx.fillStyle = "#7c5535";
  ctx.fillRect(px + 6, py + 8, S - 12, S - 16);
  ctx.strokeStyle = "#462c18";
  ctx.lineWidth = 2;
  ctx.strokeRect(px + 6, py + 8, S - 12, S - 16);
  ctx.fillStyle = "#a8784d";
  ctx.font = "bold 9px 'Courier New'";
  ctx.fillText("EXIT", px + 14, py + 28);
}

function drawIndoorStairs(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // Steps ascending
  ctx.fillStyle = "#4e2f1c";
  ctx.fillRect(px + 4, py + 4, S - 8, S - 6);
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = i % 2 ? "#b8382c" : "#6e4328"; // Carpet runner & step
    ctx.fillRect(px + 8, py + 8 + i * 8, S - 16, 7);
  }
  // Golden railing
  ctx.fillStyle = "#d8a844";
  ctx.fillRect(px + S - 8, py + 4, 3, S - 6);
}

function drawIndoorCounter(px, py, col, row) {
  drawIndoorFloor(px, py, col, row);
  const S = TILE_SIZE;
  // Wooden cabinet
  ctx.fillStyle = "#5c3824";
  ctx.fillRect(px + 4, py + 12, S - 8, S - 14);
  // Marble / cream countertop
  ctx.fillStyle = "#eae2d5";
  ctx.fillRect(px + 2, py + 8, S - 4, 8);
  // Whistling Teapot on stove
  if (col === 10) {
    ctx.fillStyle = "#9a2822";
    ctx.beginPath(); ctx.arc(px + 24, py + 12, 6, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#222222";
    ctx.fillRect(px + 22, py + 4, 4, 4);
  }
}

function drawRealisticTree(px, py, col, row) {
  ctx.fillStyle = "rgba(25, 18, 22, 0.45)";
  ctx.beginPath();
  ctx.ellipse(px + 24, py + 42, 22, 9, 0, 0, Math.PI * 2);
  ctx.fill();

  const trunkGrad = ctx.createLinearGradient(px + 16, py + 26, px + 32, py + 46);
  trunkGrad.addColorStop(0, "#5b4033");
  trunkGrad.addColorStop(0.5, "#422c23");
  trunkGrad.addColorStop(1, "#2b1b16");
  ctx.fillStyle = trunkGrad;

  ctx.beginPath();
  ctx.moveTo(px + 18, py + 26);
  ctx.quadraticCurveTo(px + 16, py + 38, px + 12, py + 46);
  ctx.lineTo(px + 36, py + 46);
  ctx.quadraticCurveTo(px + 32, py + 38, px + 30, py + 26);
  ctx.closePath();
  ctx.fill();

  const lobes = [
    { x: px + 15, y: py + 26, r: 16, c1: "#3c5c2d", c2: "#233d17" },
    { x: px + 33, y: py + 26, r: 16, c1: "#476e36", c2: "#2b4a1f" },
    { x: px + 24, y: py + 18, r: 18, c1: "#578243", c2: "#355925" },
    { x: px + 24, y: py + 8,  r: 14, c1: "#7ba85f", c2: "#4b7536" }
  ];

  for (const l of lobes) {
    const fGrad = ctx.createRadialGradient(l.x - l.r * 0.35, l.y - l.r * 0.35, l.r * 0.15, l.x, l.y, l.r);
    fGrad.addColorStop(0, l.c1);
    fGrad.addColorStop(1, l.c2);
    ctx.fillStyle = fGrad;
    ctx.beginPath(); ctx.arc(l.x, l.y, l.r, 0, Math.PI * 2); ctx.fill();
  }
}

function drawPerson(x, y, body, cap, step, bob, facing, charName = "") {
  const isRed = charName === "RED" || charName === "PLAYER";
  const isMisty = charName && charName.includes("MISTY");
  const isBrock = charName && charName.includes("BROCK");
  const isOak = charName && charName.includes("OAK");
  const isJoy = charName && charName.includes("JOY");
  const isMom = charName && charName.includes("MOM");
  const isBugCatcher = charName && charName.includes("BUG CATCHER");

  const cx = x + 24;
  const hy = y + 5 + bob;  // Head Y
  const by = y + 18 + bob; // Body / Torso Y
  const py = y + 33;       // Base Y for legs / feet

  // 1. SOFT COZY AMBIENT SHADOW
  ctx.fillStyle = "rgba(18, 10, 24, 0.28)";
  ctx.beginPath();
  ctx.ellipse(cx, y + 43, 13, 4.5, 0, 0, Math.PI * 2);
  ctx.fill();

  // 2. BACK LAYER ACCESSORIES (Backpack when facing side, Misty ponytail)
  if (isRed) {
    if (facing === "RIGHT") {
      ctx.fillStyle = "#cca028";
      ctx.fillRect(cx - 13, by + 2, 5, 11);
      ctx.fillStyle = "#e5b838";
      ctx.fillRect(cx - 12, by + 3, 4, 9);
      ctx.fillStyle = "#4a3014";
      ctx.fillRect(cx - 11, by + 5, 3, 2);
    } else if (facing === "LEFT") {
      ctx.fillStyle = "#cca028";
      ctx.fillRect(cx + 8, by + 2, 5, 11);
      ctx.fillStyle = "#e5b838";
      ctx.fillRect(cx + 8, by + 3, 4, 9);
      ctx.fillStyle = "#4a3014";
      ctx.fillRect(cx + 8, by + 5, 3, 2);
    }
  }

  if (isMisty && (facing === "DOWN" || facing === "LEFT" || facing === "UP")) {
    const pty = hy + 3;
    ctx.fillStyle = "#d45828";
    ctx.beginPath(); ctx.arc(cx - 12, pty, 5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#e86e34";
    ctx.beginPath(); ctx.arc(cx - 13, pty - 1, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#2c72b8";
    ctx.fillRect(cx - 10, pty - 2, 3, 4);
  }

  // 3. LEGS & SNEAKERS / SHOES (Animated Step Cycle)
  const l = Math.sin(step) * 4.5;
  let leftLegY = py, rightLegY = py;
  let leftLegX = cx - 8, rightLegX = cx + 1;

  if (facing === "DOWN" || facing === "UP") {
    leftLegY = py - Math.max(0, l);
    rightLegY = py - Math.max(0, -l);
  } else if (facing === "LEFT") {
    leftLegX = cx - 5 - l * 0.8;
    rightLegX = cx - 2 + l * 0.8;
  } else if (facing === "RIGHT") {
    leftLegX = cx - 2 - l * 0.8;
    rightLegX = cx + 1 + l * 0.8;
  }

  const pantsColor = isRed ? "#2c3b58" : (isMisty ? "#2a4e72" : (isBrock ? "#3d5236" : (isOak ? "#7a6f68" : "#322530")));
  const skinTone = "#fce1bd";
  const skinShade = "#ebb98c";

  if (isMisty) {
    ctx.fillStyle = pantsColor;
    ctx.fillRect(cx - 7, py - 1, 14, 5);
    ctx.fillStyle = skinTone;
    ctx.fillRect(leftLegX + 1, leftLegY + 3, 5, 4);
    ctx.fillRect(rightLegX + 1, rightLegY + 3, 5, 4);
  } else {
    ctx.fillStyle = pantsColor;
    ctx.fillRect(leftLegX, leftLegY, 6, 8);
    ctx.fillRect(rightLegX, rightLegY, 6, 8);
    ctx.fillStyle = isRed ? "#1d273a" : "#201824";
    ctx.fillRect(leftLegX + 5, leftLegY, 1, 7);
    ctx.fillRect(rightLegX, rightLegY, 1, 7);
  }

  // Shoes / Sneakers
  if (isRed) {
    // Red sneaker body + clean white rubber toe caps + dark rubber soles
    ctx.fillStyle = "#d83628";
    ctx.fillRect(leftLegX - 1, leftLegY + 6, 7, 4);
    ctx.fillStyle = "#f8f5ee";
    ctx.fillRect(facing === "LEFT" ? leftLegX - 2 : leftLegX + 3, leftLegY + 6, 3, 3);
    ctx.fillStyle = "#221724";
    ctx.fillRect(leftLegX - 1, leftLegY + 9, 7, 2);

    ctx.fillStyle = "#d83628";
    ctx.fillRect(rightLegX, rightLegY + 6, 7, 4);
    ctx.fillStyle = "#f8f5ee";
    ctx.fillRect(facing === "LEFT" ? rightLegX - 1 : rightLegX + 4, rightLegY + 6, 3, 3);
    ctx.fillStyle = "#221724";
    ctx.fillRect(rightLegX, rightLegY + 9, 7, 2);
  } else {
    const shoeCol = isJoy ? "#ffffff" : (isOak ? "#3a2c24" : (isBrock ? "#5a3a22" : "#2c202a"));
    ctx.fillStyle = shoeCol;
    ctx.fillRect(leftLegX - 1, leftLegY + 6, 7, 4);
    ctx.fillRect(rightLegX, rightLegY + 6, 7, 4);
    ctx.fillStyle = "#181016";
    ctx.fillRect(leftLegX - 1, leftLegY + 9, 7, 2);
    ctx.fillRect(rightLegX, rightLegY + 9, 7, 2);
  }

  // 4. TORSO / JACKET / SHIRT
  const torsoW = 20, torsoH = 14;
  const torsoX = cx - 10;

  if (isRed) {
    ctx.fillStyle = "#d83628"; // Red vest
    ctx.fillRect(torsoX, by, torsoW, torsoH);
    ctx.fillStyle = "#a82015";
    ctx.fillRect(torsoX, by + torsoH - 2, torsoW, 2);
    ctx.fillRect(torsoX, by + 3, 2, torsoH - 3);
    ctx.fillRect(torsoX + torsoW - 2, by + 3, 2, torsoH - 3);

    if (facing === "DOWN") {
      ctx.fillStyle = "#241f26"; ctx.fillRect(cx - 3, by, 6, 6);
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(cx - 4, by, 2, 4); ctx.fillRect(cx + 2, by, 2, 4);
      ctx.fillStyle = "#e8b038"; ctx.fillRect(cx - 1, by + 5, 2, 3);
      ctx.fillStyle = "#e6a82a"; ctx.fillRect(cx - 8, by, 2.5, torsoH); ctx.fillRect(cx + 5.5, by, 2.5, torsoH);
      ctx.fillStyle = "#4a3216"; ctx.fillRect(cx - 8.5, by + 5, 3.5, 2); ctx.fillRect(cx + 5, by + 5, 3.5, 2);
    } else if (facing === "UP") {
      ctx.fillStyle = "#b82418"; ctx.fillRect(torsoX, by, torsoW, torsoH);
      ctx.fillStyle = "#cca028"; ctx.fillRect(cx - 7, by + 1, 14, 11);
      ctx.fillStyle = "#f0ba35"; ctx.fillRect(cx - 6, by + 1, 12, 5);
      ctx.fillStyle = "#e5a722"; ctx.fillRect(cx - 5, by + 7, 10, 4);
      ctx.fillStyle = "#422b12"; ctx.fillRect(cx - 1.5, by + 4, 3, 3);
    } else if (facing === "LEFT") {
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(cx - 4, by, 3, 3);
      ctx.fillStyle = "#e6a82a"; ctx.fillRect(cx - 1, by, 2.5, torsoH);
    } else if (facing === "RIGHT") {
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(cx + 1, by, 3, 3);
      ctx.fillStyle = "#e6a82a"; ctx.fillRect(cx - 2, by, 2.5, torsoH);
    }
  } else if (isMisty) {
    ctx.fillStyle = "#ffd22e"; ctx.fillRect(torsoX + 1, by, torsoW - 2, torsoH - 3);
    ctx.fillStyle = skinTone; ctx.fillRect(torsoX + 2, by + torsoH - 3, torsoW - 4, 3);
    ctx.fillStyle = "#d8382c"; ctx.fillRect(cx - 6, by, 2.5, torsoH); ctx.fillRect(cx + 3.5, by, 2.5, torsoH);
  } else if (isBrock) {
    ctx.fillStyle = "#2d3d28"; ctx.fillRect(torsoX, by, torsoW, torsoH);
    ctx.fillStyle = "#c8722c"; ctx.fillRect(torsoX, by, 5, torsoH); ctx.fillRect(torsoX + torsoW - 5, by, 5, torsoH);
    ctx.fillStyle = "#e08d45"; ctx.fillRect(torsoX + 1, by + 1, 3, 6); ctx.fillRect(torsoX + torsoW - 4, by + 1, 3, 6);
  } else if (isOak) {
    ctx.fillStyle = "#9c2a2c"; ctx.fillRect(torsoX + 4, by, torsoW - 8, torsoH);
    ctx.fillStyle = "#f6f3ec"; ctx.fillRect(torsoX, by, 5, torsoH); ctx.fillRect(torsoX + torsoW - 5, by, 5, torsoH);
    ctx.fillStyle = "#ddd8ce"; ctx.fillRect(torsoX + 4, by + 2, 1, torsoH - 2); ctx.fillRect(torsoX + torsoW - 5, by + 2, 1, torsoH - 2);
  } else if (isJoy) {
    ctx.fillStyle = "#f49eb2"; ctx.fillRect(torsoX, by, torsoW, torsoH);
    ctx.fillStyle = "#fcf8fa"; ctx.fillRect(cx - 6, by + 2, 12, torsoH - 2);
  } else if (isMom) {
    ctx.fillStyle = "#d88ba8"; ctx.fillRect(torsoX, by, torsoW, torsoH);
    ctx.fillStyle = "#fbf5e6"; ctx.fillRect(cx - 6, by + 3, 12, torsoH - 3);
    ctx.fillStyle = "#d88ba8"; ctx.fillRect(cx - 3, by + 7, 6, 4);
  } else {
    ctx.fillStyle = body || "#3865a3"; ctx.fillRect(torsoX, by, torsoW, torsoH);
    ctx.fillStyle = "rgba(255,255,255,0.18)"; ctx.fillRect(torsoX + 2, by + 1, torsoW - 4, 3);
    ctx.fillStyle = "rgba(0,0,0,0.2)"; ctx.fillRect(torsoX, by + torsoH - 2, torsoW, 2);
    ctx.fillStyle = "#fbf8f2"; ctx.fillRect(cx - 3, by, 6, 2.5);
  }

  // Arms and Hands
  const armSwing = Math.sin(step) * 3;
  const leftHandY = by + 9 + (facing === "DOWN" ? armSwing : 0);
  const rightHandY = by + 9 - (facing === "DOWN" ? armSwing : 0);

  ctx.fillStyle = isRed ? "#d83628" : (isMisty ? skinTone : (body || "#3865a3"));
  ctx.fillRect(torsoX - 3, by + 1, 3, 8);
  ctx.fillStyle = skinTone; ctx.fillRect(torsoX - 3, leftHandY, 3, 4);

  ctx.fillStyle = isRed ? "#d83628" : (isMisty ? skinTone : (body || "#3865a3"));
  ctx.fillRect(torsoX + torsoW, by + 1, 3, 8);
  ctx.fillStyle = skinTone; ctx.fillRect(torsoX + torsoW, rightHandY, 3, 4);

  // 5. HEAD & CHIBI FACE
  const headW = 20, headH = 14;
  const headX = cx - 10;

  ctx.fillStyle = skinTone;
  ctx.fillRect(headX, hy + 2, headW, headH);
  ctx.fillStyle = skinShade;
  ctx.fillRect(headX + 2, hy + headH, headW - 4, 2);

  // Cozy rosy cheeks
  ctx.fillStyle = "rgba(245, 115, 115, 0.44)";
  if (facing === "DOWN") {
    ctx.beginPath(); ctx.arc(cx - 6, hy + 11, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 6, hy + 11, 2.5, 0, Math.PI * 2); ctx.fill();
  } else if (facing === "LEFT") {
    ctx.beginPath(); ctx.arc(cx - 6, hy + 11, 2.5, 0, Math.PI * 2); ctx.fill();
  } else if (facing === "RIGHT") {
    ctx.beginPath(); ctx.arc(cx + 6, hy + 11, 2.5, 0, Math.PI * 2); ctx.fill();
  }

  // Expressive Eyes
  const eyeColor = "#221620";
  if (facing === "DOWN") {
    if (isBrock) {
      ctx.strokeStyle = "#382418"; ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(cx - 7, hy + 9); ctx.lineTo(cx - 4, hy + 7.5); ctx.lineTo(cx - 1, hy + 9);
      ctx.moveTo(cx + 1, hy + 9); ctx.lineTo(cx + 4, hy + 7.5); ctx.lineTo(cx + 7, hy + 9);
      ctx.stroke();
    } else {
      ctx.fillStyle = eyeColor; ctx.fillRect(cx - 6.5, hy + 7.5, 3, 4.5);
      ctx.fillStyle = "#ffffff"; ctx.fillRect(cx - 6.5, hy + 7.5, 1.5, 1.5);
      ctx.fillStyle = eyeColor; ctx.fillRect(cx + 3.5, hy + 7.5, 3, 4.5);
      ctx.fillStyle = "#ffffff"; ctx.fillRect(cx + 3.5, hy + 7.5, 1.5, 1.5);
      ctx.fillStyle = "#a85d50"; ctx.fillRect(cx - 1, hy + 12.5, 2, 1);
    }
  } else if (facing === "LEFT") {
    if (isBrock) {
      ctx.strokeStyle = "#382418"; ctx.lineWidth = 1.8;
      ctx.beginPath(); ctx.moveTo(cx - 7, hy + 8.5); ctx.lineTo(cx - 4, hy + 7.5); ctx.lineTo(cx - 1, hy + 8.5); ctx.stroke();
    } else {
      ctx.fillStyle = eyeColor; ctx.fillRect(cx - 7, hy + 7.5, 3, 4.5);
      ctx.fillStyle = "#ffffff"; ctx.fillRect(cx - 7, hy + 7.5, 1.5, 1.5);
    }
    ctx.fillStyle = skinShade; ctx.fillRect(headX - 1, hy + 8.5, 1.5, 2);
  } else if (facing === "RIGHT") {
    if (isBrock) {
      ctx.strokeStyle = "#382418"; ctx.lineWidth = 1.8;
      ctx.beginPath(); ctx.moveTo(cx + 1, hy + 8.5); ctx.lineTo(cx + 4, hy + 7.5); ctx.lineTo(cx + 7, hy + 8.5); ctx.stroke();
    } else {
      ctx.fillStyle = eyeColor; ctx.fillRect(cx + 4, hy + 7.5, 3, 4.5);
      ctx.fillStyle = "#ffffff"; ctx.fillRect(cx + 5.5, hy + 7.5, 1.5, 1.5);
    }
    ctx.fillStyle = skinShade; ctx.fillRect(headX + headW - 0.5, hy + 8.5, 1.5, 2);
  } else if (facing === "UP") {
    ctx.fillStyle = isRed ? "#291d20" : (cap || "#30222a");
    ctx.fillRect(headX + 2, hy + 7, headW - 4, headH - 5);
  }

  // 6. HAIR & HATS / CAPS
  if (isRed) {
    ctx.fillStyle = "#291d20";
    if (facing === "DOWN") {
      ctx.fillRect(headX - 1, hy + 6, 2, 6);
      ctx.fillRect(headX + headW - 1, hy + 6, 2, 6);
      ctx.fillRect(cx - 8, hy + 5, 3, 3);
      ctx.fillRect(cx + 5, hy + 5, 3, 3);
    } else if (facing === "LEFT") {
      ctx.fillRect(headX + headW - 3, hy + 6, 3, 7);
      ctx.fillRect(headX, hy + 6, 2, 3);
    } else if (facing === "RIGHT") {
      ctx.fillRect(headX, hy + 6, 3, 7);
      ctx.fillRect(headX + headW - 2, hy + 6, 2, 3);
    } else if (facing === "UP") {
      ctx.fillRect(headX, hy + 7, headW, 6);
      ctx.fillRect(headX + 3, hy + 13, headW - 6, 2);
    }

    // Cozy FireRed Cap
    ctx.fillStyle = "#d83628";
    ctx.fillRect(headX - 1, hy - 2, headW + 2, 8);
    ctx.fillRect(headX, hy - 4, headW, 3);
    ctx.fillStyle = "#ec5848";
    ctx.fillRect(headX + 2, hy - 4, headW - 4, 1.5);

    if (facing === "DOWN") {
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(cx - 6, hy - 2, 12, 6);
      ctx.fillStyle = "#221724"; ctx.fillRect(cx - 2, hy + 1, 4, 2);
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(cx - 1, hy + 1.5, 2, 1);
      ctx.fillStyle = "#b82418"; ctx.fillRect(headX - 2, hy + 4, headW + 4, 3);
      ctx.fillStyle = "#ec5848"; ctx.fillRect(headX - 1, hy + 4, headW + 2, 1);
      ctx.fillStyle = "rgba(20, 10, 24, 0.25)"; ctx.fillRect(headX, hy + 7, headW, 1.5);
    } else if (facing === "LEFT") {
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(headX - 1, hy - 1, 6, 5);
      ctx.fillStyle = "#b82418"; ctx.fillRect(headX - 5, hy + 3.5, 8, 3);
      ctx.fillStyle = "#ec5848"; ctx.fillRect(headX - 5, hy + 3.5, 8, 1);
    } else if (facing === "RIGHT") {
      ctx.fillStyle = "#fbf8f2"; ctx.fillRect(headX + headW - 5, hy - 1, 6, 5);
      ctx.fillStyle = "#b82418"; ctx.fillRect(headX + headW - 3, hy + 3.5, 8, 3);
      ctx.fillStyle = "#ec5848"; ctx.fillRect(headX + headW - 3, hy + 3.5, 8, 1);
    } else if (facing === "UP") {
      ctx.fillStyle = "#1e141c"; ctx.beginPath(); ctx.arc(cx, hy + 5.5, 3.5, Math.PI, 0); ctx.fill();
      ctx.fillStyle = "#d83628"; ctx.fillRect(cx - 3, hy + 5, 6, 1);
    }
  } else if (isMisty) {
    ctx.fillStyle = "#e85c22";
    ctx.fillRect(headX, hy - 2, headW, 7);
    ctx.fillRect(headX - 1, hy + 2, 3, 7);
    ctx.fillRect(headX + headW - 2, hy + 2, 3, 7);
    ctx.fillStyle = "#f58536"; ctx.fillRect(headX + 2, hy - 2, headW - 4, 2);
    ctx.fillStyle = "#e85c22"; ctx.fillRect(cx - 7, hy + 4, 5, 3); ctx.fillRect(cx + 2, hy + 4, 5, 3);
  } else if (isBrock) {
    ctx.fillStyle = "#543725";
    ctx.fillRect(headX - 1, hy - 2, headW + 2, 6);
    ctx.fillRect(headX, hy - 5, 3, 4); ctx.fillRect(cx - 4, hy - 6, 4, 5);
    ctx.fillRect(cx + 2, hy - 5, 3, 4); ctx.fillRect(headX + headW - 3, hy - 4, 3, 4);
    ctx.fillStyle = "#734e35"; ctx.fillRect(cx - 3, hy - 5, 2, 3);
  } else if (isJoy) {
    ctx.fillStyle = "#f59cb0";
    ctx.fillRect(headX - 1, hy, headW + 2, 7);
    ctx.fillRect(headX - 3, hy + 2, 4, 6); ctx.fillRect(headX + headW - 1, hy + 2, 4, 6);
    ctx.fillStyle = "#ffffff"; ctx.fillRect(cx - 6, hy - 4, 12, 5);
    ctx.fillStyle = "#e53935"; ctx.fillRect(cx - 1, hy - 3, 2, 3.5); ctx.fillRect(cx - 2, hy - 2, 4, 1.5);
  } else if (isOak) {
    ctx.fillStyle = "#ddd7ce";
    ctx.fillRect(headX - 1, hy - 1, headW + 2, 6);
    ctx.fillRect(headX - 2, hy + 4, 3, 7); ctx.fillRect(headX + headW - 1, hy + 4, 3, 7);
    ctx.fillStyle = "#bbb2a6"; ctx.fillRect(headX + 2, hy + 2, headW - 4, 2);
  } else if (isMom) {
    ctx.fillStyle = "#5c3a26";
    ctx.fillRect(headX - 1, hy - 1, headW + 2, 7);
    ctx.fillRect(headX - 1, hy + 4, 2, 7); ctx.fillRect(headX + headW - 1, hy + 4, 2, 7);
    ctx.fillStyle = "#e86e88"; ctx.fillRect(cx - 2, hy + 10, 4, 2);
  } else if (isBugCatcher) {
    ctx.fillStyle = "#e2c058";
    ctx.fillRect(headX - 4, hy + 2, headW + 8, 4);
    ctx.fillRect(cx - 7, hy - 3, 14, 6);
    ctx.fillStyle = "#4a7830"; ctx.fillRect(cx - 7, hy + 1, 14, 2);
  } else {
    const hairCol = cap || "#423028";
    ctx.fillStyle = hairCol;
    ctx.fillRect(headX - 1, hy - 1, headW + 2, 6);
    ctx.fillRect(headX - 1, hy + 3, 2, 6); ctx.fillRect(headX + headW - 1, hy + 3, 2, 6);
    ctx.fillStyle = "rgba(255,255,255,0.22)"; ctx.fillRect(headX + 2, hy - 1, headW - 4, 2);
  }
}

// ---- Cozy rendering: static tiles are drawn ONCE per map into an offscreen canvas ----
const mapLayers = {};
const glowSprite = (() => {
  const c = document.createElement("canvas"); c.width = c.height = 96;
  const g = c.getContext("2d"), gr = g.createRadialGradient(48, 48, 2, 48, 48, 48);
  gr.addColorStop(0, "rgba(255,214,130,0.9)"); gr.addColorStop(1, "rgba(255,170,80,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 96, 96); return c;
})();
const vignetteLayer = (() => {
  const c = document.createElement("canvas"); c.width = 720; c.height = 480;
  const g = c.getContext("2d"), gr = g.createRadialGradient(360, 240, 200, 360, 240, 480);
  gr.addColorStop(0, "rgba(255, 196, 120, 0.09)"); gr.addColorStop(1, "rgba(45, 18, 30, 0.38)");
  g.fillStyle = gr; g.fillRect(0, 0, 720, 480); return c;
})();

function drawMapTiles(pass) {
  const m = currentMap, S = TILE_SIZE;
  for (let r = 0; r < m.rows; r++) {
    for (let c = 0; c < m.cols; c++) {
      const tile = m.tiles[r][c], px = c * S, py = r * S;
      const lamp = (tile === 4 || tile === 5) && r === 2 && (c % 4 === 1 || c % 4 === 3);
      if (pass === 0) {
        if (tile === 0) {
          ctx.fillStyle = "#c9a674"; ctx.fillRect(px, py, S, S);
          ctx.fillStyle = "rgba(120,86,50,0.22)";
          const h = (c * 7 + r * 13) % 5;
          ctx.fillRect(px + 6 + h * 7, py + 10 + h * 3, 4, 3);
          ctx.fillRect(px + 34 - h * 4, py + 30 - h, 3, 3);
          ctx.fillRect(px + 14, py + 38 - h * 2, 3, 2);
        } else if (tile === 1) drawRealisticTree(px, py, c, r);
        else if (tile === 2 || tile === 6) { ctx.fillStyle = "#4a7836"; ctx.fillRect(px, py, S, S); }
        else if (tile === 3) { ctx.fillStyle = "#3a6888"; ctx.fillRect(px, py, S, S); }
        else if (tile === 4) drawCozyCottage(px, py, c, r, false);
        else if (tile === 5) drawCozyCottage(px, py, c, r, true);
        else if (tile === 7) {
          ctx.fillStyle = "#8a8c88"; ctx.fillRect(px, py, S, S);
          ctx.fillStyle = "rgba(55,52,50,0.28)";
          ctx.fillRect(px, py + 23, S, 2); ctx.fillRect(px + ((r + c) % 2 ? 14 : 32), py, 2, 24); ctx.fillRect(px + ((r + c) % 2 ? 30 : 12), py + 25, 2, 23);
        } else if (tile === 8) drawPewterGym(px, py, c, r);
        else if (tile === 9) { ctx.fillStyle = "#3b3340"; ctx.fillRect(px, py, S, S); ctx.fillStyle = "#4d4452"; ctx.fillRect(px + 4, py + 4, 20, 16); ctx.fillRect(px + 22, py + 24, 20, 16); ctx.fillStyle = "#2a232e"; ctx.fillRect(px, py + S - 6, S, 6); }
        else if (tile === 10) { ctx.fillStyle = "#6a6068"; ctx.fillRect(px, py, S, S); ctx.fillStyle = "rgba(30,24,34,0.35)"; const h = (c * 5 + r * 11) % 4; ctx.fillRect(px + 6 + h * 8, py + 8, 5, 4); ctx.fillRect(px + 30 - h * 3, py + 28, 6, 4); ctx.fillRect(px + 12, py + 38, 4, 3); }
        else if (tile === 11) drawIndoorWall(px, py, c, r);
        else if (tile === 12) drawIndoorFloor(px, py, c, r);
        else if (tile === 13) drawIndoorRug(px, py, c, r);
        else if (tile === 14) drawIndoorBed(px, py, c, r);
        else if (tile === 15) drawIndoorTV(px, py, c, r);
        else if (tile === 16) drawIndoorTable(px, py, c, r);
        else if (tile === 17) drawIndoorBookshelf(px, py, c, r);
        else if (tile === 18) drawIndoorMat(px, py, c, r);
        else if (tile === 19) drawIndoorStairs(px, py, c, r);
        else if (tile === 20) drawIndoorCounter(px, py, c, r);
        if (lamp) {
          ctx.fillStyle = "#5c4033"; ctx.fillRect(px + 11, py + 9, 26, 22);
          ctx.fillStyle = "#ffd98a"; ctx.fillRect(px + 14, py + 12, 20, 16);
          ctx.fillStyle = "#5c4033"; ctx.fillRect(px + 23, py + 12, 2, 16); ctx.fillRect(px + 14, py + 19, 20, 2);
        }
      } else {
        if (tile === 2) {
          for (let i = 0; i < 4; i++) {
            const sw = Math.sin(T * 0.06 + c * 1.3 + i * 0.8 + r) * 4;
            ctx.fillStyle = "#2d521f";
            ctx.fillRect(px + i * 12 + 2 + sw * 0.4, py + 14, 6, 28);
            ctx.fillRect(px + i * 12 + 2 + sw, py + 6, 6, 10);
          }
        } else if (tile === 3) {
          ctx.fillStyle = "rgba(255,255,255,0.14)";
          for (let i = 0; i < 2; i++) ctx.fillRect(px + ((T * 0.3 + i * 24 + c * 9) % 40), py + 10 + i * 20 + Math.sin(T * 0.04 + c + i) * 2, 8, 2);
          if (weather.rain > 0.3) { ctx.strokeStyle = "rgba(255,255,255,0.35)"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(px + 24 + Math.sin(c * 3 + r) * 8, py + 24, ((T + c * 13 + r * 7) % 40) / 40 * 12, 0, 6.3); ctx.stroke(); }
        } else if (tile === 6) {
          const fc = ["#f898a4", "#ffd56b", "#ff9b5e", "#fff5e6"];
          for (let f = 0; f < 3; f++) {
            ctx.fillStyle = fc[(c + r + f) % 4];
            ctx.beginPath(); ctx.arc(px + 10 + f * 14 + Math.sin(T * 0.05 + c + f) * 1.5, py + 12 + (f % 2) * 16, 4, 0, 6.3); ctx.fill();
          }
        } else if (tile === 15) {
          // TV screen cozy ambient flicker
          ctx.fillStyle = `rgba(180, 220, 255, ${0.06 + Math.sin(T * 0.1) * 0.04})`;
          ctx.fillRect(px + 10, py + 9, S - 24, 20);
        } else if (lamp) {
          ctx.globalAlpha = Math.min(1, 0.28 + nightD * 0.6 + 0.08 * Math.sin(T * 0.05 + c));
          ctx.drawImage(glowSprite, px - 24, py - 26);
          ctx.globalAlpha = 1;
        }
      }
    }
  }
}
function drawMapLayer() {
  let L = mapLayers[currentMapKey];
  if (!L) {
    L = document.createElement("canvas"); L.width = 720; L.height = 480;
    const real = ctx; ctx = L.getContext("2d"); ctx.imageSmoothingEnabled = false;
    drawMapTiles(0); ctx = real; mapLayers[currentMapKey] = L;
  }
  ctx.drawImage(L, 0, 0);
  drawMapTiles(1);
  if (currentMapKey === "REDS_HOUSE") {
    // Warm cozy ambient interior glow
    ctx.globalAlpha = 0.06;
    ctx.fillStyle = "#ffe2a0";
    ctx.fillRect(0, 0, 720, 480);
    ctx.globalAlpha = 1;
  }
}

// ---- Partner Pokémon that walks behind you ----
const follower = { x: 5 * TILE_SIZE, y: 6 * TILE_SIZE, tx: 5, ty: 6, flip: false, happy: 0, dir: "D" };
function leadMon() { return player.team.find(p => p.hp > 0) || player.team[0]; }
function resetFollower() {
  follower.x = player.x; follower.y = player.y; follower.tx = player.gridX; follower.ty = player.gridY; follower.happy = 0;
}
function drawFollower() {
  const mon = leadMon(); if (!mon) return;
  const gx = follower.tx * TILE_SIZE, gy = follower.ty * TILE_SIZE, spd = 4;
  const moving = follower.x !== gx || follower.y !== gy;
  if (follower.x < gx) { follower.x = Math.min(follower.x + spd, gx); follower.flip = true; follower.dir = "R"; }
  if (follower.x > gx) { follower.x = Math.max(follower.x - spd, gx); follower.flip = false; follower.dir = "L"; }
  if (follower.y < gy) { follower.y = Math.min(follower.y + spd, gy); follower.flip = false; follower.dir = "D"; }
  if (follower.y > gy) { follower.y = Math.max(follower.y - spd, gy); follower.flip = false; follower.dir = "U"; }
  const bob = moving ? -Math.abs(Math.sin(T * 0.3)) * 5 : Math.sin(T * 0.08) * 1.5;
  ctx.fillStyle = "rgba(20,12,18,0.3)";
  ctx.beginPath(); ctx.ellipse(follower.x + 24, follower.y + 43, 15, 5, 0, 0, 6.3); ctx.fill();
  const key = mon.name.toLowerCase() + (follower.dir === "U" ? "_back" : "_front"), sz = 46;
  ctx.save();
  ctx.translate(follower.x + 24, follower.y + 44 + bob);
  if (follower.flip) ctx.scale(-1, 1);
  drawGenSprite(key, -sz / 2, -sz, sz, sz);
  ctx.restore();
  if (follower.happy > 0) {
    follower.happy--;
    ctx.globalAlpha = Math.min(1, follower.happy / 20);
    ctx.fillStyle = "#ff6f91"; ctx.font = "bold 20px 'Courier New'";
    ctx.fillText("♥", follower.x + 18, follower.y - 6 - (70 - follower.happy) * 0.35);
    ctx.globalAlpha = 1;
  }
}

// ---- Day / night cycle (one full day = 6 minutes) ----
const SEASON_NAMES = ["✿ SPRING", "☀ SUMMER", "❀ AUTUMN", "❄ WINTER"];
const SEASON_TINT = ["", "rgba(255,225,120,0.06)", "rgba(214,108,30,0.10)", "rgba(200,225,255,0.15)"];
let seasonOverride = (typeof settings.season === "number" ? settings.season : -1), photoMode = false, photoFlash = 0;
function curSeason() { return seasonOverride >= 0 ? seasonOverride : Math.floor(Date.now() / (3 * 86400000)) % 4; }
function takePhoto() {
  try { canvas.toBlob(b => { if (!b) return; const a = document.createElement("a"); a.href = URL.createObjectURL(b); a.download = "cozy-photo-" + Date.now() + ".png"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000); }); } catch (e) { showMapBanner("CAN'T SAVE PHOTO"); }
  photoFlash = 1; sfx.catchSuccess();
}
let dayOffset = 3000, nightD = 0, saveFlash = 0;
function updateClock() { nightD = (1 - Math.cos((((dayOffset + T) / 21600) % 1) * 6.2832)) / 2; }
function drawDayNight() {
  const d = nightD, w = Math.min(1, Math.max(0, (d - 0.3) / 0.4));
  const _sc = SEASON_TINT[curSeason()]; if (_sc && currentMapKey !== "MT_MOON") { ctx.fillStyle = _sc; ctx.fillRect(0, 0, 720, 480); }
  if (currentMapKey === "MT_MOON") { ctx.fillStyle = "rgba(10,10,45,0.38)"; ctx.fillRect(0, 0, 720, 480); }
  ctx.fillStyle = `rgba(${Math.round(255 - 237 * w)},${Math.round(150 - 124 * w)},${Math.round(70 + 8 * w)},${(d * 0.5).toFixed(3)})`;
  ctx.fillRect(0, 0, 720, 480);
  if (currentMapKey === "VIRIDIAN_FOREST") { ctx.fillStyle = "rgba(10,30,15,0.2)"; ctx.fillRect(0, 0, 720, 480); }
  if (photoMode) { ctx.globalAlpha = 1; return; }
  ctx.font = "bold 12px 'Courier New'"; ctx.fillStyle = "#fff3d6"; ctx.globalAlpha = 0.8;
  ctx.fillText(d < 0.3 ? "☀ DAY" : d < 0.65 ? "✦ TWILIGHT" : "☾ NIGHT", 625, 24);
  ctx.fillText("$" + player.money, 625, 42); ctx.fillText(SEASON_NAMES[curSeason()], 625, 78);
  ctx.globalAlpha = 1;
}

// ---- Save / load (Manual saving only — zero background auto-saving) ----
const SAVE_KEY = "pokemon_cozy_save_v1";
function hasSave() {
  try { return !!localStorage.getItem(SAVE_KEY); } catch (e) { return false; }
}
function saveGame() {
  // Auto-saving intentionally disabled to honor user preference!
}
function saveGameManual() {
  try {
    const data = {
      player: {
        x: player.x,
        y: player.y,
        gridX: player.gridX,
        gridY: player.gridY,
        facing: player.facing,
        team: player.team,
        pc: player.pc,
        pokeBalls: player.pokeBalls,
        potions: player.potions,
        rareCandies: player.rareCandies,
        fullHeals: player.fullHeals,
        berries: player.berries,
        thunderStones: player.thunderStones,
        moonStones: player.moonStones,
        money: player.money,
        hasBoulderBadge: player.hasBoulderBadge,
        hasCascadeBadge: player.hasCascadeBadge,
        hasThunderBadge: player.hasThunderBadge,
        hasBicycle: player.hasBicycle,
        hasOldRod: player.hasOldRod,
        steps: player.steps,
        beatBugCatcher: player.beatBugCatcher,
        beat: player.beat,
        found: player.found,
        storyFlags: player.storyFlags
      },
      currentMapKey,
      savedAt: Date.now()
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    showMapBanner("ADVENTURE SAVED SUCCESSFULLY!");
    return true;
  } catch (e) {
    console.error("Save failed:", e);
    return false;
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const data = JSON.parse(raw);
    if (!data || !data.player) return false;
    Object.assign(player, data.player);
    if (data.currentMapKey && MAPS[data.currentMapKey]) {
      currentMapKey = data.currentMapKey;
      currentMap = MAPS[currentMapKey];
    }
    player.isMoving = false;
    player.moveProgress = 0;
    resetFollower();
    return true;
  } catch (e) {
    console.error("Load failed:", e);
    return false;
  }
}

// ---- Status conditions & move PP ----
const STATUS_MOVES = { "EMBER": ["BRN", .15], "FLAMETHROWER": ["BRN", .2], "FIRE BLAST": ["BRN", .25],
  "THUNDERSHOCK": ["PAR", .2], "THUNDERBOLT": ["PAR", .2], "THUNDER": ["PAR", .25],
  "ACID": ["PSN", .25], "BUG BITE": ["PSN", .2], "PSYBEAM": ["SLP", .2] };
const STATUS_TEXT = { BRN: "was burned!", PSN: "was poisoned!", PAR: "is paralyzed! It may not move!", SLP: "fell asleep!" };
const STATUS_COL = { BRN: "#e06341", PSN: "#9a5cb8", PAR: "#d9a82f", SLP: "#7f8a9a" };
function rollStatus(move, def, dmg) {
  const s = STATUS_MOVES[move.name];
  if (!s || def.status || def.hp - dmg <= 0 || Math.random() > s[1]) return null;
  def.status = s[0]; if (s[0] === "SLP") def.sleepTurns = 1 + Math.floor(Math.random() * 3);
  return `${def.name} ${STATUS_TEXT[s[0]]}`;
}
function ensurePP(mon) {
  (mon.moves || []).forEach(m => { if (m.maxPp === undefined) { m.maxPp = m.power >= 18 ? 10 : m.power >= 12 ? 15 : 25; m.pp = m.maxPp; } });
}
function canAct(mon) {
  if (mon.status === "SLP") { if (--mon.sleepTurns <= 0) { mon.status = null; return null; } return `${mon.name} is fast asleep!`; }
  if (mon.status === "PAR" && Math.random() < 0.25) return `${mon.name} is fully paralyzed!`;
  return null;
}
function residual(mon, isPlayer) {
  if (mon.status !== "BRN" && mon.status !== "PSN") return;
  const d = Math.max(1, Math.floor(mon.maxHp / 16));
  mon.hp = Math.max(1, mon.hp - d); sfx.hit();
  floaters.push({ x: isPlayer ? 190 : 530, y: isPlayer ? 270 : 130, text: `-${d}`, life: 40 });
}
function executePlayerMove(move) {
  const pm = battle.playerMon;
  if (move.maxPp && move.pp <= 0) {
    if (pm.moves.some(m => m.pp > 0)) { battle.message = "No PP left for this move!"; return; }
    move = { name: "STRUGGLE", power: 6, kind: "physical" };
  }
  const blk = canAct(pm);
  if (blk) { battle.turnLock = true; battle.menuState = "MAIN"; battle.message = blk; residual(pm, true); setTimeout(executeEnemyTurn, 1300); return; }
  if (move.maxPp) move.pp--;
  residual(pm, true);
  const sp = m => (m.speed || 10) * (m.status === "PAR" ? 0.5 : 1);
  if (sp(battle.enemy) > sp(pm)) { battle.pendingMove = move; battle.turnLock = true; battle.menuState = "MAIN"; executeEnemyTurn(); }
  else _executePlayerMove(move);
}
function afterEnemy() {
  if (battle.pendingMove) { const mv = battle.pendingMove; battle.pendingMove = null; battle.enemyWent = true; _executePlayerMove(mv); return; }
  battle.turnLock = false; battle.message = `What will ${battle.playerMon.name} do?`;
}
function executeEnemyTurn() {
  const e = battle.enemy, blk = canAct(e);
  residual(e, false);
  if (blk) { battle.message = blk; setTimeout(afterEnemy, 1300); return; }
  _executeEnemyTurn();
}
function drawStatusTag(mon, x, y) {
  if (!mon || !mon.status) return;
  ctx.fillStyle = STATUS_COL[mon.status]; ctx.fillRect(x, y, 36, 14);
  ctx.fillStyle = "#fff"; ctx.font = "bold 10px 'Courier New'"; ctx.fillText(mon.status, x + 6, y + 11);
}

// ---- Poké Mart ----
const SHOP_ITEMS = [
  { k: "potions", n: "POTION", p: 150, d: "Restores 20 HP." },
  { k: "pokeBalls", n: "POKé BALL", p: 100, d: "Catches wild Pokémon." },
  { k: "fullHeals", n: "FULL HEAL", p: 250, d: "Cures sleep, burn, poison, paralysis." },
  { k: "berries", n: "BERRY", p: 60, d: "Makes a Pokémon happier (+10 HP)." },
  { k: "thunderStones", n: "THUNDER STONE", p: 800, d: "Evolution stone: evolves Pikachu into Raichu." },
  { k: "moonStones", n: "MOON STONE", p: 800, d: "Evolution stone: evolves Clefairy into Clefable." }
];
const shop = { index: 0, msg: "", tab: 0 };
function openShop() { shop.index = 0; shop.tab = 0; shop.msg = "Welcome! How may I help you?"; gameState = STATE.SHOP; sfx.doorSound(); }
function renderShop() {
  ctx.fillStyle = "#1e1620"; ctx.fillRect(0, 0, 720, 480);
  ctx.fillStyle = "#ffcb78"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("POKé MART - " + (shop.tab ? "SELL" : "BUY") + "  (◀/▶)", 30, 36);
  ctx.fillText("$ " + player.money, 560, 36);
  const rowH = 48;
  SHOP_ITEMS.forEach((it, i) => {
    const sel = shop.index === i, y = 48 + i * 52;
    ctx.fillStyle = sel ? "#473340" : "#2b202c"; ctx.fillRect(30, y, 660, rowH);
    ctx.strokeStyle = sel ? "#ffcb78" : "#59424e"; ctx.lineWidth = sel ? 3 : 1.5; ctx.strokeRect(30, y, 660, rowH);
    ctx.font = "bold 17px 'Courier New'"; ctx.fillStyle = sel ? "#ffdf9e" : "#fdf6ec";
    ctx.fillText(`${sel ? "▶ " : "  "}${it.n}`, 50, y + 22);
    ctx.fillStyle = "#ffcb78"; ctx.fillText(`$${shop.tab ? Math.floor(it.p / 2) : it.p}`, 440, y + 22);
    ctx.fillStyle = "#bfa38f"; ctx.font = "12px 'Courier New'"; ctx.fillText(`${it.d}   (you have ${player[it.k] || 0})`, 70, y + 40);
  });
  ctx.fillStyle = "#fdf7eb"; ctx.fillRect(30, 366, 660, 64);
  ctx.fillStyle = "#30222a"; ctx.font = "bold 17px 'Courier New'"; ctx.fillText(shop.msg, 46, 404);
  ctx.fillStyle = "#ffcb78"; ctx.fillRect(30, 442, 660, 28);
  ctx.fillStyle = "#241820"; ctx.font = "bold 13px 'Courier New'"; ctx.fillText("▲/▼ Choose  ◀/▶ Buy/Sell  Z: Confirm  X: Leave", 42, 461);
}

// ---- Hidden sparkle items ----
const HIDDEN_NAMES = { potions: "POTION", pokeBalls: "POKé BALL", fullHeals: "FULL HEAL", rareCandies: "RARE CANDY", berries: "BERRY", money: "$" };
function drawHidden() {
  const l = currentMap.hidden; if (!l) return;
  for (const h of l) {
    if (player.found[h.id]) continue;
    const a = 0.5 + 0.5 * Math.sin(T * 0.1 + h.x * 2 + h.y), cx = h.x * 48 + 24, cy = h.y * 48 + 26 - a * 3;
    ctx.globalAlpha = 0.35 + 0.65 * a; ctx.fillStyle = "#fff6c4";
    ctx.fillRect(cx - 1, cy - 8, 2, 16); ctx.fillRect(cx - 8, cy - 1, 16, 2);
    ctx.fillStyle = "#ffd56b"; ctx.fillRect(cx - 3, cy - 3, 6, 6);
  }
  ctx.globalAlpha = 1;
}
function checkHidden() {
  const l = currentMap.hidden; if (!l) return false;
  for (const h of l) {
    if (h.x !== player.gridX || h.y !== player.gridY || player.found[h.id]) continue;
    player.found[h.id] = true; player[h.k] += h.n; sfx.catchSuccess();
    const txt = h.k === "money" ? `Found $${h.n} sparkling in the grass!` : `Found ${h.n} x ${HIDDEN_NAMES[h.k]}!`;
    dialogue.speaker = "SPARKLE"; dialogue.queue = [txt]; dialogue.activeCallback = null;
    setDialogueText(txt); dialogue.anim = 0; gameState = STATE.DIALOGUE; saveGame();
    return true;
  }
  return false;
}
function hid(id, x, y, k, n) { return { id, x, y, k, n }; }
MAPS.PALLET_TOWN.hidden = [hid("p1", 2, 6, "potions", 2), hid("p2", 8, 8, "fullHeals", 1), hid("p3", 12, 3, "money", 300)];
MAPS.VIRIDIAN_CITY.hidden = [hid("v1", 10, 6, "pokeBalls", 5), hid("v2", 2, 5, "potions", 2), hid("v3", 12, 7, "money", 250)];
MAPS.VIRIDIAN_FOREST.hidden = [hid("f1", 1, 1, "rareCandies", 2), hid("f2", 13, 2, "fullHeals", 1), hid("f3", 11, 4, "pokeBalls", 3), hid("f4", 2, 7, "money", 400)];
MAPS.PEWTER_CITY.hidden = [hid("w1", 11, 6, "potions", 3), hid("w2", 1, 5, "money", 500)];
const clerk = (x, y) => ({ name: "MART CLERK", x, y, palette: { body: "#3a6fb0", hair: "#f0e6d0" },
  dialogue: ["Clerk: Welcome to the POKé MART!", "Potions, Balls and Full Heals - take a look!"], onInteract: openShop });
MAPS.VIRIDIAN_CITY.npcs.push(clerk(8, 5));
MAPS.PEWTER_CITY.npcs.push(clerk(9, 5));

// ---- Weather ----
const weather = { type: "CLEAR", auto: "CLEAR", nextAuto: 3600, rain: 0, fog: 0,
  drops: Array.from({ length: 70 }, () => ({ x: Math.random() * 760, y: Math.random() * 480, v: 9 + Math.random() * 4 })) };
const fogSprite = (() => {
  const c = document.createElement("canvas"); c.width = 420; c.height = 200;
  const g = c.getContext("2d"), gr = g.createRadialGradient(210, 100, 10, 210, 100, 210);
  gr.addColorStop(0, "rgba(235,235,245,0.9)"); gr.addColorStop(1, "rgba(235,235,245,0)");
  g.fillStyle = gr; g.fillRect(0, 0, 420, 200); return c;
})();
function updateWeather() {
  if (T >= weather.nextAuto) { const r = Math.random(); weather.auto = r < 0.6 ? "CLEAR" : r < 0.85 ? "RAIN" : "FOG"; weather.nextAuto = T + 3600 + Math.random() * 3600; }
  const want = settings.weather === 0 ? weather.auto : ["", "CLEAR", "RAIN", "FOG"][settings.weather];
  weather.type = want;
  weather.rain += ((want === "RAIN" ? 1 : 0) - weather.rain) * 0.01;
  weather.fog += ((want === "FOG" ? 1 : 0) - weather.fog) * 0.01;
}
function drawWeather() {
  const r = weather.rain, f = weather.fog;
  if (r > 0.02) {
    ctx.fillStyle = `rgba(45,65,100,${(r * 0.2).toFixed(3)})`; ctx.fillRect(0, 0, 720, 480);
    ctx.strokeStyle = `rgba(200,225,255,${(0.5 * r).toFixed(2)})`; ctx.lineWidth = 1.5; ctx.beginPath();
    for (const d of weather.drops) { d.y += d.v; d.x -= 2; if (d.y > 480) { d.y = -10; d.x = Math.random() * 760; } ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - 2, d.y + 10); }
    ctx.stroke();
  }
  if (f > 0.02) {
    ctx.globalAlpha = 0.4 * f;
    for (let i = 0; i < 4; i++) ctx.drawImage(fogSprite, ((T * 0.15 + i * 230) % 960) - 240, 30 + i * 100, 420, 200);
    ctx.globalAlpha = 1;
  }
  if ((r > 0.5 || f > 0.5) && !photoMode) { ctx.font = "bold 12px 'Courier New'"; ctx.fillStyle = "#fff3d6"; ctx.globalAlpha = 0.8; ctx.fillText(r > f ? "☂ RAIN" : "≈ FOG", 625, 60); ctx.globalAlpha = 1; }
}

// ---- Ambient sound: rain hiss, birds by day, crickets at night, footsteps ----
const ambient = { gain: null, bird: 0, cricket: 0 };
function ambientTick() {
  if (!sfx.ctx || !music.unlocked) return;
  const c2 = sfx.ctx, inWorld = gameState === STATE.OVERWORLD || gameState === STATE.DIALOGUE;
  if (!ambient.gain) {
    const len = c2.sampleRate * 2, buf = c2.createBuffer(1, len, c2.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const src = c2.createBufferSource(); src.buffer = buf; src.loop = true;
    const hp = c2.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 900;
    const lp = c2.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 7000;
    ambient.gain = c2.createGain(); ambient.gain.gain.value = 0;
    src.connect(hp); hp.connect(lp); lp.connect(ambient.gain); ambient.gain.connect(c2.destination); src.start();
  }
  ambient.gain.gain.setTargetAtTime((inWorld && !music.muted) ? weather.rain * 0.05 * settings.sfx : 0, c2.currentTime, 0.4);
  if (!inWorld || music.muted) return;
  if (nightD < 0.45 && weather.rain < 0.3) {
    if (T >= ambient.bird) {
      ambient.bird = T + 200 + Math.random() * 260; const f = 2400 + Math.random() * 900;
      sfx.playTone(f, "sine", 0.07, f * 1.3, 0.03); setTimeout(() => sfx.playTone(f * 1.15, "sine", 0.08, f * 1.5, 0.03), 110);
    }
  } else if (nightD > 0.6 && T >= ambient.cricket) {
    ambient.cricket = T + 45; [0, 70, 140].forEach(t => setTimeout(() => sfx.playTone(4300, "sine", 0.04, null, 0.012), t));
  }
}
function stepSound(tile) {
  if (!sfx.ctx) return;
  if (tile === 2) sfx.playNoise(0.05, 0.025); else if (tile === 7) sfx.playTone(900, "square", 0.03, 500, 0.02); else sfx.playTone(180, "triangle", 0.04, 120, 0.03);
  if (++player.steps % 50 === 0) { const m = leadMon(); m.happy = Math.min(100, (m.happy || 0) + 1); }
}

// ---- Picnic spots ----
let picnicAnim = 0;
function startPicnic() {
  const lines = ["You sat down for a cozy picnic with your partner...", "Sandwiches, berries and warm tea! Everyone feels refreshed."];
  dialogue.speaker = "PICNIC"; dialogue.queue = lines; setDialogueText(lines[0]); dialogue.anim = 0; gameState = STATE.DIALOGUE;
  dialogue.activeCallback = () => {
    player.team.forEach(p => { p.hp = p.maxHp; p.status = null; (p.moves || []).forEach(m => { if (m.maxPp) m.pp = m.maxPp; }); p.happy = Math.min(100, (p.happy || 0) + 5); });
    picnicAnim = 180; follower.happy = 120; saveGame();
    [523, 659, 784, 1047, 784, 659, 784, 1047].forEach((f, i) => setTimeout(() => sfx.playTone(f, "triangle", 0.28, null, 0.08), i * 220));
    gameState = STATE.OVERWORLD;
  };
}
function drawPicnic() {
  const p = currentMap.picnic; if (!p) return;
  const px = p.x * 48, py = p.y * 48;
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { ctx.fillStyle = (i + j) % 2 ? "#f5ebd8" : "#d85848"; ctx.fillRect(px + 4 + i * 10, py + 10 + j * 8, 10, 8); }
  ctx.fillStyle = "#8a5a33"; ctx.fillRect(px + 14, py + 16, 18, 12); ctx.fillStyle = "#b07a48"; ctx.fillRect(px + 14, py + 16, 18, 4);
  ctx.strokeStyle = "#5c4033"; ctx.lineWidth = 2; ctx.strokeRect(px + 17, py + 11, 12, 8);
  if (picnicAnim > 0) { ctx.globalAlpha = Math.min(1, picnicAnim / 60) * 0.6; ctx.drawImage(glowSprite, px - 24, py - 26); ctx.globalAlpha = 1; picnicAnim--; }
}
MAPS.PALLET_TOWN.picnic = { x: 11, y: 4 }; MAPS.VIRIDIAN_CITY.picnic = { x: 3, y: 6 };
MAPS.VIRIDIAN_FOREST.picnic = { x: 10, y: 6 }; MAPS.PEWTER_CITY.picnic = { x: 3, y: 7 };
MAPS.PALLET_TOWN.hidden.push(hid("p4", 6, 6, "berries", 3));
MAPS.VIRIDIAN_CITY.hidden.push(hid("v4", 9, 5, "berries", 3));
MAPS.VIRIDIAN_FOREST.hidden.push(hid("f5", 7, 4, "berries", 4));

// ---- Battle background cache ----
let battleBg = null;
function getBattleBg() {
  if (battleBg) return battleBg;
  battleBg = document.createElement("canvas"); battleBg.width = 760; battleBg.height = 520;
  const g = battleBg.getContext("2d"); g.translate(20, 20);
  const sky = g.createLinearGradient(0, 0, 0, 360);
  sky.addColorStop(0, "#f9b282"); sky.addColorStop(0.5, "#d98b82"); sky.addColorStop(1, "#664966");
  g.fillStyle = sky; g.fillRect(-20, -20, 760, 520);
  g.fillStyle = "#638250";
  g.beginPath(); g.ellipse(530, 210, 140, 40, 0, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.ellipse(190, 360, 160, 45, 0, 0, Math.PI * 2); g.fill();
  return battleBg;
}

// ---- Settings screen ----
const settingsMenu = { index: 0, armed: false, msg: "" };
function applyMusicVol() {
  music.vol = settings.music;
  if (music.audio) music.audio.volume = music.muted ? 0 : music.vol;
  if (music.session && sfx.ctx) { const g = music.session.master.gain, now = sfx.ctx.currentTime; g.cancelScheduledValues(now); g.setValueAtTime(g.value, now); g.linearRampToValueAtTime(music.muted ? 0 : music.vol, now + 0.1); }
}
function adjustSetting(dir) {
  const i = settingsMenu.index, clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  if (i === 0) { settings.music = clamp(Math.round(settings.music / 0.08) + dir, 0, 10) * 0.08; applyMusicVol(); }
  else if (i === 1) { settings.sfx = clamp(Math.round(settings.sfx * 10) + dir, 0, 10) / 10; sfx.levelUp(); }
  else if (i === 2) settings.text = clamp(settings.text + dir, 0, 2);
  else if (i === 3) settings.weather = (settings.weather + dir + 4) % 4;
  else if (i === 4) { seasonOverride = ((seasonOverride + 1 + dir + 5) % 5) - 1; settings.season = seasonOverride; }
  else return;
  sfx.textBlip(); saveSettings();
}
function renderSettings() {
  ctx.fillStyle = "#1e1620"; ctx.fillRect(0, 0, 720, 480);
  ctx.fillStyle = "#ffcb78"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("SETTINGS", 30, 40);
  const rows = [
    ["MUSIC VOLUME", settings.music / 0.8], ["SFX VOLUME", settings.sfx],
    ["TEXT SPEED", ["SLOW", "NORMAL", "FAST"][settings.text]], ["WEATHER", ["AUTO", "CLEAR", "RAIN", "FOG"][settings.weather]], ["SEASON", ["AUTO", "SPRING", "SUMMER", "AUTUMN", "WINTER"][seasonOverride + 1]],
    ["RESTART GAME", settingsMenu.armed ? "SURE?" : ""], ["BACK", ""]
  ];
  rows.forEach((r, i) => {
    const sel = settingsMenu.index === i, y = 62 + i * 50;
    ctx.fillStyle = sel ? "#473340" : "#2b202c"; ctx.fillRect(30, y, 660, 44);
    ctx.strokeStyle = sel ? "#ffcb78" : "#59424e"; ctx.lineWidth = sel ? 3 : 1.5; ctx.strokeRect(30, y, 660, 44);
    ctx.font = "bold 18px 'Courier New'"; ctx.fillStyle = sel ? "#ffdf9e" : "#fdf6ec"; ctx.fillText(`${sel ? "▶ " : "  "}${r[0]}`, 46, y + 31);
    if (typeof r[1] === "number") {
      ctx.fillStyle = "#160e18"; ctx.fillRect(400, y + 19, 200, 12); ctx.fillStyle = "#6ca0dc"; ctx.fillRect(402, y + 21, 196 * r[1], 8);
      ctx.fillStyle = "#ffcb78"; ctx.fillText(Math.round(r[1] * 100) + "%", 615, y + 32);
    } else { ctx.fillStyle = "#ffcb78"; ctx.fillText(r[1] ? `◀ ${r[1]} ▶` : "", 440, y + 31); }
  });
  ctx.fillStyle = "#fdf7eb"; ctx.fillRect(30, 420, 660, 22); ctx.fillStyle = "#30222a"; ctx.font = "bold 13px 'Courier New'";
  ctx.fillText(settingsMenu.msg || "Use Arrow Keys to adjust settings.", 40, 436);
  ctx.fillStyle = "#ffcb78"; ctx.fillRect(30, 446, 660, 24); ctx.fillStyle = "#241820";
  ctx.fillText("▲/▼: Choose   ◀/▶: Change   Z: Select   X/Esc: Back", 42, 463);
}

const pcBox = { col: 0, pi: 0, bi: 0, msg: "" };
function renderPCBox() {
  ctx.fillStyle = "#1e1620"; ctx.fillRect(0, 0, 720, 480);
  ctx.fillStyle = "#ffcb78"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("PC BOX", 30, 36);
  [["PARTY " + player.team.length + "/6", player.team, pcBox.pi, 30], ["BOX (" + player.pc.length + ")", player.pc, pcBox.bi, 370]].forEach((c, ci) => {
    ctx.fillStyle = pcBox.col === ci ? "#ffdf9e" : "#bfa38f"; ctx.font = "bold 15px 'Courier New'"; ctx.fillText(c[0], c[3], 62);
    const list = c[1], start = Math.max(0, c[2] - 5);
    if (!list.length) { ctx.fillStyle = "#8f7f87"; ctx.fillText("(empty)", c[3], 96); }
    for (let i = start; i < Math.min(list.length, start + 6); i++) {
      const m = list[i], y = 72 + (i - start) * 56, sel = pcBox.col === ci && c[2] === i;
      ctx.fillStyle = sel ? "#473340" : "#2b202c"; ctx.fillRect(c[3], y, 320, 50);
      ctx.strokeStyle = sel ? "#ffcb78" : "#59424e"; ctx.lineWidth = sel ? 3 : 1.5; ctx.strokeRect(c[3], y, 320, 50);
      drawGenSprite(m.name.toLowerCase() + "_front", c[3] + 4, y + 2, 46, 46);
      ctx.font = "bold 15px 'Courier New'"; ctx.fillStyle = m.hp <= 0 ? "#7a6e74" : "#fdf6ec"; ctx.fillText(m.name, c[3] + 56, y + 22);
      ctx.font = "13px 'Courier New'"; ctx.fillStyle = "#c7b5a5"; ctx.fillText(`Lv.${m.level}  ${m.hp <= 0 ? "FAINT" : m.hp + "/" + m.maxHp}`, c[3] + 56, y + 40);
    }
  });
  ctx.fillStyle = "#fdf7eb"; ctx.fillRect(30, 420, 660, 20); ctx.fillStyle = "#30222a"; ctx.font = "bold 13px 'Courier New'";
  ctx.fillText(pcBox.msg || "Z on party: deposit. Z on box: withdraw (or swap if party is full).", 38, 435);
  ctx.fillStyle = "#ffcb78"; ctx.fillRect(30, 446, 660, 24); ctx.fillStyle = "#241820";
  ctx.fillText("◀/▶: Party/Box   ▲/▼: Choose   Z: Move   X: Back", 42, 463);
}

function renderOverworld() {
  ctx.fillStyle = currentMapKey === "VIRIDIAN_FOREST" ? "#3d5e36" : currentMapKey === "PEWTER_CITY" ? "#5a6e54" : (currentMapKey === "VIRIDIAN_CITY" ? "#4d7342" : "#567c44");
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawMapLayer();
  drawHidden();
  drawPicnic();

  // NPCs
  let hx = player.gridX, hy = player.gridY;
  if (player.facing === "UP") hy--; if (player.facing === "DOWN") hy++;
  if (player.facing === "LEFT") hx--; if (player.facing === "RIGHT") hx++;

  for (const n of currentMap.npcs) {
    let drawX = n.x * TILE_SIZE;
    let drawY = n.y * TILE_SIZE;
    if (trainerAlert.active && trainerAlert.npc === n && trainerAlert.dist > 0) {
      const stepProg = trainerAlert.stepProgress;
      if (n.facing === "UP") drawY -= stepProg;
      else if (n.facing === "DOWN") drawY += stepProg;
      else if (n.facing === "LEFT") drawX -= stepProg;
      else if (n.facing === "RIGHT") drawX += stepProg;
    }
    const talking = gameState === STATE.DIALOGUE && dialogue.speaker === n.name;
    const bob = Math.sin(T * (talking ? 0.3 : 0.07) + n.x) * (talking ? 2 : 1.2);
    drawPerson(drawX, drawY, n.palette.body, n.palette.hair, 0, bob, talking ? OPP[player.facing] : (n.facing || "DOWN"), n.name);

    if (trainerAlert.active && trainerAlert.npc === n) {
      const by = drawY - 26;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(drawX + 12, by, 24, 24);
      ctx.strokeStyle = "#e53935";
      ctx.lineWidth = 2.5;
      ctx.strokeRect(drawX + 12, by, 24, 24);
      ctx.fillStyle = "#e53935";
      ctx.font = "bold 20px 'Courier New'";
      ctx.fillText("!", drawX + 18, by + 19);
    } else if (gameState === STATE.OVERWORLD && !photoMode && !player.isMoving && n.x === hx && n.y === hy) {
      const by = n.y * TILE_SIZE - 12 - Math.abs(Math.sin(T * 0.15)) * 5;
      ctx.fillStyle = "#fffbf0"; ctx.fillRect(n.x * TILE_SIZE + 12, by, 24, 20);
      ctx.strokeStyle = "#503e45"; ctx.lineWidth = 2; ctx.strokeRect(n.x * TILE_SIZE + 12, by, 24, 20);
      ctx.fillStyle = "#c84838"; ctx.font = "bold 16px 'Courier New'"; ctx.fillText("Z", n.x * TILE_SIZE + 19, by + 15);
    } else if (n.name === "PROF. OAK" && player.team.length === 0 && gameState === STATE.OVERWORLD && !photoMode) {
      const by = n.y * TILE_SIZE - 14 - Math.abs(Math.sin(T * 0.12)) * 6;
      ctx.fillStyle = "#e04a3c"; ctx.beginPath(); ctx.arc(n.x * TILE_SIZE + 24, by + 8, 12, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = "#fffbf0"; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = "#ffffff"; ctx.font = "bold 15px 'Courier New'"; ctx.fillText("!", n.x * TILE_SIZE + 20, by + 13);
    }
  }

  if (follower.y <= player.y) drawFollower();
  // Player
  const mv = player.isMoving;
  const pbob = mv ? -Math.abs(Math.sin(player.moveProgress / TILE_SIZE * Math.PI * 2)) * 3 : Math.sin(T * 0.06);
  drawPerson(player.x, player.y, "#bd3832", "#eae3d2", mv ? player.moveProgress * 0.26 : 0, pbob, player.facing, "RED");
  if (follower.y > player.y) drawFollower();

  drawFx();

  ctx.drawImage(vignetteLayer, 0, 0);
  drawDayNight();
  drawWeather();
  if (photoFlash > 0) { ctx.fillStyle = `rgba(255,255,255,${(photoFlash * 0.7).toFixed(2)})`; ctx.fillRect(0, 0, 720, 480); photoFlash *= 0.88; if (photoFlash < 0.02) photoFlash = 0; }

  if (banner.alpha > 0.01) {
    ctx.save();
    ctx.globalAlpha = Math.min(1, banner.alpha);
    ctx.fillStyle = "#2c222e";
    ctx.fillRect(20, 20, 260, 44);
    ctx.strokeStyle = "#ffcb78";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(20, 20, 260, 44);
    ctx.fillStyle = "#fff8ed";
    ctx.font = "bold 16px 'Courier New'";
    ctx.fillText(banner.text, 36, 48);
    ctx.restore();
    banner.alpha -= 0.015;
  }
}

// =============================================================================
// 13. OPTIONS & TRAINER CARD MODALS
// =============================================================================
function renderOptionsMenu() {
  if (optionsMenu.returnState === STATE.OVERWORLD) renderOverworld();
  else if (optionsMenu.returnState === STATE.BATTLE) renderBattle();

  ctx.fillStyle = "rgba(18, 12, 22, 0.75)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const mx = 170, my = 26, mw = 380, mh = 428;
  ctx.fillStyle = "#281e28";
  ctx.fillRect(mx - 4, my - 4, mw + 8, mh + 8);
  ctx.fillStyle = "#3d2e38";
  ctx.fillRect(mx, my, mw, mh);
  ctx.strokeStyle = "#d4a76a";
  ctx.lineWidth = 3.5;
  ctx.strokeRect(mx, my, mw, mh);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 20px 'Courier New'";
  ctx.fillText("❖ SETTINGS & BAG ❖", mx + 50, my + 30);

  const totalItems = (player.potions || 0) + (player.pokeBalls || 0) + (player.rareCandies || 0) + (player.thunderStones || 0) + (player.moonStones || 0);
  const badgeCount = (player.hasBoulderBadge ? 1 : 0) + (player.hasCascadeBadge ? 1 : 0) + (player.hasThunderBadge ? 1 : 0);

  if (optionsMenu.savedNotice > 0) optionsMenu.savedNotice--;

  const items = [
    { label: "POKéDEX",        status: `[ ${POKEDEX_KEYS.length} MONS ]`, desc: "Full stats, cries & evolutionary lines" },
    { label: "POKéMON PARTY",  status: `[ ${player.team.length} / 6 ]`, desc: "View party and individual stats" },
    { label: "ITEM BAG",       status: `[ ${totalItems} ITEMS ]`, desc: "Use Candies, Stones, Potions & Balls" },
    { label: "TRAINER BADGES", status: `[ ${badgeCount} BADGE${badgeCount === 1 ? "" : "S"} ]`, desc: "View official Gym Badges" },
    { label: "SAVE GAME",      status: optionsMenu.savedNotice ? "[ SAVED! ]" : "[ MANUAL ]", desc: "Save adventure to local memory" },
    { label: "TOUCH CONTROLS", status: showTouchControls ? "[ ON  ]" : "[ OFF ]", desc: "Show / hide on-screen D-Pad" },
    { label: "SETTINGS",       status: "", desc: "Volume, text, weather, season, erase" },
    { label: "CLOSE MENU",     status: "", desc: "Resume game" }
  ];

  items.forEach((item, idx) => {
    const isSelected = optionsMenu.index === idx;
    const iy = my + 58 + idx * 43;

    ctx.fillStyle = isSelected ? "rgba(224, 168, 102, 0.22)" : "rgba(30, 20, 28, 0.35)";
    ctx.fillRect(mx + 16, iy - 14, mw - 32, 39);

    if (isSelected) {
      ctx.strokeStyle = "#ffcb78";
      ctx.lineWidth = 2;
      ctx.strokeRect(mx + 16, iy - 14, mw - 32, 39);
    }

    ctx.font = "bold 15px 'Courier New'";
    ctx.fillStyle = isSelected ? "#ffdf9e" : "#f0e6d6";
    ctx.fillText(`${isSelected ? "▶ " : "  "}${item.label}`, mx + 24, iy + 6);

    if (item.status) {
      ctx.fillStyle = item.label === "SAVE GAME" && optionsMenu.savedNotice ? "#81c784" : isSelected ? "#ffeaa8" : "#caa275";
      ctx.fillText(item.status, mx + mw - 145, iy + 6);
    }

    ctx.font = "11px 'Courier New'";
    ctx.fillStyle = isSelected ? "#e5c5a0" : "#99857d";
    ctx.fillText(item.desc, mx + 44, iy + 20);
  });

  ctx.fillStyle = "#e0cfb8";
  ctx.font = "bold 12px 'Courier New'";
  ctx.fillText("▲/▼: Navigate • Z/Enter: Select • P/X: Close", mx + 30, my + mh - 10);
}

function renderTrainerCardScreen() {
  ctx.fillStyle = "#1e1620";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = 80, cy = 50, cw = 560, ch = 380;
  ctx.fillStyle = "#f5efe6";
  ctx.fillRect(cx, cy, cw, ch);
  ctx.strokeStyle = "#b83832";
  ctx.lineWidth = 8;
  ctx.strokeRect(cx, cy, cw, ch);

  ctx.fillStyle = "#b83832";
  ctx.fillRect(cx, cy, cw, 48);

  ctx.fillStyle = "#fff";
  ctx.font = "bold 22px 'Courier New'";
  ctx.fillText("OFFICIAL TRAINER CARD", cx + 24, cy + 34);

  ctx.fillStyle = "#2c1f28";
  ctx.font = "bold 18px 'Courier New'";
  ctx.fillText("NAME: RED", cx + 40, cy + 90);
  ctx.fillText(`MONEY: $ ${player.money.toLocaleString()}`, cx + 40, cy + 120);
  ctx.fillText(`POKéDEX: ${player.team.length} OBTAINED`, cx + 40, cy + 150);

  // BADGES CASE
  ctx.fillStyle = "#e2d7c8";
  ctx.fillRect(cx + 30, cy + 190, cw - 60, 140);
  ctx.strokeStyle = "#7c685b";
  ctx.lineWidth = 3;
  ctx.strokeRect(cx + 30, cy + 190, cw - 60, 140);

  ctx.fillStyle = "#4a3528";
  ctx.font = "bold 16px 'Courier New'";
  ctx.fillText("GYM BADGES", cx + 50, cy + 220);

  // BOULDER BADGE PODIUM (Slot 0)
  const bx = cx + 80, by = cy + 270;
  if (player.hasBoulderBadge) {
    drawBoulderBadgeIcon(bx, by, 44);
    ctx.fillStyle = "#2c1f28";
    ctx.font = "bold 12px 'Courier New'";
    ctx.fillText("BOULDER", bx - 24, by + 40);
  } else {
    ctx.strokeStyle = "#9c8e84";
    ctx.lineWidth = 2;
    ctx.strokeRect(bx - 22, by - 22, 44, 44);
    ctx.fillStyle = "#8a7e75";
    ctx.font = "11px 'Courier New'";
    ctx.fillText("EMPTY", bx - 16, by + 4);
  }

  // CASCADE BADGE PODIUM (Slot 1)
  const cx1 = bx + 64;
  if (player.hasCascadeBadge) {
    drawCascadeBadgeIcon(cx1, by, 44);
    ctx.fillStyle = "#1e3a5f";
    ctx.font = "bold 12px 'Courier New'";
    ctx.fillText("CASCADE", cx1 - 24, by + 40);
  } else {
    ctx.strokeStyle = "#9c8e84";
    ctx.lineWidth = 2;
    ctx.strokeRect(cx1 - 22, by - 22, 44, 44);
    ctx.fillStyle = "#8a7e75";
    ctx.font = "11px 'Courier New'";
    ctx.fillText("EMPTY", cx1 - 16, by + 4);
  }

  // THUNDER BADGE PODIUM (Slot 2)
  const cx2 = bx + 128;
  if (player.hasThunderBadge) {
    drawThunderBadgeIcon(cx2, by, 44);
    ctx.fillStyle = "#b87010";
    ctx.font = "bold 12px 'Courier New'";
    ctx.fillText("THUNDER", cx2 - 24, by + 40);
  } else {
    ctx.strokeStyle = "#9c8e84";
    ctx.lineWidth = 2;
    ctx.strokeRect(cx2 - 22, by - 22, 44, 44);
    ctx.fillStyle = "#8a7e75";
    ctx.font = "11px 'Courier New'";
    ctx.fillText("EMPTY", cx2 - 16, by + 4);
  }

  // Blank slots for other 5 badges
  for (let i = 3; i < 8; i++) {
    const ox = bx + i * 64;
    ctx.strokeStyle = "#b5a89e";
    ctx.strokeRect(ox - 20, by - 20, 40, 40);
  }

  ctx.fillStyle = "#ffcb78";
  ctx.fillRect(0, 445, canvas.width, 35);
  ctx.fillStyle = "#2c1f28";
  ctx.font = "bold 14px 'Courier New'";
  ctx.fillText("Press Z / X / Esc to return", 240, 467);
}

// BADGE AWARD FANFARE CUTSCENE
function renderBadgeAwardScene() {
  ctx.fillStyle = "rgba(18, 12, 22, 0.92)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.translate(360, 190);
  const rot = T * 0.02;
  ctx.rotate(rot);
  for (let i = 0; i < 12; i++) {
    ctx.rotate((Math.PI * 2) / 12);
    ctx.fillStyle = awardedBadge === "THUNDER" ? "rgba(255, 180, 50, 0.25)" : awardedBadge === "CASCADE" ? "rgba(100, 200, 255, 0.22)" : "rgba(255, 225, 120, 0.22)";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-20, 240);
    ctx.lineTo(20, 240);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  if (awardedBadge === "THUNDER") {
    drawThunderBadgeIcon(360, 190, 96);
    ctx.fillStyle = "#332432";
    ctx.fillRect(40, 340, canvas.width - 80, 100);
    ctx.fillStyle = "#fdf7eb";
    ctx.fillRect(44, 344, canvas.width - 88, 92);
    ctx.font = "bold 20px 'Courier New'";
    ctx.fillStyle = "#e68a00";
    ctx.fillText("VICTORY! LT. SURGE WAS DEFEATED!", 65, 376);
    ctx.fillStyle = "#30222a";
    ctx.fillText("Player received the official THUNDER BADGE!", 65, 404);
    ctx.font = "bold 13px 'Courier New'";
    ctx.fillStyle = "#b07010";
    ctx.fillText("Press Z / Enter to complete the 3-Badge Gym Challenge!", 65, 428);
  } else if (awardedBadge === "CASCADE") {
    drawCascadeBadgeIcon(360, 190, 96);
    ctx.fillStyle = "#332432";
    ctx.fillRect(40, 340, canvas.width - 80, 100);
    ctx.fillStyle = "#fdf7eb";
    ctx.fillRect(44, 344, canvas.width - 88, 92);
    ctx.font = "bold 20px 'Courier New'";
    ctx.fillStyle = "#2b7a9e";
    ctx.fillText("VICTORY! MISTY WAS DEFEATED!", 65, 376);
    ctx.fillStyle = "#30222a";
    ctx.fillText("Player received the official CASCADE BADGE!", 65, 404);
    ctx.font = "bold 13px 'Courier New'";
    ctx.fillStyle = "#3880a4";
    ctx.fillText("Press Z / Enter to continue", 65, 428);
  } else {
    drawBoulderBadgeIcon(360, 190, 96);
    ctx.fillStyle = "#332432";
    ctx.fillRect(40, 340, canvas.width - 80, 100);
    ctx.fillStyle = "#fdf7eb";
    ctx.fillRect(44, 344, canvas.width - 88, 92);
    ctx.font = "bold 20px 'Courier New'";
    ctx.fillStyle = "#b83832";
    ctx.fillText("VICTORY! BROCK WAS DEFEATED!", 65, 376);
    ctx.fillStyle = "#30222a";
    ctx.fillText("Player received the official BOULDER BADGE!", 65, 404);
    ctx.font = "bold 13px 'Courier New'";
    ctx.fillStyle = "#a8403a";
    ctx.fillText("Press Z / Enter to continue", 65, 428);
  }
}

function dismissBadgeAward() {
  if (awardedBadge === "THUNDER" || (player.hasBoulderBadge && player.hasCascadeBadge && player.hasThunderBadge)) {
    triggerGameComplete();
  } else {
    gameState = STATE.OVERWORLD;
    music.play();
    sfx.textBlip && sfx.textBlip();
  }
}

// =============================================================================
// CHAMPION GAME COMPLETE & CONGRATULATIONS ENDING SCENE
// =============================================================================
const gameCompleteState = {
  active: false,
  timer: 0,
  confetti: [],
  sparkles: []
};

function triggerGameComplete() {
  gameState = STATE.GAME_COMPLETE;
  gameCompleteState.active = true;
  gameCompleteState.timer = 0;

  // Initialize festive confetti
  gameCompleteState.confetti = [];
  const palette = ["#ff5252", "#ffd700", "#40c4ff", "#69f0ae", "#e040fb", "#ffab40", "#ffffff", "#ff80ab"];
  for (let i = 0; i < 85; i++) {
    gameCompleteState.confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -300,
      w: 7 + Math.random() * 6,
      h: 5 + Math.random() * 4,
      vx: (Math.random() - 0.5) * 2.2,
      vy: 1.4 + Math.random() * 2.2,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.12,
      color: palette[Math.floor(Math.random() * palette.length)],
      phase: Math.random() * Math.PI * 2
    });
  }

  // Shimmering ambient star sparkles
  gameCompleteState.sparkles = [];
  for (let i = 0; i < 45; i++) {
    gameCompleteState.sparkles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 2 + Math.random() * 3,
      phase: Math.random() * Math.PI * 2,
      speed: 0.04 + Math.random() * 0.04
    });
  }

  saveGameManual();
  sfx.badgeFanfare && sfx.badgeFanfare();
  setTimeout(() => {
    sfx.shinyFanfare && sfx.shinyFanfare();
  }, 950);
}

function dismissGameComplete() {
  gameCompleteState.active = false;
  gameState = STATE.OVERWORLD;
  music.play();
  sfx.textBlip && sfx.textBlip();
  saveGameManual();
}

function renderGameComplete() {
  gameCompleteState.timer++;
  const timer = gameCompleteState.timer;

  // 1. Rich dark twilight background
  const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);
  bg.addColorStop(0, "#13091c");
  bg.addColorStop(0.5, "#22132b");
  bg.addColorStop(1, "#110717");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Central warm golden celebration glow
  const pulse = Math.sin(timer * 0.05) * 20;
  const radial = ctx.createRadialGradient(360, 180, 20, 360, 180, 280 + pulse);
  radial.addColorStop(0, "rgba(255, 210, 100, 0.22)");
  radial.addColorStop(0.6, "rgba(255, 140, 50, 0.08)");
  radial.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 3. Shimmering star sparkles
  gameCompleteState.sparkles.forEach(s => {
    s.phase += s.speed;
    const a = (Math.sin(s.phase) + 1) * 0.45;
    ctx.fillStyle = `rgba(255, 245, 180, ${a})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();
  });

  // 4. Header title & laurels
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffd700";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText("★ ★ ★  KANTO GYM CHALLENGE COMPLETED  ★ ★ ★", 360, 32);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 24px 'Courier New'";
  ctx.fillText("CONGRATULATIONS, CHAMPION RED!", 360, 60);

  ctx.fillStyle = "#ffdca8";
  ctx.font = "13px 'Courier New'";
  ctx.fillText("You have defeated Brock, Misty & Lt. Surge and earned all 3 Gym Badges!", 360, 82);

  // 5. The 3 Official Badges Case (Mahogany & Gold Frame)
  const caseX = 50, caseY = 96, caseW = 620, caseH = 110;
  ctx.fillStyle = "rgba(42, 23, 44, 0.92)";
  ctx.fillRect(caseX, caseY, caseW, caseH);
  ctx.strokeStyle = "#e8b948";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(caseX, caseY, caseW, caseH);

  // Case interior velvet background
  ctx.fillStyle = "#1e1022";
  ctx.fillRect(caseX + 6, caseY + 6, caseW - 12, caseH - 12);

  // Badges: Boulder (155), Cascade (360), Thunder (565)
  const badgeSlots = [
    { name: "BOULDER BADGE", leader: "BROCK • PEWTER", x: 155, draw: (x, y) => drawBoulderBadgeIcon(x, y, 46), color: "#c2544a" },
    { name: "CASCADE BADGE", leader: "MISTY • CERULEAN", x: 360, draw: (x, y) => drawCascadeBadgeIcon(x, y, 46), color: "#29b6f6" },
    { name: "THUNDER BADGE", leader: "LT. SURGE • VERMILION", x: 565, draw: (x, y) => drawThunderBadgeIcon(x, y, 46), color: "#ffb300" }
  ];

  badgeSlots.forEach(b => {
    // Rotating golden/elemental halo behind badge
    ctx.save();
    ctx.translate(b.x, caseY + 45);
    ctx.rotate(timer * 0.02);
    ctx.fillStyle = b.color + "28";
    for (let j = 0; j < 8; j++) {
      ctx.rotate((Math.PI * 2) / 8);
      ctx.fillRect(-4, -32, 8, 64);
    }
    ctx.restore();

    // Badge Icon
    b.draw(b.x, caseY + 45);

    // Label
    ctx.textAlign = "center";
    ctx.font = "bold 12px 'Courier New'";
    ctx.fillStyle = "#fffaea";
    ctx.fillText(b.name, b.x, caseY + 82);
    ctx.font = "10px 'Courier New'";
    ctx.fillStyle = "#cbb29d";
    ctx.fillText(b.leader, b.x, caseY + 98);
  });

  // 6. Hall of Fame Champion Pokémon Party Roster
  const rosterY = 216;
  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText("❖ CHAMPION ROSTER & PARTNER TEAM ❖", 360, rosterY);

  const team = player.team || [];
  const cardW = 98;
  const gap = 10;
  const totalW = team.length * cardW + (team.length - 1) * gap;
  const startX = Math.max(30, (canvas.width - totalW) / 2);

  team.forEach((mon, i) => {
    const cx = startX + i * (cardW + gap);
    const cy = rosterY + 12;
    const ch = 106;

    // Card background
    ctx.fillStyle = "rgba(48, 28, 52, 0.88)";
    ctx.fillRect(cx, cy, cardW, ch);
    ctx.strokeStyle = "#805878";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cx, cy, cardW, ch);

    // Subtle sprite float
    const bob = Math.sin(timer * 0.06 + i * 1.2) * 2;
    const spriteKey = mon.name.toLowerCase() + "_front";
    drawGenSprite(spriteKey, cx + (cardW - 54) / 2, cy + 4 + bob, 54, 54);

    // Mon name
    ctx.textAlign = "center";
    ctx.fillStyle = "#fff8ee";
    ctx.font = "bold 11px 'Courier New'";
    const dispName = mon.name.length > 9 ? mon.name.slice(0, 9) : mon.name;
    ctx.fillText(dispName, cx + cardW / 2, cy + 68);

    // Mon level
    ctx.fillStyle = "#ffca28";
    ctx.font = "bold 11px 'Courier New'";
    ctx.fillText(`Lv. ${mon.level}`, cx + cardW / 2, cy + 82);

    // Type badge pill
    const tColor = getTypeColor(mon.type);
    ctx.fillStyle = tColor;
    ctx.fillRect(cx + (cardW - 46) / 2, cy + 88, 46, 13);
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 9px 'Courier New'";
    ctx.fillText(mon.type, cx + cardW / 2, cy + 98);
  });

  // 7. Adventure Record Statistics
  const statsY = 344;
  ctx.fillStyle = "rgba(32, 18, 36, 0.85)";
  ctx.fillRect(50, statsY, 620, 36);
  ctx.strokeStyle = "#5a3a58";
  ctx.lineWidth = 1;
  ctx.strokeRect(50, statsY, 620, 36);

  ctx.textAlign = "center";
  ctx.font = "bold 11px 'Courier New'";
  ctx.fillStyle = "#f5ebd8";
  const caughtCount = (player.team.length || 0) + (player.pc ? player.pc.length : 0);
  ctx.fillText(`🏆 BADGES: 3 / 3    •    📖 CAUGHT: ${caughtCount}    •    💰 MONEY: $${player.money}    •    👟 STEPS: ${player.steps || 0}`, 360, statsY + 22);

  // 8. Bottom Glowing Continuation Button
  const btnY = 394;
  const btnW = 420;
  const btnX = (canvas.width - btnW) / 2;
  const btnH = 46;
  const btnPulse = (Math.sin(timer * 0.08) + 1) * 0.5;

  const btnGrad = ctx.createLinearGradient(btnX, btnY, btnX + btnW, btnY);
  btnGrad.addColorStop(0, "#a83e1c");
  btnGrad.addColorStop(0.5, "#d67425");
  btnGrad.addColorStop(1, "#a83e1c");
  ctx.fillStyle = btnGrad;
  ctx.fillRect(btnX, btnY, btnW, btnH);

  ctx.strokeStyle = `rgba(255, 235, 160, ${0.7 + btnPulse * 0.3})`;
  ctx.lineWidth = 2.5;
  ctx.strokeRect(btnX, btnY, btnW, btnH);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 16px 'Courier New'";
  ctx.fillText("▶ CONTINUE EXPLORING KANTO ◀", 360, btnY + 24);

  ctx.fillStyle = "#ffdfb0";
  ctx.font = "10px 'Courier New'";
  ctx.fillText("Press Z / Enter or Click Screen to continue roaming with your team!", 360, btnY + 39);

  // 9. Animated Falling Confetti on Top
  gameCompleteState.confetti.forEach(c => {
    c.y += c.vy;
    c.x += Math.sin(c.phase + timer * 0.04) * 1.2 + c.vx;
    c.rot += c.vrot;

    if (c.y > canvas.height + 20) {
      c.y = -20;
      c.x = Math.random() * canvas.width;
    }

    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.rotate(c.rot);
    ctx.fillStyle = c.color;
    ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
    ctx.restore();
  });

  ctx.textAlign = "left"; // restore default alignment
}

// =============================================================================
// 14. POKÉDEX VIEWER
// =============================================================================
const DEX_INFO = {
  1: { cat: "Seed", ht: 0.7, wt: 6.9, desc: "A bulb on its back soaks up sunlight and slowly grows alongside it. It naps happily in warm, sunny patches." },
  2: { cat: "Seed", ht: 1.0, wt: 13.0, desc: "The bud on its back swells as it basks in the sun, and its sturdy legs help carry the growing weight." },
  3: { cat: "Seed", ht: 2.0, wt: 100.0, desc: "A huge flower blooms from its back, turning sunshine into power. Its sweet scent calms nearby foes." },
  4: { cat: "Lizard", ht: 0.6, wt: 8.5, desc: "The flame on its tail shows its mood. It prefers warm, dry places and loves a cozy spot near a fire." },
  5: { cat: "Flame", ht: 1.1, wt: 19.0, desc: "Fiercer and more restless than before, it swings its fiery tail and challenges any rival it meets." },
  6: { cat: "Flame", ht: 1.7, wt: 90.5, desc: "It soars high on powerful wings and breathes hot flames, but only fights opponents worth its strength." },
  7: { cat: "Tiny Turtle", ht: 0.5, wt: 9.0, desc: "Shoots water at prey while in the water. Withdraws into its shell when in danger." },
  8: { cat: "Turtle", ht: 1.0, wt: 22.5, desc: "Often recognized by its large, furry ears and tail. It is clever at hiding in water." },
  9: { cat: "Shellfish", ht: 1.6, wt: 85.5, desc: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell." },
  10: { cat: "Worm", ht: 0.3, wt: 2.9, desc: "It munches leaves all day. Its feet grip tightly, letting it climb trees without ever slipping." },
  11: { cat: "Cocoon", ht: 0.7, wt: 9.9, desc: "Hardened into a shell, it stays perfectly still while its body quietly prepares for a big change." },
  12: { cat: "Butterfly", ht: 1.1, wt: 32.0, desc: "Its wings are dusted with a powder that repels rain. It loves gathering nectar from fields of flowers." },
  16: { cat: "Tiny Bird", ht: 0.3, wt: 1.8, desc: "Gentle and shy, it flaps up dust to hide in when scared. It is common in grassy fields and woods." },
  17: { cat: "Bird", ht: 1.1, wt: 30.0, desc: "It patrols a wide territory and watches the ground sharply, swooping down on anything that moves." },
  18: { cat: "Bird", ht: 1.5, wt: 39.5, desc: "It glides on high winds, scanning far-off ground. Its fine crest feathers gleam beautifully in the sun." },
  19: { cat: "Mouse", ht: 0.3, wt: 3.5, desc: "Quick and curious, it will nibble on nearly anything. Its sturdy front teeth never stop growing." },
  20: { cat: "Mouse", ht: 0.7, wt: 18.5, desc: "Its strong fangs can gnaw through hard objects. It uses its webbed hind feet to swim across streams." },
  25: { cat: "Mouse", ht: 0.4, wt: 6.0, desc: "It stores electricity in its cheeks and lets it out when startled. Friends nuzzle it and get tiny sparks." },
  26: { cat: "Mouse", ht: 0.8, wt: 30.0, desc: "Its long tail safely grounds the huge charge it builds up. Extra energy can make it jumpy and short-tempered." },
  43: { cat: "Weed", ht: 0.5, wt: 5.4, desc: "By night it wanders and scatters seeds; by day it plants its feet in the soil and soaks up the sun." },
  44: { cat: "Weed", ht: 0.8, wt: 8.6, desc: "The nectar it drips smells terrible, yet it sways its petals cheerfully as it waddles along." },
  45: { cat: "Flower", ht: 1.2, wt: 18.6, desc: "Its enormous petals sprinkle clouds of pollen as it walks. The bigger the petals, the stronger the scent." },
  21: { cat: "Tiny Bird", ht: 0.3, wt: 2.0, desc: "Very wary and short-tempered, it flaps hard to stay ahead of rivals. It darts across open ground." },
  35: { cat: "Fairy", ht: 0.6, wt: 7.5, desc: "Said to dance in the moonlight on quiet nights. Its soft voice is rarely heard outside Mt. Moon." },
  41: { cat: "Bat", ht: 0.8, wt: 7.5, desc: "It shuns the sun and rests upside down in dark caves, finding its way by echoing tiny cries." },
  42: { cat: "Bat", ht: 1.6, wt: 55.0, desc: "It swoops silently out of the dark on wide wings, and a bite from it leaves you drowsy." },
  74: { cat: "Rock", ht: 0.4, wt: 20.0, desc: "It looks just like a rock on the path, so travelers often trip over it. It is tough but quite friendly." },
  95: { cat: "Rock Snake", ht: 8.8, wt: 210.0, desc: "A giant rock serpent that tunnels deep underground. Its body hardens over time as it grows older." },
  36: { cat: "Fairy", ht: 1.3, wt: 40.0, desc: "A timid fairy Pokémon that is rarely seen. It runs and hides the moment it senses people." },
  120: { cat: "Starshape", ht: 0.8, wt: 34.5, desc: "An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle." },
  121: { cat: "Mysterious", ht: 1.1, wt: 80.0, desc: "Its central core glows with the seven colors of the rainbow. People value the core as a gem." },
  60: { cat: "Tadpole", ht: 0.6, wt: 12.4, desc: "Its slick black skin is thin and damp. The spiral on its belly is actually its innards seen through skin." },
  90: { cat: "Bivalve", ht: 0.3, wt: 4.0, desc: "Protected by an armor shell harder than diamond. It opens only to swim backward by clapping its shell." },
  100: { cat: "Ball", ht: 0.5, wt: 10.4, desc: "Easily mistaken for a Poké Ball. It quickly discharges high-voltage electricity when approached." },
  129: { cat: "Fish", ht: 0.9, wt: 10.0, desc: "Famous for being horribly weak and splashing aimlessly. Yet it can survive in virtually any body of water." },
  130: { cat: "Atrocious", ht: 6.5, wt: 235.0, desc: "Rarely seen in the wild. When provoked, it unleashes destructive hyper beams that level mountains." },
  133: { cat: "Evolution", ht: 0.3, wt: 6.5, desc: "A charming, rare Pokémon whose genetic code is unstable. It smoothly adapts and evolves using stones." },
  134: { cat: "Bubble Jet", ht: 1.0, wt: 29.0, desc: "Its cellular structure is close to water. It can blend effortlessly into water to become completely unseen." },
  135: { cat: "Lightning", ht: 0.8, wt: 24.5, desc: "Every hair on its coat bristle with negative electricity. It fires sharp needles laced with lightning." },
  136: { cat: "Flame", ht: 0.9, wt: 25.0, desc: "It inhales deeply to heat up the flame sac inside its body. It can breathe fiery blasts exceeding 3,000°F." }
};
function wrapText(t, n) {
  const out = []; let line = "";
  for (const w of t.split(" ")) { if ((line + " " + w).trim().length > n) { out.push(line); line = w; } else line = (line + " " + w).trim(); }
  if (line) out.push(line); return out;
}
function dexHome(mon) {
  const maps = Object.values(MAPS).filter(m => m.encounters && m.encounters.some(e => e.id === mon.id)).map(m => m.name.replace("VIRIDIAN FOREST", "FOREST").replace(" TOWN", "").replace(" CITY", ""));
  if (maps.length) return ("FOUND: " + maps.join(", ")).slice(0, 44);
  const pre = Object.values(SPECIES_DB).find(sp => sp.evoTargetId === mon.id);
  return pre ? `EVOLVES FROM ${pre.name}` : "NOT FOUND IN THE WILD";
}
function typeMatchups(mon) {
  const weak = [], resist = [], types = getMonTypes(mon);
  for (const atk of Object.keys(TYPE_CHART)) {
    let m = 1; for (const t of types) { const v = TYPE_CHART[atk][t]; if (v !== undefined) m *= v; }
    if (m > 1) weak.push(atk.slice(0, 3)); else if (m < 1) resist.push(atk.slice(0, 3));
  }
  return { weak, resist };
}

function renderPokedexView() {
  const currentKey = POKEDEX_KEYS[pokedexMenu.index];
  const mon = SPECIES_DB[currentKey];

  ctx.fillStyle = "#1e1620";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#291c28";
  ctx.fillRect(20, 20, 230, 440);
  ctx.strokeStyle = "#5a4356";
  ctx.strokeRect(20, 20, 230, 440);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 18px 'Courier New'";
  ctx.fillText("KANTO POKéDEX", 32, 48);

  const startIdx = Math.max(0, Math.min(pokedexMenu.index - 4, POKEDEX_KEYS.length - 8));
  for (let i = startIdx; i < Math.min(startIdx + 8, POKEDEX_KEYS.length); i++) {
    const k = POKEDEX_KEYS[i];
    const sp = SPECIES_DB[k];
    const isSelected = i === pokedexMenu.index;
    const y = 80 + (i - startIdx) * 44;

    ctx.fillStyle = isSelected ? "#473340" : "#201620";
    ctx.fillRect(26, y - 18, 218, 38);
    if (isSelected) {
      ctx.strokeStyle = "#ffcb78";
      ctx.lineWidth = 2;
      ctx.strokeRect(26, y - 18, 218, 38);
    }

    ctx.font = "bold 14px 'Courier New'";
    ctx.fillStyle = isSelected ? "#ffdf9e" : "#d8cfc4";
    ctx.fillText(`${isSelected ? "▶" : " "} No.${String(sp.id).padStart(3, "0")} ${sp.name}`, 36, y + 6);
  }

  // Details
  const info = DEX_INFO[mon.id] || { cat: "Mystery", ht: "?", wt: "?", desc: "No data yet." };
  ctx.fillStyle = "#261a25"; ctx.fillRect(265, 20, 435, 440);
  ctx.strokeStyle = "#5a4356"; ctx.lineWidth = 1; ctx.strokeRect(265, 20, 435, 440);
  ctx.fillStyle = "#382736"; ctx.beginPath(); ctx.ellipse(370, 150, 75, 24, 0, 0, Math.PI * 2); ctx.fill();
  drawGenSprite(mon.name.toLowerCase() + "_front", 310, 50, 120, 120);
  ctx.fillStyle = "#fff"; ctx.font = "bold 20px 'Courier New'";
  ctx.fillText(`No.${String(mon.id).padStart(3, "0")} ${mon.name}`, 450, 68);
  getMonTypes(mon).forEach((t, i) => {
    ctx.fillStyle = getTypeColor(t); ctx.fillRect(450 + i * 78, 80, 72, 20);
    ctx.fillStyle = "#fff"; ctx.font = "bold 11px 'Courier New'"; ctx.fillText(t, 456 + i * 78, 94);
  });
  ctx.font = "bold 12px 'Courier New'"; ctx.fillStyle = "#e8d8c0";
  ctx.fillText(`${info.cat.toUpperCase()} POKéMON`, 450, 120);
  ctx.fillText(`HT ${info.ht}m   WT ${info.wt}kg`, 450, 136);
  ctx.fillStyle = "#c7b5a5"; ctx.fillText(dexHome(mon), 450, 152);
  ctx.fillStyle = "#ffcb78";
  ctx.fillText("Z: Cry ♫" + (player.team.some(p => p.id === mon.id) ? "   ★ IN PARTY" : ""), 450, 168);
  ctx.fillStyle = "#1d131c"; ctx.fillRect(280, 180, 405, 66); ctx.strokeStyle = "#483544"; ctx.strokeRect(280, 180, 405, 66);
  ctx.fillStyle = "#f1e6d4"; ctx.font = "12px 'Courier New'";
  wrapText(info.desc, 54).slice(0, 3).forEach((ln, i) => ctx.fillText(ln, 290, 200 + i * 16));
  ctx.fillStyle = "#ffcb78"; ctx.font = "bold 14px 'Courier New'"; ctx.fillText("BASE STATS", 285, 266);
  [{ label: "HP", val: mon.baseHp }, { label: "ATTACK", val: mon.attack }, { label: "DEFENSE", val: mon.defense }, { label: "SPEED", val: mon.speed }].forEach((st, idx) => {
    const sy = 286 + idx * 17;
    ctx.fillStyle = "#c7b5a5"; ctx.font = "bold 12px 'Courier New'"; ctx.fillText(st.label, 285, sy);
    ctx.fillStyle = "#382736"; ctx.fillRect(360, sy - 10, 140, 9);
    ctx.fillStyle = "#6ca0dc"; ctx.fillRect(360, sy - 10, Math.min(140, (st.val / 50) * 140), 9);
    ctx.fillStyle = "#fff"; ctx.fillText(`${st.val}`, 510, sy);
  });
  const mu = typeMatchups(mon);
  ctx.font = "bold 11px 'Courier New'";
  ctx.fillStyle = "#e07a63"; wrapText("WEAK: " + (mu.weak.join(" ") || "-"), 21).slice(0, 2).forEach((l, i) => ctx.fillText(l, 548, 270 + i * 13));
  ctx.fillStyle = "#7fc27a"; wrapText("RESIST: " + (mu.resist.join(" ") || "-"), 21).slice(0, 2).forEach((l, i) => ctx.fillText(l, 548, 310 + i * 13));
  ctx.fillStyle = "#ffcb78"; ctx.font = "bold 14px 'Courier New'";
  ctx.fillText("EVOLUTIONARY LINE", 285, 354);

  let evoChain = [];
  let rootId = mon.id;
  for (let k in SPECIES_DB) {
    if (SPECIES_DB[k].evoTargetId === rootId) {
      rootId = SPECIES_DB[k].id;
      for (let j in SPECIES_DB) {
        if (SPECIES_DB[j].evoTargetId === rootId) rootId = SPECIES_DB[j].id;
      }
    }
  }

  let curr = SPECIES_DB[rootId];
  while (curr) {
    evoChain.push(curr);
    curr = curr.evoTargetId ? SPECIES_DB[curr.evoTargetId] : null;
  }

  evoChain.forEach((node, idx) => {
    const nx = 290 + idx * 135;
    const ny = 365;

    ctx.fillStyle = (node.id === mon.id) ? "#4a3544" : "#1e141d";
    ctx.fillRect(nx, ny, 120, 56);
    ctx.strokeStyle = (node.id === mon.id) ? "#ffcb78" : "#483544";
    ctx.strokeRect(nx, ny, 120, 56);

    drawGenSprite(node.name.toLowerCase() + "_front", nx + 2, ny + 4, 48, 48);

    ctx.font = "bold 11px 'Courier New'";
    ctx.fillStyle = (node.id === mon.id) ? "#ffdf9e" : "#d8cfc4";
    ctx.fillText(node.name, nx + 48, ny + 24);

    ctx.font = "10px 'Courier New'";
    ctx.fillStyle = "#caa275";
    ctx.fillText(node.evoLevel ? `Lv. ${node.evoLevel}` : "Final", nx + 48, ny + 42);
  });

  ctx.fillStyle = "#ffcb78";
  ctx.fillRect(20, 442, 680, 26);
  ctx.fillStyle = "#241820";
  ctx.font = "bold 12px 'Courier New'";
  ctx.fillText("▲/▼: Browse   Z/Enter: Cry   X/Esc: Back to Options", 32, 460);
}

// =============================================================================
// 15. BAG MENU (POTIONS, RARE CANDY & POKÉ BALLS)
// =============================================================================
function getBagItems() {
  return [
    { name: "POTION", key: "POTION", count: player.potions, desc: "Restores up to 20 HP of a chosen Pokémon in your party." },
    { name: "RARE CANDY", key: "RARE_CANDY", count: player.rareCandies, desc: "A sweet candy that instantly raises 1 Pokémon by 1 level!" },
    { name: "POKé BALL", key: "POKE_BALL", count: player.pokeBalls, desc: "A capsule tool used for catching wild Pokémon in battle." },
    { name: "FULL HEAL", key: "FULL_HEAL", count: player.fullHeals, desc: "Cures sleep, burn, poison or paralysis." },
    { name: "BERRY", key: "BERRY", count: player.berries, desc: "A tasty berry. Raises friendship and heals 10 HP." },
    { name: "THUNDER STONE", key: "THUNDER_STONE", count: player.thunderStones, desc: "A peculiar stone with a lightning bolt. Evolves Pikachu into Raichu!" },
    { name: "MOON STONE", key: "MOON_STONE", count: player.moonStones, desc: "A mystical stone that glows in the dark. Evolves Clefairy into Clefable!" }
  ];
}

function renderBagMenu() {
  ctx.fillStyle = "#1e1620";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 22px 'Courier New'";
  ctx.fillText("ITEM BAG", 30, 34);

  const bagItems = getBagItems();

  const rowH = 48;
  bagItems.forEach((it, idx) => {
    const isSelected = bagMenu.index === idx;
    const y = 46 + idx * 54;

    ctx.fillStyle = isSelected ? "#473340" : "#2b202c";
    ctx.fillRect(30, y, 660, rowH);
    ctx.strokeStyle = isSelected ? "#ffcb78" : "#59424e";
    ctx.lineWidth = isSelected ? 3 : 1.5;
    ctx.strokeRect(30, y, 660, rowH);

    if (it.name === "RARE CANDY") {
      drawRareCandyIcon(55, y + 24);
    } else if (it.name === "POKé BALL") {
      drawPokeball(55, y + 24, 10, 0);
    } else if (it.name === "BERRY") {
      ctx.fillStyle = "#d8506c"; ctx.beginPath(); ctx.arc(55, y + 26, 9, 0, 6.3); ctx.fill(); ctx.fillStyle = "#5c9a3c"; ctx.fillRect(53, y + 13, 4, 7);
    } else if (it.name === "THUNDER STONE") {
      drawThunderStoneIcon(55, y + 24);
    } else if (it.name === "MOON STONE") {
      drawMoonStoneIcon(55, y + 24);
    } else {
      ctx.fillStyle = "#94c8e0";
      ctx.fillRect(48, y + 14, 14, 20);
    }

    ctx.font = "bold 17px 'Courier New'";
    ctx.fillStyle = isSelected ? "#ffdf9e" : "#fdf6ec";
    ctx.fillText(`${isSelected ? "▶ " : "  "}${it.name}`, 80, y + 22);

    ctx.font = "bold 16px 'Courier New'";
    ctx.fillStyle = "#ffcb78";
    ctx.fillText(`x ${it.count || 0}`, 580, y + 22);

    ctx.font = "12px 'Courier New'";
    ctx.fillStyle = "#bfa38f";
    ctx.fillText(it.desc, 90, y + 39);
  });

  ctx.fillStyle = "#ffcb78";
  ctx.fillRect(30, 442, 660, 28);
  ctx.fillStyle = "#241820";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText("▲/▼: Navigate   Z/Enter: Use Item   X/Esc: Back", 42, 461);
}

function renderBagSelectTarget() {
  ctx.fillStyle = "#1e1620";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 20px 'Courier New'";
  const titleText = bagMenu.selectedItem === "RARE_CANDY" ? "USE RARE CANDY ON WHICH POKéMON?"
    : bagMenu.selectedItem === "THUNDER_STONE" ? "USE THUNDER STONE ON WHICH POKéMON?"
    : bagMenu.selectedItem === "MOON_STONE" ? "USE MOON STONE ON WHICH POKéMON?"
    : "SELECT POKéMON TO HEAL";
  ctx.fillText(titleText, 30, 40);

  if (!player.team || player.team.length === 0) {
    ctx.fillStyle = "#ffdf9e";
    ctx.font = "bold 16px 'Courier New'";
    ctx.fillText("You have no Pokémon in your party to use this item on!", 50, 120);
    ctx.font = "14px 'Courier New'";
    ctx.fillStyle = "#baa395";
    ctx.fillText("Press X or Esc to return to the Bag.", 50, 160);
  } else {
    player.team.forEach((mon, idx) => {
      const isSelected = bagTargetIndex === idx;
      const y = 62 + idx * 64;

      ctx.fillStyle = isSelected ? "#473340" : "#2b202c";
      ctx.fillRect(30, y, 660, 56);
      ctx.strokeStyle = isSelected ? "#ffcb78" : "#59424e";
      ctx.lineWidth = isSelected ? 3 : 1.5;
      ctx.strokeRect(30, y, 660, 56);

      drawGenSprite(mon.name.toLowerCase() + "_front", 50, y + 4, 48, 48);

      ctx.font = "bold 18px 'Courier New'";
      ctx.fillStyle = isSelected ? "#ffdf9e" : "#fdf6ec";
      ctx.fillText(`${isSelected ? "▶ " : "  "}${mon.name}`, 110, y + 26);

      ctx.font = "bold 15px 'Courier New'";
      ctx.fillStyle = "#ffcb78";
      ctx.fillText(`Lv.${mon.level}`, 320, y + 25);

      ctx.fillStyle = "#1c141d";
      ctx.fillRect(400, y + 16, 150, 10);
      const hpPct = Math.max(0, Math.min(1, mon.hp / mon.maxHp));
      ctx.fillStyle = hpPct > 0.5 ? "#5cb842" : hpPct > 0.2 ? "#e0a643" : "#d85848";
      ctx.fillRect(402, y + 18, 146 * hpPct, 6);

      ctx.font = "bold 14px 'Courier New'";
      ctx.fillStyle = "#fdf6ec";
      ctx.fillText(`${mon.hp}/${mon.maxHp}`, 575, y + 26);
    });
  }

  ctx.fillStyle = "#ffcb78";
  ctx.fillRect(30, 442, 660, 28);
  ctx.fillStyle = "#241820";
  ctx.font = "bold 13px 'Courier New'";
  const actionText = bagMenu.selectedItem === "RARE_CANDY" ? "Z: Feed Rare Candy (Level Up!)"
    : bagMenu.selectedItem === "THUNDER_STONE" ? "Z: Use Thunder Stone (Evolves Pikachu)"
    : bagMenu.selectedItem === "MOON_STONE" ? "Z: Use Moon Stone (Evolves Clefairy)"
    : "Z/Enter: Apply Item";
  ctx.fillText(`▲/▼: Choose Pokémon   ${actionText}   X/Esc: Cancel`, 42, 461);
}

// =============================================================================
// 16. EVOLUTION CUTSCENE & ANIMATION
// =============================================================================
function renderEvolutionScene() {
  ctx.fillStyle = "#0c0812";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  evoAnim.timer++;

  ctx.save();
  ctx.translate(360, 220);
  const rot = evoAnim.timer * 0.035;
  ctx.rotate(rot);

  const numRays = 16;
  for (let i = 0; i < numRays; i++) {
    ctx.rotate((Math.PI * 2) / numRays);
    const grad = ctx.createLinearGradient(0, 0, 0, 300);
    grad.addColorStop(0, "rgba(255, 235, 170, 0.25)");
    grad.addColorStop(1, "rgba(255, 180, 80, 0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-24, 300);
    ctx.lineTo(24, 300);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();

  if (Math.random() < 0.6) {
    battle.particles.push({
      x: 360 + (Math.random() - 0.5) * 160,
      y: 220 + (Math.random() - 0.5) * 160,
      vx: (Math.random() - 0.5) * 4,
      vy: -Math.random() * 4 - 1,
      color: Math.random() > 0.4 ? "#fff4cc" : "#6cd0ff",
      life: 25,
      size: Math.random() * 5 + 3
    });
  }

  for (let i = battle.particles.length - 1; i >= 0; i--) {
    const p = battle.particles[i];
    p.x += p.vx; p.y += p.vy; p.life--;
    ctx.fillStyle = p.color;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    if (p.life <= 0) battle.particles.splice(i, 1);
  }

  let isNewForm = false;
  let useSilhouette = true;

  if (evoAnim.timer < 50) {
    isNewForm = false;
    useSilhouette = evoAnim.timer % 6 < 3;
  } else if (evoAnim.timer < 190) {
    const cycleFreq = Math.max(3, Math.floor(14 - (evoAnim.timer - 50) / 14));
    isNewForm = Math.floor(evoAnim.timer / cycleFreq) % 2 === 0;
    useSilhouette = true;
    if (evoAnim.timer % 12 === 0) sfx.expTick();
  } else {
    isNewForm = true;
    useSilhouette = false;
  }

  const currentKey = isNewForm 
    ? (evoAnim.newSpecies.name.toLowerCase() + "_front")
    : (evoAnim.targetMon.name.toLowerCase() + "_front");

  const pulse = 1 + 0.12 * Math.sin(evoAnim.timer * 0.18);
  ctx.save();
  ctx.translate(360, 220);
  ctx.scale(pulse, pulse);
  drawGenSprite(currentKey, -96, -96, 192, 192, useSilhouette);
  ctx.restore();

  ctx.fillStyle = "#332432";
  ctx.fillRect(20, 370, 680, 90);
  ctx.fillStyle = "#fdf7eb";
  ctx.fillRect(24, 374, 672, 82);

  ctx.font = "bold 20px 'Courier New'";
  ctx.fillStyle = "#30222a";
  if (evoAnim.timer < 190) {
    ctx.fillText(`What? ${evoAnim.targetMon.name} is evolving!`, 50, 420);
  } else {
    ctx.fillText(`Congratulations! Your ${evoAnim.targetMon.name}`, 50, 410);
    ctx.fillText(`evolved into ${evoAnim.newSpecies.name}!`, 50, 436);
  }

  if (evoAnim.timer === 195) {
    sfx.catchSuccess();
    cryAudio.play(evoAnim.newSpecies.id);
  }

  if (evoAnim.timer > 270) {
    const target = evoAnim.targetMon;
    const next = evoAnim.newSpecies;

    target.id = next.id;
    target.name = next.name;
    target.type = next.type;
    target.maxHp += 12;
    target.hp = target.maxHp;
    target.attack = next.attack + 4;
    target.defense = next.defense + 4;
    target.speed = next.speed + 4;
    target.spriteKey = next.name.toLowerCase() + "_front";
    target.backSpriteKey = next.name.toLowerCase() + "_back";
    target.moves = JSON.parse(JSON.stringify(next.moves)); ensurePP(target); target.status = null;

    evoAnim.active = false;
    gameState = evoAnim.returnState || STATE.OVERWORLD;
    if (gameState === STATE.OVERWORLD) {
      battle.isTrainerBattle = false;
      battle.isGym = false;
      battle.trainerTeam = [];
      battle.trainerTeamIndex = 0;
      battle.onWin = null;
    }
    if (evoAnim.pendingGymLeader) {
      const leader = evoAnim.pendingGymLeader;
      evoAnim.pendingGymLeader = null;
      if (leader === "SURGE" && !player.hasThunderBadge) {
        player.hasThunderBadge = true;
        player.money += 2800;
        awardedBadge = "THUNDER";
        gameState = STATE.BADGE_AWARD;
        sfx.badgeFanfare && sfx.badgeFanfare();
      } else if (leader === "MISTY" && !player.hasCascadeBadge) {
        player.hasCascadeBadge = true;
        player.money += 2200;
        awardedBadge = "CASCADE";
        gameState = STATE.BADGE_AWARD;
        sfx.badgeFanfare && sfx.badgeFanfare();
      } else if (!player.hasBoulderBadge) {
        player.hasBoulderBadge = true;
        player.money += 1500;
        awardedBadge = "BOULDER";
        gameState = STATE.BADGE_AWARD;
        sfx.badgeFanfare && sfx.badgeFanfare();
      }
    }
    music.play();
  }
}

// =============================================================================
// 17. PARTY & STATS SCREENS
// =============================================================================
function renderPartyMenu() {
  ctx.fillStyle = "#1e1620";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 22px 'Courier New'";
  ctx.fillText("POKéMON PARTY ROSTER", 30, 40);

  ctx.font = "bold 13px 'Courier New'";
  ctx.fillStyle = "#bfa38f";
  ctx.fillText(`TOTAL CATCHES: ${player.team.length} / 6`, 480, 40);

  player.team.forEach((mon, idx) => {
    const isSelected = partyMenu.selectedIndex === idx;
    const y = 62 + idx * 64;

    ctx.fillStyle = isSelected ? "#473340" : "#2b202c";
    ctx.fillRect(30, y, 660, 56);
    ctx.strokeStyle = isSelected ? "#ffcb78" : "#59424e";
    ctx.lineWidth = isSelected ? 3 : 1.5;
    ctx.strokeRect(30, y, 660, 56);

    drawPokeball(55, y + 28, 12, 0);

    const spriteKey = (mon.name.toLowerCase() + "_front");
    drawGenSprite(spriteKey, 75, y + 4, 48, 48);

    ctx.font = "bold 18px 'Courier New'";
    ctx.fillStyle = mon.hp <= 0 ? "#7a6e74" : isSelected ? "#ffdf9e" : "#fdf6ec";
    ctx.fillText(`${isSelected ? "▶ " : "  "}${mon.name}`, 130, y + 26);

    ctx.fillStyle = getTypeColor(mon.type);
    ctx.fillRect(290, y + 12, 70, 18);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 11px 'Courier New'";
    ctx.fillText(mon.type, 298, y + 25);

    ctx.font = "bold 15px 'Courier New'";
    ctx.fillStyle = "#c7b5a5";
    ctx.fillText(`Lv.${mon.level}`, 380, y + 25);

    ctx.fillStyle = "#1c141d";
    ctx.fillRect(450, y + 16, 120, 10);
    const hpPct = Math.max(0, Math.min(1, mon.hp / mon.maxHp));
    ctx.fillStyle = hpPct > 0.5 ? "#5cb842" : hpPct > 0.2 ? "#e0a643" : "#d85848";
    ctx.fillRect(452, y + 18, 116 * hpPct, 6);

    ctx.font = "bold 13px 'Courier New'";
    ctx.fillStyle = mon.hp <= 0 ? "#d85848" : "#fdf6ec";
    ctx.fillText(`${mon.hp <= 0 ? "FAINT" : mon.hp + "/" + mon.maxHp}`, 585, y + 25);
  });

  ctx.fillStyle = "#ffcb78";
  ctx.fillRect(30, 442, 660, 28);
  ctx.fillStyle = "#241820";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText("▲/▼ Choose  Z: Stats  C: PC BOX  X: Back", 42, 461);
}

function renderDetailedStatsScreen() {
  if (!statsViewingMon) return;
  const mon = statsViewingMon;

  const bg = ctx.createLinearGradient(0, 0, 0, 480);
  bg.addColorStop(0, "#2c1f2b");
  bg.addColorStop(1, "#18101a");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#3d2b3b";
  ctx.fillRect(20, 16, 680, 44);
  ctx.strokeStyle = "#ffcb78";
  ctx.lineWidth = 2.5;
  ctx.strokeRect(20, 16, 680, 44);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 20px 'Courier New'";
  ctx.fillText(`POKéMON SUMMARY & STATS`, 36, 45);

  ctx.fillStyle = "#fdf5ea";
  ctx.font = "bold 14px 'Courier New'";
  ctx.fillText(`NO. ${String(mon.id).padStart(3, "0")}`, 580, 45);

  ctx.fillStyle = "#221723";
  ctx.fillRect(20, 72, 270, 350);
  ctx.strokeStyle = "#5a4356";
  ctx.lineWidth = 2;
  ctx.strokeRect(20, 72, 270, 350);

  ctx.fillStyle = "#382736";
  ctx.beginPath();
  ctx.ellipse(155, 230, 95, 30, 0, 0, Math.PI * 2);
  ctx.fill();

  const bob = Math.sin(T * 0.08) * 3;
  const spriteKey = (mon.name.toLowerCase() + "_front");
  drawGenSprite(spriteKey, 75, 110 + bob, 160, 160);

  ctx.fillStyle = "#fff8ee";
  ctx.font = "bold 22px 'Courier New'";
  ctx.fillText(mon.name, 40, 290);

  ctx.fillStyle = getTypeColor(mon.type);
  ctx.fillRect(40, 305, 80, 22);
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText(mon.type, 56, 321);

  ctx.font = "bold 15px 'Courier New'";
  ctx.fillStyle = "#ffcb78";
  ctx.fillText(`Lv. ${mon.level}`, 140, 321);
  ctx.fillStyle = "#c7b5a5"; ctx.font = "bold 12px 'Courier New'"; ctx.fillText("FRIENDSHIP", 40, 356);
  for (let h = 0; h < 5; h++) { ctx.fillStyle = h < Math.round((mon.happy || 0) / 20) ? "#ff6f91" : "#4a3544"; ctx.font = "bold 22px 'Courier New'"; ctx.fillText("♥", 40 + h * 26, 384); }

  ctx.fillStyle = "#221723";
  ctx.fillRect(305, 72, 395, 350);
  ctx.strokeStyle = "#5a4356";
  ctx.lineWidth = 2;
  ctx.strokeRect(305, 72, 395, 350);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 16px 'Courier New'";
  ctx.fillText("BATTLE ATTRIBUTES", 325, 102);

  ctx.fillStyle = "#c7b5a5";
  ctx.font = "bold 14px 'Courier New'";
  ctx.fillText("HP", 325, 134);

  ctx.fillStyle = "#160e18";
  ctx.fillRect(410, 122, 170, 14);
  const hpPct = Math.max(0, Math.min(1, mon.hp / mon.maxHp));
  ctx.fillStyle = hpPct > 0.5 ? "#5cb842" : hpPct > 0.2 ? "#e0a643" : "#d85848";
  ctx.fillRect(412, 124, 166 * hpPct, 10);

  ctx.fillStyle = "#fdf5ea";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText(`${mon.hp} / ${mon.maxHp}`, 595, 134);

  const statList = [
    { label: "ATTACK",  val: mon.attack || 12 },
    { label: "DEFENSE", val: mon.defense || 10 },
    { label: "SPEED",   val: mon.speed || 11 }
  ];

  statList.forEach((st, idx) => {
    const sy = 166 + idx * 28;
    ctx.fillStyle = "#c7b5a5";
    ctx.font = "bold 14px 'Courier New'";
    ctx.fillText(st.label, 325, sy);

    ctx.fillStyle = "#382736";
    ctx.fillRect(410, sy - 11, 170, 10);
    ctx.fillStyle = "#6ca0dc";
    ctx.fillRect(410, sy - 11, Math.min(170, (st.val / 30) * 170), 10);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 14px 'Courier New'";
    ctx.fillText(`${st.val}`, 595, sy);
  });

  ctx.fillStyle = "#c7b5a5";
  ctx.font = "bold 14px 'Courier New'";
  ctx.fillText("EXP POINTS", 325, 260);

  ctx.fillStyle = "#160e18";
  ctx.fillRect(410, 250, 170, 10);
  const expPct = Math.max(0, Math.min(1, (mon.exp || 0) / (mon.maxExp || 35)));
  ctx.fillStyle = "#e0a643";
  ctx.fillRect(410, 250, 170 * expPct, 10);

  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 12px 'Courier New'";
  ctx.fillText(`${mon.exp || 0}/${mon.maxExp || 35}`, 595, 260);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 15px 'Courier New'";
  ctx.fillText("KNOWN MOVES", 325, 300);

  mon.moves.forEach((mv, idx) => {
    const spacing = mon.moves.length > 3 ? 26 : 32;
    const my = (mon.moves.length > 3 ? 324 : 330) + idx * spacing;
    const boxH = mon.moves.length > 3 ? 23 : 28;
    ctx.fillStyle = "#332432";
    ctx.fillRect(325, my - 11, 355, boxH);
    ctx.strokeStyle = "#5a4356";
    ctx.strokeRect(325, my - 11, 355, boxH);

    ctx.fillStyle = "#fdf5ea";
    ctx.font = mon.moves.length > 3 ? "bold 13px 'Courier New'" : "bold 14px 'Courier New'";
    ctx.fillText(`• ${mv.name}`, 335, my + 5);

    ctx.fillStyle = "#ffcb78";
    ctx.font = "bold 12px 'Courier New'";
    ctx.fillText(`PWR ${mv.power}`, 520, my + 5);

    ctx.fillStyle = mv.kind === "special" ? "#e06341" : "#bfa38f";
    ctx.font = "bold 10px 'Courier New'";
    ctx.fillText(mv.kind.toUpperCase(), 605, my + 5);
  });

  ctx.fillStyle = "#ffcb78";
  ctx.fillRect(20, 436, 680, 32);
  ctx.fillStyle = "#241820";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText("◀ / ▶: Cycle Team Members   •   X / Esc / Z: Return to Roster", 42, 457);
}

// =============================================================================
// 18. BATTLE RENDERING & UI
// =============================================================================
function renderBattle() {
  if (battle.slideIn > 0) battle.slideIn = Math.max(0, battle.slideIn - 15);

  let ox = 0, oy = 0;
  if (battle.animShake > 0) {
    ox = (Math.random() - 0.5) * battle.animShake;
    oy = (Math.random() - 0.5) * battle.animShake;
    battle.animShake *= 0.85;
    if (battle.animShake < 0.5) battle.animShake = 0;
  }

  ctx.save();
  ctx.translate(ox, oy);

  ctx.drawImage(getBattleBg(), -20, -20);
  if (nightD > 0.05) { ctx.fillStyle = `rgba(20,26,78,${(nightD * 0.45).toFixed(2)})`; ctx.fillRect(-20, -20, 760, 380); }

  battle.edx += (battle.enemyOffset.x - battle.edx) * 0.35;
  battle.edy += (battle.enemyOffset.y - battle.edy) * 0.35;
  battle.pdx += (battle.playerOffset.x - battle.pdx) * 0.35;
  battle.pdy += (battle.playerOffset.y - battle.pdy) * 0.35;
  if (battle.eFaintOn) battle.eFaint = Math.min(1, battle.eFaint + 0.04);
  if (battle.pFaintOn) battle.pFaint = Math.min(1, battle.pFaint + 0.04);
  const eb = Math.sin(T * 0.07) * 4, pb = Math.sin(T * 0.07 + 1.5) * 3;

  if (!battle.enemyCaptured) {
    if (!battle.enemyFlicker || Math.floor(Date.now() / 60) % 2 === 0) {
      ctx.save();
      ctx.globalAlpha = 1 - battle.eFaint;
      const ex = 434 + battle.edx + battle.slideIn + 96;
      const ey = 30 + battle.edy + eb + battle.eFaint * 50 + 96;
      ctx.translate(ex, ey);
      ctx.scale(battle.enemyScale, battle.enemyScale);
      drawGenSprite(battle.enemy.spriteKey, -96, -96, 192, 192);
      ctx.restore();
    }
  }

  if (!playerThrowAnim.active) {
    if (!battle.playerFlicker || Math.floor(Date.now() / 60) % 2 === 0) {
      ctx.globalAlpha = 1 - battle.pFaint;
      drawGenSprite(battle.playerMon.backSpriteKey, 94 + battle.pdx - battle.slideIn, 175 + battle.pdy + pb + battle.pFaint * 50, 192, 192);
      ctx.globalAlpha = 1;
    }
  } else {
    drawPokeball(playerThrowAnim.ballX, playerThrowAnim.ballY, 14, playerThrowAnim.progress * 15);
  }

  if (pokeballAnim.active) {
    updatePokeballAnimation();
    drawPokeball(pokeballAnim.x, pokeballAnim.y, 14, pokeballAnim.state === "WOBBLE" ? pokeballAnim.wobbleAngle : pokeballAnim.rotation);
  }

  for (let i = battle.particles.length - 1; i >= 0; i--) {
    const p = battle.particles[i];
    p.x += p.vx; p.y += p.vy; p.life--;
    ctx.fillStyle = p.color;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    if (p.life <= 0) battle.particles.splice(i, 1);
  }

  for (let i = floaters.length - 1; i >= 0; i--) {
    const f = floaters[i];
    f.y -= 1.2; f.life--;
    ctx.globalAlpha = Math.min(1, f.life / 25);
    ctx.font = "bold 26px 'Courier New'";
    ctx.lineWidth = 4; ctx.strokeStyle = "#fff"; ctx.strokeText(f.text, f.x, f.y);
    ctx.fillStyle = f.text.includes("LV") ? "#6ca0dc" : f.text.includes("CAUGHT") ? "#ffcb78" : "#d85848"; 
    ctx.fillText(f.text, f.x, f.y);
    ctx.globalAlpha = 1;
    if (f.life <= 0) floaters.splice(i, 1);
  }

  if (battle.flash > 0.02) {
    ctx.fillStyle = `rgba(255,240,210,${battle.flash * 0.5})`;
    ctx.fillRect(-20, -20, canvas.width + 40, 400);
    battle.flash *= 0.84;
  }

  battle.enemyDispHP += (battle.enemy.hp - battle.enemyDispHP) * 0.1;
  battle.playerDispHP += (battle.playerMon.hp - battle.playerDispHP) * 0.1;
  battle.playerDispExp += (battle.playerMon.exp - battle.playerDispExp) * 0.3;
  if (Math.abs(battle.playerMon.exp - battle.playerDispExp) < 0.25) battle.playerDispExp = battle.playerMon.exp;

  if (!battle.enemyCaptured) {
    renderGBAStatusBox(40, 50, battle.enemy.name, battle.enemy.level, battle.enemyDispHP, battle.enemy.maxHp, false, 0, 0);
  }
  renderGBAStatusBox(420, 220, battle.playerMon.name, battle.playerMon.level, battle.playerDispHP, battle.playerMon.maxHp, true, battle.playerDispExp, battle.playerMon.maxExp);
  if (!battle.enemyCaptured) drawStatusTag(battle.enemy, 52, 96);
  drawStatusTag(battle.playerMon, 434, 262);

  ctx.fillStyle = "#332432"; ctx.fillRect(0, 360, canvas.width, 120);
  ctx.fillStyle = "#fdf7eb"; ctx.fillRect(6, 366, canvas.width - 12, 108);

  ctx.font = "bold 22px 'Courier New'";
  ctx.fillStyle = "#30222a";
  ctx.fillText(battle.message, 30, 416);

  if (!battle.turnLock && battle.slideIn === 0 && !playerThrowAnim.active) {
    if (battle.menuState === "MAIN") {
      ctx.fillStyle = "#f5ebd8";
      ctx.fillRect(430, 366, 284, 108);
      ctx.strokeStyle = "#5a4356"; ctx.lineWidth = 4;
      ctx.strokeRect(430, 366, 284, 108);

      const mainOptions = ["FIGHT", "BAG", "POKéMON", "RUN"];
      mainOptions.forEach((opt, idx) => {
        const col = idx % 2;
        const row = Math.floor(idx / 2);
        const x = 460 + col * 120;
        const y = 410 + row * 34;
        ctx.fillStyle = battle.menuIndex === idx ? "#d85848" : "#30222a";
        ctx.fillText(`${battle.menuIndex === idx ? "▶" : " "}${opt}`, x, y);
      });
    } else if (battle.menuState === "MOVES") {
      ctx.fillStyle = "#f5ebd8";
      ctx.fillRect(360, 366, 354, 108);
      ctx.strokeStyle = "#5a4356"; ctx.lineWidth = 4;
      ctx.strokeRect(360, 366, 354, 108);

      const numMoves = battle.playerMon.moves.length;
      const lineH = numMoves > 3 ? 24 : 28;
      const startY = numMoves > 3 ? 392 : 405;

      battle.playerMon.moves.forEach((m, idx) => {
        const y = startY + idx * lineH;
        ctx.fillStyle = battle.menuIndex === idx ? "#d85848" : "#30222a";
        ctx.font = numMoves > 3 ? "bold 14px 'Courier New'" : "bold 16px 'Courier New'";
        ctx.fillText(`${battle.menuIndex === idx ? "▶ " : "  "}${m.name}`, 375, y);
        const mt = getMoveType(m, battle.playerMon);
        const mult = getEffectiveness(m, battle.playerMon, battle.enemy);
        const tag = mult === 0 ? "0x" : mult > 1 ? "SUPR" : mult < 1 ? "WEAK" : "";
        const prevFont = ctx.font;
        ctx.font = "bold 11px 'Courier New'";
        ctx.fillStyle = mult > 1 ? "#2f9d4a" : mult < 1 ? "#a04040" : "#73646c";
        ctx.fillText(`${mt}${tag ? " " + tag : ""}`, 535, y);
        ctx.fillStyle = m.pp <= 0 ? "#d85848" : "#73646c"; ctx.fillText(`${m.pp}/${m.maxPp}`, 650, y);
        ctx.font = prevFont;
      });
    } else if (battle.menuState === "BAG") {
      ctx.fillStyle = "#f5ebd8";
      ctx.fillRect(360, 366, 354, 108);
      ctx.strokeStyle = "#5a4356"; ctx.lineWidth = 4;
      ctx.strokeRect(360, 366, 354, 108);

      ctx.fillStyle = "#d85848";
      ctx.font = "bold 16px 'Courier New'";
      [["POKé BALL", player.pokeBalls], ["POTION", player.potions], ["FULL HEAL", player.fullHeals], ["BERRY", player.berries]].forEach((it, i) => {
        ctx.fillStyle = battle.menuIndex === i ? "#d85848" : "#30222a";
        ctx.fillText(`${battle.menuIndex === i ? "▶ " : "  "}${it[0]}  x${it[1]}`, 380, 390 + i * 22);
      });
      ctx.font = "bold 13px 'Courier New'";
      ctx.fillStyle = "#73646c";
      
    }
  }

  if (battle.menuState === "POKEMON") {
    renderBattlePokemonPartyMenu();
  }

  ctx.restore();
}

function renderBattlePokemonPartyMenu() {
  ctx.fillStyle = "rgba(22, 14, 24, 0.95)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 24px 'Courier New'";
  ctx.fillText("CHOOSE A POKéMON", 30, 42);

  player.team.forEach((mon, idx) => {
    const isSelected = battle.pokemonMenuIndex === idx;
    const isActive = battle.activeTeamIndex === idx;
    const y = 60 + idx * 64;

    ctx.fillStyle = isSelected ? "#4a3544" : "#2a1c28";
    ctx.fillRect(30, y, 660, 54);
    ctx.strokeStyle = isSelected ? "#ffcb78" : "#5a4356";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(30, y, 660, 54);

    drawPokeball(55, y + 27, 10, 0);

    ctx.font = "bold 18px 'Courier New'";
    ctx.fillStyle = mon.hp <= 0 ? "#806e78" : isSelected ? "#ffdf9e" : "#fdf6ec";
    ctx.fillText(`${isSelected ? "▶ " : "  "}${mon.name}`, 75, y + 25);

    if (isActive) {
      ctx.font = "bold 13px 'Courier New'";
      ctx.fillStyle = "#6ca0dc";
      ctx.fillText("IN BATTLE", 75 + mon.name.length * 12 + 40, y + 25);
    }

    ctx.font = "bold 15px 'Courier New'";
    ctx.fillStyle = "#bfa38f";
    ctx.fillText(`Lv.${mon.level}`, 320, y + 25);

    ctx.fillStyle = "#160e18";
    ctx.fillRect(410, y + 16, 150, 12);
    const hpPct = Math.max(0, Math.min(1, mon.hp / mon.maxHp));
    ctx.fillStyle = hpPct > 0.5 ? "#5cb842" : hpPct > 0.2 ? "#e0a643" : "#d85848";
    ctx.fillRect(412, y + 18, 146 * hpPct, 8);

    ctx.font = "bold 14px 'Courier New'";
    ctx.fillStyle = mon.hp <= 0 ? "#d85848" : "#fdf6ec";
    ctx.fillText(`${mon.hp <= 0 ? "FAINT" : mon.hp + "/" + mon.maxHp}`, 580, y + 27);
  });

  ctx.fillStyle = "#ffcb78";
  ctx.font = "bold 13px 'Courier New'";
  ctx.fillText("▲/▼: Select   Z/Enter: Switch Out   X: Back", 30, 455);
}

function renderGBAStatusBox(x, y, name, level, curHp, maxHp, isPlayer, curExp, maxExp) {
  x += isPlayer ? battle.slideIn * 2 : -battle.slideIn * 2;
  y += Math.sin(T * 0.06 + (isPlayer ? 1 : 0)) * 1.5;
  const boxHeight = isPlayer ? 78 : 64;

  ctx.fillStyle = "#fcf4e6";
  ctx.fillRect(x, y, 260, boxHeight);
  ctx.strokeStyle = (curHp / maxHp < 0.25 && Math.floor(T / 15) % 2) ? "#d85848" : "#59424e";
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, 260, boxHeight);

  ctx.font = "bold 17px 'Courier New'";
  ctx.fillStyle = "#2c1c25";
  ctx.fillText(name, x + 12, y + 22);
  ctx.fillText(`Lv${level}`, x + 190, y + 22);

  ctx.fillStyle = "#3d2e38";
  ctx.fillRect(x + 40, y + 32, 190, 10);

  const pct = Math.max(0, Math.min(1, curHp / maxHp));
  ctx.fillStyle = pct > 0.5 ? "#5cb842" : pct > 0.2 ? "#e0a643" : "#d85848";
  ctx.fillRect(x + 42, y + 34, 186 * pct, 6);

  if (isPlayer) {
    ctx.font = "bold 12px 'Courier New'";
    ctx.fillStyle = "#3d2e38";
    ctx.fillText(`${Math.round(curHp)}/${maxHp}`, x + 180, y + 54);

    ctx.font = "bold 11px 'Courier New'";
    ctx.fillStyle = "#4a6c8c";
    ctx.fillText("EXP", x + 14, y + 68);

    ctx.fillStyle = "#3d2e38";
    ctx.fillRect(x + 40, y + 62, 190, 6);

    const expPct = maxExp > 0 ? Math.max(0, Math.min(1, curExp / maxExp)) : 0;
    ctx.fillStyle = "#6ca0dc";
    ctx.fillRect(x + 42, y + 63, 186 * expPct, 4);
  }
}

function renderDialogue() {
  renderOverworld();
  dialogue.anim = Math.min(1, (dialogue.anim || 0) + 0.12);
  const oy = Math.pow(1 - dialogue.anim, 3) * 140;

  ctx.fillStyle = "#332432";
  ctx.fillRect(24, 340 + oy, canvas.width - 48, 116);
  ctx.fillStyle = "#fbf4e8";
  ctx.fillRect(30, 346 + oy, canvas.width - 60, 104);

  if (dialogue.renderedText.length < dialogue.fullText.length) {
    dialogue.charTimer++;
    if (dialogue.charTimer % [4, 2, 1][settings.text] === 0) {
      dialogue.renderedText += dialogue.fullText[dialogue.renderedText.length];
      sfx.textBlip();
    }
  }

  ctx.font = "bold 20px 'Courier New'";
  ctx.fillStyle = "#bd3832";
  ctx.fillText(dialogue.speaker, 50, 376 + oy);

  ctx.fillStyle = "#2a1c22";
  ctx.fillText(dialogue.renderedText, 50, 412 + oy);

  if (dialogue.renderedText.length >= dialogue.fullText.length) {
    ctx.fillStyle = "#bd3832";
    ctx.fillText("▼", canvas.width - 70, 436 + Math.sin(T * 0.2) * 3);
  }
}

function renderTransition() {
  renderOverworld();
  ctx.save();
  ctx.fillStyle = "#1a121c";
  transition.radius += 18;
  if (transition.radius < 220 && Math.floor(transition.radius / 36) % 2 === 0) {
    ctx.globalAlpha = 0.55; ctx.fillStyle = "#fff4db"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1; ctx.fillStyle = "#1a121c";
  }

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.arc(canvas.width / 2, canvas.height / 2, Math.max(0, transition.maxRadius - transition.radius), 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  if (transition.radius >= transition.maxRadius) {
    transition.active = false;
    initBattle();
  }
}

// =============================================================================
// 19. MAIN ENGINE LOOP
// =============================================================================
function gameLoop() {
  T++;
  if (gameState !== STATE.BATTLE && gameState !== STATE.EVOLUTION_SCENE) updateFx();

  if (gameState === STATE.OVERWORLD) {
    updateOverworld();
    renderOverworld();
  } else if (gameState === STATE.DIALOGUE) {
    renderDialogue();
  } else if (gameState === STATE.BATTLE_TRANSITION) {
    renderTransition();
  } else if (gameState === STATE.BATTLE) {
    renderBattle();
  } else if (gameState === STATE.OPTIONS_MENU) {
    renderOptionsMenu();
  } else if (gameState === STATE.PARTY_MENU) {
    renderPartyMenu();
  } else if (gameState === STATE.STATS_VIEW) {
    renderDetailedStatsScreen();
  } else if (gameState === STATE.POKEDEX_VIEW) {
    renderPokedexView();
  } else if (gameState === STATE.BAG_MENU) {
    renderBagMenu();
  } else if (gameState === STATE.BAG_SELECT_TARGET) {
    renderBagSelectTarget();
  } else if (gameState === STATE.EVOLUTION_SCENE) {
    renderEvolutionScene();
  } else if (gameState === STATE.BADGE_AWARD) {
    renderBadgeAwardScene();
  } else if (gameState === STATE.TRAINER_CARD) {
    renderTrainerCardScreen();
  } else if (gameState === STATE.SHOP) {
    renderShop();
  } else if (gameState === STATE.SETTINGS) {
    renderSettings();
  } else if (gameState === STATE.PC_BOX) {
    renderPCBox();
  } else if (gameState === STATE.STARTER_SELECT) {
    renderStarterSelect();
  } else if (gameState === STATE.GAME_COMPLETE) {
    renderGameComplete();
  }

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
