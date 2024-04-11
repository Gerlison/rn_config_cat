import * as configcat from "configcat-js";

const logger = configcat.createConsoleLogger(3);

const configCatClient = configcat.createClient("SUA_CHAVE_AQUI", {
  logger
});

interface User {
  identifier: string;
  custom?: {
    [key: string]: string;
  };
}

const readAll = (user: User) => configCatClient.getAllValuesAsync(user);

export default { readAll };
