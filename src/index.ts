export class LaoNumSpeller {
  private static readonly units: string[] = ["", "ສິບ", "ຮ້ອຍ", "ພັນ", "ໝື່ນ", "ແສນ", "ລ້ານ"];
  private static readonly digits: string[] = ["ສູນ", "ໜຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ", "ຫົກ", "ເຈັດ", "ແປດ", "ເກົ້າ"];

  static numberToWords(num: number | string): string {
    const n = typeof num === "string" ? parseFloat(num) : num;
    
    if (isNaN(n)) throw new Error("Invalid number input");
    // Fix TS2322: Use ! to tell TS digits[0] definitely exists
    if (n === 0) return this.digits[0]!;

    let result = "";
    const strParts = Math.abs(n).toString().split(".");
    const integerPart = strParts[0] || "0";

    if (n < 0) result += "ລົບ";

    result += this.convertSection(integerPart);

    // Fix TS18048: Check if decimalPart exists first
    if (strParts.length > 1 && strParts[1]) {
      const decimalPart = strParts[1];
      result += "ຈຸດ";
      for (const digitChar of decimalPart) {
        const digitIndex = parseInt(digitChar);
        result += this.digits[digitIndex] ?? "";
      }
    }

    return result;
  }

  private static convertSection(numStr: string): string {
    let output = "";
    const len = numStr.length;

    for (let i = 0; i < len; i++) {
      const char = numStr[i];
      if (!char) continue; // Safety check

      const digit = parseInt(char);
      const position = len - i - 1;

      if (digit !== 0) {
        if (position === 1 && digit === 2) {
          output += "ຊາວ";
        } else if (position === 1 && digit === 1) {
          output += "ສິບ";
        } else {
          // Use ?? "" to handle potential undefined
          output += (this.digits[digit] ?? "") + (this.units[position] ?? "");
        }
      }
    }

    // Fix TS2532: Ensure digit[1] exists for "ເອັດ" logic
    const one = this.digits[1] ?? "ໜຶ່ງ";
    if (numStr.length > 1 && numStr.endsWith("1") && output.endsWith(one)) {
        output = output.substring(0, output.length - one.length) + "ເອັດ";
    }

    return output || (this.digits[0] ?? "");
  }
}