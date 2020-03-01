const versionPicker = document.getElementById('version-picker');
const iframe = document.getElementById('iframe');

// get versions
fetch('docs/versions.json').then(async res => {
  const versions = await res.json();
  let first = true;
  for (const [version, location] of Object.entries(versions)) {
    const option = new Option(version, location);
    versionPicker.add(option);
    first = false;
  }

  // by default pick first version
  const defaultVersion = versionPicker.children.length ? versionPicker.children[0] : null;
  if (defaultVersion !== null) {
    iframe.setAttribute('src', defaultVersion.value);
  }

  // listen for changes
  versionPicker.addEventListener('change', ({ target: { value } }) => {
    const docsPath = value ? value : 'no-results.html';
    iframe.setAttribute('src', docsPath);
  });
});
