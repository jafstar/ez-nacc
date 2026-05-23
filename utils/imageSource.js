const DEFAULT_OLD_BASE_URL =
  "https://gnbxwvzlnzromuawcswx.supabase.co/storage/v1/object/public/ez-nacc/images";
const DEFAULT_NEW_BASE_URL =
  "https://res.cloudinary.com/2cents/image/upload/v1779515872/ez-nacc/images";

const IMAGE_KEY_HINT =
  /(image|img|icon|thumbnail|avatar|photo|banner|cover|logo|background|src)/i;

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

const getBaseUrls = () => {
  const oldBaseUrl = trimTrailingSlash(
    process.env.NEXT_PUBLIC_IMAGE_OLD_BASE_URL || DEFAULT_OLD_BASE_URL,
  );
  const newBaseUrl = trimTrailingSlash(
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL || DEFAULT_NEW_BASE_URL,
  );

  return { oldBaseUrl, newBaseUrl };
};

export const normalizeImageUrl = (value) => {
  if (typeof value !== "string") return value;

  const trimmed = value.trim();
  if (!trimmed) return value;

  const { oldBaseUrl, newBaseUrl } = getBaseUrls();

  if (trimmed.startsWith(newBaseUrl)) {
    return trimmed;
  }

  if (trimmed.startsWith(oldBaseUrl)) {
    return `${newBaseUrl}${trimmed.slice(oldBaseUrl.length)}`;
  }

  if (trimmed.startsWith("/images/")) {
    return `${newBaseUrl}${trimmed.slice("/images".length)}`;
  }

  if (trimmed.startsWith("images/")) {
    return `${newBaseUrl}/${trimmed.slice("images/".length)}`;
  }

  return value;
};

const shouldRewriteValue = (value, key) => {
  if (typeof value !== "string") return false;

  const trimmed = value.trim();
  if (!trimmed) return false;

  const { oldBaseUrl, newBaseUrl } = getBaseUrls();
  const hasKnownPrefix =
    trimmed.startsWith(oldBaseUrl) ||
    trimmed.startsWith(newBaseUrl) ||
    trimmed.startsWith("/images/") ||
    trimmed.startsWith("images/");

  if (hasKnownPrefix) return true;
  if (!key) return false;

  return IMAGE_KEY_HINT.test(String(key));
};

export const rewriteImageUrlsDeep = (input, parentKey = "") => {
  if (Array.isArray(input)) {
    return input.map((itm) => rewriteImageUrlsDeep(itm, parentKey));
  }

  if (input && typeof input === "object") {
    const nextObject = {};
    for (const [key, value] of Object.entries(input)) {
      nextObject[key] = rewriteImageUrlsDeep(value, key);
    }
    return nextObject;
  }

  if (shouldRewriteValue(input, parentKey)) {
    return normalizeImageUrl(input);
  }

  return input;
};
