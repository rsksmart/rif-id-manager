/**
 * Create Identity
 * @param address address for the did
 * @param chainId chainId

 */
export const createDidFormat = (address: string, chainId: number) => {
  switch (chainId) {
    case 1: return `did:ethr:${address}`
    case 3: return `did:ethr:ropsten:${address}`
    case 4: return `did:ethr:rinkeby:${address}`
    case 5: return `did:ethr:goerli:${address}`
    case 30: return `did:ethr:rsk:${address}`
    case 31: return `did:ethr:rsk:testnet:${address}`
    case 42: return `did:ethr:kovan:${address}`
    case 5777: return `did:ethr:development:${address}`
    default: return address
  }
}

/**
 * Truncates a DID or an Address
 * @param value DID or Address to be truncated
 */
export const truncateAddressDid = (value: string) => {
  if (value.lastIndexOf(':') === -1) {
    return `${value.slice(0, 6)}...${value.slice(value.length - 4)}`
  }

  const lastIndex = value.lastIndexOf(':')
  return `${value.slice(0, lastIndex)}${value.slice(lastIndex, lastIndex + 7)}...${value.slice(value.length - 4)}`
}
