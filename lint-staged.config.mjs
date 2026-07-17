const config = {
  "*.{js,jsx,ts,tsx}": "eslint .",
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*": ["prettier --check ."],
};

export default config;
