const versionPicker = document.getElementById('version-picker');
const iframe = document.getElementById('iframe');

// by default pick first version?
const defaultVersion = versionPicker.children.length ? versionPicker.children[0] : null;
if (defaultVersion !== null) {
  iframe.setAttribute('src', defaultVersion.value);
}

// listen for changes
versionPicker.addEventListener('change', ({ target: { value } }) => {
  const docsPath = value ? value : 'no-results.html';
  iframe.setAttribute('src', docsPath);
});
