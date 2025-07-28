// utils/seo.js
export function setPageMeta({ title, description }) {
  if (title) document.title = title;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.setAttribute('content', description || '');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description || '';
    document.head.appendChild(meta);
  }
}
