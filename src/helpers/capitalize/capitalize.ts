export default function capitalize(value: string | undefined): string | '' {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : '';
}
