export const zipCodeMask = (value: string) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");
  return value;
};

export function cpfMask(v: string) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d)/, "$1.$2");
  v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return v;
};

export function cardMask(v: string) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{4})(\d)/, "$1 $2");
  v = v.replace(/(\d{4})(\d)/, "$1 $2");
  v = v.replace(/(\d{4})(\d)/, "$1 $2");
  return v;
};

export function dateMask(v: string) {
  v = v.replace(/\D/g, "");
  v = v.replace(/(\d{2})(\d)/, "$1/$2");
  return v;
};
