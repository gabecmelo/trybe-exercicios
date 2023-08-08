const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const somar = async (a: number, b: number) => { await sleep(5000); return a + b }; // Função de somar mais lenta do mundo
export const subtrair = (a: number, b: number) => a - b;
export const multiplicar = (a: number, b: number) => a * b;
export const dividir = (a: number, b: number) => a / b;
