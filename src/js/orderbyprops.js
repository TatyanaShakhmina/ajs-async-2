export default function orderByProps (obj, order) {
  const ordered = [];

  for (const key of order) {
    if (key in obj) {
      ordered.push({ key, value: obj[key] });
    }
  }

  const restKeys = [];
  for (const key in obj) {
    if (!order.includes(key)) {
      restKeys.push(key);
    }
  }

  restKeys.sort();
  for (const key of restKeys) {
    ordered.push({ key, value: obj[key] });
  }

  return ordered;
}


