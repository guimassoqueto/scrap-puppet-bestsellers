export function extractPidFromUrl(itemsURL: Set<string>): string[] {
  let pids: string[] = []
  for (const url of itemsURL) {
    const match = /dp\/(\w{10})/.exec(url)
    if (match) pids.push(match[1])
  }
  return pids
}