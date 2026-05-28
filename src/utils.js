//return random pastel color
export function getRandomPastel() {
  /*const palettes = [
    ["#f5dfbb", "#562c2c", "#0e9594", "#f2542d", "#127475"],
    ["#e4b7e5", "#63458a", "#b288c0", "#7e5a9b", "#9a48d0"],
    ["#bbe1c3", "#8b5d33", "#869d7a", "#a7cdbd", "#91785d"],
    ["#f7f052", "#d34e24", "#f28123", "#563f1b", "#38726c"],
    ["#d264b6", "#779be7", "#ff499e", "#a480cf", "#49b6ff"],
    ["#3caea3", "#173f5f", "#20639b", "#f6d55c", "#ed553b"],
    ["#F89C74", "#66C5CC", "#F6CF71", "#DCB0F2", "#87C55F"],
  ];*/

  const baseHue = Math.floor(Math.random() * 360);

  const palette = Array.from({ length: 6 }, (_, i) => {
    const hue = (baseHue + i * 30 + Math.random() * 20) % 360;
    const sat = 65 + Math.random() * 10;
    const light = 75 + Math.random() * 10;
    return `hsl(${hue}, ${sat}%, ${light}%)`;
  });

  document.documentElement.style.setProperty("--c1", palette[0]);
  document.documentElement.style.setProperty("--c2", palette[1]);
  document.documentElement.style.setProperty("--c3", palette[2]);
  document.documentElement.style.setProperty("--c4", palette[3]);
  document.documentElement.style.setProperty("--c5", palette[4]);
}

export function isMobile() {
  const mobile = 1024;
  const isMobile = window.innerWidth <= mobile;

  return isMobile;
}
