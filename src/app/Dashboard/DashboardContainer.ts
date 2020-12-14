import { connect } from 'react-redux'
import { stateInterface } from '../state/configureStore'
import DasboardScreen from './DashboardScreen'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { addCustomToken } from '../state/operations/tokens'

const mapStateToProps = (state: stateInterface) => ({
  address: state.identity.address,
  chainId: state.identity.chainId,
  tokens: state.tokens.tokens,
  storage: state.datavault.storage
})

const mapDispatchToProps = (dispatch: ThunkDispatch<stateInterface, {}, AnyAction>) => ({
  addCustomToken: (provider: any, userAddr: string, tokenAddr: string, chainId: number) => dispatch(addCustomToken(provider, userAddr, tokenAddr, chainId))
})

const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  addCustomToken: (provider: any, tokenAddr: string) => dispatchProps.addCustomToken(provider, stateProps.address, tokenAddr, stateProps.chainId)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DasboardScreen)
