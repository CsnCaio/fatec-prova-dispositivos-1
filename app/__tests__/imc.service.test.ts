import {
  getIMCRanking,
  imcRanking,
  translateIMCRankingToPortuguese,
} from "../imc.service";

describe("getIMCRanking", () => {
  test("should return underweight for IMC < 18.5", () => {
    expect(getIMCRanking(50, 1.8)).toBe(imcRanking.underweight);
  });

  test("should return normal for 18.5 <= IMC < 24.9", () => {
    expect(getIMCRanking(70, 1.8)).toBe(imcRanking.normal);
  });

  test("should return overweight for 24.9 <= IMC < 29.9", () => {
    expect(getIMCRanking(85, 1.8)).toBe(imcRanking.overweight);
  });

  test("should return obesityI for 29.9 <= IMC < 34.9", () => {
    expect(getIMCRanking(95, 1.8)).toBe(imcRanking.obesityI);
  });

  test("should return obesityII for 34.9 <= IMC < 39.9", () => {
    expect(getIMCRanking(110, 1.8)).toBe(imcRanking.obesityII);
  });

  test("should return obesityIII for IMC >= 39.9", () => {
    expect(getIMCRanking(130, 1.8)).toBe(imcRanking.obesityIII);
  });
});

describe("translateIMCRankingToPortuguese", () => {
  test("should return 'magreza' for imcRanking.underweight", () => {
    expect(translateIMCRankingToPortuguese(imcRanking.underweight)).toBe(
      "magreza"
    );
  });

  test("should return 'peso normal' for imcRanking.normal", () => {
    expect(translateIMCRankingToPortuguese(imcRanking.normal)).toBe(
      "peso normal"
    );
  });

  test("should return 'sobrepeso' for imcRanking.overweight", () => {
    expect(translateIMCRankingToPortuguese(imcRanking.overweight)).toBe(
      "sobrepeso"
    );
  });

  test("should return 'obesidade grau I' for imcRanking.obesityI", () => {
    expect(translateIMCRankingToPortuguese(imcRanking.obesityI)).toBe(
      "obesidade grau I"
    );
  });

  test("should return 'obesidade grau II' for imcRanking.obesityII", () => {
    expect(translateIMCRankingToPortuguese(imcRanking.obesityII)).toBe(
      "obesidade grau II"
    );
  });

  test("should return 'obesidade grau III' for imcRanking.obesityIII", () => {
    expect(translateIMCRankingToPortuguese(imcRanking.obesityIII)).toBe(
      "obesidade grau III"
    );
  });
});
