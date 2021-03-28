export function classNames(...classList: string[]) {
  return classList.filter(Boolean).join(' ');
}
