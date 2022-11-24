export function envCheck(targetString: String) {
  const envString = import.meta.env.VITE_ENV_CHECK_STRING;
  return envString == targetString;
}

export function calcSquare(targetInt: number) {
  return targetInt ** 2;
}
