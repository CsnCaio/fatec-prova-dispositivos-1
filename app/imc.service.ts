export enum imcRanking {
  underweight,
  normal,
  overweight,
  obesityI,
  obesityII,
  obesityIII,
}

export function getIMCRanking(
  weight?: string,
  height?: string
): imcRanking | undefined {
  if (!weight || !height) return;

  const imc = +weight / (+height ^ 2);
  if (imc < 18.5) return imcRanking.underweight;
  if (imc > 18.5 && imc < 24.9) return imcRanking.normal;
  if (imc > 24.9 && imc < 29.9) return imcRanking.overweight;
  if (imc > 29.9 && imc < 34.9) return imcRanking.obesityI;
  if (imc > 34.9 && imc < 39.9) return imcRanking.obesityII;

  return imcRanking.obesityIII;
}

export function translateIMCRankingToPortuguese(ranking?: imcRanking): string {
  switch (ranking) {
    case imcRanking.underweight:
      return "magreza";

    case imcRanking.normal:
      return "peso normal";

    case imcRanking.overweight:
      return "sobrepeso";

    case imcRanking.obesityI:
      return "obesidade grau I";

    case imcRanking.obesityII:
      return "obesidade grau II";

    case imcRanking.obesityIII:
      return "obesidade grau III";

    default:
      return "";
  }
}

export function getRankingBackgroundColor(ranking?: string): string {
  switch (ranking) {
    case "magreza":
    case "peso normal":
      return "green";

    case "sobrepeso":
      return "yellow";

    case "obesidade grau I":
    case "obesidade grau II":
    case "obesidade grau III":
      return "red";

    default:
      return "white";
  }
}
