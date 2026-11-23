// Browser storage can be blocked (for example in private windows), so every read and write
// goes through these two helpers instead of touching localStorage directly.
export function readStorage(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // not saved, but the page still works for this visit
  }
}
