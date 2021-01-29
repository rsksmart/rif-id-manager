import React, { useState } from 'react'
import DataVaultWebClient from '@rsksmart/ipfs-cpinner-client'

export interface Web3ProviderContextInterface {
  provider: any | null,
  setProvider?: (value: any) => void
  dvClient: DataVaultWebClient | null,
  setDvClient?: (client: DataVaultWebClient) => void
  reset: () => void
}

export const Web3ProviderContext = React.createContext<Web3ProviderContextInterface>({
  provider: null,
  dvClient: null,
  reset: () => {}
})

interface Web3ProviderElementInterface {
  children: React.ReactNode,
}

export const Web3ProviderElement: React.FC<Web3ProviderElementInterface> = ({ children }) => {
  const [provider, setProvider] = useState<any | null>(null)
  const [dvClient, setDvClient] = useState<DataVaultWebClient | null>(null)

  const initialContext: Web3ProviderContextInterface = {
    provider: provider,
    setProvider: (provider: any) => setProvider(provider),
    dvClient: dvClient,
    setDvClient: (client: DataVaultWebClient | null) => setDvClient(client),
    reset: () => {
      setProvider(null)
      setDvClient(null)
    }
  }

  return (
    <Web3ProviderContext.Provider value={initialContext}>
      {children}
    </Web3ProviderContext.Provider>
  )
}
