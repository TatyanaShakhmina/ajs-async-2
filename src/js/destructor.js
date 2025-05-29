export default function destructor (obj) {
  const special = obj.special;
  const destructured = [];

  for (const item of special) {
    const {
      id,
      name,
      icon,
      description = 'Описание недоступно',
    } = item;

    destructured.push({ id, name, icon, description });
  }

  return destructured;
}
