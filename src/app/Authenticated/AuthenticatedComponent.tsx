import React, { useState } from 'react'
import HeaderComponent from './components/HeaderComponent'
import Navigation, { screens } from './components/Navigation'
import DashboardContainer from '../Dashboard/DashboardContainer'
import DataVaultContainer from '../DataVault/DataVaultContainer'

interface AuthenticatedComponentInterface {
  chainId: number | null
  address: string | null
  hasDataVault: boolean
}

const AuthenticatedComponent: React.FC<AuthenticatedComponentInterface> = ({ chainId, address, hasDataVault }) => {
  const [screen, setScreen] = useState<screens>(screens.DASHBOARD)

  return (
    <>
      <HeaderComponent chainId={chainId} did={address} />
      <Navigation
        selected={screen}
        handleClick={(screen: screens) => setScreen(screen)}
        showDataVault={hasDataVault}
      />
      {screen === screens.DASHBOARD && <DashboardContainer />}
      {screen === screens.DATAVAULT && <DataVaultContainer />}
    </>
  )
}

export default AuthenticatedComponent
