const veryLocalStorage = {
  set(key: string, value: any): void {
    const toSave = JSON.stringify(value)
    localStorage.setItem(key, toSave)
  },
  get(key: string): any {
    try {
      const data = localStorage.getItem(key)
      if (!data) return false
      const json = JSON.parse(data)
      return json
    } catch {
      return false
    }
  },
  remove(key: string): void {
    localStorage.removeItem(key)
  }
}

export default veryLocalStorage
