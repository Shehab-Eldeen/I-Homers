export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--primary": "#ffffff",
    "--bg-login": "#f8f8f8",
    "--font-login": "#5e5873",
    "--font-main": "#6e6b7b",
  }
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--primary": "#7367f0",
    "--bg-login": "#161d31",
    "--font-login": "#d0d2d6",
    "--font-main": "b4b7bd",
  }
}