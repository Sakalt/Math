// MathLib.js - 数学定数と基本的な関数を提供するライブラリ

const MathLib = {
  // 数学定数
  PI: Math.PI,                    // 円周率
  E: Math.E,                      // ネイピア数
  SQRT2: Math.SQRT2,              // 2の平方根
  SQRT1_2: Math.SQRT1_2,          // 1/2の平方根
  LN2: Math.LN2,                  // 2の自然対数
  LN10: Math.LN10,                // 10の自然対数
  LOG2E: Math.LOG2E,              // log2(e)
  LOG10E: Math.LOG10E,            // log10(e)

  // 黄金比（PHI）
  PHI: (1 + Math.sqrt(5)) / 2,    // 黄金比

  // 超黄金数（Super Golden Ratio）
  PSI: () => {
    return (1 + Math.sqrt(1 + 4 * MathLib.PHI)) / 2; // 超黄金数の計算
  },

  // 360 / 黄金比
  PHIdegree: () => {
    return 360 / MathLib.PHI; // 360を黄金比で割った値
  },

  // 360 / 超黄金比
  PSIdegree: () => {
    return 360 / MathLib.PSI; // 360を黄金比で割った値
  },

  // マジック角（magicangle）
  magicangle: Math.asin(1 / Math.sqrt(3)), // マジック角（ラジアン）

  // ピタゴラスの定理（pythagr）
  pythagr: (a, b) => Math.sqrt(a * a + b * b), // c = √(a^2 + b^2)

  // 階乗計算
  factorial: (n) => {
    if (n < 0) return undefined; // 負の数には対応しない
    if (n === 0 || n === 1) return 1; // 0! と 1! は 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },

  // 物理計算
  Physic: {
    // ジャンプ計算
    jump: (height) => {
      const g = 9.81; // 重力加速度 (m/s^2)
      const time = Math.sqrt((2 * height) / g); // 時間計算
      return {
        time: time,
        velocity: g * time // 最高速度
      };
    }
  },

  fictionum: {
    // alpha
    alpha: () => {
      return (1 + Math.atan(60 + MathLib.PHI)) / 1.5; // 超黄金数の計算
    },
    // beta
    beta: () => {
      return (1 + Math.asinh(60 + MathLib.E)) / 1.25; // 超黄金数の計算
    },
    // gamma
    gamma: () => {
      return (0.5 + MathLib.LOG2E(Math.sqrt(3) * Math.exp(2))) / 1.6; // 超黄金数の計算
    },
  },

  // 数学関数
  add: (a, b) => a + b,             // 足し算
  subtract: (a, b) => a - b,        // 引き算
  multiply: (a, b) => a * b,        // 掛け算
  divide: (a, b) => a / b,          // 割り算

  // 指数関数
  exp: (x) => Math.exp(x),          // e^x
  pow: (x, y) => Math.pow(x, y),    // x^y

  // 三角関数
  sin: (x) => Math.sin(x),
  cos: (x) => Math.cos(x),
  tan: (x) => Math.tan(x),

  // 平方根
  sqrt: (x) => Math.sqrt(x)
};
