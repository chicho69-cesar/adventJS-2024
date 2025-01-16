export function fixPackages(packages: string): string {
  while (packages.includes("(")) {
    packages = packages.replace(/\(([^()]*)\)/g, (_, inner) =>
      [...inner].reverse().join(""),
    );
  }
  
  return packages;
}
