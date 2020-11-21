declare namespace Express {
  export interface Request {
    // Vai anexar o que eu inserir aqui, junto do namespace Express que já existe
    user: {
      id: string;
    };
  }
}
