import {Layout, Button, Tooltip, ConfigProvider} from 'antd';

// import tokens from './assets/tokens.json';

function App() {
  return (
    <ConfigProvider>
      <Layout>
        <Tooltip title="aijgndsk">
          <Button>Hello World</Button>
        </Tooltip>
      </Layout>
    </ConfigProvider>

  )
}

export default App
