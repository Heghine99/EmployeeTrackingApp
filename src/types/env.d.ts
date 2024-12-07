declare module "react-native-config" {
  interface Env {
    API_KEY: string;
  }

  const Config: Env;

  // eslint-disable-next-line import/no-default-export
  export default Config;
}
