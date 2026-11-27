import Card from '@mui/material/Card'
function App() {
  return (
    <div className="min-h-screen bg-blue-700 p-4 text-white">
            <Card variant="outlined" sx={{ p: 2, maxWidth: 320 }}>
        <h2>Minecraft</h2>
        <p>プレイ状況：クリア済み</p>
        <p>評価：★★★★★</p>
      </Card>
    </div>
  )
}

export default App