export function getHealth(name, health) {
  if (health<15) {
    return `${name} is critical`;
  };
  if (health>15 && health<50) {
    return `${name} is wounded`;
  };
  if (health>50) {
    return `${name} is healthy`;
  };
}
export function sortByHealth(characters) {
  return characters.sort((a, b) => b.health - a.health);
}


