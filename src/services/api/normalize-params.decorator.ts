export function normalizeParams(
  target: Object,
  propertyName: string,
  propertyDesciptor: PropertyDescriptor
): PropertyDescriptor {
  const method = propertyDesciptor.value;

  propertyDesciptor.value = function(...args: any[]) {
    const result = method.apply(this, args.map(x => encodeURIComponent(x || '')));
    return result;
  };
  return propertyDesciptor;
}
