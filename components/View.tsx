export function View({ height, childern }: any) {
  return (
    <div style={{ height: height }}>
      {childern}
    </div>
  )
}