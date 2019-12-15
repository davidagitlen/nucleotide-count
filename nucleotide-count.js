//
// This is only a SKELETON file for the 'Nucleotide-Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class NucleotideCounts {
  static parse(string) {
    if (string.match(/[^ACGT]/)) {
      throw new Error("Invalid nucleotide in strand");
    } else {
      const adenine = string.match(/A/g) || [];
      const cytosine = string.match(/C/g) || [];
      const guanine = string.match(/G/g) || [];
      const thymine = string.match(/T/g) || [];
      return `${adenine.length} ${cytosine.length} ${guanine.length} ${thymine.length}`
    }
  }
}