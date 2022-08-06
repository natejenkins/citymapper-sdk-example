import { RouteList, CMProvider } from '@citymapper/sdk-react'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ThemedRouteList = (props: any) => {
  return (
    <CMProvider
      config={{
        apiKey: 'no-api-key',
        citymapperFont: false,
      }}
    >
      <RouteList {...props} />
    </CMProvider>
  )
}
